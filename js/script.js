// Created by: Allen
// Created on: Oct 12
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const StreetNumber = document.getElementById("Street-Number").value
  const StreetName = document.getElementById("Street-Name").value

  // output
  document.getElementById("address").innerHTML =
    "Your address is: " + StreetNumber + " " + StreetName + " Longfields."
}
