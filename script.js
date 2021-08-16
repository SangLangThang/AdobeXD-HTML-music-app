/*==================== SHOW MENU ====================*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("toggle-menu", "header-menu");
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".header-menu-link");

function linkAction() {
  const navMenu = document.getElementById("header-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*==================== Intersection Observer ====================*/
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

/* IntersectionObserver API */

const targetBanner = document.querySelector(".banner-img-2");
const targetSearch = document.querySelector(".search-img-2");
const option1 = {
  root: null,
  rootMargin: "0px 0px -40% 0px",
  threshold: [0.1, 0.5, 0.95, 1],
};
const option2 = {
  root: null,
  rootMargin: "0px 0px -50% 0px",
  threshold: buildThresholdList(),
};

observer1 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry.intersectionRatio);
    if (entry.intersectionRect.y != 0) {
      document.querySelector(".banner-img-equa").style.left = "50%";
      document.querySelector(".banner-img-2").style.left = "70%";
      document.querySelector(".banner-img-4").style.left = "-10%";
      document.querySelector(".banner-img-3").style.left = "10%";
      document.querySelector(".banner-groupImg-box").style.transform =
        "scale(1.2)";
    }
    if (entry.intersectionRatio >= 1 || entry.intersectionRatio <= 0.1) {
      document.querySelector(".banner-img-equa").style.left = "100%";
      document.querySelector(".banner-img-2").style.left = "60%";
      document.querySelector(".banner-img-4").style.left = "16%";
      document.querySelector(".banner-img-3").style.left = "20%";
      document.querySelector(".banner-groupImg-box").style.transform =
        "scale(1.0)";
    }
  });
}, option1);
observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry.intersectionRatio);
    if (entry.intersectionRect.y != 0) {
      document.querySelector(".search-img-equa").style.left = "90%";
      document.querySelector(".search-img-2").style.left = "90%";
      document.querySelector(".search-groupImg-box").style.transform =
        "scale(1.2)";
    }
    if (entry.intersectionRatio >= 1 || entry.intersectionRatio <= 0.1) {
      document.querySelector(".search-img-equa").style.left = "50%";
      document.querySelector(".search-img-2").style.left = "95%";
      document.querySelector(".search-groupImg-box").style.transform =
        "scale(1.0)";
    }
  });
}, option2);
observer1.observe(targetBanner);
observer2.observe(targetSearch);

/*Scroll   */
const sr = ScrollReveal({
  origin: "top",
  distance: "300px",
  duration: 2000,
  reset: true,
});

sr.reveal(`.banner-info,.download, .footer,.experience`, {
  interval: 500,
});
