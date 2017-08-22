var pioneerSquare = {
  min: 17,
  max: 88,
  avg: 5.2,
  total: 0,
  time: ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ",],
  addListItem:function(time){
    var listToUse = document.getElementById("pioneerSquareList")
    var cookieStandItem = document.createElement("li");
    cookieStandItem.innerText = time + pioneerSquare.calculateCookies() + " cookies";
    listToUse.appendChild(cookieStandItem);
  },
  createTotal:function(){
    var listToUse = document.getElementById("pioneerSquareList");
    var cookieStandItem = document.createElement("li");
    cookieStandItem.innerText = "Total: " + pioneerSquare.total; + "cookies"
    listToUse.appendChild(cookieStandItem);
  },
  calculateCookies:function(){
    var amountCookies = Math.floor(pioneerSquare.generateCustomers() * pioneerSquare.avg);
    // document.getElementById(id).innerHTML = calc;
    pioneerSquare.total = pioneerSquare.total + amountCookies;
    return amountCookies;
  },
  generateCustomers: function(){
    var min = Math.ceil(pioneerSquare.min);
    var max = Math.floor(pioneerSquare.max);
    var result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  }
}

var portlandAirport = {
  min: 6,
  max: 24,
  avg: 1.2,
  total: 0,
  time: ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ",],
  addListItem:function(time){
    var listToUse = document.getElementById("portlandAirportList");
    var cookieStandItem = document.createElement("li");
    cookieStandItem.innerText = time + portlandAirport.calculateCookies() + " cookies";
    listToUse.appendChild(cookieStandItem);
  },
  createTotal:function(){
    var listToUse = document.getElementById("portlandAirportList");
    var cookieStandItem = document.createElement("li");
    cookieStandItem.innerText = "Total: " + portlandAirport.total + "cookies"
    listToUse.appendChild(cookieStandItem);
  },
  calculateCookies:function(){
    var amountCookies = Math.floor(portlandAirport.generateCustomers() * portlandAirport.avg);
    // document.getElementById(id).innerHTML = calc;
    portlandAirport.total = portlandAirport.total + amountCookies;
    return amountCookies;
  },
  generateCustomers: function(){
    var min = Math.ceil(portlandAirport.min);
    var max = Math.floor(portlandAirport.max);
    var result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  }
}

var washingtonSquare = {
  min: 11,
  max: 38,
  avg: 1.9,
  total: 0,
  time: ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ",],
  addListItem:function(time){
    var listToUse = document.getElementById("washingtonSquareList");
    var cookieStandItem = document.createElement("li");
    cookieStandItem.innerText = time + washingtonSquare.calculateCookies() + " cookies";
    listToUse.appendChild(cookieStandItem);
  },
  createTotal:function(){
    var listToUse = document.getElementById("washingtonSquareList");
    var cookieStandItem = document.createElement("li");
    cookieStandItem.innerText = "Total: " + washingtonSquare.total + "cookies"
    listToUse.appendChild(cookieStandItem);
  },
  calculateCookies:function(){
    var amountCookies = Math.floor(washingtonSquare.generateCustomers() * washingtonSquare.avg);
    // document.getElementById(id).innerHTML = calc;
    washingtonSquare.total = washingtonSquare.total + amountCookies;
    return amountCookies;
  },
  generateCustomers: function(){
    var min = Math.ceil(washingtonSquare.min);
    var max = Math.floor(washingtonSquare.max);
    var result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  }
}

var sellWood = {
  min: 20,
  max: 48,
  avg: 3.3,
  total: 0,
  time: ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ",],
  addListItem:function(time){
    var listToUse = document.getElementById("sellWoodList");
    var cookieStandItem = document.createElement("li");
    cookieStandItem.innerText = time + sellWood.calculateCookies() + " cookies";
    listToUse.appendChild(cookieStandItem);
  },
  createTotal:function(){
    var listToUse = document.getElementById("sellWoodList");
    var cookieStandItem = document.createElement("li");
    cookieStandItem.innerText = "Total: " + sellWood.total + " cookies"
    listToUse.appendChild(cookieStandItem);
  },
  calculateCookies:function(){
    var amountCookies = Math.floor(sellWood.generateCustomers() * sellWood.avg);
    // document.getElementById(id).innerHTML = calc;
    sellWood.total = sellWood.total + amountCookies;
    return amountCookies;
  },
  generateCustomers: function(){
    var min = Math.ceil(sellWood.min);
    var max = Math.floor(sellWood.max);
    var result = Math.floor(Math.random() * (max - min)) + min;
    return result
  }
}

var pearlDistrict = {
  min: 3,
  max: 24,
  avg: 2.6,
  total: 0,
  time: ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ",],
  addListItem:function(time){
    var listToUse = document.getElementById("pearlDistrictList");
    var cookieStandItem = document.createElement("li");
    cookieStandItem.innerText = time + pearlDistrict.calculateCookies() + " cookies";
    listToUse.appendChild(cookieStandItem);
  },
  createTotal:function(){
    var listToUse = document.getElementById("pearlDistrictList");
    var cookieStandItem = document.createElement("li");
    cookieStandItem.innerText = "Total: " + pearlDistrict.total + " cookies"
    listToUse.appendChild(cookieStandItem);
  },
  calculateCookies:function(){
    var amountCookies = Math.floor(pearlDistrict.generateCustomers() * pearlDistrict.avg);
    // document.getElementById(id).innerHTML = calc;
    pearlDistrict.total = pearlDistrict.total + amountCookies;
    return amountCookies;
  },
  generateCustomers: function(){
    var min = Math.ceil(pearlDistrict.min);
    var max = Math.floor(pearlDistrict.max);
    var result = Math.floor(Math.random() * (max - min)) + min;
    return result
  }
}
//DOM manipulation section!
function addListItem(contentToAdd,itemName = "li"){
  var listToUse = document.getElementById("pioneerSquare");
  var cookieStandItem = document.createElement("li");
  cookieStandItem.innerText = contentToAdd;
  listToUse.appendChild(cookieStandItem);
}
function addListItem(contentToAdd,itemName = "li"){
  var listToUse = document.getElementById("portlandAirport");
  var cookieStandItem = document.createElement("li");
  cookieStandItem.innerText = contentToAdd;
  listToUse.appendChild(cookieStandItem);
}
function addListItem(contentToAdd,itemName = "li"){
  var listToUse = document.getElementById("washingtonSquare");
  var cookieStandItem = document.createElement("li");
  cookieStandItem.innerText = contentToAdd;
  listToUse.appendChild(cookieStandItem);
}
function addListItem(contentToAdd,itemName = "li"){
  var listToUse = document.getElementById("sellWood");
  var cookieStandItem = document.createElement("li");
  cookieStandItem.innerText = contentToAdd;
  listToUse.appendChild(cookieStandItem);
}
function addListItem(contentToAdd,itemName = "li"){
  var listToUse = document.getElementById("pearlDistrict");
  var cookieStandItem = document.createElement("li");
  cookieStandItem.innerText = contentToAdd;
  listToUse.appendChild(cookieStandItem);
}
// var cookieStore = []
// cookieStores.push();

for (storeIndex = 0; storeIndex < pioneerSquare.time.length; storeIndex++) {
  console.log(storeIndex);
  console.log(pioneerSquare.time[storeIndex]);
  pioneerSquare.addListItem(pioneerSquare.time[storeIndex]);
}
for (storeIndex = 0; storeIndex < portlandAirport.time.length; storeIndex++) {
  console.log(storeIndex);
  console.log(portlandAirport.time[storeIndex]);
  portlandAirport.addListItem(portlandAirport.time[storeIndex]);
}
for (storeIndex = 0; storeIndex < washingtonSquare.time.length; storeIndex++) {
  console.log(storeIndex);
  console.log(washingtonSquare.time[storeIndex]);
  washingtonSquare.addListItem(washingtonSquare.time[storeIndex]);
}
for (storeIndex = 0; storeIndex < sellWood.time.length; storeIndex++) {
  console.log(storeIndex);
  console.log(sellWood.time[storeIndex]);
  sellWood.addListItem(sellWood .time[storeIndex]);
}
for (storeIndex = 0; storeIndex < pearlDistrict.time.length; storeIndex++) {
  console.log(storeIndex);
  console.log(pearlDistrict.time[storeIndex]);
  pearlDistrict.addListItem(pearlDistrict.time[storeIndex]);
}
pioneerSquare.createTotal();
portlandAirport.createTotal();
washingtonSquare.createTotal();
sellWood.createTotal();
pearlDistrict.createTotal();

//executing function for pioneerSquare
// pioneerSquare.calculateCookies("pioneerSquare");
// pioneerSquare.calculateCookies("pioneerSquare2");
// pioneerSquare.calculateCookies("pioneerSquare3");
// pioneerSquare.calculateCookies("pioneerSquare4");
// pioneerSquare.calculateCookies("pioneerSquare5");
// pioneerSquare.calculateCookies("pioneerSquare6");
// pioneerSquare.calculateCookies("pioneerSquare7");
// pioneerSquare.calculateCookies("pioneerSquare8");
// document.getElementById("totalPioneer").innerHTML = pioneerSquare.total;
//
// //executing function for portlandAirport
// portlandAirport.calculateCookies("portlandAirport");
// portlandAirport.calculateCookies("portlandAirport2");
// portlandAirport.calculateCookies("portlandAirport3");
// portlandAirport.calculateCookies("portlandAirport4");
// portlandAirport.calculateCookies("portlandAirport5");
// portlandAirport.calculateCookies("portlandAirport6");
// portlandAirport.calculateCookies("portlandAirport7");
// portlandAirport.calculateCookies("portlandAirport8");
// document.getElementById("totalPortland").innerHTML = portlandAirport.total;
//
// //executing function for washingtonSquare
// washingtonSquare.calculateCookies("washingtonSquare");
// washingtonSquare.calculateCookies("washingtonSquare2");
// washingtonSquare.calculateCookies("washingtonSquare3");
// washingtonSquare.calculateCookies("washingtonSquare4");
// washingtonSquare.calculateCookies("washingtonSquare5");
// washingtonSquare.calculateCookies("washingtonSquare6");
// washingtonSquare.calculateCookies("washingtonSquare7");
// washingtonSquare.calculateCookies("washingtonSquare8");
// document.getElementById("totalWashington").innerHTML = washingtonSquare.total;
//
// //executing function for sellWood
// sellWood.calculateCookies("sellWood");
// sellWood.calculateCookies("sellWood2");
// sellWood.calculateCookies("sellWood3");
// sellWood.calculateCookies("sellWood4");
// sellWood.calculateCookies("sellWood5");
// sellWood.calculateCookies("sellWood6");
// sellWood.calculateCookies("sellWood7");
// sellWood.calculateCookies("sellWood8");
// document.getElementById("totalSellWood").innerHTML = sellWood.total;
//
// //executing function for pearlDistrict
// pearlDistrict.calculateCookies("pearlDistrict");
// pearlDistrict.calculateCookies("pearlDistrict2");
// pearlDistrict.calculateCookies("pearlDistrict3");
// pearlDistrict.calculateCookies("pearlDistrict4");
// pearlDistrict.calculateCookies("pearlDistrict5");
// pearlDistrict.calculateCookies("pearlDistrict6");
// pearlDistrict.calculateCookies("pearlDistrict7");
// pearlDistrict.calculateCookies("pearlDistrict8");
// document.getElementById("totalPearlDistrict").innerHTML = pearlDistrict.total;
