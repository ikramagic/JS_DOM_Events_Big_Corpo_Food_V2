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

// Change menu options
const mainCourses = [
  "Filet de turbot de la mer Noire",
  "Tablier de sapeur",
  "Gigot d'agneau",
  "Faisan de forêt",
  "Trio de quinoa, chou kale et pousses d'épinard",
];
const techniques = [
  "à la cocotte",
  "minute",
  "avec sa sauce hollandaise",
  "façon sud-ouest",
  "comme chez ma grand-mère",
  "déglacé au saké",
  "maturé en fût de chêne",
];
const sides = [
  "une purée de topinambour",
  "ses frites truffées",
  "des châtaignes croustillantes",
  "une brunoise carotte-cèleri",
  "un oeuf parfait",
  "sa crème veloutée de fromages affinés",
];
const seasonings = [
  "au yuzu rouge",
  "au poivre vert de Sichuan",
  "et une pointe de safran",
  "à l'ail noir",
  "et un peu de sucre en poudre",
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
      "./assets/img/halloumi-roman-odintsov-sin-bg.png",
      "./assets/img/i-want-to-spam-uncle-spam-sin-bg.png",
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