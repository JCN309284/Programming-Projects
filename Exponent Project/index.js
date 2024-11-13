 function myFunction() {
 let base = parseFloat(document.getElementById("baseOperand").value);
 let exp = parseFloat(document.getElementById("expOperand").value);

 let result = "";
 let i = 0;

 for (i = 1; i <= exp; i++) {
  result = Math.pow(base, exp);
 }

 document.getElementById("result").innerHTML = result;
}
