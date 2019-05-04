console.log("If you are reading this, we should probably chat. Drop me an email from the contact page.")

// grab an element
var myElement = document.querySelector(".header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement, {
  "offset": 200,
});
// initialise
headroom.init(); 

anime({
  targets: '.message',
  loop: true,
  opacity: 1,
  ease: 'easeInOutBack',
  delay: anime.stagger(1000, {start: 500}),
  direction: 'alternate'
});

