// //Object Literal
// var fruit = {
//   taste: "delicious",
//   status: "uneaten",

//   rot: function(){
//     this.status = "spoiled"
//   },//make sure to remember your ','s
// }

//Contructor & prototype
function Fruit (name){
  this.name = name;
  this.status = "fresh";
}

Fruit.prototype.rot = function(){
  this.status = "spoiled";
};

//-----------------Fruit-----------------//
var apple = new Fruit ("apple");
var pear = new Fruit ("pear");
var orange = new Fruit ("pear");

//-----------------Fruit_Tree-----------------//

var stagesOfLife = {
  stage: ["seed", "sapling", "teen", "mature"]
}

function FruitTree (){

}

// var FruitTree = {
//   init: function(asd){
//     rings: 0;
//     this.status: "heatly"
//     var fruit = [];
//   }
// }
//-----------------Grove------------------//



//-----------------Farm-------------------//

function Farm () {
  this.crops = [],
  this.
}
var bensFarm = new Farm()


//-----------------Farmer-----------------//

function Farmer(name){
  this.name = name;
}
var ben = new Farmer("Ben")


//-----------------controllers-----------------//
//$(function){
  ben.buyFarm(new Grove);
  ben.plant("orange", 3);
  console.log(bensFarm.totalCrop() === 3);
  ben.plant("apple", 4);
  console.log(bensFarm.totalCrop()  === 7);
  ben.plant("pear", 4);
  console.log(bensFarm.totalCrop() === 11);
  for(var i = 0; i < 10; i++) {
    ben.tendCrops();
  }; //http://www.w3schools.com/js/js_loop_for.asp
  ben.collectHarvest();
  console.log(farmer.harvestSize() === farmer.totalCrops());

  ben.describeHarvestYield();
  // "I harvested X oranges. I harvested X apples. I harvested X pears."
  ben.describeFarm();
  // "I have X orange trees, X pear trees, and X apple trees"
// }



