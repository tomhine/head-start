document.addEventListener("DOMContentLoaded", () => {
    const offcanvasToggles = document.querySelectorAll("[data-ts-toggle=offcanvas]");

    offcanvasToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const target = document.querySelector(toggle.dataset.target);
            target.classList.toggle("hidden");
        });
    });
});