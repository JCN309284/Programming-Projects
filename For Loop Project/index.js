function myFunction() {
 const start =
 parseInt(document.getElementById('start').value);
 const max =
 parseInt(document.getElementById('max').value);
 const increment =
 parseInt(document.getElementById('increment').value);

let output = "";
let currentNumber = start;

if (start <= max) { 
 while (currentNumber <= max) {
 output += currentNumber + "<br>";
 currentNumber += increment;
}
}

else {
 while (currentNumber >= max) {
 output += currentNumber + "<br>";
 currentNumber -= increment;
}
}

document.getElementById('output').innerHTML = output;
}