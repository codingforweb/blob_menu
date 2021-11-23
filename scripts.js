function toggle() {
  let links = document.getElementById("links").style;
  let blob = document.getElementById("blob");
  blob.classList.toggle("open");
  links.display == "block"
    ? (links.display = "none")
    : (links.display = "block");
}
