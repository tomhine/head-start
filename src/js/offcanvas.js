document.addEventListener("DOMContentLoaded", () => {
    const offcanvasToggles = document.querySelectorAll("[data-ts-toggle=offcanvas]");

    offcanvasToggles.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            const target = document.querySelector(e.target.dataset.tsTarget);

            if (target.classList.contains("hidden")) {
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
    backdrop.classList.add("backdrop", "opacity-0");
    backdrop.setAttribute("data-ts-backdrop", "");
    backdrop.setAttribute("data-ts-target", target);
    backdrop.setAttribute("data-ts-dismiss", "offcanvas")
    document.body.appendChild(backdrop);

    setTimeout(() => {
        backdrop.classList.remove("opacity-0");
    }, 0);

    document.body.classList.add("overflow-hidden");

    offcanvas.classList.add("opacity-0");
    offcanvas.classList.remove("hidden");
    setTimeout(() => {
        offcanvas.classList.remove("opacity-0");
    }, 250);
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

    offcanvas.classList.add("opacity-0");
    setTimeout(() => {
        offcanvas.classList.add("hidden");
        offcanvas.classList.remove("opacity-0");
    }, 250);
}
