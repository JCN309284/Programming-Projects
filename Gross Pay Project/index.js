function myFunction() {

 num1 = parseFloat(document.getElementById("hourlyWages").value);
 num2 = parseFloat(document.getElementById("hoursWorked").value);

 document.getElementById("regularPay").innerHTML = "Gross Pay: " + (num1 * num2).toFixed(1);

 document.getElementById("payWithOvertime").innerHTML = "Gross Pay With Overtime: " + (num1 * 40 + num1 * 1.5 * num2 - 40).toFixed(1);

}

