function Calculate() {

}

function Average(grade1, grade2, grade3) {


}

function LetterGrade(average) {
 if (average === 100) {
 return "A++";
 } else if (average >= 90) {
  return "A";
 } else if (average >= 80) {
  return "B"
 } else if (average >= 70) {
  return "C";
 } else if (average >= 60) {
  return "D";
 } else {
  return "F";
 }
}

function Display(firstname, lastname, grade1, grade2, grade3, average, lettergrade) {
 var firstname = document.getElementById("firstname").value;
 var lastname = document.getElementById("lastname").value;
 
 document.getElementById("fullname").innerHTML = "Full Name: "+firstname+" "+lastname;
 
  var grade1 = document.getElementById("gradeOne").value;
  var grade2 = document.getElementById("gradeSecond").value;
  var grade3 = document.getElementById("gradeThird").value;
 
  document.getElementById("grade1").innerHTML = "Grade 1: "+grade1;
  document.getElementById("grade2").innerHTML = "Grade 2: "+grade2;
  document.getElementById("grade3").innerHTML = "Grade 3: "+grade3;

}

