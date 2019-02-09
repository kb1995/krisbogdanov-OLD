console.log("Welcome to my personal website!")

// grab an element
var myElement = document.querySelector(".header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement, {
  "offset": 200,
});
// initialise
headroom.init(); 

ScrollReveal().reveal('.phrase',{
  delay: 0,
  distance: '50px',
  duration: 1500,
  origin: "top"
})


