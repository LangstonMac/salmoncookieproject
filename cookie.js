var pioneerSquare = {
  min: 17,
  max: 88,
  avg: 5.2,
  calculateCookies:function(){
    var calc = Math.floor(pioneerSquare.generateCustomers() * pioneerSquare.avg);
    document.getElementById("pioneerSquare").innerHTML = calc;
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
  calculateCookies:function(){
    var calc = Math.floor(portlandAirport.generateCustomers() * portlandAirport.avg);
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
  calculateCookies:function(){
    var calc = Math.floor(washingtonSquare.generateCustomers() * washingtonSquare.avg);
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
  calculateCookies:function(){
    var calc = Math.floor(sellWood.generateCustomers() * sellWood.avg);
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
  calculateCookies:function(){
    var calc = Math.floor(pearlDistrict.generateCustomers() * pearlDistrict.avg);
    return calc;
  },
  generateCustomers: function(){
    var min = Math.ceil(pearlDistrict.min);
    var max = Math.floor(pearlDistrict.max);
    var result = Math.floor(Math.random() *(max - min)) + min;
    return result
  }
}
//executing functions
pioneerSquare.calculateCookies();
portlandAirport.calculateCookies();
washingtonSquare.calculateCookies();
sellWood.calculateCookies();
pearlDistrict.calculateCookies();
