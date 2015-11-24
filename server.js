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

var FoodEntry = mongoose.model('FoodEntry', FoodSchema);

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

var router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send('Hello!');
});

router.route('/:id')
  .get(function(req,res){
    FoodEntry.find({"id": req.params.id},function(err,match){
      if (match.length !== 0) {
        res.status(200).json(match);
      }
      else {
        res.status(404).json({error: 'couldn\'t find id'});
      }
    });
  });
/*
router.route('/:id/name')
  .get(function(req,res){
    FoodEntry.find({"id": req.params.id},function(err,match){
      if (match.length === 0) {
        res.status(404).json({error: 'couldn\'t find id'});
      }
      else {
        res.status(200).json({price: match[0]['name']});
      }
    });
  });

router.route('/:id/price')
  .get(function(req,res){
    FoodEntry.find({"id": req.params.id},function(err,match){
      if (match.length === 0) {
        res.status(404).json({error: 'couldn\'t find id'});
      }
      else {
        res.status(200).json({price: match[0]['price']});
      }
    });
  });

router.route('/:id/image')
  .get(function(req,res){
    FoodEntry.find({"id": req.params.id},function(err,match){
      if (match.length === 0) {
        res.status(404).json({error: 'couldn\'t find id'});
      }
      else {
        res.status(200).json({image: match[0]['displayImage']});
      }
    });
  });
*/
app.use('/', router);

app.listen(app.get('port'), function() {
  console.log('App is running on port', app.get('port'));
});
