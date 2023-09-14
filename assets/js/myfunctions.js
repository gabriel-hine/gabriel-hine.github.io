function myFunction() {
   // Copy the text inside the text field
   text = "https://gabriel-hine.github.io/v-card";
  navigator.clipboard.writeText(text);

  // Alert the copied text
  alert("Copied the text: " + text);
}