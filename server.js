//import { read } from 'fs';
//mongodb://<dbuser>:<dbpassword>@ds040017.mlab.com:40017/banco1

// importar pacotes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Produto = require('./app/models/product');

//Conexão com o Banco (Cloud - MLAB)
mongoose.connect('mongodb://harada:helio123@ds040017.mlab.com:40017/banco1');

// Configurar a aplicação para usar o body-parse
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Definindo a porta onde o servidor irá responder
var port = process.env.port || 8000;



//Definindo as rotas
var router = express.Router(); //intercepta todas as rotas

router.get('/',function(req, res){
    res.json({'message':'Ok, Rota principal funcionando!'});
});

router.route('/produtos')

    .post(function(req, res){
       var produto = new Produto();
       produto.nome = req.body.nome;
       produto.preco = req.body.preco;
       produto.descricao = req.body.descricao;

       produto.save(function(error){
           if(error)
                res.send("Erro ao salvar o produto"+ error);
           
            res.json({message:"Produto inserido com sucesso!"});
       });
    });

//Vinculo do aplicativo com o motor de rotas
//Definindo uma rota padrão para minhas Api
app.use('/api',router);

//Escutar porta
app.listen(port);
console.log("API up and running! or port" + port);
console.log("Ok!");


