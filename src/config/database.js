module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gaia',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};