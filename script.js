let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};


document.addEventListener("DOMContentLoaded", () => {
  const hiddenSections = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");

              
              const lines = entry.target.querySelectorAll(".line-hidden");
              lines.forEach((line, index) => {
                  setTimeout(() => {
                      line.classList.add("line-show");
                  }, index * 100); 
              });

              observer.unobserve(entry.target); 
          }
      });
  }, { threshold: 0.2 });

  hiddenSections.forEach(section => {
      observer.observe(section);
  });
});

// const darkmode = document.getElementById("darkmode");

// darkmode.onclick = () => {
//   document.body.classList.toggle("dark");
  
//   darkmode.classList.toggle("bx-sun");
//   darkmode.classList.toggle("bx-moon");
// };

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".typing-animation").classList.add("done");
  }, 2000); 
});

const certificationBoxes = document.querySelectorAll(".certification-box");

certificationBoxes.forEach(box => {
    box.addEventListener("click", function () {
        this.classList.toggle("flip");
    });
});



