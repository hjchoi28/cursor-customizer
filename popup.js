const playroom = document.getElementById("cursor-playroom");
const sup = document.getElementById("super");
const space = document.getElementById("space");
const pop = document.getElementById("popsicle");

function superCat() {
  playroom.style.cursor = "url('/cursors/super-cursor.png'), help";
};

function spaceCat() {
  playroom.style.cursor = "url('/cursors/space-cursor.png'), help";
};

function popCat() {
  playroom.style.cursor = "url('/cursors/popsicle-cursor.png'), help";
};

space.addEventListener("click", spaceCat);
pop.addEventListener("click", popCat);
sup.addEventListener("click", superCat);