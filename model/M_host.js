const mongodb = require('mongodb')
const getDb = require("../util/database").getDb;


const createPlace = async (data) => {
  //img, location, title, description, price, long,lat
  const db = getDb();
  const result1 = await db.collection("places").insertOne(data);
  return result;
};

const editPlace = async (data) => {
  const { id, title, description,price} = { ...data };
  const db = getDb();
  const result = await db.collection("places").updateOne(
    { _id: new mongodb.ObjectId(id)},
    {
      $set: {
        title: title,
        description: description,
        price: price,
        
      },
    }
  );

  return result
};

const fetchSinglePlace = async(id) =>{
    const db = getDb();
    const result = await db.collection("places").find({_id : new mongodb.ObjectId(id)}).next()
    .then(place=>{
        console.log(place)
        return place
    })
    .catch(err=>{
        console.log(place)
    })
    return result
}

const fetchBookedPlaceList = async(email) =>{
    //suppose we get the email from token and then query data base using that token
    const db = getDb();
    const result = await db.collection("places")
    .find({bookedBy: email }).toArray()
    return result
}

const fetchHostedPlaceList = async(email) =>{
  //suppose we get the email from token and then query data base using that token
  const db = getDb();
  const result = await db.collection("places")
  .find({hostedBy: email }).toArray()
  return result
}

const bookPlace = async(id, email) => {
  const db = getDb();
  const result = await db.collection("places").updateOne(
    { _id: new mongodb.ObjectId(id)},
    {
      $set: {
        bookedBy: email,
        checkIn : checkIn,
        checkOut : checkOut
      },
    }
  );

  return result
}

const deleteHostedPlace = async(id) => {
  const db = getDb();
  const result = await db.collection("places").deleteOne( { _id: new mongodb.ObjectId(id)});
  return result
}

exports.createPlace = createPlace;
exports.editPlace = editPlace
exports.fetchSinglePlace = fetchSinglePlace 
exports.fetchBookedPlaceList = fetchBookedPlaceList 
exports.fetchHostedPlaceList = fetchHostedPlaceList
exports.bookPlace = bookPlace
exports.deleteHostedPlace = deleteHostedPlace

 