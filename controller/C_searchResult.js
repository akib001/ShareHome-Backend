const M_searchResult = require("../model/M_searchResult");

const getSearchResult = async (req, res, next) => {
  console.log(req.body);
  const searchResult = await M_searchResult.getSearchResult();
  // await M_searchResult.insertSearchResult();
  // insert data into database or business logic()
  res.status(200).json({
    data: searchResult,
  });
};

exports.getSearchResult = getSearchResult;
