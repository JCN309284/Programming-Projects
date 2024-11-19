function myFunction(valNum) {

 if (fahrenheit1.checked && celcius2.checked ) {
valNum = parseFloat(valNum);
document.getElementById("numberDisplay").innerHTML = (valNum-32)/1.8;
}

 else if (fahrenheit1.checked && kelvin2.checked) {
valNum = parseFloat(valNum);
document.getElementById("numberDisplay").innerHTML = ((valNum-32)/1.8)+273.15;
}

 else if (celcius1.checked && fahrenheit2.checked) {
valNum = parseFloat(valNum);
document.getElementById("numberDisplay").innerHTML = (valNum*1.8)+32;
}

 else if (celcius1.checked && kelvin2.checked) {
valNum = parseFloat(valNum);
document.getElementById("numberDisplay").innerHTML = valNum+273.15;
}

 else if (kelvin1.checked && fahrenheit2.checked) {
valNum = parseFloat(valNum);
document.getElementById("numberDisplay").innerHTML = ((valNum-273.15)*1.8)+32;
}

 else if (kelvin1.checked && celcius2.checked) {
valNum = parseFloat(valNum);
document.getElementById("numberDisplay").innerHTML = valNum-273.15;
}


};