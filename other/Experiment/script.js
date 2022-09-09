let app = document.querySelector("main");
  let s = new Sheets(url);
  s.getMyData().then((d) => {
    // fetch for data in a specific row
    // let heading = s.getKey("Header-Title");
    // Create an element and append to selector
    /* s.createElement({
      tag: "h1",
      content: heading,
    }).appendTo("#title");

    let nav = s.collapseKeys("Menu");
    for (let row of nav) {
      s.createElement({
        tag: "span",
        children: [
          {
            tag: "a",
            content: row["Menu"],
            attributes: {
              href: `/${row["Menu"]}`
            },
          },
        ],
      }).appendTo("nav");
    }
    */

    let leftSide = s.collapseKeys("Text");
    for (let row of leftSide) {
      s.createElement({
        tag: "div",
        children: [
          {
            tag: "p",
            content: row["Text"],
          },
        ],
      }).appendTo("#left");
    }

    let RightSide = s.collapseKeys("Image");
    for (let row of RightSide) {
      s.createElement({
        tag: "div",
        children: [
          {
            tag: "img",
            attributes: {
              src: row["Image"],
              // id: "portrait"
            },
          },
        ],
      }).appendTo("#right");
    }
  });


  $(document).ready(function () {
    function go() {
        $('#loading').fadeOut('1000')
    }
    setTimeout(go, 800)
})