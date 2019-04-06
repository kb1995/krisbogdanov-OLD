console.log("If you are reading this, we should probably chat. Drop me an email from the contact page.")

// grab an element
var myElement = document.querySelector(".header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement, {
  "offset": 200,
});
// initialise
headroom.init(); 


