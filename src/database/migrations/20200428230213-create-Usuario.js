'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('Usuario',
       { id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
       }, 
       nome: {
         type: Sequelize.STRING,
         allowNull: false
       },

       senha:{
         type: Sequelize.STRING,
         allowNull:false
       },

       telefone:{
         type: Sequelize.STRING,
         allowNull:false
       },

       estado:{
         type:Sequelize.STRING,
         allowNull:false
       },

       cidade:{
         type:Sequelize.STRING,
         allowNull:false
       },

       bairro:{
        type:Sequelize.STRING,
        allowNull:false
       },
       cep:{
        type:Sequelize.STRING,
        allowNull:false
       },
       cnpj:{
        type:Sequelize.STRING,
        allowNull:false
       },

       empresa:{
        type:Sequelize.STRING,
        allowNull:false
      },

      cargo:{
        type:Sequelize.STRING,
        allowNull:false
      },

       email:{
         type:Sequelize.STRING,
         allowNull:false
       },

       anuncios_favoritos:{
         type:Sequelize.STRING,
         allowNull:true
       }

      });


    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('Usuario');
    
  }
};
