import{cart,removeitem,size} from "../data/cart.js";
import {products} from "../data/products.js";

function updatecartsize() {
  let cartsize = size();
  document.querySelector(".js-cartsize")
    .innerHTML = `Checkout (<a class="return-to-home-link"
    href="amazon.html">${cartsize} items</a>)`;
}

cart.forEach(cartitem=> {
    let flag;
    products.forEach(item =>{
        if(item.id===cartitem.id){
            flag=item;
        }
        
    });
    if(flag){
    document.querySelector(".js-cart-value")
        .innerHTML+=`
        <div class="cart-item-container-${cartitem.id}">
        <div class="delivery-date">
          Delivery date: Tuesday, June 21
        </div>
        
        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${flag.image}">
        
          <div class="cart-item-details">
            <div class="product-name">
              ${flag.name}
            </div>
            <div class="product-price">
              $${(flag.priceCents/100).toFixed(2)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${cartitem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary js-delete data" data-product-id=${cartitem.id}>
                Delete
              </span>
            </div>
          </div>
        
          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            <div class="delivery-option">
              <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-1-${flag.id}">
              <div>
                <div class="delivery-option-date">
                  Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                  FREE Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio"
                class="delivery-option-input"
                name="delivery-option-1-${flag.id}">
              <div>
                <div class="delivery-option-date">
                  Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                  $4.99 - Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio"
                class="delivery-option-input"
                name="delivery-option-1-${flag.id}">
              <div>
                <div class="delivery-option-date">
                  Monday, June 13
                </div>
                <div class="delivery-option-price">
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>`;
    }
});
updatecartsize();

document.querySelectorAll(".js-delete")
  .forEach(item =>{
      item.addEventListener('click',()=>{
          let check=item.dataset.productId;
          removeitem(check);
          document.querySelector(`.cart-item-container-${check}`)
            .remove();
          updatecartsize();
      })

  });
