var CookieStandLiteral = function(area, time, cookies){
  this.area = area;
  this.time = time;
  this.cookies = cookies;
  this.getTableRowInfo = function() {
    var row = document.createElement("tr");
    var areaCell = document.createElement("td");
    areaCell.innerText = this.area;
    row.appendChild(areaCell);
    var timeCell = document.createElement("td");
    timeCell.innerText = this.time;
    row.appendChild(timeCell);
    var cookieCell = document.createElement("td");
    cookieCell.innerText = this.cookies
    row.appendChild(cookieCell);
    return row;
  }
}

//array for the multiple stands
var cookieStand = [];

function craftCookieTable() {
  var tableBody = document.getElementById("cookie-table");
  tableBody.innerHTML = "<tr><th>Area</th><th>Time</th><th>Cookies</th>";
}
