const { DataTypes, NUMBER } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('user', {
    id: {
      type: DataTypes.STRING, 
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING
    },
    unopenedenvelopes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    }
  },
  {
    timestamps: false,
  }
  );
};
