// Navbar highlight script
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-sky-600', 'font-bold', 'underline');
        if (link.dataset.link === current) {
            link.classList.add('text-sky-600', 'font-bold', 'underline');
        }
    });
});

// Project modal script
const projectImages = [
    ["assets/projects/jasraj1.png", "assets/projects/jasraj2.png", "assets/projects/jasraj3.png", "assets/projects/jasraj4.png"],
    ["assets/projects/placeholder.jpg"]
];
let currentProject = 0;
let currentImage = 0;

function openProjectModal(projectIndex) {
    currentProject = projectIndex;
    currentImage = 0;
    document.getElementById('projectModal').classList.remove('hidden');
    updateModalImage();
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.add('hidden');
}

function updateModalImage() {
    document.getElementById('modalProjectImage').src = projectImages[currentProject][currentImage];
}

function prevModalImage() {
    if (currentImage > 0) {
        currentImage--;
        updateModalImage();
    }
}

function nextModalImage() {
    if (currentImage < projectImages[currentProject].length - 1) {
        currentImage++;
        updateModalImage();
    }
}

document.getElementById('projectModal').addEventListener('click', function (e) {
    if (e.target === this) closeProjectModal();
});