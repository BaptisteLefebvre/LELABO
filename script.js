let selection = Splitting()
console.log(selection)
const sect2 = document.querySelector(".secteur2")
const nuage1 = document.querySelector(".nuage1")
const nuage2 = document.querySelector(".nuage2")
const nuage3 = document.querySelector(".nuage3")
const nuage4 = document.querySelector(".nuage4")
const sectcards = document.querySelector(".cards")
let cards = document.querySelectorAll(".card")
console.log(cards)

gsap.registerPlugin(ScrollTrigger)

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

gsap.from(cards, {
    yPercent: 200,
    stagger : 1,
    scrollTrigger : {
        trigger : '.container2-sect2',
        start: "top top",
        end: "+=3000",
        markers: true,
        scrub : true,
        pin: true,
        rotate: true,
    }
})
