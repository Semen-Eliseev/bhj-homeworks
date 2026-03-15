document.getElementById("tabs1").addEventListener("click", function (e) {
    e.preventDefault();
    
    const item = e.target.parentElement;
    
    if(e.target.classList.contains('tab')){
        
        list = document.querySelectorAll(".tab");
        Array.from(list).forEach(element => {
            element.classList.remove("tab_active");
        });
        
        e.target.classList.add("tab_active");

        const targetIndex = Array.from(list).indexOf(e.target);
        const contents = Array.from(document.querySelector('.tab__contents').children);
        contents.forEach((content, index) => {
            content.classList.remove('tab__content_active');
            if (index === targetIndex) {
                content.classList.add('tab__content_active');
            };
        });
    
    };          
     

});
