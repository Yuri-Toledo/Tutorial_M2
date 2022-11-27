const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3061;
app.use(express.static("../frontend/"));

app.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});	

// app.get('/usuarios', (req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	var db = new sqlite3.Database(DBPATH); // Abre o banco
// 	var sql = 'SELECT * FROM usuario ORDER BY nome_completo COLLATE NOCASE';
// 		db.all(sql, [],  (err, rows ) => {
// 			if (err) {
// 				throw err;
// 			}
// 			res.json(rows);
// 		});
// 		db.close(); // Fecha o banco
// });