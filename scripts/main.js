//Palindrome
function palindrome(str) {
  const arr = str.toLowerCase().match(/[a-z0-9]/g);

  return arr.join("") === arr.reverse().join("");
}
//Conver to Roman
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
//Caesars Cipher
function rot13(str) {
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
//Telephone Checker
function telephoneCheck(str) {
  var regex = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
  return regex.test(str);
}

//Cash Register
var denom = [
  { name: "ONE HUNDRED", val: 100 },
  { name: "TWENTY", val: 20 },
  { name: "TEN", val: 10 },
  { name: "FIVE", val: 5 },
  { name: "ONE", val: 1 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 },
];
function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;
  var register = cid.reduce(
    function (acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  var change_arr = denom.reduce(function (acc, curr) {
    var value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}

let btn_palindrome = document.getElementById("btn_palindrome");
btn_palindrome.addEventListener("click", () => {
  document.getElementById("palindrome_response").innerHTML = `<p>${palindrome(
    document.getElementById("palindrome_text").value
  )}</p>`;
});
let btn_roman_numeral = document.getElementById("btn_roman_numeral");
btn_roman_numeral.addEventListener("click", () => {
  document.getElementById("roman_response").innerHTML = `<p>${convertToRoman(
    parseInt(document.getElementById("roman_text").value)
  )}</p>`;
});
let btn_caesar = document.getElementById("btn_caesar");
btn_caesar.addEventListener("click", () => {
  document.getElementById("caesar_response").innerHTML = `<p>${rot13(
    document.getElementById("caesar_text").value
  )}</p>`;
});
let btn_telephone = document.getElementById("btn_telephone");
btn_telephone.addEventListener("click", () => {
  document.getElementById(
    "telephone_response"
  ).innerHTML = `<p>${telephoneCheck(
    document.getElementById("telephone_text").value
  )}</p>`;
});
