const moment = require("moment");
const { MongoClient } = require("mongodb");
module.exports = class Storage {
  constructor() {
    const {
      MONGO_HOST,
      MONGO_PORT,
      MONGO_INITDB_DATABASE,
      MONGO_INITDB_ROOT_PASSWORD,
      MONGO_INITDB_ROOT_USERNAME,
    } = process.env;
    this.config = {
      MONGO_INITDB_DATABASE,
      MONGO_URI: `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}?retryWrites=true&w=majority`,
    };
    this.client = new MongoClient(this.config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Connect to the MongoDB cluster
    this.client
      .connect()
      .then(() => {
        this.db = this.client.db(this.config.MONGO_INITDB_DATABASE);
        console.log("mongo client connected");
        // this.initData();
      })
      .catch((err) => {
        console.log(err);
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

  // initData() {
  //   this.db.collection("questions").insertOne({
  //     title: "Your email address?",
  //     type: "text",
  //   });
  //   this.db.collection("users");
  // }
};
