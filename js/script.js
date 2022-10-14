// Created by: Allen
// Created on: Oct 12
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const streetNumber = document.getElementById("street-number").value
  const streetName = document.getElementById("street-name").value

  // output
  document.getElementById("address").innerHTML =
    "Your address is: " + streetNumber + " " + streetName + " Longfields."
}
