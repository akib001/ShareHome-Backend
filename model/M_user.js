const getDb = require("../util/database").getDb;

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  createUser = async () => {
    const db = getDb();

    try {
      const db = getDb();
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      const result = await db.collection("user").insertOne(data);

      return result;
    } catch (err) {
      console.log(err);
    }
  };

  static findUser = async (email) => {
    const db = getDb();

    try {
      const db = getDb();
      const result = await db.collection("user").find({ email: email }).next();
      return result;
    } catch (err) {
      console.log(err);
    }
  };
}

exports.User = User;
