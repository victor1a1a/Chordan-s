document.addEventListener("DOMContentLoaded", function () {
  let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarProductosEnCarrito(productosEnCarrito);

  document
    .getElementById("vaciar-carrito")
    .addEventListener("click", function () {
      localStorage.removeItem("carrito");
      mostrarProductosEnCarrito([]);
    });
});

function mostrarProductosEnCarrito(productos) {
  const listaProductosElemento = document.getElementById("lista-productos");
  listaProductosElemento.innerHTML = "";

  productos.forEach(function (producto) {
    const productoHTML = `
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">$${producto.precio}</p>
              <button class="btn btn-danger btn-eliminar" data-nombre="${producto.nombre}">Eliminar</button>
            </div>
          </div>
        </div>
      `;
    listaProductosElemento.innerHTML += productoHTML;
  });

  document.querySelectorAll(".btn-eliminar").forEach(function (boton) {
    boton.addEventListener("click", function (evento) {
      const nombreProducto = evento.target.dataset.nombre;
      eliminarProductoDelCarrito(nombreProducto);
    });
  });
}

function eliminarProductoDelCarrito(nombreProducto) {
  let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
  productosEnCarrito = productosEnCarrito.filter(function (producto) {
    return producto.nombre !== nombreProducto;
  });
  localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
  mostrarProductosEnCarrito(productosEnCarrito);
}