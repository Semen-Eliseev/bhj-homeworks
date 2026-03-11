const controls = document.querySelector('.book__control_font-size');
const content = document.querySelector('.book__content');

controls.addEventListener('click', (event) => {
    event.preventDefault(); 

    if (event.target.classList.contains('font-size')) {
          
        controls.querySelectorAll('.font-size').forEach(link => {
            link.classList.remove('font-size_active');
        });

        event.target.classList.add('font-size_active');
        const size = event.target.getAttribute('data-size');
        if (size === 'big'){
            content.classList.remove('font-size_small');
            content.classList.add('font-size_big');
        }else if (size === 'small'){
            content.classList.remove('font-size_big');
            content.classList.add('font-size_small');
        }else{
            content.classList.remove('font-size_small');
            content.classList.remove('font-size_big');

        }
    }
});