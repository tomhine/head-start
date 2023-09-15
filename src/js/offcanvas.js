document.addEventListener("DOMContentLoaded", () => {
    const offcanvasToggles = document.querySelectorAll("[data-ts-toggle=offcanvas]");

    offcanvasToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const target = document.querySelector(toggle.dataset.target);
            console.log(target);

            if (target.classList.contains("hidden")) {
                const backdrop = document.createElement("div");
                backdrop.classList.add("ts-backdrop");
                backdrop.setAttribute("data-ts.backdrop", "");
                backdrop.setAttribute("data-ts.target", toggle.dataset.target);
                document.body.appendChild(backdrop);

                document.body.classList.add("overflow-hidden");

                target.classList.remove("hidden");
            } else {
                const backdrop = document.querySelector("[data-ts-backdrop]");

                if (backdrop) {
                    backdrop.classList.add("hidden");
                }

                target.classList.add("hidden");
            }
            target.classList.toggle("hidden");
        });
    });
});