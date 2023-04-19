const connection = require('./config.js');

connection.connect((err) => {
  if (err) throw err;
  console.log('Conexão bem sucedida!');
});

