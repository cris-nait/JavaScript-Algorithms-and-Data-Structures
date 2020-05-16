function palindrome(str) {
  const arr = str.toLowerCase().match(/[a-z0-9]/g);

  return arr.join("") === arr.reverse().join("");
}

let btn_palindrome = document.getElementById("btn_palindrome");

btn_palindrome.addEventListener("click", () => {
  document.getElementById("palindrome_response").innerHTML = `<p>${palindrome(
    document.getElementById("palindrome_text").value
  )}</p>`;
});

function convertToRoman(num) {
  const romanNumeral = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    VIII: 8,
    VII: 7,
    VI: 6,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
    I: 1,
  };
  let strSum = "";
  for (const key in romanNumeral) {
    const value = romanNumeral[key];
    while (value <= num) {
      strSum += key;
      num -= value;
    }
  }
  return strSum;
}

let btn_roman_numeral = document.getElementById("btn_roman_numeral");

btn_roman_numeral.addEventListener("click", () => {
  document.getElementById("roman_response").innerHTML = `<p>${convertToRoman(
    parseInt(document.getElementById("roman_text").value)
  )}</p>`;
});
