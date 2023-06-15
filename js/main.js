/*capturo variable con ID de Html*/ 
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



/* creo elementos e utilizo for each para recorrer los productos y mostrar en web */
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">USD ${product.precio}</p>
    `;

    shopContent.append(content);
/* boton */     
    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";
    comprar.className = "Comprar";

    content.append(comprar);
/*Agrego funcionalidad al boton comprar y pushear a carrito */ 
    comprar.addEventListener("click", () => {
        Swal.fire({
            title: 'Excelente elección',
            confirmButtonText: 'Seleccionar',
            icon:'success',
            width: '20%',
            color: '#35b0bf',
            background: '#000',
            backdrop: false,
        });    
    const repeat = carrito.some ((repeatProduct) => repeatProduct.id === product.id);   
    console.log(repeat); 

    if (repeat) {
        carrito.map((prod) => {
           if(prod.id === product.id){
                prod.cantidad++;
            }
        });
    } else {
        
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
    }
            console.log(carrito);
            savelocal();
    });
});

// Local storage
const savelocal = () => {
    localStorage.setItem("carrito", JSON.stringify (carrito));
};



