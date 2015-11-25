//EXPRESS FRAMEWORK SETUP
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));

var mongoose = require('mongoose');
var CREDENTIALS = process.env.credentials;
mongoose.connect('mongodb://' + CREDENTIALS + '@ds057224.mongolab.com:57224/lazysusan');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var FoodSchema = mongoose.Schema({
  id: Number,
  businessId: Number,
  businessName: String,
  cuisines: [String],
  description: String,
  displayImage: String,
  foodTypes: [String],
  images: [String],
  ingredients: [String],
  mealTypes: [String],
  name: String,
  price: Number,
  ratingAverage: Number,
  ratingCount: Number,
  restrictions: [String]
});

var BusinessSchema = mongoose.Schema({
  businessId: Number,
  businessName: String,
  address: String,
  phone: String,
  website: String

})


var FoodEntry = mongoose.model('FoodEntry', FoodSchema);
var BusinessEntry = mongoose.model('BusinessEntry', BusinessSchema);

/*
var tmp = new FoodEntry();
tmp.id = 0;
tmp.businessId = 11642174;
tmp.businessName = "Raffi's Place";
tmp.cuisines = ["Mediterranean","Middle Eastern"];
tmp.description = "Chicken with rice and a random tomato.";
tmp.displayImage = "http://i2.ypcdn.com/blob/6202ee52f27e421b23ca87a18b09404a360cce73";
tmp.foodTypes = ["Plate"];
tmp.images = ["http://i2.ypcdn.com/blob/6202ee52f27e421b23ca87a18b09404a360cce73", "http://i4.ypcdn.com/blob/183e727d7e95245db7cfa7f24ff991d98bd08eb1"];
tmp.ingredients =  ["Rice","Chicken","Tomato"];
tmp.mealTypes = ["Lunch","Dinner"];
tmp.name = "Boneless Chicken Kabob";
tmp.price = 9.99;
tmp.ratingAverage = 4.1;
tmp.ratingCount = 52;
tmp.restrictions = [""];

tmp.save(function(err) {
  if (err)
    console.log('didn\'t work');
  else {
    console.log('it worked');
  }
});
*/
/*
var tmp = new BusinessEntry();
tmp.businessId= 16490388;
tmp.businessName=  "El Morfi Grill"            ;
tmp.address=    "	241 N Brand Blvd, Glendale, CA 91203"          ;
tmp.phone= " (818) 334-5537"               ;
tmp.website= "elmorfigrill.com"               ;
tmp.save(function(err) {
  if (err)
    console.log('didn\'t work');
  else {
    console.log('it worked');
  }
});
*/

var router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send('Hello!');
});

router.route('/entrees/:id')
  .get(function(req,res){
    FoodEntry.find({"id": req.params.id},function(err,match){
      if(err)
        console.log('error on finding id');
      else
        res.status(200).json(match);
    });
  });

router.route('/search')
  .get(function(req,res){

    var all = [
    {
    "id": "2d647865-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 11642174,
    "businessName": "Raffi's Place",
    "cuisines": [
    "Mediterranean",
    "Middle Eastern"
    ],
    "description": "Chicken with rice and a random tomato.",
    "displayImage": "http://i2.ypcdn.com/blob/6202ee52f27e421b23ca87a18b09404a360cce73",
    "foodTypes": [
    "Plate"
    ],
    "images": [
    "http://i2.ypcdn.com/blob/6202ee52f27e421b23ca87a18b09404a360cce73",
    "http://i4.ypcdn.com/blob/183e727d7e95245db7cfa7f24ff991d98bd08eb1"
    ],
    "ingredients": [
    "Rice",
    "Chicken",
    "Tomato"
    ],
    "mealTypes": [
    "Lunch",
    "Dinner"
    ],
    "name": "Boneless Chicken Kabob",
    "price": 9.99,
    "ratingAverage": 4.1,
    "ratingCount": 52,
    "restrictions": [
    ""
    ]
    },
    {
    "id": "2d649f75-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 464708093,
    "businessName": "Old Village Restaurant",
    "cuisines": [
    "American"
    ],
    "description": "You say tomayto, I say tomahto.",
    "displayImage": "http://i3.ypcdn.com/blob/0b4c9e5d371f5df8a5c3c3c27f1de20f10dda0d3",
    "foodTypes": [
    "Soup"
    ],
    "images": [
    "http://i3.ypcdn.com/blob/0b4c9e5d371f5df8a5c3c3c27f1de20f10dda0d3"
    ],
    "ingredients": [
    "Tomato, Water, Salt"
    ],
    "mealTypes": [
    "Lunch",
    "Dinner"
    ],
    "name": "Tomato Soup",
    "price": 5.11,
    "ratingAverage": 2.5,
    "ratingCount": 321,
    "restrictions": [
    ""
    ]
    },
    {
    "id": "2d649f78-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 8604745,
    "businessName": "Outback Steakhouse",
    "cuisines": [
    "American"
    ],
    "description": "Overpriced steak. Where's the sear?",
    "displayImage": "http://i1.ypcdn.com/blob/359282590ff7bfceb60b5ad231b10046f945a73e",
    "foodTypes": [
    "Steak",
    "Plate"
    ],
    "images": [
    "http://i1.ypcdn.com/blob/359282590ff7bfceb60b5ad231b10046f945a73e"
    ],
    "ingredients": [
    "Beef"
    ],
    "mealTypes": [
    "Lunch",
    "Dinner"
    ],
    "name": "Outback Special Sirloin",
    "price": 16.99,
    "ratingAverage": 2,
    "ratingCount": 456,
    "restrictions": [
    ""
    ]
    },
    {
    "id": "2d649f74-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 4279373,
    "businessName": "Foxy's Restaurant",
    "cuisines": [
    "American"
    ],
    "description": "Worthy of Spongebob.",
    "displayImage": "http://i3.ypcdn.com/blob/4d048e7df1ed91597356977bee84e923ceadd925",
    "foodTypes": [
    "Burger"
    ],
    "images": [
    "http://i3.ypcdn.com/blob/4d048e7df1ed91597356977bee84e923ceadd925"
    ],
    "ingredients": [
    "Beef",
    "Pickels",
    "Onion",
    "Lettuce",
    "Potatoes"
    ],
    "mealTypes": [
    "Lunch"
    ],
    "name": "Crabby Patty",
    "price": 4.44,
    "ratingAverage": 3.3,
    "ratingCount": 432,
    "restrictions": [
    ""
    ]
    },
    {
    "id": "2d64c680-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 7127559,
    "businessName": "Palermo Italian Restaurant",
    "cuisines": [
    "Italian"
    ],
    "description": "Who eats pizza with a spoon?",
    "displayImage": "http://i1.ypcdn.com/blob/834090872df5a11453edd73457b9f95a72168a63",
    "foodTypes": [
    "Pizza"
    ],
    "images": [
    "http://i1.ypcdn.com/blob/834090872df5a11453edd73457b9f95a72168a63"
    ],
    "ingredients": [
    "Pepperoni",
    "Cheese",
    "Sauce"
    ],
    "mealTypes": [
    "Lunch",
    "Dinner"
    ],
    "name": "Pizza. With a spoon?",
    "price": 15,
    "ratingAverage": 3.3,
    "ratingCount": 234,
    "restrictions": [
    "Heart attack"
    ]
    },
    {
    "id": "2d649f71-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 11642175,
    "businessName": "Raffi's Place",
    "cuisines": [
    "Mediterranean",
    "Middle Eastern"
    ],
    "description": "Beef and chicken",
    "displayImage": "http://i1.ypcdn.com/blob/79356a61897f25fdbcf885be3126194681fa75d2",
    "foodTypes": [
    "Plate"
    ],
    "images": [
    "http://i1.ypcdn.com/blob/79356a61897f25fdbcf885be3126194681fa75d2",
    "http://i1.ypcdn.com/blob/b7339e4cae9acb7d98f3c5a617cb89d126aa26db",
    "http://i2.ypcdn.com/blob/9d55107131b49286c95208fd877066d24919afe3",
    "http://i3.ypcdn.com/blob/ce61f8cc6c7737dcef8916b0876750ee863e50e0"
    ],
    "ingredients": [
    "Rice",
    "Chicken",
    "Tomato"
    ],
    "mealTypes": [
    "Lunch",
    "Dinner"
    ],
    "name": "More kabobs",
    "price": 11.11,
    "ratingAverage": 4.4,
    "ratingCount": 2323,
    "restrictions": [
    ""
    ]
    },
    {
    "id": "2d647862-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 75371,
    "businessName": "Great White Hut",
    "cuisines": [
    "Mexican"
    ],
    "description": "General goodness.",
    "displayImage": "http://i1.ypcdn.com/blob/b38f92f971e6e0b1ec700b7f0998cba333e3e496",
    "foodTypes": [
    "Burrito"
    ],
    "images": [
    "http://i1.ypcdn.com/blob/b38f92f971e6e0b1ec700b7f0998cba333e3e496",
    "http://i1.ypcdn.com/blob/9ce84e508adf1631a0b2e40a8665854b92984d92"
    ],
    "ingredients": [
    "Carne Asada",
    "French Fries",
    "Guacamole",
    "Pico de gallo",
    "Sour Cream",
    "Cheese"
    ],
    "mealTypes": [
    "Lunch"
    ],
    "name": "California Burrito",
    "price": 6.35,
    "ratingAverage": 4,
    "ratingCount": 20,
    "restrictions": [
    "Beef",
    "Gluten"
    ]
    },
    {
    "id": "2d649f77-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 8604745,
    "businessName": "Outback Steakhouse",
    "cuisines": [
    "American"
    ],
    "description": "Also known as a Monte Bianco at UCLA",
    "displayImage": "http://i1.ypcdn.com/blob/7ac2bd2d127a07e9dfe6b67a489f865e6fab2213",
    "foodTypes": [
    "Ice Cream",
    "Pastry"
    ],
    "images": [
    "http://i1.ypcdn.com/blob/7ac2bd2d127a07e9dfe6b67a489f865e6fab2213"
    ],
    "ingredients": [
    "Chocolate",
    "More chocolate"
    ],
    "mealTypes": [
    "Dessert"
    ],
    "name": "Chocolate Thunder From Down Under",
    "price": 4.43,
    "ratingAverage": 4.9,
    "ratingCount": 354,
    "restrictions": [
    ""
    ]
    },
    {
    "id": "2d649f70-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 11642174,
    "businessName": "Raffi's Place",
    "cuisines": [
    "Mediterranean",
    "Middle Eastern"
    ],
    "description": "Chicken and naan and more tomatoes",
    "displayImage": "http://i4.ypcdn.com/blob/66c304a1206e2f26e450f9f71012a003271ee3bc",
    "foodTypes": [
    "Plate"
    ],
    "images": [
    "http://i4.ypcdn.com/blob/66c304a1206e2f26e450f9f71012a003271ee3bc"
    ],
    "ingredients": [
    "Rice",
    "Chicken",
    "Tomato"
    ],
    "mealTypes": [
    "Lunch",
    "Dinner"
    ],
    "name": "Chicken Kabob?",
    "price": 8.64,
    "ratingAverage": 3.4,
    "ratingCount": 42,
    "restrictions": [
    ""
    ]
    },
    {
    "id": "2d647861-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 467152316,
    "businessName": "Porto's Bakery",
    "cuisines": [
    "Cuban"
    ],
    "description": "Sugar, spice, everything nice",
    "displayImage": "http://i4.ypcdn.com/blob/7b43daa446f0bffffc312846590b49a6d0dfc15e",
    "foodTypes": [
    "Pastry"
    ],
    "images": [
    "http://i4.ypcdn.com/blob/7b43daa446f0bffffc312846590b49a6d0dfc15e"
    ],
    "ingredients": [
    "Strawberries",
    "Blueberries",
    "Apple",
    "Mango",
    "Grapes",
    "Pastry"
    ],
    "mealTypes": [
    "Dessert"
    ],
    "name": "Fruit Tarts",
    "price": 1.75,
    "ratingAverage": 4.8,
    "ratingCount": 9997,
    "restrictions": [
    "Gluten"
    ]
    },
    {
    "id": "2d647864-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 461718100,
    "businessName": "Conrad's Restaurant",
    "cuisines": [
    "American"
    ],
    "description": "Too many veggies",
    "displayImage": "http://i1.ypcdn.com/blob/5952aeaa3fbc9d2dc7b42d7ad6a04af28eba5f20",
    "foodTypes": [
    "Sandwich"
    ],
    "images": [
    "http://i1.ypcdn.com/blob/5952aeaa3fbc9d2dc7b42d7ad6a04af28eba5f20"
    ],
    "ingredients": [
    "Kale",
    "Lettuce",
    "Bread"
    ],
    "mealTypes": [
    "Lunch"
    ],
    "name": "Veggie Panini",
    "price": 0,
    "ratingAverage": 0,
    "ratingCount": 201,
    "restrictions": [
    "Vegetarian",
    "Undigestable"
    ]
    },
    {
    "id": "2d647860-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 467152316,
    "businessName": "Porto's Bakery",
    "cuisines": [
    "Cuban"
    ],
    "description": "A ham and swiss sandwich served between a warm sweet roll",
    "displayImage": "http://i4.ypcdn.com/blob/ede6a6772c0d8ad6f829fffc2efddfcf5b27f825",
    "foodTypes": [
    "Sandwich"
    ],
    "images": [
    "http://i4.ypcdn.com/blob/ede6a6772c0d8ad6f829fffc2efddfcf5b27f825"
    ],
    "ingredients": [
    "Ham",
    "Swiss Cheese",
    "Sweet roll"
    ],
    "mealTypes": [
    "Breakfast",
    "Lunch",
    "Dinner"
    ],
    "name": "Medianoche Sandwich",
    "price": 5,
    "ratingAverage": 4.9,
    "ratingCount": 9998,
    "restrictions": [
    "Pork",
    "Gluten"
    ]
    },
    {
    "id": "2d649f72-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 11642176,
    "businessName": "Raffi's Place",
    "cuisines": [
    "Mediterranean",
    "Middle Eastern"
    ],
    "description": "Wafers cream sandwich",
    "displayImage": "http://i3.ypcdn.com/blob/06aa2424423ced0bcc8ec84018f41435129420ef",
    "foodTypes": [
    "Plate"
    ],
    "images": [
    "http://i3.ypcdn.com/blob/06aa2424423ced0bcc8ec84018f41435129420ef"
    ],
    "ingredients": [
    "Cream",
    "Wafer"
    ],
    "mealTypes": [
    "Dessert"
    ],
    "name": "Wafer sandwich",
    "price": 5.99,
    "ratingAverage": 4.9,
    "ratingCount": 3456,
    "restrictions": [
    ""
    ]
    },
    {
    "id": "2d649f73-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 4279373,
    "businessName": "Foxy's Restaurant",
    "cuisines": [
    "American"
    ],
    "description": "Pancakes and sausage and strawberries and eggs",
    "displayImage": "http://i2.ypcdn.com/blob/0f2760a6a70560492f0978855c5e50449d71f701",
    "foodTypes": [
    "Plate"
    ],
    "images": [
    "http://i2.ypcdn.com/blob/0f2760a6a70560492f0978855c5e50449d71f701"
    ],
    "ingredients": [
    "Eggs",
    "Flour",
    "Sugar"
    ],
    "mealTypes": [
    "Breakfast",
    "Brunch"
    ],
    "name": "Breakfast platter",
    "price": 6.77,
    "ratingAverage": 5,
    "ratingCount": 123,
    "restrictions": [
    ""
    ]
    },
    {
    "id": "2d649f7a-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 8604745,
    "businessName": "Outback Steakhouse",
    "cuisines": [
    "American"
    ],
    "description": "Better than chicken n' shrimp.",
    "displayImage": "http://i3.ypcdn.com/blob/124f8cdf819ec82d7e8bc0a503c8b1f6153ce98b",
    "foodTypes": [
    "Steak",
    "Plate"
    ],
    "images": [
    "http://i3.ypcdn.com/blob/124f8cdf819ec82d7e8bc0a503c8b1f6153ce98b"
    ],
    "ingredients": [
    "Beef",
    "Shrimp Potato"
    ],
    "mealTypes": [
    "Lunch",
    "Dinner"
    ],
    "name": "Steak n' Shrimp",
    "price": 21.99,
    "ratingAverage": 3.2,
    "ratingCount": 222,
    "restrictions": [
    "Seafood"
    ]
    },
    {
    "id": "2d645150-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 467152316,
    "businessName": "Porto's Bakery",
    "cuisines": [
    "Cuban"
    ],
    "description": "A hand-rolled potato ball filled with juicy beef and fried to a golden brown.",
    "displayImage": "http://i3.ypcdn.com/blob/c7037155b3a4071ca2645edc00d9ac09bbad123c",
    "foodTypes": [
    "Fried"
    ],
    "images": [
    "http://i3.ypcdn.com/blob/c7037155b3a4071ca2645edc00d9ac09bbad123c",
    "http://i3.ypcdn.com/blob/ae80e3e79d3dba0b7363d054baedf365ba0dbfc7",
    "http://i1.ypcdn.com/blob/4de5dcd0587ccd39db05e5415181e4193967f6d3"
    ],
    "ingredients": [
    "Potatoes",
    "Balls"
    ],
    "mealTypes": [
    "Lunch",
    "Dinner",
    "Snack",
    "Appetizer"
    ],
    "name": "Potato Ball",
    "price": 1.25,
    "ratingAverage": 5,
    "ratingCount": 9999,
    "restrictions": [
    "Beef",
    "Gluten"
    ]
    },
    {
    "id": "2d64c681-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 16490388,
    "businessName": "El Morfi Grill",
    "cuisines": [
    "Mexican"
    ],
    "description": "Grilled chicken with random stuff",
    "displayImage": "http://i3.ypcdn.com/blob/99ee06f9b70f141eb71a49f86d2c6e379c2fd17d",
    "foodTypes": [
    "Plate"
    ],
    "images": [
    "http://i3.ypcdn.com/blob/99ee06f9b70f141eb71a49f86d2c6e379c2fd17d"
    ],
    "ingredients": [
    "Chicken",
    "Veggies"
    ],
    "mealTypes": [
    "Lunch",
    "Dinner"
    ],
    "name": "Pierna de pollo",
    "price": 10,
    "ratingAverage": 3.3,
    "ratingCount": 223,
    "restrictions": [
    ""
    ]
    },
    {
    "id": "2d649f76-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 8604745,
    "businessName": "Outback Steakhouse",
    "cuisines": [
    "American"
    ],
    "description": "Ogres have layers, like cakes, or onions.",
    "displayImage": "http://i1.ypcdn.com/blob/99c83857f72080838075e04f9613ea4f1ea78994",
    "foodTypes": [
    "Fried"
    ],
    "images": [
    "http://i1.ypcdn.com/blob/99c83857f72080838075e04f9613ea4f1ea78994"
    ],
    "ingredients": [
    "Onion, Bread, Ranch"
    ],
    "mealTypes": [
    "Snack",
    "Appetizer"
    ],
    "name": "Bloomin' Onion",
    "price": 6.66,
    "ratingAverage": 4.2,
    "ratingCount": 343,
    "restrictions": [
    ""
    ]
    },
    {
    "id": "2d647863-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 75371,
    "businessName": "Great White Hut",
    "cuisines": [
    "Mexican"
    ],
    "description": "Fry fried food yum.",
    "displayImage": "http://i4.ypcdn.com/blob/778f323b3218b86b43105f265f7280592669cdc5",
    "foodTypes": [
    "Fried"
    ],
    "images": [
    "http://i4.ypcdn.com/blob/778f323b3218b86b43105f265f7280592669cdc5"
    ],
    "ingredients": [
    "Potatoes",
    "Beef",
    "Sour Cream"
    ],
    "mealTypes": [
    "Lunch"
    ],
    "name": "Carne asada fries",
    "price": 5.21,
    "ratingAverage": 3,
    "ratingCount": 25,
    "restrictions": [
    "Gluten"
    ]
    },
    {
    "id": "2d649f79-2e09-11e4-891d-e9e8b9df89d8",
    "businessId": 8604745,
    "businessName": "Outback Steakhouse",
    "cuisines": [
    "American"
    ],
    "description": "Two chicken boobs and some shrimp",
    "displayImage": "http://i1.ypcdn.com/blob/0eacd1102f122827151c10eedd24c5cd013574e2",
    "foodTypes": [
    "Plate"
    ],
    "images": [
    "http://i1.ypcdn.com/blob/0eacd1102f122827151c10eedd24c5cd013574e2"
    ],
    "ingredients": [
    "Chicken",
    "Shrimp",
    "Shrubs"
    ],
    "mealTypes": [
    "Lunch",
    "Dinner"
    ],
    "name": "Chicken n' Shrimp",
    "price": 13.49,
    "ratingAverage": 2.2,
    "ratingCount": 111,
    "restrictions": [
    "Seafood"
    ]
    }
  ];



    res.status(200).json(all);



  });

router.route('/business/:id')
  .get(function(req,res){

    BusinessEntry.find({"businessId": req.params.id}, function(err,match) {
      if(err)
        console.log('error on finding business id');
      else {
        res.status(200).json(match);
      }

    });

  });



app.use('/', router);

app.listen(app.get('port'), function() {
  console.log('App is running on port', app.get('port'));
});
