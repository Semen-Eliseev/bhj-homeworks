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
        const image = itemParent.children[1].src;
        const productsInCart = document.querySelectorAll(".cart__product"); 

        const addCart = () => {
            const cartProducts = document.querySelector(".cart__products");
          
            cartProducts.insertAdjacentHTML('afterbegin', `
                <div class="cart__product" data-id=${itemId}>
                    <img class="cart__product-image" src=${image}>
                    <div class="cart__product-count">${itemValue}</div>
                </div>
            `);
         
        };
   

    
        if(productsInCart.length>0){
            console.log(productsInCart);
            const filtered = Array.from(productsInCart).find(node => node.dataset.id == itemId);
            console.log(itemId);
            if(filtered){
                filtered.children[1].textContent = Number(filtered.textContent) + Number(itemValue);;
            }else{
                addCart(); 
            };
        }else{
            addCart();
        };    
            
    };
       
});    
