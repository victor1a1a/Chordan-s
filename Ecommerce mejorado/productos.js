document.addEventListener('DOMContentLoaded', function () {
    const campoDeBusqueda = document.getElementById('buscar');
  
    campoDeBusqueda.addEventListener('input', function () {
      const filtro = campoDeBusqueda.value.toUpperCase();
      const columnas = document.querySelectorAll('.col');
  
      columnas.forEach(function (columna) {
        const titulo = columna.querySelector('.card-title').textContent.toUpperCase();
        const texto = columna.querySelector('.card-text').textContent.toUpperCase();
  
        if (titulo.indexOf(filtro) > -1 || texto.indexOf(filtro) > -1) {
          columna.style.display = '';
        } else {
          columna.style.display = 'none';
        }
      });
    });
  
    const formDeBusqueda = document.querySelector('form');
  
    formDeBusqueda.addEventListener('submit', function (e) {
      e.preventDefault();
      const filtro = campoDeBusqueda.value.toUpperCase();
      const columnas = document.querySelectorAll('.col');
  
      columnas.forEach(function (columna) {
        const titulo = columna.querySelector('.card-title').textContent.toUpperCase();
        const texto = columna.querySelector('.card-text').textContent.toUpperCase();
  
        if (titulo.indexOf(filtro) > -1 || texto.indexOf(filtro) > -1) {
          columna.style.display = '';
        } else {
          columna.style.display = 'none';
        }
      });
    });
  
    campoDeBusqueda.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const filtro = campoDeBusqueda.value.toUpperCase();
        const columnas = document.querySelectorAll('.col');
  
        columnas.forEach(function (columna) {
          const titulo = columna.querySelector('.card-title').textContent.toUpperCase();
          const texto = columna.querySelector('.card-text').textContent.toUpperCase();
  
          if (titulo.indexOf(filtro) > -1 || texto.indexOf(filtro) > -1) {
            columna.style.display = '';
          } else {
            columna.style.display = 'none';
          }
        });
      }
    });
  });
  
  
  



window.addEventListener("load", function () {
    var referenceImage = document.getElementById("reference-image");
    var referenceHeight = referenceImage.clientHeight;
    var images = document.querySelectorAll(".same-height");
  
    images.forEach(function (img) {
      img.style.height = referenceHeight + "px";
    });
  });




  function agregarAlCarrito(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ nombre: nombre, precio: precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto agregado al carrito');
  }
  
  function onComprarClick(nombre, precio) {
    agregarAlCarrito(nombre, precio);
  }
  
  