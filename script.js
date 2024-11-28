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
        document.querySelector('header').style.b
    });
});



window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
    const menuItems = document.querySelectorAll('.menu-icon');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop; // Distance of the section from the top of the document
        const sectionHeight = section.offsetHeight; // Height of the section

        // Reset scaling of menu icons
        menuItems[index].style.transform = 'scale(1)';

        // Check if the current scroll position is within the section's visible range
        if (scrollPosition >= sectionTop - sectionHeight * 0.3 && scrollPosition < sectionTop + sectionHeight * 0.7) {
            document.body.style.backgroundColor = getSectionColor(index);
        }

        // Highlight the menu icon if the section is fully in view
        if (scrollPosition >= sectionTop -200 && scrollPosition < sectionTop + sectionHeight) {
            menuItems[index].style.transform = 'scale(1.3)';
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
            top: section.offsetTop -300, // Adjust for navbar height
            behavior: 'smooth',
        });
    } else {
        window.scrollTo({
            top: section.offsetTop, // Adjust for navbar height
            behavior: 'smooth',
        });
    }
}