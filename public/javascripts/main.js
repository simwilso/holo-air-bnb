$(document).ready(function() {

console.log("js file is working ok");

//setup value variable
var value = 0;

//if house button is pressed increment value variable by $200 and colour button
$("#HOUSE").click(function capture() {
  console.log("house button works");
  alert("Pressing this button books the home and the instructs the WattWatchers to turn on Power to the site");
  $("#HOUSE").css("background-color", "red");
  value = value + 200;
  $("#VALUE").html("$" + value);
});
//if hottub button is pressed increment value variable by $100 and colour button
$("#HOTTUB").click(function capture() {
  console.log("hottub button works");
  alert("Pressing this button books the hottub and the instructs the WattWatchers to turn on the water pump");
  $("#HOTTUB").css("background-color", "red");
  value = value + 100;
  $("#VALUE").html("$" + value);
});
//if tennis button is pressed increment value variable by $10 and colour button
$("#TENNIS").click(function capture() {
  console.log("tennis button works");
  alert("Pressing this button books the tennis court and the instructs the WattWatchers to turn on power to the Tennis Court Gate");
  $("#TENNIS").css("background-color", "red");
  value = value + 10;
  $("#VALUE").html("$" + value);
});
//if garage button is pressed increment value variable by $50 and colour button
$("#GARAGE").click(function capture() {
  console.log("garage button works");
  alert("Pressing this button books the workshop and the instructs the WattWatchers to enable power to the Workshop");
  $("#GARAGE").css("background-color", "red");
  value = value + 50;
  $("#VALUE").html("$" + value);
});
//if EV Charging button is pressed increment value variable by $50 and colour button
$("#EV").click(function capture() {
  console.log("EV charge button works");
  alert("Pressing this button books the EV Charger at the home and the instructs the WattWatchers to enable power to it.  Our MicroTransaction HOLO Chain service will immutably track the value of the Power Sent");
  $("#EV").css("background-color", "red");
  value = value + 50;
  $("#VALUE").html("$" + value);
});



/* *********************************************************************** */
/* API Input for meter data                                                */
/* *********************************************************************** */

});
