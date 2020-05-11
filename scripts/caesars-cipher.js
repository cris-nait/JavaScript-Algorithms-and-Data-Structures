let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function rot13(str) {
  let strSum = "";
  for (let i = 0; i < str.length; i++) {
    const value = str[i];
    const letter = alphabet.includes(value);
    if (!letter) {
      strSum += value;
    } else {
      const valueIndex = alphabet.findIndex((e) => e === value);
      strSum += alphabet[valueIndex + 13] || alphabet[valueIndex - 13];
    }
  }

  return strSum;
}

rot13("SERR PBQR PNZC");
