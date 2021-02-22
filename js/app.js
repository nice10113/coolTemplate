const overlay = document.querySelector(".overlay");
const navbar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");

window.onload = () => {
  // AOS JS
  AOS.init({
    duration: 1000,
    once: false,
  });

  const tl = new TimelineLite();
  var navOpen = false;

  function navbarAnimation() {
    if (!navOpen) {
      navbarToggler.classList.add("activeToggle");
      navOpen = true;
      navbar.classList.add("activeNav");
    } else {
      navbarToggler.classList.remove("activeToggle");
      navOpen = false;
      navbar.classList.remove("activeNav");
    }
  }

  tl.to(".overlay", 2, {
    top: "-100%",
  })
    .from(".hero__content .title", {
      opacity: 0,
      pointerEvents: "none",
    })
    .to(".navbar", {
      background: "#000",
    });

  tl.from(".navbar .logo", {
    opacity: 0,
    ease: Power4.ease,
  });

  tl.staggerFrom(
    ".navbar ul li",
    1,
    {
      opacity: 0,
      ease: Power4.ease,
    },
    0.1
  );

  navbarToggler.addEventListener("click", () => {
    navbarAnimation();
  });
};
