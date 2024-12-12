// Functionize Minecraft Fishing Start Code
let out = document.getElementById("result-img");
let codnum = document.getElementById("num-cod");
let samnum = document.getElementById("num-salmon");
let tropnum = document.getElementById("num-tropical");
let puffnum = document.getElementById("num-puffer");
let charsel = document.getElementById("character-select");

let cod = 0;
let sam = 0;
let trop = 0;
let puff = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  rand = Math.random();
  let char = charsel.value;

  if (char == "steve") {
    codLuck = 0.7;
    samLuck = 0.9;
    tropLuck = 0.95;
  } else if (char == "alex") {
    codLuck = 0.1;
    samLuck = 0.2;
    tropLuck = 0.5;
  } else if (char == "villager") {
    codLuck = 0.25;
    samLuck = 0.5;
    tropLuck = 0.75;
  }

  if (rand < codLuck) {
    out.src = "img/Raw-Cod.png";
    cod++;
  } else if (rand < samLuck) {
    sam++;
    out.src = "img/Raw-Salmon.png";
  } else if (rand < tropLuck) {
    trop++;
    out.src = "img/Tropical-Fish.png";
  } else {
    puff++;
    out.src = "img/Pufferfish.png";
  }
  codnum.innerHTML = cod;
  samnum.innerHTML = sam;
  tropnum.innerHTML = trop;
  puffnum.innerHTML = puff;
  console.log(char);
}
