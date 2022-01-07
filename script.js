<!-- https://www.w3schools.com/howto/howto_js_countdown.asp -->

var semesterEnd = new Date("Jul 3, 2022").getTime();
var semesterStart = new Date("Oct 1, 2021").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var until = semesterEnd - now;
  var passed = now - semesterStart
  var total = semesterEnd - semesterStart
  
  var toGoDays = Math.floor(until / (1000 * 60 * 60 * 24));
   var passedDays = Math.floor(passed / (1000 * 60 * 60 * 24));
   var totalDays = Math.floor(total / (1000 * 60 * 60 * 24));
  document.getElementById("toGo").innerHTML = toGoDays + " days";
   document.getElementById("Pass").innerHTML = passedDays + " days";
   document.getElementById("Tot").innerHTML = totalDays + " days";
  
var perc = passedDays/totalDays * 100;
  document.getElementById("per").innerHTML = perc  + " %";
  document.getElementById("progressBar").value = perc
  
document.getElementById("demo").innerHTML = days + " days";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "GRATUATED";
  }
}, 1000);