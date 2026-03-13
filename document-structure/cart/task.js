document.addEventListener("click", function (e) {
    e.preventDefault();
    
    const item = e.target.parentElement;
    
    if(e.target.classList.contains('product__quantity-control_dec')){
        
        if(Number(item.children[1].textContent.trim()) > 0){
            item.children[1].innerText = Number(item.children[1].textContent.trim()) - 1;
        }
    }
    if(e.target.classList.contains('product__quantity-control_inc')){
            item.children[1].innerText = Number(item.children[1].textContent.trim()) + 1;
    }

    if(e.target.classList.contains('product__add')){
        const itemParent = e.target.closest('.product');
        const itemId = itemParent.getAttribute('data-id');
        const itemValue = Number(e.target.previousElementSibling.children[1].textContent.trim());
        const image = itemParent.children[1];
        const productsOnCart = document.querySelectorAll(".cart__product"); 

        const addCart = () => {
            const productDiv = document.createElement("div");
            productDiv.className = "cart__product";
            productDiv.data_id = itemId;
            
            const titleDiv = document.createElement("img");
            titleDiv.className = "cart__product-image";
            titleDiv.src = image.src;
            
            const countDiv = document.createElement("div");
            countDiv.className = "cart__product-count";
            countDiv.textContent = itemValue;


            productDiv.appendChild(titleDiv);
            productDiv.appendChild(countDiv);
                
            document.querySelector(".cart__products").appendChild(productDiv); 
        }; 

        if (itemValue > 0) {
            if(productsOnCart.length>0){
                const filtered = Array.from(productsOnCart).filter(node => node.data_id === itemId);
                if(filtered.length > 0){
                    filtered.forEach(prod => {
                       valueProd = Number(prod.textContent) + Number(itemValue);
                       prod.children[1].textContent = valueProd;
                    });    
                }else{
                    addCart(); 
                };

            }else{
                addCart();
            };    
            
            
        };    
        
        
    };
       
});    
