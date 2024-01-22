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
