const words = [
  { japanese: "りんご", english: "apple" },
  { japanese: "本", english: "book" },
  { japanese: "水", english: "water" },
  { japanese: "学校", english: "school" },
  { japanese: "友達", english: "friend" },
  { japanese: "音楽", english: "music" },
  { japanese: "朝", english: "morning" },
  { japanese: "走る", english: "run" },
  { japanese: "大きい", english: "big" },
  { japanese: "幸せな", english: "happy" }
];

let currentIndex = 0;
let score = 0;
let answered = false;
let reviewWords = [];

const questionElement = document.querySelector("#question");
const answerForm = document.querySelector("#answer-form");
const answerInput = document.querySelector("#answer");
const feedbackElement = document.querySelector("#feedback");
const scoreElement = document.querySelector("#score");
const totalElement = document.querySelector("#total");
const progressBar = document.querySelector("#progress-bar");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
const reviewList = document.querySelector("#review-list");

function normalizeAnswer(text) {
  return text.trim().toLowerCase();
}

function showQuestion() {
  const currentWord = words[currentIndex];
  questionElement.textContent = currentWord.japanese;
  answerInput.value = "";
  answerInput.disabled = false;
  answerInput.focus();
  answered = false;
  nextButton.disabled = true;
  feedbackElement.textContent = "";
  feedbackElement.className = "feedback";
  updateStatus();
}

function updateStatus() {
  scoreElement.textContent = score;
  totalElement.textContent = currentIndex;
  progressBar.style.width = `${(currentIndex / words.length) * 100}%`;
}

function showReviewList() {
  reviewList.innerHTML = "";

  reviewWords.forEach((word) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${word.japanese}</strong><span>${word.english}</span>`;
    reviewList.appendChild(item);
  });
}

function finishQuiz() {
  questionElement.textContent = "終了";
  answerInput.value = "";
  answerInput.disabled = true;
  nextButton.disabled = true;
  feedbackElement.textContent = `${words.length}問中 ${score}問 正解です。`;
  feedbackElement.className = "feedback correct";
  totalElement.textContent = words.length;
  progressBar.style.width = "100%";
}

answerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (answered) {
    return;
  }

  const currentWord = words[currentIndex];
  const userAnswer = normalizeAnswer(answerInput.value);
  const correctAnswer = normalizeAnswer(currentWord.english);

  if (!userAnswer) {
    feedbackElement.textContent = "答えを入力してください。";
    feedbackElement.className = "feedback wrong";
    return;
  }

  answered = true;
  answerInput.disabled = true;
  currentIndex += 1;

  if (userAnswer === correctAnswer) {
    score += 1;
    feedbackElement.textContent = "正解です。";
    feedbackElement.className = "feedback correct";
  } else {
    feedbackElement.textContent = `不正解です。正解は ${currentWord.english} です。`;
    feedbackElement.className = "feedback wrong";
    reviewWords.push(currentWord);
    showReviewList();
  }

  updateStatus();

  if (currentIndex >= words.length) {
    nextButton.textContent = "結果を見る";
  }

  nextButton.disabled = false;
});

nextButton.addEventListener("click", () => {
  if (currentIndex >= words.length) {
    finishQuiz();
    return;
  }

  showQuestion();
});

restartButton.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  answered = false;
  reviewWords = [];
  nextButton.textContent = "次の問題";
  showReviewList();
  showQuestion();
});

showQuestion();
