

// submit button
var button = document.getElementById("submit");
button.addEventListener("click", function (event) {
event.preventDefault ();    
var submit = confirm("Are you sure that you want to submit the form?");
if (submit)
console.log(submit);
else 
console.log(submit);

});
// reset button
var button = document.getElementById("reset");
button.addEventListener("click", function (event) {
event.preventDefault ();    
var reset = confirm("Are you sure that you want to reset the form?");
if (reset)
console.log(reset);
else 
console.log(reset);

});


