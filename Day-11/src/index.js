const pressed = [];
const code = "nida";
window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-code.length - 1, pressed.length - code.length);
  if (pressed.join("").includes(code)) {
    cornify_add();
    console.log("Hey we did it");
  }
});
