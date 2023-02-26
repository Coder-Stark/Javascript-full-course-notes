//EXERCISE 8

//the html AudioElement Interface can be used to play audio in the browser.
//create an alarm clock which display time and plays sound at a user specified time.


/*HTML CODE 
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  
  <div id="time"></div>
  <div id="alarm"></div>
  
  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>

</html>
*/

function play() {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
}

setInterval(() => {
  let d = new Date()
  time.innerHTML = d.toDateString() + " " + d.toTimeString()

}, 1000)

const setAlarm = (seconds) => {
  let d = new Date().getTime()
  setTimeout(() => {
    play()
  }, seconds * 1000)

  setInterval(() => {
    secondsLeft = - (new Date().getTime() - (d + seconds * 1000))
    if (secondsLeft > 0) {

      alarm.innerHTML = "Alarm ringing in " + Math.floor(secondsLeft / 1000) + " seconds"
    }

  })
}


let s = prompt("After how many seconds do you want an alarm?")
setAlarm(parseInt(s))


/*OUTPUTS
prompt ask no. of seconds left to sound alarm

Sun Feb 26 2023 20:24:49 GMT+0530 (India Standard Time)
Alarm ringing in 0 seconds
*/