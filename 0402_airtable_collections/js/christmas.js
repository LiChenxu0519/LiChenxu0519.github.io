
// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyTMrVY4HuYAgWUi" }).base(
  "app15JU5InH8qkF62");

// get our collection base, select all the records
// specify functions that will receive the data
base("playlists")
.select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 6,
        view: "Grid view"
})
.eachPage(gotPageOfSongs, gotAllSongs);

// an empty array to hold our data
var songs = [];

// callback function that receives our data
function gotPageOfSongs(records, fetchNextPage) {
console.log("gotPageOfSongs()");
// add the records from this page to our array
songs.push(...records);
// request more pages
fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSongs(err) {
console.log("gotAllSongs()");

// report an error, you'd want to do something better than this in production
if (err) {
    console.log("error loading data");
    console.error(err);
    return;
}

// call functions to log and show the books
consoleLogSongs();
showSongs();
}

// just loop through the books and console.log them
function consoleLogSongs() {
  console.log("consoleLogSongs()");
  songs.forEach(song => {
    console.log("Song:", song);
  });
}

// look through our airtable data, create elements
function showSongs() {
  console.log("showSongs()");
  songs.forEach(song => {
// create container for each song

// add song titles
var songTitle = document.createElement("h2");
songTitle.innerText = song.fields.title;
document.body.append(songTitle);

});
}