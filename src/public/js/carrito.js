const addButton = document.querySelectorAll(".addButton")

const agregarProd = (idProduct) => {
    const url = 'http://localhost:8080/api/carts/'
    const bodyPost = [
        {
            _id: idProduct
        }
    ]

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyPost),
    })
        .then(response => {
            if (response.ok) {
                console.log('Solicitud POST exitosa');
            } else {
                console.error('Error en la solicitud POST');
            }
        })
        .catch(error => {
            console.error('Error en la solicitud POST:', error);
        });
}

addButton.forEach(addButton => {
    addButton.addEventListener("click", (id) => {
        const idProduct = id.target.id;
        agregarProd(idProduct);
    });
});