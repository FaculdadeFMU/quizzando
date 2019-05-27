var express = require('express'),
    mysql = require('mysql'),
    cors = require('cors');

var port = 8889;
var app = express();

app.use(cors());
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.listen(port, function() {
    console.log('servidor iniciado na porta ' + port);
})

app.get
(
    '/',
    function ( req, res ) {
        res.status(200).json({ msg : 'Api funcionando' })
    }
)

app.get
(
  '/getBasico',
  function ({ query: { email, senha } }, res) {
    console.log(email, senha);
    var _dbConnection = dbConnection();
    var _callback = function (error, result) {
      return {
        _dbConnection,
        res,
        email,
        senha
      };

    }
    var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback);
    retornoBuscaSQL.getBasico()
  }
)

app.get
  (
    '/inputBasico',
    function ({ query: {nome,email,senha,confirmacaoSenha} }, res) {
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          nome,
          email,
          senha,
          confirmacaoSenha
         };

      }
      var retornoInsertSQL = new insertSQL(_dbConnection,_callback);
      retornoInsertSQL.inputBasico()
    }
  )

  app.get
  (
    '/inputAtividade',
    function ({ query: {nomeAtividade,usuario_id} }, res) {
      console.log('atividade: ' + nomeAtividade);
      console.log('usuario: ' + usuario_id)
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          nomeAtividade,
          usuario_id
         };

      }
      var retornoAtividadeSQL = new AtividadeSQL(_dbConnection, _callback);
      retornoAtividadeSQL.inputAtividade()
    }
  )
  app.get
(
  '/getatividade',
  function ({ query: {nomeAtividade,usuario_id} }, res) {
    console.log('atividade: ' + nomeAtividade);
    console.log('usuario: ' + usuario_id)
    var _dbConnection = dbConnection();
    var _callback = function (error, result) {
      return {
        _dbConnection,
        res,
        nomeAtividade,
        usuario_id
       };

    }
    var retornoAtividadebuscaSQL = new AtividadebuscaSQL(_dbConnection, _callback);
    retornoAtividadebuscaSQL.getatividade()
  }
)

app.get
  (
    '/inputGrupos',
    function ({ query: { nomeGrupo, atividade_id } }, res) {
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          nomeGrupo,
          atividade_id
        };

      }
      var retornoinsertGruposSQL = new insertGruposSQL(_dbConnection, _callback);
      retornoinsertGruposSQL.inputperguntas()
    }
  )

  app.get
(
    '/getPergunta',
    function( req, res ) {
        var _dbConnection = dbConnection();
        var _callback = function (error, result) {
            _dbConnection.destroy();
            res.status(200).send(result);
        }

        var retornoPerguntasSQL = new PerguntasSQL(_dbConnection, _callback);
        retornoPerguntasSQL.getPergunta()
    }
)

app.get
(
    '/getQuizzando',
    function( req, res ) {
        var _dbConnection = dbConnection();
        var _callback = function (error, result) {
            _dbConnection.destroy();
            res.status(200).send(result);
        }

        var retornoQuizzSQL = new QuizzSQL(_dbConnection, _callback);
        retornoQuizzSQL.getQuizzando()
    }
)



/* CONEXÃO BANCO DE DADOS */
var dbConnection = function () {
    return mysql.createConnection
    (
        {
            host: 'remotemysql.com',
            user: 'kIfd1zU98D',
            password: 'XaWzzW5Vvu',
            database: 'kIfd1zU98D',
            multipleStatements: true,

        }
    )
}
/* MODEL */
function buscaSQL(dbConnection, callback) {
    this._dbConnection = dbConnection;
    this._callback = callback;
}
buscaSQL.prototype.getBasico = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
    (
      ' SELECT * FROM usuario WHERE email=? and senha=?', [callbackRes.email,callbackRes.senha], function (err, result, fields) {
        if (err) throw err;
        if (result.length) {
          callbackRes.res.status(200).send({
            success: 'Login com sucesso',
            statusCode: 200,
            data: result
          })
        } else {
          callbackRes.res.status(404).send({
            success: 'Usuário ou senha inválidos',
            statusCode: 404,
          })
        }
      }
    )
}

function insertSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}


insertSQL.prototype.inputBasico = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
    (
      "INSERT INTO `usuario`(`nome`,`email`, `senha`) VALUES ('"+callbackRes.nome+"','"+callbackRes.email+"','"+callbackRes.senha+"')",
    );
  callbackRes.res.status(200).send({
    success: 'Usuário inserido com sucesso',
    statusCode: 200,
  });
}


function AtividadeSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}

AtividadeSQL.prototype.inputAtividade = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
    (
      "INSERT INTO `atividade`(`nomeAtividade`,`usuario_id`) VALUES ('"+callbackRes.nomeAtividade+"','"+callbackRes.usuario_id+"')",
    );
  callbackRes.res.status(200).send({
    success: 'Usuário inserido com sucesso',
    statusCode: 200,
  });
}

function AtividadebuscaSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}

AtividadebuscaSQL.prototype.getatividade = function () {
const callbackRes = this._callback();
callbackRes._dbConnection.query
  (
    ' SELECT * FROM atividade WHERE nomeAtividade=?',[callbackRes.nomeAtividade], function (err, result, fields) {
      if (err) throw err;
      if (result.length) {
        callbackRes.res.status(200).send({
          success: 'Login com sucesso',
          statusCode: 200,
          data: result
        })
      } else {
        callbackRes.res.status(404).send({
          success: 'Usuário ou senha inválidos',
          statusCode: 404,
        })
      }
    }
  )
}

function insertGruposSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}


insertGruposSQL.prototype.inputgrupos = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
    (
      "INSERT INTO `grupoPerguntas`(`nomeGrupo`, `atividade_id`) VALUES ('" + callbackRes.nomeGrupo + "','" + callbackRes.atividade_id + "')",
    );
  callbackRes.res.status(200).send({
    success: 'Usuário inserido com sucesso',
    statusCode: 200,
  });
}

function PerguntasSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}
PerguntasSQL.prototype.getPergunta = function () {
  this._dbConnection.query
  (
    'SELECT * FROM `perguntas` INNER JOIN grupoPerguntas ON perguntas.grupoPerguntas_id = grupoPerguntas.id_grupoPergunta WHERE grupoPerguntas_id=1',
      this._callback
  );
}

function QuizzSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}
QuizzSQL.prototype.getQuizzando = function () {
  this._dbConnection.query
  (
    'SELECT * FROM atividade WHERE id_atividade',
      this._callback
  );
}
