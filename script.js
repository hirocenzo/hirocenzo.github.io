// Navbar Highlight
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section');

window.addEventListener('scroll', () => {
    let current = '';
    let scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
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

// Project Modal Logic
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

// Back to Top Button Logic
const backToTopBtn = document.getElementById('backToTopBtn');
let backToTopVisible = false;
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        if (!backToTopVisible) {
            backToTopBtn.classList.remove('hidden', 'slide-out-top');
            setTimeout(() => {
                backToTopBtn.classList.add('show');
            }, 10);
            backToTopVisible = true;
        }
    } else {
        if (backToTopVisible) {
            backToTopBtn.classList.remove('show');
            backToTopBtn.classList.add('slide-out-top');
            setTimeout(() => {
                backToTopBtn.classList.add('hidden');
                backToTopBtn.classList.remove('slide-out-top');
            }, 320);
            backToTopVisible = false;
        }
    }
});

// Start Random Skill Flip Animation
function startRandomSkillFlip() {
    const skillCards = Array.from(document.querySelectorAll('.flip-skill'));
    function flipRandomCard() {
        if (!skillCards.length) return;
        const idx = Math.floor(Math.random() * skillCards.length);
        const card = skillCards[idx];
        card.classList.add('flip-animate');
        setTimeout(() => {
            card.classList.remove('flip-animate');
            setTimeout(flipRandomCard, 600 + Math.random() * 1600);
        }, 1000);
    }
    flipRandomCard();
}
window.addEventListener('DOMContentLoaded', startRandomSkillFlip);

// Mobile Menu Hamburger Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
}

// Scroll to Top on Refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// AOS Animation Initialization
AOS.init({
    offset: 100,
    duration: 1200,
    once: true,
    anchorPlacement: 'top-center',
});

// Typed Role Animation
const roles = [
    "Aspiring Full Stack Developer",
    "Web Development Enthusiast",
    "Technology Problem Solver",
    "Continuous Learner"
];
let roleIndex = 0;
let charIndex = 0;
let typing = true;
const typedRole = document.getElementById('typed-role');

function typeRole() {
    if (!typedRole) return;
    if (typing) {
        if (charIndex <= roles[roleIndex].length) {
            typedRole.textContent = roles[roleIndex].slice(0, charIndex);
            charIndex++;
            setTimeout(typeRole, 60);
        } else {
            typing = false;
            setTimeout(typeRole, 1200);
        }
    } else {
        if (charIndex > 0) {
            typedRole.textContent = roles[roleIndex].slice(0, charIndex - 1);
            charIndex--;
            setTimeout(typeRole, 25);
        } else {
            typing = true;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 400);
        }
    }
}
typeRole();