let firstNames = [];
var firstList = "Current list:<br>";

function appendNameOne() {
event.preventDefault();
var latestName = document.getElementById("firstName").value;
firstNames.push(latestName);
firstList = firstList + latestName + "<br>";
document.getElementById("fname_roster").innerHTML = firstList;
};


var lastNames = [];
var lastList = "Current list:<br>";

function appendNameTwo() {
event.preventDefault();
var latestName = document.getElementById("lastName").value;
lastNames.push(latestName);
lastList = lastList + latestName + "<br>";
document.getElementById("lname_roster").innerHTML = lastList;
}


var phoneNumbers = [];
var phoneList = "Current list:<br>";

function appendNameThree() {
 event.preventDefault();
var latestNumber = document.getElementById("phoneNumber").value;
phoneNumbers.push(latestNumber);
phoneList = phoneList + latestNumber + "<br>";
document.getElementById("phone_roster").innerHTML = phoneList;
}