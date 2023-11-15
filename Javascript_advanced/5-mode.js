/** @format */

const changeMode = (size, weight, transform, background, color) => () => {
  document.body.style.cssText = `
    font-size: ${size}px;
    font-weight: ${weight};
    text-transform: ${transform};
    background-color: ${background};
    color: ${color};
  `;
};

const addButtonListener = (buttonId, modeFunction) => {
  document.getElementById(buttonId).addEventListener("click", modeFunction);
};

const setupPage = () => {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  document.body.innerHTML = `
    <p>Welcome Holberton!</p>
    <button id="btnSpooky">Spooky</button>
    <button id="btnDarkMode">Dark mode</button>
    <button id="btnScreamMode">Scream mode</button>
  `;

  addButtonListener("btnSpooky", spooky);
  addButtonListener("btnDarkMode", darkMode);
  addButtonListener("btnScreamMode", screamMode);
};

setupPage();
