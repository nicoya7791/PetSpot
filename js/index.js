const form = document.querySelector("#customer");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop the page from reloading
  const formData = new FormData(form); // Gather the data
  const dataObject = Object.fromEntries(formData.entries()); // Convert to object

  let msg = document.getElementById("success");

  let name = document.getElementById("name").value; //get the value of name input.
  msg.innerHTML = `Hi ${name} your message was recieved <span class="hide">Click to Hide<span>`; // this message get added to html paragraph

  // for screen reader to not read message is hidden.
  $(msg).show().attr("aria-hidden", "false");
  msg.classList.add("message");

  // Clear the form
  clearFormManually(form);
  handleHide(msg);
});

//takes an element as param then removes
// the style of display none:
function handleHide(element) {
  $("#success").on("click", function () {
    $(this).hide(1000).attr("aria-hidden", "true");
  });
  element.removeAttribute("style");
}
//CLEAR FORM
// The form.reset() does not work on chrome brower
// but to demostrate looping im using foreach in an array of input elements
function clearFormManually(form) {
  const inputs = form.querySelectorAll("input");
  const textArea = form.querySelector("textarea");

  const AllInputs = Array.from(inputs);
  AllInputs.push(textArea);

  AllInputs.forEach((element) => {
    element.value = "";
  });
}
