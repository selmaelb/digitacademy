const selectOptions = document.getElementById("select-options");
const options = document.querySelectorAll(".option");

selectOptions.addEventListener("change", () => {
  options.forEach(option => {
    if (option.id === selectOptions.value) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
});





const infoIcons = document.querySelectorAll(".info-icon");

infoIcons.forEach(icon => {
  const infoBubble = icon.parentElement.nextElementSibling;
  icon.addEventListener("mouseover", () => {
    infoBubble.style.display = "block";
  });
  icon.addEventListener("mouseout", () => {
    infoBubble.style.display = "none";
  });
});







