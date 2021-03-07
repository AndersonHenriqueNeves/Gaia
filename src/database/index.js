import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Usuario from '../app/models/Usuario';

const connection = new Sequelize(databaseConfig);

Usuario.init(connection);

// Usuario.associate(connection.models);

module.exports = connection;