$(document).ready(function(){
  const tl = gsap.timeline();

  tl.fromTo('.vtoroe',{x: '-100%', y: '+100%'}, {y:0} )
  tl.fromTo('.trtie',{x: '-200%', y: '+200%'}, {y:0})

  const main = document.querySelector('.huge')

  ScrollTrigger.create({
    animation: tl,
    trigger: '.huge',
    start: 'top top',
    end: () => main.offsetWidth / 2,
    scrub: true,
    pin: true,
  })
})
