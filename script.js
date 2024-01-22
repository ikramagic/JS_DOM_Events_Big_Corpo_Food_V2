const tabs = document.querySelectorAll(".nav-link");
const tabContents = document.querySelectorAll(".tab-pane");

function activateTab(tabIndex) {
    tabs.forEach(tab => tab.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("show", "active"));
    
    tabs[tabIndex].classList.add("active");
    tabContents[tabIndex].classList.add("show", "active");
}

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        activateTab(index);
    });
});

activateTab(0);

const mainCourses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"];
const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"];
const sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"];
const seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"];

const getRandom = (data) => data[Math.floor(Math.random() * data.length)];

const generateRandomMenu = () => {
    const menu = `${getRandom(mainCourses)} ${getRandom(techniques)}, avec ${getRandom(sides)} ${getRandom(seasonings)}`;
    document.getElementById("generatedMenu").textContent = `Nouvelle proposition : ${menu}`;
};

document.getElementById("generateMenuButton").addEventListener("click", generateRandomMenu);