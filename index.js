function handleRoute(route) {
    const contenedorEl = document.querySelector(".contenedor");
    
    const routes = [
    {
        path: /\/sit1/,
        handler: () => (contenedorEl.textContent = "Situación 1..."),
    },
    {
        path: /\/sit2/,
        handler: () => (contenedorEl.textContent = "Situación 2..."),
    },
    {
        path: /\/search\/./,
        handler: () => (contenedorEl.textContent = "Buscar: ..."),
    },
];
for (const r of routes) {
    if (r.path.test(route)) {
        r.handler();
    }
}
}

function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
}

(function() {
    const botonUno = document.querySelector(".sit-1");
    const botonDos = document.querySelector(".sit-2");
    const botonBuscar = document.querySelector(".sit-3");

    botonUno.addEventListener("click", () => goTo("/sit1"));
    botonDos.addEventListener("click", () => goTo("/sit2"));
    botonBuscar.addEventListener("click", () => goTo("/search/parlante"));

     window.addEventListener("load", () => {
         handleRoute(location.pathname);
     });
})();



