const products = [
    {
        name: "Auriculares Nova X",
        category: "Tecnologia",
        price: "$89",
        stock: "Disponible",
        description: "Sonido limpio, bateria duradera y diseno ligero para trabajar o estudiar.",
        gradient: ["#38bdf8", "#2563eb"]
    },
    {
        name: "Lampara Atlas",
        category: "Hogar",
        price: "$42",
        stock: "Nuevo",
        description: "Iluminacion suave con control tactil y un cuerpo minimalista para escritorio.",
        gradient: ["#f59e0b", "#ef4444"]
    },
    {
        name: "Mouse Pulse Pro",
        category: "Oficina",
        price: "$36",
        stock: "Popular",
        description: "Preciso, ergonomico y preparado para largas jornadas frente a la pantalla.",
        gradient: ["#34d399", "#0f766e"]
    },
    {
        name: "Mochila Orbit",
        category: "Accesorios",
        price: "$58",
        stock: "Stock limitado",
        description: "Compartimentos amplios, cierre reforzado y un acabado resistente al uso diario.",
        gradient: ["#a78bfa", "#6366f1"]
    },
    {
        name: "Teclado Grid M",
        category: "Tecnologia",
        price: "$74",
        stock: "Disponible",
        description: "Teclas mecanicas silenciosas y una base estable para productividad diaria.",
        gradient: ["#60a5fa", "#22c55e"]
    },
    {
        name: "Organizador Desk One",
        category: "Oficina",
        price: "$25",
        stock: "Disponible",
        description: "Mantiene accesibles tus elementos esenciales y limpia la superficie de trabajo.",
        gradient: ["#fb7185", "#f97316"]
    }
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("productSearch");
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const resultsMeta = document.getElementById("resultsMeta");

let activeFilter = "all";
let activeQuery = "";

function renderProducts() {
    const filtered = products.filter((product) => {
        const matchesFilter = activeFilter === "all" || product.category === activeFilter;
        const searchableText = `${product.name} ${product.category} ${product.description}`.toLowerCase();
        const matchesQuery = searchableText.includes(activeQuery.toLowerCase());
        return matchesFilter && matchesQuery;
    });

    grid.innerHTML = filtered
        .map(
            (product) => `
                <article class="product-card" data-category="${product.category}">
                    <div class="product-visual" style="background: linear-gradient(135deg, ${product.gradient[0]}, ${product.gradient[1]});">
                        <span class="product-badge">${product.category}</span>
                        <span class="product-price">${product.price}</span>
                    </div>
                    <div class="product-body">
                        <div>
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                        </div>
                        <div class="product-meta">
                            <span>${product.stock}</span>
                            <span>Envio rapido</span>
                        </div>
                        <a class="product-action" href="#">Ver detalle</a>
                    </div>
                </article>
            `
        )
        .join("");

    resultsMeta.textContent = `${filtered.length} producto${filtered.length === 1 ? "" : "s"} encontrado${filtered.length === 1 ? "" : "s"}`;
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        renderProducts();
    });
});

searchInput.addEventListener("input", (event) => {
    activeQuery = event.target.value;
    renderProducts();
});

renderProducts();