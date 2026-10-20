const form = document.querySelector("#customer");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop the page from reloading

  const formData = new FormData(form); // Gather the data
  const dataObject = Object.fromEntries(formData.entries()); // Convert to object

  console.log(dataObject);
  clearFormManually();

  // Clear the form
});
// manually clear allfield
// the form.reset() does not work on chrome brower
function clearFormManually() {
  document.getElementById("name").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("msg").value = "";
}
