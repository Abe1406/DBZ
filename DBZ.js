const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let personajes = [
  {
    id: 0,
    personaje: "Goku 五久",
    nivelDePelea: 10000,
    raza: "Sayajin",
    jerarquia: 3,
  },
  {
    id: 1,
    personaje: "Vegeta　ベジータ",
    nivelDePelea: 12000,
    raza: "Sayajin",
    jerarquia: 3,
  },
  {
    id: 2,
    personaje: "Nappa　ナッパ",
    nivelDePelea: 5000,
    raza: "Sayajin",
    jerarquia: 3,
  },
  {
    id: 3,
    personaje: "Piccoro　ピッコロ",
    nivelDePelea: 8000,
    raza: "Namekiano",
    jerarquia: 2,
  },
  {
    id: 4,
    personaje: "Krillin　クリリン",
    nivelDePelea: 6000,
    raza: "Humano",
    jerarquia: 1,
  },
  {
    id: 5,
    personaje: "Roshi　ロシ",
    nivelDePelea: 9000,
    raza: "Humano",
    jerarquia: 1,
  },
];

let p1 = {};
let p2 = {};

personajes.forEach(function (pj) {
  console.log(pj.id + 1 + ") " + pj.personaje);
});

rl.question("P1 elige tu personaje ", function (opcion) {
  //p1.push(personajes[opcion]);
  p1 = personajes[opcion - 1];
  console.log("Seleccionaste a:");
  console.log(p1.personaje + " - " + p1.raza);
  rl.close();
});

rl.question("What is your name ? ", function (name) {
  rl.question("Where do you live ? ", function (country) {
    console.log(`${name}, is a citizen of ${country}`);
    rl.close();
  });
});

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  //process.exit(0);
});
