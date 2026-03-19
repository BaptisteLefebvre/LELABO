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

let services = document.querySelectorAll(".sections2")

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

div_quest1.addEventListener("click", () => {
    if(div_quest1.classList.contains("repopen")){
        div_quest1.classList.remove("repopen")
        btn_q1.classList.remove("open")
    }else{
        div_quest1.classList.add("repopen")
        btn_q1.classList.add("open")
    }
})

div_quest2.addEventListener("click", () => {
    if(div_quest2.classList.contains("repopen")){
        div_quest2.classList.remove("repopen")
        btn_q2.classList.remove("open")
    }else{
        div_quest2.classList.add("repopen")
        btn_q2.classList.add("open")
    }
})

div_quest3.addEventListener("click", () => {
    if(div_quest3.classList.contains("repopen")){
        div_quest3.classList.remove("repopen")
        btn_q3.classList.remove("open")
    }else{
        div_quest3.classList.add("repopen")
        btn_q3.classList.add("open")
    }
})

div_quest4.addEventListener("click", () => {
    if(div_quest4.classList.contains("repopen")){
        div_quest4.classList.remove("repopen")
        btn_q4.classList.remove("open")
    }else{
        div_quest4.classList.add("repopen")
        btn_q4.classList.add("open")
    }
})

div_quest5.addEventListener("click", () => {
    if(div_quest5.classList.contains("repopen")){
        div_quest5.classList.remove("repopen")
        btn_q5.classList.remove("open")
    }else{
        div_quest5.classList.add("repopen")
        btn_q5.classList.add("open")
    }
})

gsap.from(services, {
    yPercent: 110,
    stagger : 0.5,
    scrollTrigger : {
        trigger : '.sects',
        start: "top top",
        end: "+=1500",
        scrub : true,
        pin: true
    }
})
