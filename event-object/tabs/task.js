const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));
let switchTab = (activeTab)=> {
    tabs.forEach(tab => {
        tab.classList.remove('tab_active'); 
    });
    activeTab.classList.add('tab_active'); 

    const targetIndex = tabs.indexOf(activeTab);

    contents.forEach((content, index) => {
        content.classList.remove('tab__content_active');
        if (index === targetIndex) {
            content.classList.add('tab__content_active');
        }
    });
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        console.log(tab);
        switchTab(tab);
                
    });
});    
