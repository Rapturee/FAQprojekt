function toggle(e) {
  const element = e.target.nextElementSibling;
  element.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const labels = document.querySelectorAll(".accordion li label");
  labels.forEach(function (label) {
    label.addEventListener("click", toggle);
  });
});
