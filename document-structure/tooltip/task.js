
document.addEventListener("DOMContentLoaded", function () {
    const tooltips = document.querySelectorAll('.has-tooltip');

    tooltips.forEach((tooltip) => {
        tooltip.addEventListener('click', function (event) {
            event.preventDefault();

            const existingTooltip = document.querySelector('.tooltip');
            if (existingTooltip) {
                existingTooltip.remove();
            }

            const tooltipText = this.getAttribute('title');
            const tooltipElement = document.createElement('div');
            tooltipElement.classList.add('tooltip');
            tooltipElement.classList.toggle('tooltip-active');
            tooltipElement.innerText = tooltipText;
            tooltipElement.style.display = 'block';

            const rect = this.getBoundingClientRect();
            tooltipElement.style.left = `${rect.left + window.scrollX}px`;
            tooltipElement.style.top = `${rect.bottom + window.scrollY}px`;
            
            document.body.appendChild(tooltipElement);
        });
    });

   
    document.addEventListener('click', function (event) {
        if (!event.target.matches('.has-tooltip')) {
            const existingTooltip = document.querySelector('.tooltip');
            if (existingTooltip) {
                existingTooltip.remove();
            }
        }
    });
});
