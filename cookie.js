var CookieStandLiteral = function(area, min, max, avg, elementId){
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.area = area;
  this.total = 0;
  this.time = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ",];
  this.element = document.getElementById(elementId);
  this.addTableItem = function(time){
      var cookieStandItem = document.createElement("li");
      cookieStandItem.innerText = time + this.calculateCookies() + " cookies";
      this.element.appendChild(cookieStandItem);
    },
  this.createTotal = function(){
      var cookieStandItem = document.createElement("li");
      cookieStandItem.innerText = "Total: " + this.total; + "cookies"
      this.element.appendChild(cookieStandItem);
    },
  this.calculateCookies = function(){
      var amountCookies = Math.floor(this.generateCustomers() * this.avg);
      // document.getElementById(id).innerHTML = calc;
      this.total = this.total + amountCookies;
      return amountCookies;
    },
  this.generateCustomers = function(){
      var min = Math.ceil(this.min);
      var max = Math.floor(this.max);
      var result = Math.floor(Math.random() * (max - min)) + min;
      return result;
    },
  this.getTableRowInfo = function() {
    var areaCell = document.createElement("li");
    areaCell.innerText = this.area;
    row.appendChild(areaCell);
    var timeCell = document.createElement("li");
    timeCell.innerText = this.time;
    row.appendChild(timeCell);
    var cookieCell = document.createElement("li");
    cookieCell.innerText = this.cookies
    row.appendChild(cookieCell);
    return row;
  }
}

var pioneerSquare = new CookieStandLiteral("Pioneer Square", 17, 88, 5.2, "pioneerSquareList");
// console.log(pioneerSquare)
var portlandAirport = new CookieStandLiteral("Portland Airport", 6, 24, 1.2, "portlandAirportList");
// console.log(portlandAirport)
var washingtonSquare = new CookieStandLiteral("Washington Square", 11, 38, 1.9, "washingtonSquareList");
// console.log(washingtonSquare)
var sellWood = new CookieStandLiteral("Sellwood", 20, 48, 3.3, "sellWoodList");
// console.log(sellWood)
var pearlDistrict = new CookieStandLiteral("Pearl District", 3, 24, 2.6, "pearlDistrictList")
// console.log(pearlDistrict)

var store = [
  pioneerSquare,
  portlandAirport,
  washingtonSquare,
  sellWood,
  pearlDistrict,
]

for (var index = 0; index < store.length; index++){
    // console.log(store[index].area);
    // console.log(store[index]);
  for (var timeIndex = 0; timeIndex < store[index].time.length; timeIndex++){
    // console.log(store[index].time[timeIndex]);
    store[index].addTableItem(store[index].time[timeIndex]);
  }
  store[index].createTotal();
}
