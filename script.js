document.addEventListener("DOMContentLoaded", () => {
  const loveButton = document.getElementById("loveButton");
  const quoteDisplay = document.getElementById("quote-display");
  const heartContainer = document.getElementById("heart-container");

  const loveQuotes = [
    "You are my today and all of my tomorrows.",
    "Love is not finding someone to live with, it's finding someone you can't live without.",
    "Every love story is beautiful, but ours is my favorite.",
    "My heart is and always will be yours.",
    "The best thing to hold onto in life is each other.",
    "Grow old with me, the best is yet to be.",
    "You are the finest, loveliest, tenderest, and most beautiful person I have ever known and even that is an understatement.",
    "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
    "To love is nothing. To be loved is something. But to love and be loved, that’s everything.",
  ];

  let lastQuoteIndex = -1;

  document.addEventListener(
    "click",
    () => {
      const music = document.getElementById("bg-music");
      music.play().catch(console.error);
    },
    { once: true }
  );

  loveButton.addEventListener("click", () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * loveQuotes.length);
    } while (randomIndex === lastQuoteIndex && loveQuotes.length > 1); // Ensure different quote if possible
    lastQuoteIndex = randomIndex;

    quoteDisplay.classList.remove("opacity-100");
    quoteDisplay.classList.add("opacity-0");

    setTimeout(() => {
      quoteDisplay.textContent = loveQuotes[randomIndex];
      quoteDisplay.classList.remove("opacity-0");
      quoteDisplay.classList.add("opacity-100");
    }, 300); // Wait for fade out to complete

    // Trigger falling hearts animation
    triggerFallingHearts(5);
  });

  // Function to create and animate a single falling heart
  function createFallingHeart() {
    const heart = document.createElement("span");
    heart.classList.add("falling-heart");
    heart.innerHTML = "❤️"; // Unicode heart emoji
    heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random duration between 3s and 5s
    heart.style.animationDelay = `${Math.random() * -5}s`; // Start at random times
    heart.style.opacity = `${Math.random() * 0.5 + 0.5}`; // Random opacity
    heart.style.fontSize = `${Math.random() * 1.5 + 1.5}rem`; // Random font size between 1.5rem and 3rem
    heartContainer.appendChild(heart);

    // Remove heart after it falls out of view to prevent DOM clutter
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }

  // Function to trigger multiple falling hearts
  function triggerFallingHearts(count) {
    for (let i = 0; i < count; i++) {
      setTimeout(createFallingHeart, i * 200); // Stagger the heart creation
    }
  }

  // Initially populate the background with some falling hearts
  function initialHearts() {
    for (let i = 0; i < 20; i++) {
      // More hearts for initial background
      createFallingHeart();
    }
  }
  initialHearts();
  // Continuously add hearts to maintain the animation
  setInterval(createFallingHeart, 1000); // Add a new heart every 1 second
});
