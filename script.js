const roadmaps = [
    {
        title: "AI Engineer",
        link: "https://roadmap.sh/ai-engineer"
    },
    {
        title: "DevOps Engineer",
        link: "https://roadmap.sh/devops"
    },
    {
        title: "Full Stack Developer",
        link: "https://roadmap.sh/full-stack"
    },
    {
        title: "AI and Data Scientist",
        link: "https://roadmap.sh/ai-data-scientist"
    },
    {
        title: "Blockchain Developer",
        link: "https://roadmap.sh/blockchain"
    },
    {
        title: "Engineering Manager",
        link: "https://roadmap.sh/engineering-manager"
    },
    {
        title: "Product Manager",
        link: "https://roadmap.sh/product-manager"
    },
    {
        title: "Android Developer",
        link: "https://roadmap.sh/android"
    },
    {
        title: "MLOps",
        link: "https://roadmap.sh/mlops"
    },
    {
        title: "Software Architect",
        link: "https://roadmap.sh/software-architect"
    }
];

// Function to generate roadmap cards
function generateRoadmapCards() {
    const container = document.getElementById("roadmap-container");

    roadmaps.forEach(roadmap => {
        // Create a card div
        const card = document.createElement("div");
        card.className = "card";

        // Title
        const title = document.createElement("h2");
        title.textContent = roadmap.title;

        // Description
        const description = document.createElement("p");
        description.textContent = roadmap.description;

        // Link
        const link = document.createElement("a");
        link.href = roadmap.link;
        link.target = "_blank";
        link.textContent = "Learn More";

        // Append elements to the card
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        // Append the card to the container
        container.appendChild(card);
    });
}

// Initialize the roadmap cards on page load
document.addEventListener("DOMContentLoaded", generateRoadmapCards);

document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const body = document.body;

    // Default to day mode
    let isNightMode = false;

    // Add interactive event listeners
    toggleThemeButton.addEventListener('click', () => {
        isNightMode = !isNightMode;

        if (isNightMode) {
            body.classList.remove('day-mode');
            body.classList.add('night-mode');
            toggleThemeButton.textContent = '☀️';
        } else {
            body.classList.remove('night-mode');
            body.classList.add('day-mode');
            toggleThemeButton.textContent = '🌙';
        }
    });

    // Initial theme setup
    body.classList.add('day-mode');

    // Card interactivity: Add animations or custom alerts on click
    const cards = document.querySelectorAll('.card a');
    cards.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Feature coming soon! Stay tuned.');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;

    // Initially set to Day Mode
    body.classList.add('day-mode');

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('day-mode')) {
            body.classList.remove('day-mode');
            body.classList.add('night-mode');
            toggleButton.textContent = '☀️';
        } else {
            body.classList.remove('night-mode');
            body.classList.add('day-mode');
            toggleButton.textContent = '🌙';
        }
    });
});
