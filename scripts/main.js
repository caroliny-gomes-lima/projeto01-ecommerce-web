async function LoadComponents(id, htmlPath, cssPath) {
  const [htmlResponse, cssResponse] = await Promise.all([
    fetch(htmlPath),
    fetch(cssPath),
  ]);
  let html = await htmlResponse.text();
  let css = await cssResponse.text();

  const container = document.getElementById(id);

  if (id === "first-carousel") {
    html = html
      .replace(/{{CAROUSEL_ID}}/g, "carousel-cards-1")
      .replace(/{{CAROUSEL_INNER_ID}}/g, "carousel-inner-1");
  } else if (id === "second-carousel") {
    html = html
      .replace(/{{CAROUSEL_ID}}/g, "carousel-cards-2")
      .replace(/{{CAROUSEL_INNER_ID}}/g, "carousel-inner-2");
  }

  container.innerHTML = html;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  if (id === "header") {
    setTimeout(() => {
      handleDropdown();
      handleSearchClick();

      createColumns({
        containerId: "dropdown-all-category",
        columnClass: "column-department",
        ulClass: "department p-1 m-0",
        liClass: "department-item d-flex",
        spanClass: "department-text",
        text: "Departamento",
        columns: 1,
        itens: 10,
        icon: true,
      });

      createColumns({
        containerId: "dropdown-all-category",
        columnClass: "column-category",
        ulClass: "category p-1 m-0",
        liClass: "category-item d-flex",
        spanClass: "category-text",
        text: "Categoria",
        columns: 3,
        itens: 6,
      });

      createColumns({
        containerId: "dropdown-department-category",
        columnClass: "column-category",
        ulClass: "department-category-list",
        liClass: "department-category-item d-flex",
        spanClass: "department-category-text",
        text: "Categoria",
        columns: 3,
        itens: 6,
      });
    }, 0);
  }
  return true;
}

LoadComponents(
  "header",
  "../components/header/header.html",
  "../components/header/header.css"
);

LoadComponents(
  "banner",
  "../components/banner/banner.html",
  "../components/banner/banner.css"
);

LoadComponents(
  "product-highlight",
  "../components/productHighlight/product-highlight.html",
  "../components/productHighlight/product-highlight.css"
);

LoadComponents(
  "product-detail",
  "../components/productDetail/product-detail.html",
  "../components/productDetail/product-detail.css"
);

LoadComponents(
  "first-carousel",
  "../components/carousel/carousel.html",
  "../components/carousel/carousel.css"
).then(() => createCarousel());

LoadComponents(
  "second-carousel",
  "../components/carousel/carousel.html",
  "../components/carousel/carousel.css"
).then(() => createCarousel());

LoadComponents(
  "contact",
  "../components/contact/contact.html",
  "../components/contact/contact.css"
);
LoadComponents(
  "footer",
  "../components/footer/footer.html",
  "../components/footer/footer.css"
);
