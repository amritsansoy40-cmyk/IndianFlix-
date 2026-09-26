// ================= INDIANFLIX SCRIPT =================

// Elements
const signInBtn = document.getElementById("signInBtn");
const mainSignInBtn = document.getElementById("mainSignInBtn");
const watchNowBtn = document.getElementById("watchNowBtn");


// ================= SIGN IN =================

function showSignIn() {
  const email = prompt("Enter your email address:");

  if (!email) {
    return;
  }

  const password = prompt("Enter your password:");

  if (!password) {
    return;
  }

  alert("Sign In selected.\n\nFirebase Authentication will be connected next.");
}


// ================= SIGN UP =================

function showSignUp() {
  const name = prompt("Enter your name:");

  if (!name) {
    return;
  }

  const email = prompt("Enter your email address:");

  if (!email) {
    return;
  }

  const password = prompt("Create a password:");

  if (!password) {
    return;
  }

  alert(
    "Account details received!\n\n" +
    "Firebase Sign Up will be connected next."
  );
}


// ================= SIGN IN BUTTON =================

if (signInBtn) {
  signInBtn.addEventListener("click", showSignIn);
}

if (mainSignInBtn) {
  mainSignInBtn.addEventListener("click", showSignIn);
}


// ================= WATCH NOW =================

if (watchNowBtn) {
  watchNowBtn.addEventListener("click", () => {
    alert(
      "Welcome to IndianFlix! 🎬\n\n" +
      "Your streaming experience will start here."
    );
  });
}


// ================= SEARCH =================

const searchBtn = document.querySelector(".search-btn");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {

    const query = prompt("What do you want to watch?");

    if (!query) {
      return;
    }

    alert(
      "Searching IndianFlix for:\n\n" +
      query
    );
  });
}


// ================= MY LIST =================

const myListButton = document.querySelector(".secondary-btn");

if (myListButton) {
  myListButton.addEventListener("click", () => {
    alert(
      "My List\n\n" +
      "Sign in to save movies and shows to your list."
    );
  });
}


// ================= CATEGORY BUTTONS =================

const categoryButtons =
  document.querySelectorAll(".category-card");

categoryButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const category =
      button.querySelector("span")?.textContent || "Category";

    alert(
      "IndianFlix Category:\n\n" +
      category
    );

  });

});


// ================= MOVIE CARDS =================

const movieCards =
  document.querySelectorAll(".movie-card");

movieCards.forEach((card) => {

  card.addEventListener("click", () => {

    const title =
      card.querySelector("h3")?.textContent || "Movie";

    alert(
      title +
      "\n\nMovie details will appear here."
    );

  });

});


// ================= CONSOLE =================

console.log("IndianFlix loaded successfully.");
console.log("Firebase Authentication: Ready to connect.");
