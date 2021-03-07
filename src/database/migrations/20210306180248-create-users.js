'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_completo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      sexo: {
        type: Sequelize.ENUM,
        values: ['F', 'M', 'O'],
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
      },
      status_ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario');
  }
};
