// Tabs
const tabs = document.querySelectorAll(".nav-tabs .nav-link");
const tabContents = document.querySelectorAll(".tab-pane");

function activateTab(tabIndex) {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  tabContents.forEach((content) => {
    content.classList.remove("show", "active");
  });

  tabs[tabIndex].classList.add("active");
  tabContents[tabIndex].classList.add("show", "active");
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault(); 
    activateTab(index);
  });
});

activateTab(0);

const mainCourses = [
  "Moussaka grecque",
  "Souvlaki de poulet",
  "Kleftiko (Agneau de Chypre)",
  "Dolmades aux feuilles de vigne",
  "Falafels turcs",
];

const techniques = [
  "à la broche",
  "grillé",
  "dans une sauce tzatziki",
  "à la méditerranéenne",
  "frit",
  "accompagné de houmous",
  "enroulé dans une pita",
];

const sides = [
  "Tzatziki et pita fraîche",
  "Salade grecque",
  "Frites de patates douces",
  "Légumes grillés",
  "Taboulé",
  "Pommes de terre à l'origan",
  "Riz citronné",
];

const seasonings = [
  "au yaourt grec",
  "au citron frais",
  "avec des herbes méditerranéennes",
  "à l'ail rôti",
  "et sumac",
  "saupoudré de cumin",
  "accompagné de tahini",
];

const getRandom = (data) => data[Math.floor(Math.random() * data.length)];

const generateRandomMenu = () => {
  const menu = `${getRandom(mainCourses)} ${getRandom(
    techniques
  )}, avec ${getRandom(sides)} ${getRandom(seasonings)}`;
  document.getElementById(
    "generatedMenu"
  ).textContent = `Nouvelle proposition : ${menu}`;
};

document
  .getElementById("generateMenuButton")
  .addEventListener("click", generateRandomMenu);

  // Photo gallery
function createPhotoGallery() {
    const photosTab = document.getElementById("photos");
    const photoUrls = [
      "./assets/img/brochette-polina-tankilevitch-sin-bg.png",
      "./assets/img/dessert-any-lane-sin-bg.png",
      "./assets/img/falafel-nataliya-vaitkevich-sin-bg.png",
      "./assets/img/pita-polina-tankilevitch-sin-bg.png",
      "./assets/img/plat-jer-chung-sin-bg.png",
      "./assets/img/food-william-choquette-sin-bg.png",
      "./assets/img/fruit-bowl-jane-doan-sin-bg.png",
      "./assets/img/orange-tart-cats-coming-sin-bg.png",
      "./assets/img/yummy-food-julie-aagaard-sin-bg.png",
    ];
  
    const row = document.createElement("div");
    row.className = "row";
  
    photoUrls.forEach((url) => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      const img = document.createElement("img");
      img.src = url;
      img.className = "img-fluid";
      col.appendChild(img);
      row.appendChild(col);
    });
  
    photosTab.appendChild(row);
  }
  
  createPhotoGallery();
  
// Exit pop-up

let popupShown = false;

const showExitPopup = () => {
  if (!popupShown) {
    document.querySelector(".exit-popup").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
    popupShown = true;
  }
};

const hideExitPopup = () => {
  document.querySelector(".exit-popup").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
};

document
  .querySelector(".exit-popup-close")
  .addEventListener("click", hideExitPopup);
document.querySelector(".overlay").addEventListener("click", hideExitPopup);

document.addEventListener("mouseleave", (event) => {
  showExitPopup();
});