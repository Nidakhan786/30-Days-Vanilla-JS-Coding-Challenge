// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");

highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
  console.log("highlight");
  const linkcoords = this.getBoundingClientRect();
  console.log(linkcoords);
  const coords = {
    width: linkcoords.width,
    height: linkcoords.height,
    top: linkcoords.top + window.scrollY,
    left: linkcoords.left + window.scrollX,
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
