//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// set the date to countdown to
const countDownDate = new Date("February 25, 2023 00:00:00").getTime();

// update the count down every 1 second
const countdownInterval = setInterval(function () {
  // get the current date and time
  const now = new Date().getTime();

  // calculate the time remaining
  const distance = countDownDate - now;

  // check if the countdown is over
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown-timer").innerHTML = "EXPIRED";
  } else {
    // calculate the days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display the countdown
    document.getElementById("countdown-timer").innerHTML =
      days +
      " Hari " +
      hours +
      " Jam " +
      minutes +
      " Menit " +
      seconds +
      " Detik ";
  }
}, 1000);
