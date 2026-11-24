//dice_roller
function rollDice(sides) {
  const numofdice = document.getElementById("dice").value;
  const diceresult = document.getElementById("diceresult");
  const diceimage = document.getElementById("diceimage");
  const values = [];
  const images = [];
  const refreshbtn = document.getElementById("refresh");

  for (let i = 0; i < numofdice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src='pics/${value}.png' alt="Dice ${value}">`);
  }
  diceresult.textContent = `You rolled: ${values.join(", ")}`;
  diceimage.innerHTML = images.join("");
}
refreshbtn.onclick = function () {
  document.getElementById("dice").value = "";
  document.getElementById("diceresult").textContent = "";
  document.getElementById("diceimage").innerHTML = "";
};
