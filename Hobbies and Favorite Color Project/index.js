//The DOMContentLoaded will make sure the external script will load

document.addEventListener("DOMContentLoaded", function() {

const colorPicker1 = document.getElementById("colorPicker1");
const demo1 = document.getElementById("demo1");
const colorPicker2 = document.getElementById("colorPicker2");
const demo2 = document.getElementById("demo2");
const colorPicker3 = document.getElementById("colorPicker3");
const demo3 = document.getElementById("demo3");
const colorPicker4 = document.getElementById("colorPicker4");
const demo4 = document.getElementById("demo4");
const colorPicker5 = document.getElementById("colorPicker5");
const demo5 = document.getElementById("demo5");

//The addeventlisteners will detect when the color picker is changed

colorPicker1.addEventListener("input", function() {
    demo1.style.backgroundColor = colorPicker1.value;
});

colorPicker2.addEventListener("input", function() {
    demo2.style.backgroundColor = colorPicker2.value;
});

colorPicker3.addEventListener("input", function() {
    demo3.style.backgroundColor = colorPicker3.value;
});

colorPicker4.addEventListener("input", function() {
    demo4.style.backgroundColor = colorPicker4.value;
});

colorPicker5.addEventListener("input", function() {
    demo5.style.backgroundColor = colorPicker5.value;
});


});