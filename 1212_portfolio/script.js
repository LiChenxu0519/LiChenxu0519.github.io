function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

const spans = document.querySelectorAll('.chenxu span');

spans.forEach((span, idx) => {
// Initial animation
    setTimeout(() => {
        span.classList.add('active');
        }, 650 * (idx+1))
});