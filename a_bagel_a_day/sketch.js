let bagels = [];
let selectedBagelIndex = -1; // -1 means no bagel is selected
let jokeAPI = 'https://v2.jokeapi.dev/joke/Any';

function preload() {
    dmSans = loadFont('fonts/DMSans_24pt-BoldItalic.ttf');
  // Load the bagel images and their open versions
  for (let i = 1; i <= 12; i++) {
    let bagelImage = loadImage(i + '.png');
    let bagelOpenImage = loadImage('1_open.png');
    // Adjust the position x and y as per your layout needs
    bagels.push({ image: bagelImage, openImage: bagelOpenImage, x: (i - 1) * 150, y: 100, size: 100, joke: '', isSelected: false, isOpen: false });
  }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(12);
  
    const cols = 6; // Number of columns
    const rows = ceil(bagels.length / cols); // Number of rows
    const spacingX = windowWidth / (cols+0.5);
    const spacingY = windowHeight / rows;
  
    // Position the bagels
    for (let i = 0; i < bagels.length; i++) {
      const col = i % cols;
      const row = floor(i / cols);
      bagels[i].x = (col + 0.5) * spacingX - bagels[i].size / 2; // Center in each cell
      bagels[i].y = (row + 0.5) * spacingY - bagels[i].size / 2;
    }
  textFont(dmSans);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear()
  for (let i = 0; i < bagels.length; i++) {
    let bagel = bagels[i];
    let img = bagel.isOpen ? bagel.openImage : bagel.image;
    let scaleFactor = isMouseOver(bagel) && selectedBagelIndex === -1 ? 1.1 : 1;
    push();
    translate(bagel.x, bagel.y);
    scale(scaleFactor);
    image(img, 0, 0, bagel.size, bagel.size);
    pop();
    if (bagel.isOpen) {
      text(bagel.joke, bagel.x, bagel.y + bagel.size + 50);
    }
  }
}

function mousePressed() {
  for (let i = 0; i < bagels.length; i++) {
    if (isMouseOver(bagels[i])) {
      if (selectedBagelIndex === -1) {
        selectedBagelIndex = i;
        bagels[i].isOpen = true;
        fetchJokeForBagel(bagels[i]);
        break;
      }
    }
  }
}

function isMouseOver(bagel) {
  return mouseX > bagel.x && mouseX < bagel.x + bagel.size &&
         mouseY > bagel.y && mouseY < bagel.y + bagel.size;
}

function fetchJokeForBagel(bagel) {
  loadJSON(jokeAPI, function(data) {
    bagel.joke = data.setup ? `${data.setup}\n${data.delivery}` : data.joke;
  });
}
