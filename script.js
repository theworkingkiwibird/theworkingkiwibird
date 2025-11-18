document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const handleScroll = () => {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 150) {
                section.classList.add('is-visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offset = 80; 
                const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset; 

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});