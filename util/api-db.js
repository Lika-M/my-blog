const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Lika:IjgLt66bNZKsn0Z3@atlascluster.tcca3nt.mongodb.net/?appName=AtlasCluster";

export async function connectDatabase() {
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

    return client.connect();
}

export async function insertCollectionDocument(client, document){
    const db = client.db('my-blog');
    let collection = await db.collection('messages');
    const result = await collection.insertOne(document);
    return result;
}
