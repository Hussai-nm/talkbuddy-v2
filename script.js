// Needs
let hugButton = document.getElementById("hug-button");
hugButton.addEventListener("click", function () {
  let message = new SpeechSynthesisUtterance("I want a hug");
  window.speechSynthesis.speak(message);
});

let getWater = document.getElementById("water-button");
getWater.addEventListener("click", function () {
  let message2 = new SpeechSynthesisUtterance("I want water");
  window.speechSynthesis.speak(message2);
});

let getFood = document.getElementById("food-button");
getFood.addEventListener("click", function () {
  let message3 = new SpeechSynthesisUtterance("I want food");
  window.speechSynthesis.speak(message3);
});

// Emotions
document.getElementById("happy-button").addEventListener("click", function () {
  let msg = new SpeechSynthesisUtterance("I feel happy");
  window.speechSynthesis.speak(msg);
});

document.getElementById("sad-button").addEventListener("click", function () {
  let msg = new SpeechSynthesisUtterance("I feel sad");
  window.speechSynthesis.speak(msg);
});

document.getElementById("angry-button").addEventListener("click", function () {
  let msg = new SpeechSynthesisUtterance("I feel angry");
  window.speechSynthesis.speak(msg);
});
