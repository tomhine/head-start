document.addEventListener("DOMContentLoaded", () => {
    const offcanvasToggles = document.querySelectorAll("[data-ts-toggle=offcanvas]");

    offcanvasToggles.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            const target = document.querySelector(e.target.dataset.tsTarget);

            if (target.classList.contains("show")) {
                closeOffcanvas(e.target.dataset.tsTarget);
            } else {
                openOffcanvas(e.target.dataset.tsTarget);
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
    backdrop.classList.add("offcanvas-backdrop", "transition-opacity", "duration-300", "opacity-0");
    backdrop.setAttribute("data-ts-backdrop", "");
    backdrop.setAttribute("data-ts-target", target);
    backdrop.setAttribute("data-ts-dismiss", "offcanvas")
    document.body.appendChild(backdrop);

    setTimeout(() => {
        backdrop.classList.remove("opacity-0");
    }, 0);

    document.documentElement.style.overflow = "hidden";

    offcanvas.classList.add("showing");
    offcanvas.classList.add("show");
    setTimeout(() => {
        offcanvas.classList.remove("showing");
    }, 250);
}

function closeOffcanvas(target) {
    const offcanvas = document.querySelector(target);
    const backdrop = document.querySelector("[data-ts-backdrop]");

    offcanvas.classList.add("hiding");

    setTimeout(() => {
        offcanvas.classList.remove("show");
        offcanvas.classList.remove('hiding');
    }, 250);

    if (backdrop) {
        backdrop.classList.add("delay-100", "opacity-0");

        document.documentElement.style.overflow = "";

        setTimeout(() => {
            backdrop.remove();
        }, 250);
    }
}
