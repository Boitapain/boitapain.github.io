const screenContainer = document.querySelector('.test');

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.links');
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("header-nav");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
        
    });

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});



window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const shrinkHeight = 15000; // Target height when the header shrinks (px)
    const initialHeight = window.innerHeight; // Full-screen height

    // Calculate the new height as the user scrolls
    const newHeight = Math.max(initialHeight - scrollPosition, shrinkHeight);

    if (newHeight > shrinkHeight) {
        screenContainer.style.height = `${newHeight}px`;
    }

    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - 300 && scrollPosition < sectionTop + sectionHeight) {
            document.body.style.backgroundColor = getSectionColor(index);
        }

    });
});

function getSectionColor(index) {
    const colors = ['#fef9f2', '#a5f3fc', '#bbf7d0', '#f5d0fe', '#fef08a'];
    return colors[index];
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (sectionId == "section1") {
        window.scrollTo({
            top: section.offsetTop - 200, // Adjust for navbar height
            behavior: 'smooth',
        });
    } else {
        window.scrollTo({
            top: section.offsetTop, // Adjust for navbar height
            behavior: 'smooth',
        });
    }
}