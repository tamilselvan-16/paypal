import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

// Patch Sequelize's ConnectionManager to work with mysql2 disconnects
const ConnectionManager = require('sequelize/lib/dialects/mysql/connection-manager');
const oldDisconnect = ConnectionManager.prototype.disconnect;
ConnectionManager.prototype.disconnect = function(connection: any) {
  if (connection && !connection._protocol) {
    connection._protocol = { _ended: false };
  }
  return oldDisconnect.call(this, connection);
};

config();

const createSequelize = () => {
  const dialect = process.env.DB_DIALECT || (process.env.DB_HOST ? 'mysql' : 'sqlite');

  if (dialect === 'sqlite') {
    const seq = new Sequelize({
      dialect: 'sqlite',
      storage: process.env.DB_STORAGE || './database.sqlite',
      logging: false,
      define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true,
      },
    });

    return seq;
  }

  const seq = new Sequelize(
    process.env.DB_NAME || 'reqarchitect_db',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '',
    {
      host: process.env.DB_HOST || '127.0.0.1',
      port: parseInt(process.env.DB_PORT || '3306'),
      dialect: 'mysql',
      dialectModulePath: 'mysql2',
      logging: process.env.NODE_ENV === 'development' ? console.log : false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true,
      },
    }
  );

  // Automatically sync tables on startup
  // seq.sync({ alter: true }).catch(err => console.error('DB Sync Error:', err));
  return seq;
};

const globalForSequelize = global as unknown as { sequelize: Sequelize };

const sequelize = globalForSequelize.sequelize || createSequelize();

if (process.env.NODE_ENV !== 'production') globalForSequelize.sequelize = sequelize;

export { sequelize };
