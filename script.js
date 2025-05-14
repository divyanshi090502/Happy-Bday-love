
const questions = [
  {
    question: "Where did we first see each other?",
    options: ["At the cafe", "Near the swimming pool", "In class"],
    answer: "Near the swimming pool",
    image: "assets/pool_art.jpg",
    poem: "That first glance across the pool’s gleam, sparked a forever in my dream."
  },
  {
    question: "What was the first game we played together?",
    options: ["Chess", "Cricket", "Badminton"],
    answer: "Badminton",
    image: "assets/badminton_art.jpg",
    poem: "A rally of hearts, a feathered flight, love served softly that moonlit night."
  },
  {
    question: "Where did we have our first chat?",
    options: ["WhatsApp", "Facebook", "In person"],
    answer: "Facebook",
    image: "assets/facebook_chat.jpg",
    poem: "Typed words lit the silent spark, our bond began in that digital park."
  },
  {
    question: "What made me sure you liked me more than a friend?",
    options: ["A hug", "A little jealousy", "That long stare"],
    answer: "A little jealousy",
    image: "assets/blush_emoji.jpg",
    poem: "Your eyes betrayed what lips concealed, a jealous blush, my heart revealed."
  }
];

let index = 0;

function start() {
  showQuestion();
}

function showQuestion() {
  if (index >= questions.length) {
    document.getElementById("content").innerHTML = `
      <p>Here's to many more memories, My Dibba!</p>
      <a href="gallery.html"><button>Final Surprise</button></a>
    `;
    return;
  }

  const q = questions[index];
  let optionsHTML = q.options.map(opt =>
    `<button onclick="checkAnswer('${opt}')">${opt}</button>`
  ).join("");

  document.getElementById("content").innerHTML = `
    <h2>${q.question}</h2>
    ${optionsHTML}
  `;
}

function checkAnswer(selected) {
  const q = questions[index];
  if (selected === q.answer) {
    document.getElementById("content").innerHTML = `
      <p><em>${q.poem}</em></p>
      <img src="${q.image}" alt="Memory Image" />
      <br><button onclick="next()">Next</button>
    `;
  } else {
    alert("Try again, Dibba!");
  }
}

function next() {
  index++;
  showQuestion();
}
