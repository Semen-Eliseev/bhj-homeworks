
const lists = document.querySelectorAll('.dropdown');
lists.forEach((e) => {
    const listValue = e.querySelector('.dropdown__value');
    const list = e.querySelector('.dropdown__list');

    listValue.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active');
    });

    list.addEventListener('click', (event) => {
        event.preventDefault();
              
        const elem = event.target.closest('.dropdown__link');
            if (elem) {
                listValue.textContent = elem.textContent;
                list.classList.remove('dropdown__list_active');
            }
        });

    document.addEventListener('click', (event) => {
      if (!e.contains(event.target)) {
        list.classList.remove('dropdown__list_active');
      }
    });
});
