document.addEventListener("DOMContentLoaded", () => {
  const sliderTL = gsap.timeline({ repeat: -1 });
  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide) => {
    sliderTL
      .from(slide, { duration: 2, width: "100%", opacity: 0 })
      .to(
        slide,
        { duration: 2, width: "0%", opacity: 1, ease: Expo.easeInOut },
        "+=4"
      );
  });
});
