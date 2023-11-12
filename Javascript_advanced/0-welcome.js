/** @format */

let fullName;

function welcome(firstName, lastName) {
  fullName = firstName + " " + lastName;
}

function displayFullName() {
  alert("Welcome " + fullName + "!");
}

welcome("Holberton", "School");
displayFullName();
