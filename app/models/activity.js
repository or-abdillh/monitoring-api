'use strict'
const {  Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

  class activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  activity.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: DataTypes.STRING,
    client: DataTypes.STRING,
    leaderEmail: DataTypes.STRING,
    leaderName: DataTypes.STRING,
    leaderPicture: DataTypes.STRING,
    startAt: DataTypes.DATE,
    finishAt: DataTypes.DATE,
    progress: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'activity',
    createdAt: true,
    updatedAt: true
  })

  return activity
}
