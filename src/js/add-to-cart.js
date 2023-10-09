document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[data-js-cart="true"]');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();



        console.log('form submitted');
    });
});