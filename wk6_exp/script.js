var NumberOfWords = 8

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Altruistic"
words[2] = "Benevolent"
words[3] = "Chic"
words[4] = "Compassionate"
words[5] = "Proud"
words[6] = "Humorous"
words[7] = "Generous"
words[8] = "Amazed"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}


var NumberOfWords2 = 10

var words = new BuildArray(NumberOfWords2)

// Use the following variables to 
// define your random words:
words[1] = "Empowered"
words[2] = "Energetic"
words[3] = "Optimistic"
words[4] = "Fortunate"
words[5] = "Confident"
words[6] = "Courageous"
words[7] = "Creative"
words[8] = "Harmonious"
words[9] = "Inspired"
words[10] = "Invigorated"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord2(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords2)

// Display the word inside the text box
frm.WordBox2.value = words[rnd]
}





var NumberOfWords1 = 10

var words = new BuildArray(NumberOfWords1)

// Use the following variables to 
// define your random words:
words[1] = "Uplifted"
words[2] = "Thankful"
words[3] = "Warm"
words[4] = "Delighted"
words[5] = "Embrace"
words[6] = "Fresh"
words[7] = "Spiritual"
words[8] = "Graceful"
words[9] = "Wonderful"
words[10] = "LOVE"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord1(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords1)

// Display the word inside the text box
frm.WordBox1.value = words[rnd]
}