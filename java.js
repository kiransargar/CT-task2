function toggleMenu() {
      const menu = document.getElementById("dropdown");
      const btn = document.getElementById("menuBtn");

      menu.classList.toggle("active");

      /* hide three-dot when menu is open */
      if (menu.classList.contains("active")) {
        btn.style.display = "none";
      } else {
        btn.style.display = "block";
      }
    }
 //quiz

   let totalQuestions = 4;
let correctAnswers = 0;

function answer(btn, isCorrect) {
  const questionDiv = btn.parentElement;
  const buttons = questionDiv.querySelectorAll("button");

  // Disable all buttons for this question
  buttons.forEach(b => b.disabled = true);

  // Color the clicked button
  if (isCorrect) {
    btn.style.background = "green";
    correctAnswers++;
  } else {
    btn.style.background = "red";
  }

  // Optional: Highlight correct answer if wrong clicked
  buttons.forEach(b => {
    if (b !== btn && b.getAttribute("onclick").includes("true")) {
      b.style.background = "#4CAF50"; // correct answer
    }
  });
}

function showResult() {
  let percentage = Math.round((correctAnswers / totalQuestions) * 100);
  document.getElementById("result").innerText =
    `You scored ${correctAnswers} / ${totalQuestions} 
Accuracy: ${percentage}%`;
}

//course

function changeVideo(src, title, description) {
      const video = document.getElementById("videoPlayer");
      const videoTitle = document.getElementById("videoTitle");
      const videoDescription = document.getElementById("videoDescription");

      video.src = src;
      videoTitle.innerText = title;
      videoDescription.innerText = description;
      video.play();
    }
