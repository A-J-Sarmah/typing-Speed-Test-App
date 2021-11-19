const paragraph = [
  "The",
  "headphones",
  "were",
  "on.",
  "They",
  "had",
  "been",
  "utilized",
  "on",
  "purpose.",
  "She",
  "could",
  "hear",
  "her",
  "mom",
  "yelling",
  "in",
  "the",
  "background,",
  "but",
  "couldn't",
  "make",
  "out",
  "exactly",
  "what",
  "the",
  "yelling",
  "was",
  "about.",
  "That",
  "was",
  "exactly",
  "why",
  "she",
  "had",
  "put",
  "them",
  "on.",
  "She",
  "knew",
  "her",
  "mom",
  "would",
  "enter",
  "her",
  "room",
  "at",
  "any minute,",
  "and",
  "she",
  "could",
  "pretend",
  "that",
  "she",
  "hadn't",
  "heard",
  "any",
  "of",
  "the",
  "previous",
  "yelling.",
];
//global variables
const textArea = document.getElementById("t-area");
const startButton = document.getElementById("start-btn");
const displayTimer = document.getElementById("time");
let timer = 60;
let interval;
//app functions
const extractTextAreaValue = () => {
  textArea.setAttribute("disabled", "true");
  const userText = textArea.value;
  let userTextArray = userText.split(" ");
  userTextArray = userTextArray.filter((element) => {
    return element.length > 1;
  });
  return userTextArray;
};
const getGrossWordPerMin = (input) => {
  return input.length;
};
const getNetWordPerMin = (input) => {
  const compareSection = paragraph.splice(0, input.length);
  let mistakes = 0;
  for (let i = 0; i < compareSection.length; i++) {
    if (compareSection[i] !== input[i]) {
      mistakes = mistakes + 1;
    }
  }
  netWPM = input.length - mistakes;
  return netWPM;
};
const calculateAccuracy = (grossWPM, netWPM) => {
  return (netWPM / grossWPM) * 100;
};
//interval function
const startTest = () => {
  startButton.classList.add("disabled");
  textArea.removeAttribute("disabled");
  interval = setInterval(() => {
    timer = timer - 1;
    displayTimer.innerHTML = timer;
    if (timer === 0) {
      clearInterval(interval);
      const userInput = extractTextAreaValue();
      const grossWPM = getGrossWordPerMin(userInput);
      const netWPM = getNetWordPerMin(userInput);
      const accuracy = calculateAccuracy(grossWPM, netWPM);
      console.log(grossWPM, netWPM, accuracy);
    }
  }, 1000);
};
startButton.addEventListener("click", startTest);
