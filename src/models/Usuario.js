const { Model, DataTypes } = require('sequelize');

class Usuario extends Model{

    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            senha: DataTypes.STRING,
            telefone: DataTypes.STRING,
            estado: DataTypes.STRING,
            cidade: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cep: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            email: DataTypes.STRING, 
            anuncios_favoritos: DataTypes.STRING,
            empresa: DataTypes.STRING,
            cargo: DataTypes.STRING,
        },{
            sequelize : connection
        })
    }



}
module.exports = Usuario;