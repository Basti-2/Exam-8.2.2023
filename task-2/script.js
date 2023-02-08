document.querySelector("button").addEventListener("click", function() {
    let firstLink = document.querySelector("a");
    console.log("href", firstLink.href);

    console.log("hreflang ", firstLink.hrefLang);

    console.log("rel ", firstLink.rel);

    console.log("target ", firstLink.Target);

    console.log("type ", firstLink.Type);
  });