const fetchAllExploreNearby = require("../model/M_homePage");

const getExploreNearby = async (req, res, next) => {
  console.log(req.body);
  const getExploreNearby = await fetchAllExploreNearby();
  // await M_searchResult.insertSearchResult();
  // insert data into database or business logic()
  res.status(200).json({
    data: getExploreNearby,
  });
};

exports.getExploreNearby = getExploreNearby;