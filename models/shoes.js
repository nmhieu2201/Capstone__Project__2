function Shoes() {
  this.render = function (shoe) {
    const container = document.getElementById("list-shoes");
    const html = `
    <div class="shoes-item" key="${shoe.id}">
        <div class="info">
        <div class="img">
            <img src="${shoe.image}" alt="${shoe.description}" />
        </div>
        <div class="desc">
            <h1 class="name">${shoe.name}</h1>
            <p class="des">${shoe.shortDescription}</p>
        </div>
        </div>
        <div class="buy-cost">
        <a href="" class="btn-buy">Buy now</a>
        <div class="cost">
            <span>${shoe.price} $</span>
        </div>
        </div>
    </div>
    `;
    container.insertAdjacentHTML("afterbegin", html);
  };
}
export default Shoes;
