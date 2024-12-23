document.addEventListener("DOMContentLoaded", () => {
  const balloons = document.querySelectorAll(".balloon");
  const noteDisplay = document.querySelector(".note-display");
  const restartBtn = document.querySelector(".restart-btn");
  const popSound = new Audio("./sounds/405160__rayolf__btn_hover.wav"); // New pop sound

  // Pop balloons
  balloons.forEach((balloon) => {
    balloon.addEventListener("click", () => {
      // Play pop sound
      popSound.currentTime = 0;
      popSound.play();

      // Animate and hide balloon
      balloon.classList.add("popped");
      setTimeout(() => {
        balloon.style.visibility = "hidden";
      }, 500);

      // Display note
      const note = balloon.getAttribute("data-note");
      noteDisplay.textContent = note;
    });
  });

  // Restart Game
  restartBtn.addEventListener("click", () => {
    balloons.forEach((balloon) => {
      balloon.style.visibility = "visible";
      balloon.classList.remove("popped");
    });
    noteDisplay.textContent = "";
  });
});
