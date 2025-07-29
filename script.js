const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  }
);