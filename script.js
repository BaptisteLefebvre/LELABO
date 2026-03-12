const testreveal = document.querySelector(".test-reveal")
let selection = Splitting({ target:testreveal})
const testreveal2 = document.querySelector(".test-reveal2")
let selection2 = Splitting({ target:testreveal2})

const btn_nav_activ = document.querySelector(".activ_nav")
const btn_nav_hide = document.querySelector(".hidenav")
const div_nav = document.getElementById("background-navbar")
const navbar = document.getElementById("navbar")

const sect2 = document.querySelector(".secteur2")
const nuage1 = document.querySelector(".nuage1")
const nuage2 = document.querySelector(".nuage2")
const nuage3 = document.querySelector(".nuage3")
const nuage4 = document.querySelector(".nuage4")
const sectcards = document.querySelector(".cards")
let cards = document.querySelectorAll(".card-transi")

const sectservices = document.querySelector(".secteur4")
let cardservices = document.querySelectorAll(".card-service-transi")

const sectmethod = document.querySelector(".secteur5")
let cardmethods = document.querySelectorAll(".cardmethod-transi")

gsap.registerPlugin(ScrollTrigger)

btn_nav_hide.addEventListener("click", () => {
    navbar.classList.remove("open")
    setTimeout(() => {
        div_nav.classList.remove("open")
    }, 300);
})

btn_nav_activ.addEventListener("click", () => {
    div_nav.classList.add("open")
    setTimeout(() => {
        navbar.classList.add("open")
    }, 300);
 
})


gsap.to(nuage1, {
    xPercent : -100,
    scrollTrigger : {
        trigger : sect2,
        toggleActions : "play none none none",
        start : "top 100%",
        end : "top 20%",
        scrub : 1,
    }
})

gsap.to(nuage2, {
    xPercent : -200,
    scrollTrigger : {
        trigger : sect2,
        toggleActions : "play none none none",
        start : "top 100%",
        end : "top 20%",
        scrub : 1,
    }
})

gsap.to(nuage3, {
    xPercent : 200,
    scrollTrigger : {
        trigger : sect2,
        toggleActions : "play none none none",
        start : "top 100%",
        end : "top 20%",
        scrub : 1,
    }
})

gsap.to(nuage4, {
    xPercent : 100,
    scrollTrigger : {
        trigger : sect2,
        toggleActions : "play none none none",
        start : "top 100%",
        end : "top 20%",
        scrub : 1,
    }
})

gsap.from(selection[0].words, {
    color: "rgb(212,22,24,0.2)",
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".test-reveal",
        scrub: true,
        end : "top 20%",
    }
})

gsap.from(selection2[0].words, {
    color: "rgb(255,249,231,0.2)",
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".test-reveal2",
        scrub: true,
        end : "top 20%",
    }
})

gsap.from(cards, {
    yPercent: 200,
    stagger : 1,
    scrollTrigger : {
        trigger : '.container2-sect2',
        start: "top top",
        end: "+=3000",
        scrub : true,
        pin: true,
    }
})

gsap.from(cardservices, {
    yPercent: 150,
    stagger : 0.5,
    scrollTrigger : {
        trigger : '.secteur4',
        start: "top top",
        end: "+=3000",
        scrub : true,
        pin: true,
    }
})

gsap.from(cardmethods, {
    xPercent: 150,
    stagger : 0.5,
    scrollTrigger : {
        trigger : '.secteur5',
        start: "top top",
        end: "+=3000",
        scrub : true,
        pin: true,
    }
})