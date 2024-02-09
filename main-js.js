const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__context");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});

// Toggler
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".navbar");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__unshow");
});

// Clicker
const clicker = document.querySelectorAll(".accordion__head");
const shower = document.querySelector(".accordion__context");
clicker.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("unshow");
  });
});