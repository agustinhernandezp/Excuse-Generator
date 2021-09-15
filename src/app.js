let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let excusa = document.getElementById("excuse");

function numeroRandom(nRandom) {
  let numRam = Math.random() * nRandom.length;
  numRam = Math.floor(numRam);
  return numRam;
}

let primera = who[numeroRandom(who)];
let segunda = action[numeroRandom(action)];
let tercera = what[numeroRandom(what)];
let cuarta = when[numeroRandom(when)];

excusa.innerHTML = primera + " " + segunda + " " + tercera + " " + cuarta;
