//para cada slide tem 5 cards
//total de slides = 3
//total de cards = 15

const cardsProducts = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  originalPrice: "R$ 100,00",
  discountedPrice: "R$ 79,90",
  discounted: "10% OFF",
  installmentPrice: "10x de R$ 7,90",
  image: "../images/personModel.png",
}));

function createCard(products) {
  return `
    <div class="card">
        <span class="new-emphasis badge start-0 m-2">Novo</span>
        <img src="${products.image}" class="card-img-top" alt="product" />
            <div class="card-body">
                <h3>
                    Lorem ipsum dolor sit amet consectetuer adipiscing elit
                </h3>
                <div class="card-textDiscounted-content">
                    <p class="card-old-price text-muted">${products.originalPrice}</p>
                    <p class="text-discounted-price">
                        ${products.discountedPrice}
                        <span class="badge" style="background-color: #5ec0be">
                            <a href="#">${products.discounted}</a>
                        </span>
                    </p>
                </div>
                <p class="installment-price text-muted">
                    Ou em até
                    <strong style="color: black">${products.installmentPrice}</strong>
                </p>
                <a href="#" class="btn btn-primary w-100">Comprar</a>
            </div>
    </div>
`;
}

function getCardsPerSlide() {
  return window.innerWidth < 768 ? 2 : 5;
}

function createCarousel() {
  const carousels = document.querySelectorAll(".carousel-inner");

  carousels.forEach((carouselContent) => {
    carouselContent.innerHTML = "";

    const cardsPorSlide = getCardsPerSlide();
    const totalSlides = Math.ceil(cardsProducts.length / cardsPorSlide);

    for (let i = 0; i < totalSlides; i++) {
      const slideProducts = cardsProducts.slice(
        i * cardsPorSlide,
        (i + 1) * cardsPorSlide
      );

      const slideHtml = `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <div class="d-flex flex-nowrap overflow-auto" style="gap: 16px">
            ${slideProducts.map(createCard).join("")}
          </div>
        </div>
      `;

      carouselContent.innerHTML += slideHtml;
    }
  });
}

window.addEventListener("load", createCarousel);
window.addEventListener("resize", () => {
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(createCarousel, 0);
});
