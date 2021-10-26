var flowerMotion = document.getElementById("flower");
var disMotion = document.getElementById("dis");
var bedMotion = document.getElementById("bed");
var houseMotion = document.getElementById("house");
var house3Motion = document.getElementById("house3");

// section for flowerMotion
flowerMotion.onmousedown = function(event) {

    let shiftX = event.clientX - flowerMotion.getBoundingClientRect().left;
    let shiftY = event.clientY - flowerMotion.getBoundingClientRect().top;
  
    flowerMotion.style.position = 'absolute';
    flowerMotion.style.zIndex = 1000;
    document.body.append(flowerMotion);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the flowerMotion at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      flowerMotion.style.left = pageX - shiftX + 'px';
      flowerMotion.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the flowerMotion on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the flowerMotion, remove unneeded handlers
    flowerMotion.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      flowerMotion.onmouseup = null;
    };
  
  };
  
  flowerMotion.ondragstart = function() {
    return false;
  };

  // section for houseMotion
  houseMotion.onmousedown = function(event) {

    let shiftX = event.clientX - houseMotion.getBoundingClientRect().left;
    let shiftY = event.clientY - houseMotion.getBoundingClientRect().top;
  
    houseMotion.style.position = 'absolute';
    houseMotion.style.zIndex = 1000;
    document.body.append(houseMotion);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the flowerMotion at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
        houseMotion.style.left = pageX - shiftX + 'px';
        houseMotion.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the flowerMotion on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the flowerMotion, remove unneeded handlers
    houseMotion.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      houseMotion.onmouseup = null;
    };
  
  };
  
  houseMotion.ondragstart = function() {
    return false;
  };


  // section for distortionMotion
  disMotion.onmousedown = function(event) {

    let shiftX = event.clientX - disMotion.getBoundingClientRect().left;
    let shiftY = event.clientY - disMotion.getBoundingClientRect().top;
  
    disMotion.style.position = 'absolute';
    disMotion.style.zIndex = 1000;
    document.body.append(disMotion);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the flowerMotion at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
        distortionMotion.style.left = pageX - shiftX + 'px';
        distortionMotion.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the flowerMotion on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the flowerMotion, remove unneeded handlers
    distortionMotion.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      disMotion.onmouseup = null;
    };
  
  };
  
  disMotion.ondragstart = function() {
    return false;
  };

  // section for bedMotion
  bedMotion.onmousedown = function(event) {

    let shiftX = event.clientX - bedMotion.getBoundingClientRect().left;
    let shiftY = event.clientY - bedMotion.getBoundingClientRect().top;
  
    bedMotion.style.position = 'absolute';
    bedMotion.style.zIndex = 1000;
    document.body.append(bedMotion);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the flowerMotion at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
        bedMotion.style.left = pageX - shiftX + 'px';
        bedMotion.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the flowerMotion on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the flowerMotion, remove unneeded handlers
    bedMotion.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      bedMotion.onmouseup = null;
    };
  
  };
  
  bedMotion.ondragstart = function() {
    return false;
  };