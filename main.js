// current day - start day and display to html

// var currentDay = new Date();
var startDay = new Date("October 26, 2017 9:00:00");
var difference = Math.floor((new Date() - startDay)/(1000 * 60 * 60 *24));
var displayDay = document.getElementById('day');
displayDay.innerHTML = `${difference} DAYS`;