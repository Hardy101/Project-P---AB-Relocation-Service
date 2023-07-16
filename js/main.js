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
// Forms Relocation
let form1 = document.querySelectorAll(".Form1");
let form2 = document.querySelectorAll(".Form2");
let form3 = document.querySelectorAll(".Form3");
let Next1 = document.querySelectorAll(".next1");
let Next2 = document.querySelectorAll(".next2");
let Back1 = document.querySelectorAll(".prev2");
let Back2 = document.querySelectorAll(".prev3");
let Submit = document.querySelectorAll(".submit");
let progress = document.querySelectorAll(".progress");

Next1.forEach((Next1) => {
  Next1.onclick = function () {
    form1.forEach((form1) => {
      form1.style.display = "none";
    });
    form2.forEach((form2) => {
      form2.style.display = "block";
    });
    progress.forEach((progress) => {
      progress.style.width = "33.33%";
    });
  };
});

Back1.forEach((Back1) => {
  Back1.onclick = function () {
    form1.forEach((form1) => {
      form1.style.display = "block";
    });
    form2.forEach((form2) => {
      form2.style.display = "none";
    });
    form3.forEach((form3) => {
      form3.style.display = "none";
    });
    progress.forEach((progress) => {
      progress.style.width = "0%";
    });
  };
});

Next2.forEach((Next2) => {
  Next2.onclick = function () {
    form1.forEach((form1) => {
      form1.style.display = "none";
    });
    form2.forEach((form2) => {
      form2.style.display = "none";
    });
    form3.forEach((form3) => {
      form3.style.display = "grid";
      form3.style.gridTemplateColumns = "1fr";
    });
    progress.forEach((progress) => {
      progress.style.width = "66.66%";
    });
  };
});

Back2.forEach((Back2) => {
  Back2.onclick = function () {
    form1.forEach((form1) => {
      form1.style.display = "none";
    });
    form2.forEach((form2) => {
      form2.style.display = "block";
    });
    form3.forEach((form3) => {
      form3.style.display = "none";
    });
    progress.forEach((progress) => {
      progress.style.width = "33.33%";
    });
  };
});

Submit.forEach((Submit) => {
  Submit.onclick = function () {
    progress.forEach((progress) => {
      progress.style.width = "100%";
    });
  };
});
