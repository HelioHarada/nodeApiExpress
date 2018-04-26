// importar pacotes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

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

//Vinculo do aplicativo com o motor de rotas
//Definindo uma rota padrão para minhas Api
app.use('/api',router);

//Escutar porta
app.listen(port);
console.log("API up and running! or port" + port);


