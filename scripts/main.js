function palidrome(str) {
  const arr = str.toLowerCase().match(/[a-z0-9]/g);

  return arr.join("") === arr.reverse().join("");
}

let btn = document.getElementById("btn_palidrome");

btn.addEventListener("click", () => {
  document.getElementById("palidrome_response").innerHTML = `<p>${palidrome(
    document.getElementById("palidrome_text").value
  )}</p>`;
});
