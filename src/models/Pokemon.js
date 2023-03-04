const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    life: {
      type: DataTypes.INTEGER
    },
    attack: {
      type: DataTypes.INTEGER
    },
    defense: {
      type: DataTypes.INTEGER
    },
    speed: {
      type: DataTypes.INTEGER
    },
    height: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    },
    stars: {
      type: DataTypes.INTEGER, //DataTypes.ENUM("1","2", "3", "4", "5"),//la documentacion dice que es solo para postgreSQL...veremos veremos
      //default: "1"
    }
  },
  {
    timestamps: false,
    //initialAutoIncrement: 40  //porque el enunciado decia que usemos 40 pokemons maximo desde la API externa
    //....y el ultimo tiene ID:39 Esto ya no lo uso pero lo deje para futuras referencias...
  }
  );
};
