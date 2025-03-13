const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
    "task4": { "title": "Project 4", "url": "works/task3/index.html" },
};

// Function to create the navigation menu
function createNav() {
    const navPanel = document.getElementById("navPanel");

    Object.values(works).forEach(work => {
        let link = document.createElement("a");
        link.textContent = work.title;
        link.href = "#";
        link.classList.add("nav-link");  // Add class for styling
        link.onclick = function () {
            loadWork(work.url);
            highlightActiveLink(link);  // Highlight active link
            return false; // Prevent default link behavior
        };
        navPanel.appendChild(link);
    });
}

// Function to load the selected work inside an iframe
function loadWork(url) {
    const iframe = document.getElementById("contentFrame");
    
    // Only change the iframe content if the URL is different from the current one
    if (iframe.src !== url) {
        iframe.src = url;
    }
}

// Function to highlight the active link
function highlightActiveLink(activeLink) {
    const links = document.querySelectorAll(".nav-link");
    
    // Remove the 'active' class from all links
    links.forEach(link => link.classList.remove("active"));

    // Add the 'active' class to the clicked link
    activeLink.classList.add("active");
}

// Initialize the navigation menu
createNav();
