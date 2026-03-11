const createRotator = () => {
    const cases = document.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    const rotate = () => {
        const currentCase = cases[currentIndex];
        currentCase.classList.add('rotator__case_active');

        setTimeout(() => {
            currentCase.classList.remove('rotator__case_active');
            currentIndex = (currentIndex + 1) % cases.length;
            rotate();
        }, 1000);
    };

    rotate();
};


createRotator();
