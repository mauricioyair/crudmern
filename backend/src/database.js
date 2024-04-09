const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI_PRODUCTION ? process.env.MONGODB_URI_LOCAL : 'mongodb://localhost/crudmern';

try {
  mongoose.connect(URI, { autoIndex: false })
  const connection = mongoose.connection
  connection.once('open', () => {
    console.log('DB esta conectada!')
  })
} catch (error) {
  console.error(error);  
}
