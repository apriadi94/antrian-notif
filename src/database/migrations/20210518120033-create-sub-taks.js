'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subtasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      taksId: {
        type: Sequelize.INTEGER,
        references: { model: 'tasks', key: 'id' },
        field: 'task_id',
      },
      subTaksName: {
        type: Sequelize.STRING,
        field: 'subtask_name',
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('subtasks');
  }
};