const  express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const UsuarioController = require('./controller/UsuarioController');
const AnuncioController = require('./controller/AnuncioController');
const ChatController = require('./controller/ChatController');
const DenunciaController = require('./controller/DenunciaController');
const AdmController = require('./controller/AdmController');
const routes = express.Router();

routes.get('/',(req,res) =>{
    return res.json({text: "hello world"});
})

routes.get('/admUsuarios', AdmController.usuarios);
routes.get('/admEmpresas', AdmController.empresas);
routes.get('/admCurriculos', AdmController.curriculos);
routes.get('/admVagas', AdmController.vagas);

routes.get('/usuarios',UsuarioController.index);
routes.get('/usuario/:id_usuario',UsuarioController.FindOne);
routes.get('/anuncio/:id_usuario',AnuncioController.index);
routes.get('/anuncios',AnuncioController.findAll);
routes.get('/chat/:id_usuario',ChatController.findOne);
routes.get('/denuncia/:id_usuario',DenunciaController.findDenuncia);
routes.get('/anuncioClassificao/:id_anuncio',AnuncioController.getClassificacao);
routes.get('/anuncioUsuario/:id_anuncio',AnuncioController.indexOne);
routes.get('/anuncioCategoria/:categoria',AnuncioController.findBycategoria);

routes.post('/gravarChat',ChatController.store);
routes.post('/updateChat/:id_chat',ChatController.updateChat);
routes.post('/loginUsuario',UsuarioController.login);
routes.post('/usuario',UsuarioController.store);
routes.post('/anuncioFavorito/:id_usuario',UsuarioController.updateFavoritos);
routes.post('/fazeranuncio/:id_usuario',multer(multerConfig).single("file"),AnuncioController.store);
routes.post('/fazerDenuncia/:id_anuncio',DenunciaController.store);
routes.post('/anuncioFiltro',AnuncioController.findByfiltros);
routes.post('/deletarUsuario/:id_usuario',UsuarioController.delete);
routes.post('/deletarAnuncio/:id_anuncio',AnuncioController.delete);
routes.post('/updateUsuario/:id_usuario',UsuarioController.updateUsuario);
routes.post('/updateAnuncio/:id_anuncio',multer(multerConfig).single("file"),AnuncioController.update);
routes.post('/updateAnuncio/novaClassificacao/:id_anuncio',AnuncioController.newClassificacao);
routes.post('/updateDenuncia/:id_denuncia',DenunciaController.updateDenuncia);
routes.post('/deleteDenuncia/:id_denuncia',DenunciaController.deleteDenuncia);
routes.post('/imagem',multer(multerConfig).single("file"), (req,res) =>{
    return res.json(req.file.filename);
})
module.exports = routes;