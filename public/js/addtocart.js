document.getElementById('animals').addEventListener('click', async function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    const name = e.target.getAttribute('data-name');
    if (!id) {
        return;
    }

    const result = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({
            animal_id: id
        }),
        headers: {'Content-Type': 'application/json'}
    });

    if (result.ok) {
        alert(`${name} has been added to the cart!`);
    } else {
        alert('Error! Could not add to cart!');
    }

})