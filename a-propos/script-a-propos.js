const btn_nav_activ = document.querySelector(".activ_nav")
const btn_nav_hide = document.querySelector(".hidenav")
const div_nav = document.getElementById("background-navbar")
const navbar = document.getElementById("navbar")
const navigation = document.getElementById("navigation")

gsap.registerPlugin(ScrollTrigger)

const links = document.querySelectorAll(".link");
const arrow = document.querySelector(".arrow");

// Hover → déplacer la flèche
links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.prepend(arrow);
    link.classList.add("active");

    if (link.textContent.trim() === "NOTRE MÉTHODE") {
        link.classList.add("small");
    }
  });
});

// Revenir sur le lien actif
const activeLink = document.querySelector(".link-active");

document.querySelectorAll(".link").forEach(link => {
  link.addEventListener("mouseleave", () => {
    if (activeLink) {
      activeLink.prepend(arrow);
    }
    
    link.classList.remove("active");
    
    if (link.textContent.trim() === "NOTRE MÉTHODE") {
        link.classList.remove("small");
    }
  });
});

btn_nav_hide.addEventListener("click", () => {
    navbar.classList.remove("open")
    setTimeout(() => {
        div_nav.classList.remove("open")
        setTimeout(() => {
            navigation.classList.remove("open")
        }, 300);
    }, 300);
    
})

btn_nav_activ.addEventListener("click", () => {
    navigation.classList.add("open")
    div_nav.classList.add("open")
    setTimeout(() => {
        navbar.classList.add("open")
    }, 300);
 
})