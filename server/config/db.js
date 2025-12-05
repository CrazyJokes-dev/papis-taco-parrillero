const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');

// const emailConfig = require('./email');

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 

async function connectDB(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const client = new MongoClient(process.env.MONGODB_URI);

    mongoose.connect(
        process.env.MONGODB_URI,
    )
    .then(()=>console.log('connected'))
    .catch(e=>console.log(e));

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports = connectDB;