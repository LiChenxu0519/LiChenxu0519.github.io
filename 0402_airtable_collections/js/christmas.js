
// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyTMrVY4HuYAgWUi" }).base(
  "appKJBDShIUWnwTJg");

// get our collection base, select all the records
// specify functions that will receive the data
base("playlists")
.select({
        // Selecting the first 6 records in Grid view:
        maxRecords: 6,
        view: "playlists"
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

// just loop through the songs and console.log them
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
    var songContainer = document.createElement("div");
    songContainer.classList.add("song_container");
    document.querySelector(".container").append(songContainer);

    //create container for album cover
    var albumContainer = document.createElement("div");
    albumContainer.classList.add("album_container");
    document.querySelector(".album_container").append(albumContainer);

    // add song titles
    var songTitle = document.createElement("p");
    songContainer.classList.add("songTitle");
    songTitle.innerText = song.fields.song;
    songContainer.append(songTitle);

    // add artists
    var nameOfArtist = document.createElement("p");
    songContainer.classList.add("nameOfArtist");
    nameOfArtist.innerText = song.fields.artist;
    songContainer.append(nameOfArtist);

    // add album title
    var albumTitle = document.createElement("p");
    songContainer.classList.add("albumTitle");
    albumTitle.innerText = song.fields.album;
    songContainer.append(albumTitle);

    //add album cover image
    var albumCover = document.createElement("img");
    albumCover.classList.add("albumCover");
    albumCover.src = song.fields.album_cover [0].url;
    albumContainer.append(albumCover);
  });

    // add event listener to add active class to song container
  songContainer.addEventListener("click", function() {
    img.classList.toggle("active");
  });
}
