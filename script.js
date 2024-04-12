let input = document.querySelector(".alarm");
let btn = document.querySelector(".setAlarm");

function setAlarm() {
  btn.addEventListener("click", () => {
    let inputVal = input.value;
    console.log(inputVal);
    setTimeout(() => {
      playAlarm();
    }, inputVal * 1000);
  });
}

function playAlarm() {
  var audio = new Audio("alarm.mp3");
  audio.play();
}

setAlarm();
