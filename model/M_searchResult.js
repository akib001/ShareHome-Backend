const getDb = require("../util/database").getDb;

const storeClient = async (db) => {
  await db.collection("client").insertOne(this);
};

const getSearchResult = async () => {
  const db = getDb();

  let data = await db.collection("places").find().toArray();
  console.log(data);
  return data;
};

const insertSearchResult = async () => {
  const db = await getDb();
  
  const data3 = {
    place: "Unique Space",
    propertyType: "Vacation home",
    listingType: "A private room",
    location: {
      latitude: { $numberDouble: "23.769992659990976" },
      longitude: { $numberDouble: "90.36404710898364" },
    },
    address: {
      street: "fsdf",
      aptSuite: "",
      city: "dsaf",
      state: "",
      zipCode: "",
      country: "adsfsd",
    },
    guests: { $numberInt: "4" },
    beds: { $numberInt: "5" },
    bathrooms: { $numberInt: "2" },
    imageInfo: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/rent-space-f74e9.appspot.com/o/images%2FHomepolish-interior-design-40053-5b896fbbc9e77c0050236fde.jpg8fb9ec14-594f-45c5-a7a0-c2e11e576dc2?alt=media&token=8f26fa85-7ec4-4b43-996d-d1efe4badfd4",
        fileName:
          "images/Homepolish-interior-design-40053-5b896fbbc9e77c0050236fde.jpg8fb9ec14-594f-45c5-a7a0-c2e11e576dc2",
      },
    ],
    title: "dfasfasdf",
    amenitiesArray: "dfasfasdf",
    guestFavoritesArray: [
      "",
      "",
      "Kitchen",
      "",
      "",
      "Paid parking on premises",
      "",
      "",
      "",
    ],
    safetyItemsArray: ["", "First aid kit", "", "", ""],
    description: "dsfsdf sg dasfdf",
    price: "800",
    hostedBy: "ishmam@gmail.com",
    bookedBy: "tasin@gmail.com",
    checkIn: '',
    checkOut: ''

  };

  // db.collection("places").insertMany(data);
  db.collection("places").insertOne(data3);
};

exports.insertSearchResult = insertSearchResult;
exports.getSearchResult = getSearchResult;
