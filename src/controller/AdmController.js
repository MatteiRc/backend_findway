const Usuario = require('../models/Usuario');
const Anuncio = require('../models/Anuncio');
const { Op } = require("sequelize");

module.exports = {

    async curriculos(req,res){

        const curriculos = await Anuncio.findAll({where: {categoria:"curriculo"}});

        if(!curriculos)
        return res.status(400).json({error:"Nenhum curriculo registrado"});

        return res.json(curriculos);


    },

    async usuarios(req,res){

        const usuarios = await Usuario.findAll({where: {empresa:" "}});

        if(!usuarios)
        return res.status(400).json({error:"Nenhum usuario registrado"});

        return res.json(usuarios);


    },

    async empresas(req,res){
 	
        const empresas = await Usuario.findAll({where: {empresa: { [Op.not]:" "}}});

        if(!empresas)
        return res.status(400).json({error:"Nenhuma empresa registrada"});

        return res.json(empresas);


    },

	async vagas(req,res){

        const vagas = await Anuncio.findAll({where: {categoria:"vaga"}});

        if(!vagas)
        return res.status(400).json({error:"Nenhuma empresas registrada"});

        return res.json(vagas);


    }


}