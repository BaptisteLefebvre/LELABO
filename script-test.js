gsap.registerPlugin(ScrollTrigger)

let nuages = document.querySelectorAll(".nuage")
let nuages1 = document.querySelectorAll(".rang-nuage-1")
let nuages2 = document.querySelectorAll(".rang-nuage-2")
let nuages3 = document.querySelectorAll(".rang-nuage-3")

window.addEventListener('load', () => {
    
    setTimeout(() => {
        for (let index = 0; index < nuages3.length; index++) {
            const nuage = nuages3[index];

            
            if(nuage.classList.contains('nt')) {
                nuage.classList.add('transi-nuage-top');
            }else if(nuage.classList.contains('nl')) {
                nuage.classList.add('transi-nuage-left');
            }else if(nuage.classList.contains('nr')) {
                nuage.classList.add('transi-nuage-right');
            }else if(nuage.classList.contains('nb')) {
                nuage.classList.add('transi-nuage-bottom');
            }
        }
    }, 1000)

    setTimeout(() => {
        for (let index = 0; index < nuages2.length; index++) {
            const nuage = nuages2[index];

            
            if(nuage.classList.contains('nt')) {
                nuage.classList.add('transi-nuage-top');
            }else if(nuage.classList.contains('nl')) {
                nuage.classList.add('transi-nuage-left');
            }else if(nuage.classList.contains('nr')) {
                nuage.classList.add('transi-nuage-right');
            }else if(nuage.classList.contains('nb')) {
                nuage.classList.add('transi-nuage-bottom');
            }
            

        }
    }, 2000)

    setTimeout(() => {
        for (let index = 0; index < nuages1.length; index++) {
            const nuage = nuages1[index];

            
            if(nuage.classList.contains('nt')) {
                nuage.classList.add('transi-nuage-top');
            }else if(nuage.classList.contains('nl')) {
                nuage.classList.add('transi-nuage-left');
            }else if(nuage.classList.contains('nr')) {
                nuage.classList.add('transi-nuage-right');
            }else if(nuage.classList.contains('nb')) {
                nuage.classList.add('transi-nuage-bottom');
            }
            

        }
    }, 3000)

    setTimeout(() => {
        for (let index = 0; index < nuages.length; index++) {
            const nuage = nuages[index];
            nuage.classList.add('fin-transi-nuage');
        }
    }, 5500)
})

