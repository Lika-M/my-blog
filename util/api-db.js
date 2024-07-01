const { MongoClient, ServerApiVersion } = require('mongodb');
const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_pass}@atlascluster.tcca3nt.mongodb.net/?appName=AtlasCluster`;

export async function connectDatabase() {
    const client = new MongoClient(url, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

    return client.connect();
}

export async function insertCollectionDocument(client, document){
    const db = client.db(process.env.mongodb_db);
    let collection = await db.collection('messages');
    const result = await collection.insertOne(document);
    return result;
}
