var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyTMrVY4HuYAgWUi' }).base('appLseQoUS1ZEtVnU');

base('Archive').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 256,
    view: "View 2021"
})

    .eachPage(gotPageOfArchives, gotAllArchives);

// an empty array to hold our data
var archives = [];

// callback function that receives our data
function gotPageOfArchives(records, fetchNextPage) {
    console.log("gotPageOfArchives()");
    // add the records from this page to our array
    archives.push(...records);
    // request more pages
    fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllArchives(err) {
    console.log("gotAllArchives()");

    // report an error, you'd want to do something better than this in production
    if (err) {
        console.log("error loading data");
        console.error(err);
        return;
    }

    // call functions to log and show the books
    consoleLogArchives();
    showArchives();
}

base('Archive').select({
    view: 'Grid view'
}).firstPage(function (err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function (record) {
        console.log('Retrieved', record.get('Name'));
    });
});


// just loop through the books and console.log them
function consoleLogArchives() {
    console.log("consoleLogArchives()");
    archives.forEach(archive => {
        console.log("Archive:", archive);
    });
}


// look through our airtable data, create elements
function showArchives() {
    console.log("showArchives()");
    archives.forEach((archive) => {

        // create container for each image
        var imageContainer = document.createElement("div");
        imageContainer.classList.add("image_container");
        document.querySelector(".container").append(imageContainer);

        // add archive titles
        var Name = document.createElement("p");
        Name.classList.add("Name");
        Name.innerText = archive.fields.Name;
        imageContainer.append(Name);

        // add image titles
        var Image = document.createElement("img");
        Image.src = archive.fields.Image[0].url;
        Image.classList.add("Image");
        Image.innerText = archive.fields.Image;
        imageContainer.append(Image);


    });

};
