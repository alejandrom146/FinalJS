/*Al hacer click el usuario puede visualizar el carrito */
    
const pintarcarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class ="modal-header-tittle">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "❌";
    modalbutton.className = "modal-header-button";
    
    modalbutton.addEventListener("click", ()=> {
        modalContainer.style.display = "none";
    });
    
    modalHeader.append(modalbutton);
    
/*Para ver cada producto que haya elegido el usuario y for each para recorrerlo y symar el total de las unidades y precio.*/ 
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
       <img src="${product.img}">
       <h3>${product.nombre}</h3>
       <p>USD ${product.precio}</p>
       <p>Cantidad: ${product.cantidad}</p>
       <p>Total: USD ${product.cantidad * product.precio}</p>
       <span class ="delete-product">❌</span>
       `;
       
       modalContainer.append(carritoContent);
/*Eliminar producto del carrito*/     
       let eliminar = carritoContent.querySelector(".delete-product");

       eliminar.addEventListener("click", () => {
        Swal.fire({
            title: 'Eliminaste artículo',
            confirmButtonText: 'Continuar',
            icon:'error',
            width: '20%',
            color: '#ff0200',
            background: '#000',
            backdrop: false,
        }); 
        eliminarProducto(product.id);
       });
    });


/*usando metodo reduce para contabilizar el total de lo que eligio el usuario*/ 
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar: USD ${total}`; 
    modalContainer.append(totalBuying);
};
    
    verCarrito.addEventListener("click", pintarcarrito);

/*Funcion para eliminar unidades de producto de manera individual del carrito*/ 

const eliminarProducto = (id) => {
const foundId = carrito.find((element) => element.id === id);

console.log(foundId);

carrito = carrito.filter((carritoId) => {
return carritoId !== foundId;
});

pintarcarrito();

};


