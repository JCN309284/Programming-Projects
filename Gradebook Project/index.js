function Calculate() {

}


function Average(grade1, grade2, grade3) {
return (grade1 + grade2 + grade3)/3
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

  firstname = document.getElementById("firstname").value;
  lastname = document.getElementById("lastname").value;

  grade1 = parseFloat(document.getElementById("gradeOne").value);
  grade2 = parseFloat(document.getElementById("gradeSecond").value);
  grade3 = parseFloat(document.getElementById("gradeThird").value);

  average = Average(grade1, grade2, grade3);
  lettergrade = LetterGrade(average);

  document.getElementById("fullname").innerHTML = "Full Name: "+firstname+" "+lastname;
  
  document.getElementById("grade1").innerHTML = "Grade 1: "+grade1;
  document.getElementById("grade2").innerHTML = "Grade 2: "+grade2;
  document.getElementById("grade3").innerHTML = "Grade 3: "+grade3;
  document.getElementById("average").innerHTML = "Average: "+average.toFixed(1);
  document.getElementById("lettergrade").innerHTML = "Letter Grade: "+lettergrade;
}

