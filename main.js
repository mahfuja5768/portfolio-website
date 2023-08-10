/* show-menu */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
      });
    }
  };
  showMenu("nav_toggle", "nav_menu");
  
  /* remove-menu */
  const navLink = document.querySelectorAll(".nav-link");
  
  function linkAction() {
    const navMenu = document.getElementById("nav_menu");
    navMenu.classList.remove("show-menu");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  