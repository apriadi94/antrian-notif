'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notif extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Notif.init({
    tanggal: DataTypes.DATEONLY,
    nomor: DataTypes.INTEGER,
    jenis_perkara: DataTypes.STRING,
    nomor_perkara: DataTypes.STRING,
    pihak: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Notif',
  });
  return Notif;
};