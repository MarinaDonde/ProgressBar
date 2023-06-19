function toggleLoader() {
  const button = document.querySelector(".button-load");
  const loader = document.querySelector(".loader");

  button.style.display = "none";
  loader.style.display = "block";

  setTimeout(() => {
    button.style.display = "flex";
    loader.style.display = "none";
  }, 9000);
}
