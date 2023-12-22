const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/keycloak")
  .then(() => {
    console.log('Mongo connected');
    const keyschema = new mongoose.Schema({
      name: {
        type: String
      }
    });
    const collection = mongoose.model('users', keyschema);
  const data = {
    name : "hkjdlfldski"
  }
    return collection.insertMany([data]);
  })
  .then(() => {
    console.log('Data sent');
  })
  .finally(() => {
    mongoose.disconnect();
  });
