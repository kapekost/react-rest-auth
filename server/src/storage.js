const moment = require("moment");
const { MongoClient } = require("mongodb");
module.exports = class Storage {
  constructor() {
    const { MONGO_HOST, MONGO_PORT, MONGO_INITDB_DATABASE } = process.env;
    this.config = {
      MONGO_INITDB_DATABASE,
      MONGO_URI: `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_INITDB_DATABASE}?retryWrites=true&w=majority`,
    };
    this.init().then((client) => {
      this.mongoClient = client;
      // Make the appropriate DB calls
      this.database = client.db(this.config.MONGO_INITDB_DATABASE);
    });
  }

  getDocument(data) {
    console.log(data);
    return { doc: "doc data" };
  }
  getUser(data) {
    console.log(data);
    return { user: "username" };
  }

  async init() {
    console.log(this.config);
    const client = new MongoClient(this.config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      // Connect to the MongoDB cluster
      await client.connect();
      console.log("mongo client connected");
      return client;
    } catch (e) {
      console.error(e);
    }
  }
};
