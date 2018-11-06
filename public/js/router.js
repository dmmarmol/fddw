var links = document.querySelectorAll("a");

console.log("links", links);

links.forEach(function(link) {
  var href = link.href.replace(link.baseURI, "");
  link.href = "#" + href;
});

window.addEventListener('onChange')