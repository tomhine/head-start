import {addToCart} from "./cart-helpers";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[data-js-cart="true"]');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const variantId = form.dataset.variantId;

        const [data, error] = await addToCart([{ variantId, quantity: 1 }]);

        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }

        console.log('form submitted');
    });
});