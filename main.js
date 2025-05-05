const contenidocompra = document. getElementById("contenidocompra") 
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
      id: 1,
      nombre: "Buzo",
      precio: 5000,
            cantidad: 1,
    },
    {
      id: 2,
      nombre: "Remera",
      precio: 1000,
     cantidad: 1,
    },
    {
      id: 3,
      nombre: "Jean",
      precio: 1500,
    cantidad: 1,
    },
    {
      id: 4,
      nombre: "Zapatilla",
      precio: 2000,
      cantidad: 1,
    },
  ];

  const productosJSON = JSON.stringify(productos)
  localStorage.setItem("productos",productosJSON)
  console.log (localStorage.getItem("productos"))

  const productos1 = JSON.parse(localStorage.getItem("productos"))
  console.log(productos1)

  let carrito = [];

  productos.forEach ((product)=>{
    let content = document.createElement ("div");
    content.className = "card";
    content.innerHTML = `
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;
contenidocompra.append (content);

let comprar = document.createElement("button");
comprar.innerText = "Comprar";
comprar.className = "comprar";

content.append (comprar);

comprar.addEventListener("click", ()=> {
    carrito.push({
     id : product.id,
     nombre: product.nombre,
     precio: product.precio,
    });

    console.log (carrito);
});
  });

  verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement ("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal- header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click",() => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

carrito.forEach((product) => { 
    let carritoContect = document.createElement("div");
    carritoContect.className = "modal-content";
    carritoContect.innerHTML = `
    <h3>${product.nombre}</h3>
    <p>${product.precio} $</p>
    `;
    modalContainer.append(carritoContect);
  });

  const total = carrito.reduce ((acc,el)=> acc + el.precio,0);

  const totalbuying = document.createElement ("div");
  totalbuying.className = "total-content";
  totalbuying.innerHTML = `total a pagar: ${total} $`;
  modalContainer.append (totalbuying);
});

