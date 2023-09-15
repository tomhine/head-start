document.addEventListener("DOMContentLoaded", () => {
    const offcanvasToggles = document.querySelectorAll("[data-ts-toggle=offcanvas]");
    const offcanvasCloses = document.querySelectorAll("[data-ts-dismiss=offcanvas]");

    offcanvasToggles.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            const target = document.querySelector(e.target.dataset.tsTarget);
            console.log('event: ', e);
            console.log('target: ', target);

            if (target.classList.contains("hidden")) {
                openOffcanvas(e.target.dataset.tsTarget);
            } else {
                closeOffcanvas(e.target.dataset.tsTarget);
            }
            // target.classList.toggle("hidden");
        });
    });

    offcanvasCloses.forEach((close) => {
       close.addEventListener("click", (e) => {
           closeOffcanvas(e.target.dataset.tsTarget);
       });
    });
});

function openOffcanvas(target) {
    const offcanvas = document.querySelector(target);
    const backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");
    backdrop.setAttribute("data-ts-backdrop", "");
    backdrop.setAttribute("data-ts-target", target);
    document.body.appendChild(backdrop);

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
        backdrop.remove();
        document.body.classList.remove("overflow-hidden");
    }

    offcanvas.classList.add("opacity-0");
    setTimeout(() => {
        offcanvas.classList.add("hidden");
        offcanvas.classList.remove("opacity-0");
    }, 250);
}
