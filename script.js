document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const response = document.getElementById("response");
  let noBtnClickCount = 0;

  yesBtn.addEventListener("click", () => {
    response.innerHTML = `
            <h2>🎉 You've made me the happiest person! 🎉</h2>
            <p>I promise to make this Valentine's Day unforgettable!</p>
        `;
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Create heart animation
    createHearts();
  });

  noBtn.addEventListener("mouseover", (e) => {
    noBtnClickCount++;

    // Move the button to a random position
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    if (noBtnClickCount > 5) {
      noBtn.innerHTML = "Please? 🥺";
    }
  });

  function createHearts() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("floating-heart");
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 300);
  }

  // Add floating hearts CSS
  const style = document.createElement("style");
  style.textContent = `
        .floating-heart {
            position: fixed;
            font-size: 24px;
            user-select: none;
            cursor: default;
            animation: float-up linear forwards;
            z-index: 999;
        }

        @keyframes float-up {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);
});
