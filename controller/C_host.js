const M_host = require("../model/M_host");
const getDb = require("../util/database").getDb;

const addPlace = async (req, res, next) => {
  // console.log(req.body);
  try {
    const place = await M_host.createPlace(req.body);
    if (!place) {
      const error = new Error("no places found in database");
      error.statusCode = 401;
      throw error;
    }
    // insert data into database or business logic()
    res.status(200).json({
      data: place,
    });
    return;
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
    return err;
  }
};

const editPlace = async (req, res, next) => {
  try {
    const editedPlace = await M_host.editPlace(req.body);
    res.status(200).json({
      data: editedPlace,
    });
    return
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
    return err;
  }
};

const fetchSinglePlace = async (req, res, next) => {
  // console.log(req.body);
  try{
    const singlePlace = await M_host.fetchSinglePlace(req.body.id);
  res.status(200).json({
    data: singlePlace,
  });
  }catch(err){
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
    return err;
  }
  
};

const fetchHostedPlaceList = async (req, res, next) => {
  // console.log(req.body);
  email = req.email;
  let loadedUser;
  const db = getDb();
  await db
    .collection("user")
    .find({ email: email })
    .next()
    .then((user) => {
      if (!user) {
        const error = new Error("No user with this email ID");
        error.statusCode = 401;
        throw error;
      }
      console.log(user);
      loadedUser = user;
      console.log("user exits");
      return user;
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
      return err
    });
  const placeList = await M_host.fetchHostedPlaceList(loadedUser.email);
  res.status(200).json({
    data: placeList,
  });
};

const fetchBookedPlaceList = async (req, res, next) => {
  // console.log(req.body);
  email = req.email;
  console.log("email: ", req.email);
  let loadedUser;
  const db = getDb();
  await db
    .collection("user")
    .find({ email: email })
    .next()
    .then((user) => {
      if (!user) {
        const error = new Error("No user with this email ID");
        error.statusCode = 401;
        throw error;
      }
      console.log(user);
      loadedUser = user;
      console.log("user exits");
      return user;
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
  console.log("loadedUser:", loadedUser.email);
  const placeList = await M_host.fetchBookedPlaceList(loadedUser.email);
  console.log("placelist: ", placeList);
  res.status(200).json({
    data: placeList,
  });
};

const bookPlace = async (req, res, next) => {
  // console.log(req.body);
  email = req.email;
  id = req.body.id;
  checkIn = req.body.checkIn;
  checkOut = req.body.checkOut;
  console.log("email: ", req.email);
  let loadedUser;
  const db = getDb();
  await db
    .collection("user")
    .find({ email: email })
    .next()
    .then((user) => {
      if (!user) {
        const error = new Error("No user with this email ID");
        error.statusCode = 401;
        throw error;
      }
      console.log(user);
      loadedUser = user;
      console.log("user exits");
      return user;
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
  console.log("loadedUser:", loadedUser.email);
  const bookedPlace = await M_host.bookPlace(id, email, checkIn, checkOut);
  console.log("bookedPlace: ", bookedPlace);
  res.status(200).json({
    data: bookedPlace,
  });
};

const deleteHostedPlace = async (req, res, next) => {
  // console.log(req.body);
  id = req.body.id;
  const deletedlace = await M_host.deleteHostedPlace(id);
  res.status(200).json({
    data: deletedlace,
  });
};

exports.addPlace = addPlace;
exports.editPlace = editPlace;
exports.fetchSinglePlace = fetchSinglePlace;
exports.fetchBookedPlaceList = fetchBookedPlaceList;
exports.fetchHostedPlaceList = fetchHostedPlaceList;
exports.bookPlace = bookPlace;
exports.deleteHostedPlace = deleteHostedPlace;
