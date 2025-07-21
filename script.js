/* .js files add interaction to your website */
var txtOutput = document.getElementById("txtOutput");
var billButton = document.getElementById("billButton");
var flexContainer_customMessage_desc = document.getElementById("flexContainer-customMessage-desc");

billButton.addEventListener("click",generateMessage)

function generateMessage() {
  var name = document.getElementById("inputName").value;
  var location = document.getElementById("inputLocation").value;
  var bill = document.getElementById("inputBill").value;

  flexContainer_customMessage_desc.style.display = "block"

  txtOutput.innerHTML = "Hi, my name is " + name + " and I am writing to you from " + location + ". I ask you to prevent/deny " + bill + " from going into state legislature. Bills like these are damaging and harmful to multitudes of people. In addition it has been shown that these bills increase the rates of lgbtq youth suicide (The Trevor Project). Thank you.";

  console.log("generated");
}
