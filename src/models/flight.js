'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flightId: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    departureAirportId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    arrivalAirportId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    departureTime: {
      allowNull: false,
      type: DataTypes.DATE
    },
    arrivalTime: {
      allowNull: false,
      type: DataTypes.DATE
    },
    terminal: DataTypes.INTEGER,
    remainingSeats: DataTypes.INTEGER,
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};