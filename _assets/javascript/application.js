console.log("If you are reading this, we should probably chat. Drop me an email from the contact page.")

// grab an element
var myElement = document.querySelector(".header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement, {
  "offset": 200,
});
// initialise
headroom.init(); 

 // load animation data
 spirit.loadAnimation({
  loop: true,
  yoyo: true,
  autoPlay: true,
  
  animationData: {"version_app":"1.1.3","version_extension":"1.3.13","version_runtime":"2.3.0","groups":[{"root":{"path":"/html[1]/body[1]","id":null},"name":"messages","timeScale":1,"timelines":[{"type":"dom","props":{"scale":{"0s":"0","0.29641163105867346s":{"value":"1","ease":"Power1.easeInOut"},"0.8984448076105442s":"1"}},"label":"div/div/main/section[4]/div/div/svg/g/path[27]","path":"div[1]/div[1]/main[1]/section[4]/div[1]/div[1]/*[local-name()='svg'][1]/*[local-name()='g'][1]/*[local-name()='path'][27]"},{"type":"dom","props":{"scale":{"0s":"0","0.29575892857142855s":"0","0.6011639030612245s":"1"}},"label":"div/div/main/section[4]/div/div/svg/g/path[31]","path":"div[1]/div[1]/main[1]/section[4]/div[1]/div[1]/*[local-name()='svg'][1]/*[local-name()='g'][1]/*[local-name()='path'][31]"},{"type":"dom","props":{"scale":{"0s":"0","0.6004487537202381s":"0","0.8984448076105442s":"1"}},"label":"div/div/main/section[4]/div/div/svg/g/path[29]","path":"div[1]/div[1]/main[1]/section[4]/div[1]/div[1]/*[local-name()='svg'][1]/*[local-name()='g'][1]/*[local-name()='path'][29]"}]},{"root":{"path":"/html[1]/body[1]","id":null},"name":"face","timeScale":1,"timelines":[{"type":"dom","label":"div/div/main/section/div/div[2]/div/svg/g/g[2]/path[36]","path":"div[1]/div[1]/main[1]/section[1]/div[1]/div[2]/div[1]/*[local-name()='svg'][1]/*[local-name()='g'][1]/*[local-name()='g'][2]/*[local-name()='path'][36]"},{"type":"dom","props":{"scaleY":{"0s":"1","0.5082901519982992s":{"value":"0.1","ease":"Power1.easeInOut"}}},"label":"div/div/main/section/div/div[2]/div/svg/g/g[2]/path[37]","path":"div[1]/div[1]/main[1]/section[1]/div[1]/div[2]/div[1]/*[local-name()='svg'][1]/*[local-name()='g'][1]/*[local-name()='g'][2]/*[local-name()='path'][37]"},{"type":"dom","props":{"scaleY":{"0s":"0.1","0.5059191645408163s":"1"},"yPercent":{"0s":"32","0.5059191645408163s":"0"}},"label":"div/div/main/section/div/div[2]/div/svg/g/g[2]/path[33]","path":"div[1]/div[1]/main[1]/section[1]/div[1]/div[2]/div[1]/*[local-name()='svg'][1]/*[local-name()='g'][1]/*[local-name()='g'][2]/*[local-name()='path'][33]"}]}]}
}).then(
  // play it
  timeline => timeline.play()
)

anime({
  targets: '.message',
  loop: true,
  opacity: 1,
  ease: 'easeInOutBack',
  delay: anime.stagger(1000, {start: 500}),
  direction: 'alternate'
});

