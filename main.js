let seleccion = prompt("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-Buzo $3000 2-Remera $1500 3-Jean $5000 4-Campera $6000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
switch (seleccionarProductos) {
    case 1:
seleccionarCantidad= Number(prompt("el producto seleccionado es Buzo, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3000)
break;
case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es Remera, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1500)
break;
    case 3:
seleccionarCantidad = Number(prompt("el producto seleccionado es Jean, indique la cantidad"))
total += cantidad(seleccionarCantidad, 5000)
    break;
    case 4:
seleccionarCantidad = Number(prompt("el producto seleccionado es Campera, indique la cantidad"))
total += cantidad(seleccionarCantidad, 6000)
break;

default:
break;
}
seleccionarProductos = Number(prompt( "1-Buzo $3000 2-Remera $1500 3-Jean $5000 4-Campera $6000 "))
}

alert("el total de la compra es de: " + total)
