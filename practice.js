const btn = document.getElementById("roll-btn");
const diceElement = document.querySelector(".dice");
const rolledDices = document.getElementById("rolled-dices");

let list = [];

const getDiceFace = (result) => {
  switch (result) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
};

const updateRollHistory = () => {
  rolledDices.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(list[i])}</span>`;
    rolledDices.appendChild(listItem);
  }
};

const rollDice = () => {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceElement.innerHTML = diceFace;
  list.push(rollResult);
  updateRollHistory();
};

btn.addEventListener("click", () => {
  diceElement.classList.add("roll-animation");

  setTimeout(() => {
    diceElement.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
