function palindrome(str) {
  const arr = str.toLowerCase().match(/[a-z0-9]/g);

  return arr.join("") === arr.reverse().join("");
}

palindrome("eye");
