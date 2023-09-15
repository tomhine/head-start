document.addEventListener("DOMContentLoaded", () => {
    const offcanvasToggles = document.querySelectorAll("[data-ts-toggle=offcanvas]");

    offcanvasToggles.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            const target = document.querySelector(e.target.dataset.target);
            console.log(target);

            if (target.classList.contains("hidden")) {
                const backdrop = document.createElement("div");
                backdrop.classList.add("backdrop");
                backdrop.setAttribute("data-ts.backdrop", "");
                backdrop.setAttribute("data-ts.target", toggle.dataset.target);
                document.body.appendChild(backdrop);

                document.body.classList.add("overflow-hidden");

                target.classList.remove("hidden");
            } else {
                const backdrop = document.querySelector("[data-ts-backdrop]");

                if (backdrop) {
                    backdrop.remove();
                    document.body.classList.remove("overflow-hidden");
                }

                target.classList.add("hidden");
            }
            target.classList.toggle("hidden");
        });
    });
});