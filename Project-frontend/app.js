function animateSlide() {
  const davSlide = document.querySelector(".davSlide");
  const textSlide = document.querySelector(".textSlide");
  const text2Slide = document.querySelector(".text2Slide");
  const slideTl = gsap.timeline({
    defaults: { duration: 2, ease: "power2.inOut" },
  });
  slideTl.fromTo(davSlide, { x: "0%" }, { x: "-100%" });
  slideTl.fromTo(textSlide, { x: "0%" }, { x: "100%" }, "-=1");
  slideTl.fromTo(text2Slide, { x: "0%" }, { x: "-110%" }, "-=2");
}

function animateText() {
  const homeText = document.querySelector("#homeText");
  const homeFrog = document.querySelector("#homeFrog");
  const homeQ = document.querySelector("#homeQuote");
  const welcomeT = document.querySelector("#welcomeText");
  const homepageBtn = document.querySelector(".browse");
  const slideTl = gsap.timeline({
    defaults: { duration: 2, ease: "power2.easeInOut" },
  });
  slideTl.fromTo(homeText, { y: "50%" }, { y: "0%" });
  slideTl.fromTo(homeFrog, { y: "50%" }, { y: "0%" }, "-=2");
  slideTl.fromTo(homepageBtn, { y: "700%" }, { y: "0%" }, "-=3");
  slideTl.fromTo(homeQ, { autoAlpha: "0" }, { autoAlpha: "0.8" });
  slideTl.fromTo(welcomeT, { autoAlpha: "0" }, { autoAlpha: "1" }, "-=2");
}

animateSlide();
animateText();
