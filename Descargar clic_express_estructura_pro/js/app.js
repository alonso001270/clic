
document.addEventListener("DOMContentLoaded", () => {
  fetch("data/productos.json")
    .then(res => res.json())
    .then(productos => {
      const contenedor = document.getElementById("contenedor-productos");
      productos.forEach(producto => {
        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
          <p>${producto.nombre}</p>
          <p>₡${producto.precio}</p>
          <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar</button>
        `;
        contenedor.appendChild(div);
      });
    });
});

function scrollToFormulario() {
  document.getElementById("formulario").scrollIntoView({ behavior: "smooth" });
}
