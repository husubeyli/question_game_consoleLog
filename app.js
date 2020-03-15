let questions = [
  { question: "Baki paytaxtdir?", answer: "y" },
  { question: "Alma meyvedirmi?", answer: "y" },
  { question: "Java proqramlaşdırma dili deyil?", answer: "n" },
  { question: "Sakit okean en böyük okean deyil?", answer: "y" },
  { question: "Real-Madrid futbol kluvu deyil", answer: "y" }
];

let correctSc = 0;
let wrongSc = 0;
let questIndex = 0;
let checkStart = 0;

function showQuestions() {
  console.log(`${questIndex + 1}. ${questions[questIndex].question}`);
  console.log("------------");
}

function playGame() {
  let status = true;
  if (questIndex > questions.length - 1) {
    questIndex = 0;

    if (confirm("yeniden oynamaq isteyirsiz")) {
      showScore();
      correctSc = 0;
      wrongSc = 0;
      status = true;
    } else {
      console.clear();
      showScore();
      console.log("Yeniden oyanamaq ucun tekraren s duymesine sixin");
      return true;
    }
  }
  status = false;
  showQuestions();
}

function showScore() {
  console.log(`Correct Score: ${correctSc}`);
  console.log(`Wrong Score: ${wrongSc}`);
}

console.log(
  "Sual oyununa baslamaq ucun s duymesini sixin ve her bir suala cavab ucun y yada n duymesini sixin"
);

window.onkeypress = function(event) {
  let userInp = event.key;
  event.preventDefault()
  
  if (userInp === "s") {
    // checkStart++
    // if(checkStart === 1){
      playGame()
    // }
  }
  if (userInp === "y" || userInp === "n") {
    if (userInp === questions[questIndex].answer) {
      correctSc++;
    } else {
      wrongSc++;
    }
    questIndex++;
    playGame();
  }
}
