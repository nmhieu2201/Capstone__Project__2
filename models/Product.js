function renderProduct(product) {
  const Ele = document.getElementById("product");
  var prdSize ="";
  for (let size of product.size){
    prdSize += `
        <span>${size}</span>
    `
  }
  const html = `
        <div class="row" key=${product.id}}>
            <div class="cart-img">
                <div class="img">
                    <img src="${product.image}" alt="">
                </div>
            </div>
            <div class="cart-info">
                <div class="name-description">
                    <h1 class="name">${product.name}</h1>
                    <p class="des">${product.description}</p>
                </div>
                <div class="product-size">
                    <h4>Avaiable size</h4>
                    <div class="size">
                        ${prdSize}
                    </div>
                <div class="cost">
                    ${product.price}$
                </div>
             <div class="plus-minus">
                 <div class="plus">
                    <i class="fa-solid fa-plus"></i>
                 </div>
                <span>1</span>
                <div class="minus">
                    <i class="fa-solid fa-minus"></i>
                 </div>
            </div>
            <button class="btn-addtocart">Add to cart</button>
            </div>
            </div>
        </div>
        `;
  Ele.insertAdjacentHTML("afterbegin", html);
}

export default renderProduct;
