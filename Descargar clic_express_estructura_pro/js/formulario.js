
function enviarFormulario(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const pedido = document.getElementById("pedido").value;

  if (!nombre || !telefono || !pedido) {
    alert("Por favor complete todos los campos.");
    return false;
  }

  document.getElementById("confirmacion").style.display = "block";
  return false;
}
