let curs = document.querySelector(".cursor");

window.addEventListener("mousemove", function (dets) {
  curs.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
});
