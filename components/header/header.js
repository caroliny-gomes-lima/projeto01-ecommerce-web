function handleSearchClick() {
  const searchIcon = document.querySelector(".search-icon");
  const searchInput = document.getElementById("search-input");
  const searchResult = document.getElementById("search-result");

  searchIcon.addEventListener("click", () => {
    searchResult.style.display = "flex";
    const searchText = searchInput.value.trim();
    if (searchText !== "") {
      searchResult.textContent = `Você buscou por: '${searchText}'`;
    } else {
      searchResult.textContent = "";
    }
  });
}

function handleDropdown() {
  const menuCategorias = document.getElementById("all-category");
  const dropdown = document.getElementById("dropdown-all-category");

  const menuDepartamentos = document.getElementById("all-department");
  const dropdownDepartamentos = document.getElementById("dropdown-department");

  if (menuCategorias && dropdown) {
    menuCategorias.addEventListener("mouseenter", () => {
      dropdown.style.display = "flex";
    });

    menuCategorias.addEventListener("mouseleave", () => {
      dropdown.style.display = "none";
    });
  }

  if (menuDepartamentos && dropdownDepartamentos) {
    menuDepartamentos.addEventListener("mouseenter", () => {
      dropdownDepartamentos.style.display = "flex";
    });

    menuDepartamentos.addEventListener("mouseleave", () => {
      dropdownDepartamentos.style.display = "none";
    });
  }
}

function createColumns({
  containerId,
  columnClass,
  ulClass,
  liClass,
  spanClass,
  text,
  columns,
  itens,
  icon = false,
}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  for (let i = 0; i < columns; i++) {
    const column = document.createElement("div");
    column.className = columnClass;

    const ul = document.createElement("ul");
    ul.className = ulClass;

    for (let itemCreated = 0; itemCreated < itens; itemCreated++) {
      ul.innerHTML += `
        <li class="${liClass}">
          <span class="${spanClass}">${text}</span>
          ${icon ? '<i class="bi bi-chevron-right ms-5"></i>' : ""}
        </li>
      `;
    }
    column.appendChild(ul);
    container.appendChild(column);
  }
}
