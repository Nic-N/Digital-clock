function clock (){
  var fullDate = new Date ();
  var hours = fullDate.getHours();
  var mins = fullDate.getMinutes();
  var secs = fullDate.getSeconds();

  // the line of code below adds a zero on numbers less than 10 so that the hours, minutes and seconds all have 2 digits

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  /*
  DOM - Document Object Model which is basically the browser window8

  What we are saying by writing the code below is  take this " document.getElementById('hour')" line of code and change it to the value of hours asssigned above "
  */

  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = ":" + mins;
  document.getElementById('second').innerHTML = ":" + secs;
}

// This makes the seconds change every second. We use 100 as thisis calculated in miliseconds
setInterval(clock,100);
