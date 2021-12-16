function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

function toggle() {
    var x = document.getElementById("webimg");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/*
function showsecondquote() {
  document.getElementById('secondquote').style.display="block";
}

*/