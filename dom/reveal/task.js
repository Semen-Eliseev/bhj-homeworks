const revealElements = document.querySelectorAll('.reveal');

const handler = () => {
    revealElements.forEach(element => {
        const rect = element.getBoundingClientRect(); 

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            element.classList.add('reveal_active'); 
        } else {
            element.classList.remove('reveal_active'); 
        }
    });
};

document.addEventListener('scroll', handler);


