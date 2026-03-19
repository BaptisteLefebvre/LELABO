const testreveal = document.querySelector(".test-reveal")
let selection = Splitting({ target:testreveal})
const testreveal2 = document.querySelector(".test-reveal2")
let selection2 = Splitting({ target:testreveal2})

const btn_nav_activ = document.querySelector(".activ_nav")
const btn_nav_hide = document.querySelector(".hidenav")
const div_nav = document.getElementById("background-navbar")
const navbar = document.getElementById("navbar")
const navigation = document.getElementById("navigation")

const div_quest1 = document.getElementById("question1")
const btn_q1 = document.getElementById("openrep1")
const div_quest2 = document.getElementById("question2")
const btn_q2 = document.getElementById("openrep2")
const div_quest3 = document.getElementById("question3")
const btn_q3 = document.getElementById("openrep3")
const div_quest4 = document.getElementById("question4")
const btn_q4 = document.getElementById("openrep4")
const div_quest5 = document.getElementById("question5")
const btn_q5 = document.getElementById("openrep5")

const triggernuage = document.querySelector("#start-nuage")
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

gsap.to(nuage1, {
    xPercent : -100,
    scrollTrigger : {
        trigger : triggernuage,
        toggleActions : "play none none none",
        start : "top 30%",
        end : "top",
        scrub : 1
    }
})

gsap.to(nuage2, {
    xPercent : -200,
    scrollTrigger : {
        trigger : triggernuage,
        toggleActions : "play none none none",
        start : "top 30%",
        end : "top",
        scrub : 1,
    }
})

gsap.to(nuage3, {
    xPercent : 200,
    scrollTrigger : {
        trigger : triggernuage,
        toggleActions : "play none none none",
        start : "top 30%",
        end : "top",
        scrub : 1,
    }
})

gsap.to(nuage4, {
    xPercent : 100,
    scrollTrigger : {
        trigger : triggernuage,
        toggleActions : "play none none none",
        start : "top 30%",
        end : "top",
        scrub : 1
    }
})

gsap.from(selection[0].words, {
    color: "rgb(212,22,24,0.2)",
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".test-reveal2",
        scrub: true,
        start: "top 85%",
        end : "top 300%"
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
        pin: true
    }
})

gsap.from(selection2[0].words, {
    color: "#FFF9E750",
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".test-reveal2",
        scrub: true,
        start: "top 85%",
        end : "top 15%"
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