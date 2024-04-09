// Dotenv
if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}
// App
const app = require('./app')
// Db
require('./database')

async function main() {
  await app.listen(app.get('port')); // set port -> 4000
  console.log('Servidor en puerto ' + app.get('port'));
}

main();
