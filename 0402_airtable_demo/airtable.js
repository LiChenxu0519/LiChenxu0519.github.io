console.log("airtable demo");

//load airtable library

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyTMrVY4HuYAgWUi'}).base('appimVCN6qwTiXcJu');

base('Table 1').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
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
      songTitle.innerText = song.fields.Album_title;
      document.body.append(songTitle);
  
      var nameOfArtist = document.createElement("p");
      nameOfArtist.innerText = song.fields.artist;
      document.body.append(nameOfArtist);
  
      var songImage = document.createElement("img");
      songImage.src = song.fields.Album_artworks[0].url;
      document.body.append(songImage);
});

};

