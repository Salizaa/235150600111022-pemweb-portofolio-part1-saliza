const typeEffect = (element, text, delay = 100, pause = 2000) => {
  let index = 0;

  const typing = () => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(typing, delay);
    } else {
      setTimeout(() => {
        element.innerHTML = ""; 
        index = 0;
        typing(); 
      }, pause); 
    }
  };

  typing();
};

document.addEventListener("DOMContentLoaded", () => {
  const titles = [
    { selector: ".aboutMe-title", text: "About Me" },
    { selector: ".sosmed-title", text: "Sosial Media" },
    { selector: ".skills-title", text: "Skills" },
    { selector: ".pengalaman-title", text: "Pengalaman" },
  ];
  titles.forEach((title) => {
    const element = document.querySelector(title.selector);
    if (element) typeEffect(element, title.text);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");

        setTimeout(() => {
          entry.target.classList.remove("appear");
        }, 1500);
      }
    });
  }, observerOptions);

  sections.forEach((section, index) => {
    section.classList.add("fade-in"); 
    observer.observe(section), index * 200;
  });
});

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

