const form = document.querySelector("#customer");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop the page from reloading

  const formData = new FormData(form); // Gather the data
  const dataObject = Object.fromEntries(formData.entries()); // Convert to object

  let msg = document.getElementById("success");

  let name = document.getElementById("name").value; //get the value of name input.
  msg.innerHTML = `Hi ${name} your message was recieved <span class="hide">Click to Hide<span>`; // this message get added to html paragraph

  msg.classList.add("message");
  // Clear the form
  clearFormManually();
  handleHide(msg);
});

//takes an element as param then removes
// th style of display none:
function handleHide(element) {
  $("#success").on("click", function () {
    $(this).hide();
  });
  element.removeAttribute("style");
}
// mManually clear allfield
// The form.reset() does not work on chrome brower
function clearFormManually() {
  document.getElementById("name").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("msg").value = "";
}

// Hide the success message when its link is clicked.
// With the element initially shown, we can hide it slowly:
// $(document).ready(function () {
//   $(".message").on("click", function () {
//     $("#success").hide(2000);
//   });
// });
// This function validates input in the form
// Displaying a message of success or failure.
