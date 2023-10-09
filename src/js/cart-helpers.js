
export async function addToCart(items) {
    let data, error = null;

    try {
        const response = await fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items),
        });

        data = await response.json();
    } catch (err) {
        console.error(err);

        error = err;
    }

    return [data, error];
}

export async function updateCart(items) {
    let data, error = null;

    try {
        const response = await fetch(window.Shopify.routes.root + 'cart/change.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items),
        });

        data = await response.json();
    } catch (err) {
        console.error(err);

        error = err;
    }

    return [data, error];
}