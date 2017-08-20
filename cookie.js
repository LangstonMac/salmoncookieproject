var pioneerSquare = {
  min: 17,
  max: 88,
  avg: 5.2,
  total: 0,
  calculateCookies:function(id){
    var calc = Math.floor(pioneerSquare.generateCustomers() * pioneerSquare.avg);
    document.getElementById(id).innerHTML = calc;
    pioneerSquare.total = pioneerSquare.total + calc;
    return calc;
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
  calculateCookies:function(id){
    var calc = Math.floor(portlandAirport.generateCustomers() * portlandAirport.avg);
    document.getElementById(id).innerHTML = calc;
    portlandAirport.total = portlandAirport.total + calc;
    return calc;
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
  calculateCookies:function(id){
    var calc = Math.floor(washingtonSquare.generateCustomers() * washingtonSquare.avg);
    document.getElementById(id).innerHTML = calc;
    washingtonSquare.total = washingtonSquare.total + calc;
    return calc;
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
  calculateCookies:function(id){
    var calc = Math.floor(sellWood.generateCustomers() * sellWood.avg);
    document.getElementById(id).innerHTML = calc;
    sellWood.total = sellWood.total + calc;
    return calc;
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
  calculateCookies:function(id){
    var calc = Math.floor(pearlDistrict.generateCustomers() * pearlDistrict.avg);
    document.getElementById(id).innerHTML = calc;
    pearlDistrict.total = pearlDistrict.total + calc;
    return calc;
  },
  generateCustomers: function(){
    var min = Math.ceil(pearlDistrict.min);
    var max = Math.floor(pearlDistrict.max);
    var result = Math.floor(Math.random() * (max - min)) + min;
    return result
  }
}
//executing function for pioneerSquare
pioneerSquare.calculateCookies("pioneerSquare");
pioneerSquare.calculateCookies("pioneerSquare2");
pioneerSquare.calculateCookies("pioneerSquare3");
pioneerSquare.calculateCookies("pioneerSquare4");
pioneerSquare.calculateCookies("pioneerSquare5");
pioneerSquare.calculateCookies("pioneerSquare6");
pioneerSquare.calculateCookies("pioneerSquare7");
pioneerSquare.calculateCookies("pioneerSquare8");
document.getElementById("totalPioneer").innerHTML = pioneerSquare.total;

//executing function for portlandAirport
portlandAirport.calculateCookies("portlandAirport");
portlandAirport.calculateCookies("portlandAirport2");
portlandAirport.calculateCookies("portlandAirport3");
portlandAirport.calculateCookies("portlandAirport4");
portlandAirport.calculateCookies("portlandAirport5");
portlandAirport.calculateCookies("portlandAirport6");
portlandAirport.calculateCookies("portlandAirport7");
portlandAirport.calculateCookies("portlandAirport8");
document.getElementById("totalPortland").innerHTML = portlandAirport.total;

//executing function for washingtonSquare
washingtonSquare.calculateCookies("washingtonSquare");
washingtonSquare.calculateCookies("washingtonSquare2");
washingtonSquare.calculateCookies("washingtonSquare3");
washingtonSquare.calculateCookies("washingtonSquare4");
washingtonSquare.calculateCookies("washingtonSquare5");
washingtonSquare.calculateCookies("washingtonSquare6");
washingtonSquare.calculateCookies("washingtonSquare7");
washingtonSquare.calculateCookies("washingtonSquare8");
document.getElementById("totalWashington").innerHTML = washingtonSquare.total;

//executing function for sellWood
sellWood.calculateCookies("sellWood");
sellWood.calculateCookies("sellWood2");
sellWood.calculateCookies("sellWood3");
sellWood.calculateCookies("sellWood4");
sellWood.calculateCookies("sellWood5");
sellWood.calculateCookies("sellWood6");
sellWood.calculateCookies("sellWood7");
sellWood.calculateCookies("sellWood8");
document.getElementById("totalSellWood").innerHTML = sellWood.total;

//executing function for pearlDistrict
pearlDistrict.calculateCookies("pearlDistrict");
pearlDistrict.calculateCookies("pearlDistrict2");
pearlDistrict.calculateCookies("pearlDistrict3");
pearlDistrict.calculateCookies("pearlDistrict4");
pearlDistrict.calculateCookies("pearlDistrict5");
pearlDistrict.calculateCookies("pearlDistrict6");
pearlDistrict.calculateCookies("pearlDistrict7");
pearlDistrict.calculateCookies("pearlDistrict8");
document.getElementById("totalPearlDistrict").innerHTML = pearlDistrict.total;
