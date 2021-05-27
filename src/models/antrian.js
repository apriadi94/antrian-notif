'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataAntrian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DataAntrian.init({
    tanggal: {
      type : DataTypes.DATEONLY,
      field: 'tanggal',
    },
    nomor: {
        type : DataTypes.INTEGER,
        field: 'nomor',
    },
    MejaNama: {
        type : DataTypes.STRING,
        field: 'meja_nama',
    }
  }, {
    sequelize,
    modelName: 'DataAntrian',
    tableName : 'data',
    timestamps : false
  });
  return DataAntrian;
};