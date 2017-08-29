var CookieStandLiteral = function(area, min, max, avg){
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.area = area;
  this.total = 0;
  this.time = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ",];
  this.calculateCookies = function(){
      var amountCookies = Math.floor(this.generateCustomers() * this.avg);
      this.total = this.total + amountCookies;
      return amountCookies;
    };
  this.generateCustomers = function(){
      var min = Math.ceil(this.min);
      var max = Math.floor(this.max);
      var result = Math.floor(Math.random() * (max - min)) + min;
      return result;
    };
};

var pioneerSquare = new CookieStandLiteral("Pioneer Square", 17, 88, 5.2);
// console.log(pioneerSquare)
var portlandAirport = new CookieStandLiteral("Portland Airport", 6, 24, 1.2);
// console.log(portlandAirport)
var washingtonSquare = new CookieStandLiteral("Washington Square", 11, 38, 1.9);
// console.log(washingtonSquare)
var sellWood = new CookieStandLiteral("Sellwood", 20, 48, 3.3);
// console.log(sellWood)
var pearlDistrict = new CookieStandLiteral("Pearl District", 3, 24, 2.6)
// console.log(pearlDistrict)

var store = [
  pioneerSquare,
  portlandAirport,
  washingtonSquare,
  sellWood,
  pearlDistrict,
]
var elTable = document.getElementById("cookie-calc");
console.log(elTable);
for (var index = 0; index < store.length; index++){
    var row = document.createElement("tr");
    elTable.appendChild(row);
    var cell = document.createElement("td");
    cell.innerText = store[index].area;
    row.appendChild(cell);
    // console.log(store[index].area);
    console.log(store[index]);
  for (var timeIndex = 0; timeIndex < store[index].time.length; timeIndex++){
    var timeCell = document.createElement("td");
    timeCell.innerText = store[index].calculateCookies();
    row.appendChild(timeCell);
    console.log(store[index].calculateCookies());
    // store[index].addTableItem(store[index].time[timeIndex]);
  }
  var total = document.createElement('td');
  total.innerText = store[index].total;
  row.appendChild(total);
}

function createNewStore(){
  var form = document.forms.newStoreName;
  var newStore = form.elements.newStore.value;
  console.log(newStore);
  var minCustomers = form.elements.minCustomers.value;
  console.log(minCustomers);
  var maxCustomers = form.elements.maxCustomers.value;
  console.log(maxCustomers);
  var avgCookies = form.elements.avgCookies.value;
  console.log(avgCookies);
  var userCreatedStore = new CookieStandLiteral(newStore, minCustomers, maxCustomers, avgCookies);
  console.log(userCreatedStore);
  store.push(userCreatedStore);
      var row = document.createElement("tr");
      elTable.appendChild(row);
      var cell = document.createElement("td");
      cell.innerText = userCreatedStore.area;
      row.appendChild(cell);
      // console.log(store[index].area);
      console.log(store[index]);
    for (var timeIndex = 0; timeIndex < store[index].time.length; timeIndex++){
      var timeCell = document.createElement("td");
      timeCell.innerText = store[index].calculateCookies();
      row.appendChild(timeCell);
      console.log(store[index].calculateCookies());
      // store[index].addTableItem(store[index].time[timeIndex]);
    }
    var total = document.createElement('td');
    total.innerText = store[index].total;
    row.appendChild(total);
    form.reset();
}
