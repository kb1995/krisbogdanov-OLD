console.log("Welcome to my personal website!")

// grab an element
var myElement = document.querySelector(".header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement, {
  "offset": 200,
});
// initialise
headroom.init(); 


// scroll reveal

ScrollReveal().reveal('.design',{
  delay: 0,
  distance: '50px',
  duration: 1000,
  origin: "right"
})
ScrollReveal().reveal('.build',{
  delay: 300,
  distance: '50px',
  duration: 1000,
  origin: "right"
})
ScrollReveal().reveal('.ship',{
  delay: 600,
  distance: '50px',
  duration: 1000,
  origin: "right"
})
;
