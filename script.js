gsap.registerPlugin(ScrollTrigger)

const sect2 = document.querySelector(".secteur2")

const nuage1 = document.querySelector(".nuage1")
const nuage2 = document.querySelector(".nuage2")
const nuage3 = document.querySelector(".nuage3")
const nuage4 = document.querySelector(".nuage4")

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