const projects = [
    {
        name: "Landing Aurora",
        category: "Web",
        status: "Finalizado",
        result: "+32% conversion",
        description: "Landing comercial con jerarquia visual clara, formularios breves y CTA principal definido.",
        gradient: ["#fb7185", "#f97316"]
    },
    {
        name: "Dashboard Pulse",
        category: "UX",
        status: "En progreso",
        result: "Menos friccion",
        description: "Redisenado del panel para reducir clics, mejorar escaneabilidad y ordenar metricas clave.",
        gradient: ["#38bdf8", "#2563eb"]
    },
    {
        name: "Marca Nexo",
        category: "Branding",
        status: "Finalizado",
        result: "Sistema unificado",
        description: "Identidad flexible con componentes de marca, tono visual y aplicaciones listas para uso.",
        gradient: ["#a78bfa", "#7c3aed"]
    },
    {
        name: "Tienda Flux",
        category: "Ecommerce",
        status: "Finalizado",
        result: "+18% ticket",
        description: "Experiencia de compra optimizada con categorias visibles, filtros rapidos y checkout simple.",
        gradient: ["#34d399", "#0f766e"]
    },
    {
        name: "Sistema Atlas",
        category: "Web",
        status: "En progreso",
        result: "Arquitectura limpia",
        description: "Base modular para escalar contenidos, documentacion y nuevas secciones sin friccion.",
        gradient: ["#f59e0b", "#ea580c"]
    },
    {
        name: "Onboarding Nova",
        category: "UX",
        status: "Finalizado",
        result: "-25% abandono",
        description: "Flujo de alta simplificado con pasos claros, feedback inmediato y validaciones suaves.",
        gradient: ["#60a5fa", "#22c55e"]
    }
];

const grid = document.getElementById("projectGrid");
const searchInput = document.getElementById("projectSearch");
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const resultsMeta = document.getElementById("resultsMeta");

let activeFilter = "all";
let activeQuery = "";

function renderProjects() {
    const filtered = projects.filter((project) => {
        const matchesFilter = activeFilter === "all" || project.category === activeFilter;
        const searchableText = `${project.name} ${project.category} ${project.status} ${project.description}`.toLowerCase();
        const matchesQuery = searchableText.includes(activeQuery.toLowerCase());
        return matchesFilter && matchesQuery;
    });

    grid.innerHTML = filtered
        .map(
            (project) => `
                <article class="project-card" data-category="${project.category}">
                    <div class="project-visual" style="background: linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]});">
                        <span class="project-badge">${project.category}</span>
                        <span class="project-status">${project.status}</span>
                    </div>
                    <div class="project-body">
                        <div>
                            <h3>${project.name}</h3>
                            <p>${project.description}</p>
                        </div>
                        <div class="project-meta">
                            <span>Resultado</span>
                            <strong>${project.result}</strong>
                        </div>
                        <a class="project-action" href="#">Ver caso</a>
                    </div>
                </article>
            `
        )
        .join("");

    resultsMeta.textContent = `${filtered.length} proyecto${filtered.length === 1 ? "" : "s"} encontrado${filtered.length === 1 ? "" : "s"}`;
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        renderProjects();
    });
});

searchInput.addEventListener("input", (event) => {
    activeQuery = event.target.value;
    renderProjects();
});

renderProjects();