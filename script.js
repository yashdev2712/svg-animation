var path = `M 10 100 Q 500 100 990 100`;
var path2 = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string svg");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q 500 ${dets.y} 990 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power2.Out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: path2 },
    duration: 0.8,
    ease: "elastic.Out(1,0.2)",
  });
});
