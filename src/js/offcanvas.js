document.addEventListener("DOMContentLoaded", () => {
    const offcanvasToggles = document.querySelectorAll("[data-ts-toggle=offcanvas]");

    offcanvasToggles.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            const target = document.querySelector(e.target.dataset.tsTarget);

            if (target.classList.contains("show")) {
                openOffcanvas(e.target.dataset.tsTarget);
            } else {
                closeOffcanvas(e.target.dataset.tsTarget);
            }
        });
    });

    document.addEventListener("click", (e) => {
        if (e.target.dataset.tsDismiss === "offcanvas") {
            closeOffcanvas(e.target.dataset.tsTarget);
        }
    });
});

function openOffcanvas(target) {
    const offcanvas = document.querySelector(target);
    const backdrop = document.createElement("div");
    backdrop.classList.add("offcanvas-backdrop", "opacity-0");
    backdrop.setAttribute("data-ts-backdrop", "");
    backdrop.setAttribute("data-ts-target", target);
    backdrop.setAttribute("data-ts-dismiss", "offcanvas")
    document.body.appendChild(backdrop);

    setTimeout(() => {
        backdrop.classList.remove("opacity-0");
    }, 0);

    document.body.classList.add("overflow-hidden");

    offcanvas.classList.remove("hidden");
    offcanvas.classList.add("show");
}

function closeOffcanvas(target) {
    const offcanvas = document.querySelector(target);
    const backdrop = document.querySelector("[data-ts-backdrop]");

    if (backdrop) {
        backdrop.classList.add("opacity-0");

        document.body.classList.remove("overflow-hidden");

        setTimeout(() => {
        backdrop.remove();
        }, 250);
    }

    offcanvas.classList.remove("show");
    setTimeout(() => {
        offcanvas.classList.add("hidden");
    }, 250);
}
