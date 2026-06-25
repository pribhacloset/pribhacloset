// ===============================
// Pribha Closet - script.js
// ===============================

// Smooth fade-in animation for sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Navbar background on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.background = "rgba(0,0,0,0.9)";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
  } else {
    navbar.style.background = "rgba(0,0,0,.55)";
    navbar.style.boxShadow = "none";
  }
});

// Back to Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:90px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#D4AF37;
color:#111;
font-size:22px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 8px 20px rgba(0,0,0,.3);
transition:.3s;
`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Floating effect for WhatsApp button
const whatsapp = document.querySelector(".whatsapp-btn");

if (whatsapp) {
  setInterval(() => {
    whatsapp.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-6px)" },
        { transform: "translateY(0px)" }
      ],
      {
        duration: 1500,
        iterations: 1
      }
    );
  }, 2500);
}

console.log("Pribha Closet website loaded successfully!");
