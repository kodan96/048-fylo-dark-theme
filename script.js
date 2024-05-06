$(document).ready(() => {
    document.addEventListener('scroll', (e) => {
        e.preventDefault();
    })
    const preLoader = $('.preload');
    
    setTimeout(() => {
        preLoader.fadeOut(); // Call fadeOut inside an anonymous function
    }, 2000);


    gsap.registerPlugin(ScrollTrigger);
    const revealType = document.querySelectorAll('.reveal');
    const heroIllustration = document.querySelector('.hero_illustration');
    const heroSplit = document.querySelector('.herosplit');
    setTimeout(() => {
        revealType.forEach((char, i) => {
            const reveal = new SplitType(char, { type: 'chars'});
            gsap.from(char, {
                opacity: 0,
                yPercent: 100,
                duration: 2,
                delay: .5,
                stagger: 0.7,
                scrub: 2,
                ease: 'elastic.out(1, 0.7)',
            })
            gsap.from(heroIllustration, {
                opacity: 0,
                scale: 1.2,
                duration: 2,
                scrub: 1,
                ease: 'elastic.out(1, 0.7)',
            })
            gsap.from(heroSplit, {
                opacity: 0,
                scale:1.3,
                duration: 2,
                scrub: 1,
                ease: 'elastic.out(1, 0.7)',
                delay: 1,
            })
        })
    }, 2000)

    const btns = document.querySelectorAll('.btn');
    btns.forEach((btn, i) => {
        gsap.from(btn, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            scrollTrigger: {
                trigger: btn, 
                start: 'top 80%', 
                end: 'top 50%',
                scrub: true,
                markers: false
                
            }
        });
    });

    const sections = document.querySelectorAll('.details_section');
    sections.forEach((section, i) => {
        gsap.from(section, {
            opacity: 0,
            xPercent: -100,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 90%', 
                end: 'top 60%',
                markers: false,
                scrub: true,
                
            }
        })
    })

    const productiveImg = document.querySelectorAll('.productive_img');

    gsap.from(productiveImg, {
        opacity: 0,
        scale: .4,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
            trigger: productiveImg,
            start: 'top 90%', 
            end: 'top 60%',
            markers: false,
            scrub: true,
            
        }
    });

    const splits = document.querySelectorAll('.split');
    splits.forEach((char, i) => {
        const reveal = new SplitType(char, { type: 'chars'});
        gsap.from(reveal.chars, {
            scrollTrigger: {
                trigger: char, 
                start: 'top 80%', 
                end: 'top 50%', 
                scrub: true,
              
            },
            opacity: 0,
            yPercent: 100,
            duration: 2,
            delay: .5,
            stagger: 0.7,
        });
    })

    const tests = document.querySelectorAll('.test');
    tests.forEach((test, i) => {
        gsap.from(test, {
            scrollTrigger: {
                trigger: test, 
                start: 'top 80%', 
                end: 'top 50%', 
                scrub: true,
                markers: false
            },
            opacity: 0,
            xPercent: -100,
            duration: 2,
            delay: .5,
            stagger: 0.7,
        })
    });

    const access = document.querySelector('.access');
    gsap.from(access, {
        opacity: 0,
        xPercent: -100,
        duration: 2,
        stagger: 1,
        scrollTrigger: {
            trigger: access, 
            start: 'top 80%', 
            end: 'top 50%', 
            scrub: true,
            markers: false
        }
    })



    let validate = (email) => {
        return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    const validateEmail = (e) => {
        const email = $('#email').val();
        const error = $('.error');

        e.preventDefault();
        if(!validate(email)) {

            error.toggle();
            error.html('Invalid email address');
            error.css('color','red');
            $('#email').css({
                'backgroundColor': 'rgba(255, 0, 0, 0.2)',
                'outline':'red',
            });
        }else {
            error.html('Success!');
            error.css('color', 'green');
            $('#email').css({
                'backgroundColor': 'rgba(0, 255, 0, 0.2)',
                'borderColor':'green',
            })
            
        };

    };
    $('#submit').on('click', validateEmail);

    const footers = document.querySelectorAll('.footer');
    footers.forEach((footer, i) => {
        gsap.from(footer, {
            opacity: 0,
            xPercent: -100,
            duration: 2,
            stagger: 1,
            scrollTrigger: {
                trigger: footer, 
                start: 'top 100%', 
                end: 'top 90%', 
                scrub: true,
                markers: true, 
            }
        })
    });







    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
})

