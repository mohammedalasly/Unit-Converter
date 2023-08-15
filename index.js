// Grab the HTML elements
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

// Conversion factors
const meterToFeet = 3.281; // 1 meter = 3.281 feet
const literToGallon = 0.264; // 1 liter = 0.264 gallon
const kilogramToPound = 2.204; // 1 kilogram = 2.204 pound

// Listen to the Convert button when clicked
convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value; // Get the input value

  // Length conversions (meter/feet)
  lengthEl.textContent = `${baseValue} meter = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(
    3
  )} meters`;

  // Volume conversions (liter/gallon)
  volumeEl.textContent = `${baseValue} liter = ${(
    baseValue * literToGallon
  ).toFixed(3)} gallon | ${baseValue} gallon = ${(
    baseValue / literToGallon
  ).toFixed(3)} liters`;

  // Mass conversions (kilogram/pound)
  massEl.textContent = `${baseValue} kilogram = ${(
    baseValue * kilogramToPound
  ).toFixed(3)} pound | ${baseValue} pound = ${(
    baseValue / kilogramToPound
  ).toFixed(3)} kilograms`;
});
