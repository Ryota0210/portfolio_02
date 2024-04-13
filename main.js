document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const headerBtn = document.querySelector(".drawer");
  const drawerMenu = document.querySelector(".drawer-menu");
  const drawerLineCenter = document.querySelector(".drawer-line-center");
  const drawerLineBottom = document.querySelector(".drawer-line-bottom");
  const drawerLineTop = document.querySelector(".drawer-line-top");
  const tl = gsap.timeline();

  headerBtn.addEventListener("click", () => {
    drawerLineCenter.classList.toggle("active");
  });
  headerBtn.addEventListener("click", () => {
    drawerLineBottom.classList.toggle("active");
  });
  headerBtn.addEventListener("click", () => {
    drawerLineTop.classList.toggle("active");
  });
  headerBtn.addEventListener("click", () => {
    if (drawerLineCenter.classList.contains("active")) {
      gsap.fromTo(drawerMenu, { autoAlpha: 0 }, { autoAlpha: 1 });
    } else {
      gsap.fromTo(drawerMenu, { autoAlpha: 1 }, { autoAlpha: 0 });
    }
  });
  // loading-animate
  const text = new SplitType(".fv-copy");
  const topImage = document.querySelectorAll(".fv-img");
  window.addEventListener("load", () => {
    tl.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 5.7,
      duration: 0.5,
      ease: "power2.out",
    }).fromTo(
      topImage,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
        delay: 0.5,
      }
    );
  });
  // text-animate
  const fvText01 = document.querySelector(".animate-text-1");
  gsap.fromTo(
    fvText01,
    { y: 50, autoAlpha: 0 },
    {
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: fvText01,
        start: "bottom bottom",
      },
    }
  );
  const fvText02 = document.querySelector(".animate-text-2");
  gsap.fromTo(
    fvText02,
    { y: 50, autoAlpha: 0 },
    {
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: fvText02,
        start: "bottom bottom",
      },
    }
  );
  const fvText03 = document.querySelector(".animate-text-3");
  gsap.fromTo(
    fvText03,
    { y: 50, autoAlpha: 0 },
    {
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: fvText03,
        start: "bottom bottom",
      },
    }
  );
  // beside-slider
  const pages = document.querySelectorAll(".mission-slide");
  gsap.to(pages, {
    xPercent: -110 * (pages.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".mission",
      start: "top top",
      end: "bottom -300%",
      pin: true,
      scrub: 1,
    },
  });
  // loading
  const loading = document.querySelector(".loading");
  const loadingBar = document.querySelector(".loading-bar");
  window.addEventListener("load", () => {
    gsap.to(loading, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
      delay: 5.5,
    });
    gsap.to(loadingBar, {
      width: "100%",
      duration: 5,
      ease: "power2.inOut",
    });
  });
});
