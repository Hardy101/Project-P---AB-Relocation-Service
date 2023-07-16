// FAQ
function toggleFAQ(event) {
  let clickedFAQ = event.currentTarget;
  let faqAnswer = clickedFAQ.querySelector(".faqAnswer");
  let faqIcon = clickedFAQ.querySelector(".faqIcon");

  // Toggle visibility for the clicked FAQ item
  faqAnswer.classList.toggle("hidden");
  faqAnswer.classList.toggle("block");

  // Reset visibility for other FAQ items
  let allFAQs = document.querySelectorAll(".faqs");
  allFAQs.forEach((faq) => {
    if (faq !== clickedFAQ) {
      let otherAnswer = faq.querySelector(".faqAnswer");
      let otherIcon = faq.querySelector(".faqIcon");
      otherAnswer.classList.add("hidden");
      otherAnswer.classList.remove("block");
      otherIcon.classList.remove("rotate-180");
    }
  });

  // Toggle rotation for the clicked FAQ item icon
  faqIcon.classList.toggle("rotate-180");
}
// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 4000,
  },

  direction: "horizontal",
  loop: true,
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: false,

      autoplay: {
        delay: 4000,
      },
    },

    600: {
      slidesPerView: 3,
      direction: "horizontal",
      loop: true,
      effect: "coverflow",
      grabCursor: false,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
      },
      autoplay: {
        delay: 4000,
      },
    },

    1200: {
      slidesPerView: 5,
      direction: "horizontal",
      loop: true,
      effect: "coverflow",
      grabCursor: false,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
      },
      autoplay: {
        delay: 4000,
      },
    },
  },
});
