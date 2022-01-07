var semesterEnd = new Date("Jul 3, 2022").getTime();
var semesterStart = new Date("Oct 1, 2021").getTime();
var now = new Date().getTime();

var summer = new Date("Feb 21, 2022").getTime();

function dateToDate (date1, date2){
    return date1 - date2;
}

function Days(date){
    return Math.floor(date / (1000 * 60 * 60 * 24));
}

function dateToPercent(days, totalDays) {
  return days/totalDays * 100;
}

function Weeks(days) {
  var w = days/7
  return w.toFixed(0) + " weeks " + days%7 + " days";
}

var toGoDays = Days(dateToDate(semesterEnd, now));

var passedDays = Days(dateToDate(now, semesterStart));

var TotalDays = Days(dateToDate(semesterEnd, semesterStart));

document.getElementById("toGo").innerHTML = toGoDays + " days (" + Weeks(toGoDays) + ")";

document.getElementById("academicYearProgress").value = dateToPercent(passedDays, TotalDays);

document.getElementById("academicYearPercent").innerHTML = dateToPercent(passedDays, TotalDays).toFixed(2) + "%";

function sem(date){
  if (date > summer) {
    return "Summer 2021/2022";
  }
  else {
    return "Winter 2021/2022";
  }
}

var semester = sem(now);

document.getElementById("Semester").innerHTML = semester;

if (semester == "Summer 2021/2022"){
    var totalSummer = Days(dateToDate(semesterEnd, summer));
    var toGoDaysSummer = Days(dateToDate(now, summer));
    var passedDaysSummer = Days(dateToDate(now, summer));
    document.getElementById("semesterProgress").value = dateToPercent(passedDaysSummer, totalSummer);
    document.getElementById("semesterPercent").innerHTML = dateToPercent(passedDaysSummer, totalSummer).toFixed(2) + "%";
  } else if (semester == "Winter 2021/2022") {
    var totalWinter = Days(dateToDate( summer, semesterStart));
    var toGoDaysWinter = Days(dateToDate(summer, now));
    var passedDaysWinter = Days(dateToDate(now, semesterStart));
    document.getElementById("semesterProgress").value = dateToPercent(passedDaysWinter, totalWinter);
    document.getElementById("semesterPercent").innerHTML = dateToPercent(passedDaysWinter, totalWinter).toFixed(2) + "%";
  }


