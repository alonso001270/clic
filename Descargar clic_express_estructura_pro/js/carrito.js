
let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
  actualizarPedidoTexto();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";

  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - ₡${item.precio}`;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = `Total: ₡${total}`;
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
  actualizarPedidoTexto();
}

function actualizarPedidoTexto() {
  const textarea = document.getElementById("pedido");
  const resumen = carrito.map(item => item.nombre).join(", ");
  textarea.value = resumen ? `Pedido: ${resumen}` : "";
}
