const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'bancodedados.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

function reqAjax() {
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
      document.getElementById("informacoes").innerHTML += `<h3>Esse texto foi inserido usando Ajax, ou seja, de forma assíncrona, sem comprometer o carregamento da página</h3>`;
    }
    xhttp.open("GET", "http://127.0.0.1:5501/frontend/index.html")
    xhttp.send()
}
  

// Retorna todos registros (é o R do CRUD - Read)
app.get('/listaCaracteristica', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Caracteristicas ORDER BY Nota';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
});

// Insere um registro (é o C do CRUD - Create)
app.post('/insereCaracteristica', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    sql = "INSERT INTO Caracteristicas (Caracteristica, Nota, idTa) VALUES ('" + req.body.Caracteristica + "', '" + req.body.Nota + "', '" + req.body.idTa + "')";
    console.log(sql);
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }	
    });
    res.write('<p>Característica INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
    res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/atualizaCaracteristica', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "SELECT * FROM Caracteristicas WHERE idTa="+ req.body.idTa;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizaCaracteristica', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "UPDATE Caracteristicas SET Caracteristica='" + req.body.Caracteristica + "', Nota = '" + req.body.Nota + "' WHERE idTa='" + req.body.idTa + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    res.write('<p>Caracteristica ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
});

// Exclui um registro (é o D do CRUD - Delete)
app.get('/removeCaracteristica', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "DELETE FROM Caracteristicas WHERE idTa='" + req.body.idTa + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.write('<p>Caracteristica REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end();
    });
});

app.listen(port, hostname, () => {
console.log(`Servidor rodando em http://${hostname}:${port}/`);
});