let pronoun = [
  "the",
  "our",
  "i",
  "you",
  "he",
  "she",
  "it",
  "we",
  "they",
  "him",
  "mine",
  "us",
];
let adj = [
  "great",
  "big",
  "bad",
  "small",
  "brave",
  "calm",
  "clever",
  "talented",
  "angry",
  "arrogant",
  "rude",
  "sad",
];
let noun = [
  "jogger",
  "racoon",
  "table",
  "party",
  "ball",
  "chair",
  "house",
  "glass",
  "t-shirt",
  "watch",
];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let resultado = `${pronoun[i]}${adj[j]}${noun[k]} .com`;
      console.log(resultado);
    }
  }
}
