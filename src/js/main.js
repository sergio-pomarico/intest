class App {
  constructor() {
    this.openButton = document.getElementById("open-button");
    this.closeButton = document.getElementById("close-button");
    this.menuMobile = document.getElementById("menu-mobile");
    this.header = document.querySelector(".header");
  }
  init() {
    this.bindUIActions();
  }

  bindUIActions() {
    window?.addEventListener("scroll", (_) => {
      this.header?.classList.toggle("h-sticky", window.scrollY > 150);
    });
    this.openButton.addEventListener("click", () => {
      this.toggleMenu();
    });
    this.closeButton.addEventListener("click", () => {
      this.toggleMenu();
    });
  }

  toggleMenu() {
    this.menuMobile?.classList.toggle("hidden");
    this.menuMobile?.classList.toggle("fixed");
  }
}

const app = new App();

document.addEventListener("DOMContentLoaded", () => {
  app.init();
});
