const getDb = require("../util/database").getDb;


const fetchAllExploreNearby = async () => {
  const db = getDb();

  let data = await db.collection("exploreNearby").find().toArray();
  console.log(data);
  return data;
};

module.exports = fetchAllExploreNearby;