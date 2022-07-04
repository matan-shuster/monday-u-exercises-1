'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn('Todos', 'status', {
        type: Sequelize.STRING,
        allowNull: true
      }),
      queryInterface.addColumn('Todos', 'urgency', {
        type: Sequelize.STRING,
        allowNull: true
      })
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn('Todos', 'status'),
      queryInterface.removeColumn('Todos', 'urgency')
    ])
  }
}
