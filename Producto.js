document.addEventListener('DOMContentLoaded', () => {
  // 1. LÓGICA DEL CARRUSEL
  const track = document.getElementById('track');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  let tarjetas = document.querySelectorAll('.category-card');

  if (track && btnPrev && btnNext && tarjetas.length > 0) {
    const paso = 262; 

    // Clonar elementos para efecto infinito
    const primerClon = tarjetas[0].cloneNode(true);
    const ultimoClon = tarjetas[tarjetas.length - 1].cloneNode(true);

    track.appendChild(primerClon);
    track.insertBefore(ultimoClon, tarjetas[0]);

    const tarjetasActualizadas = document.querySelectorAll('.category-card');
    let indiceActual = 1; 

    track.style.transition = 'none';
    track.style.transform = `translateX(-${indiceActual * paso}px)`;

    let enTransicion = false;

    const moverCarrusel = () => {
      track.style.transition = 'transform 0.4s ease-in-out';
      track.style.transform = `translateX(-${indiceActual * paso}px)`;
    };

    btnNext.addEventListener('click', () => {
      if (enTransicion) return;
      enTransicion = true;
      indiceActual++;
      moverCarrusel();
    });

    btnPrev.addEventListener('click', () => {
      if (enTransicion) return;
      enTransicion = true;
      indiceActual--;
      moverCarrusel();
    });

    track.addEventListener('transitionend', () => {
      enTransicion = false;

      if (indiceActual >= tarjetasActualizadas.length - 1) {
        track.style.transition = 'none';
        indiceActual = 1;
        track.style.transform = `translateX(-${indiceActual * paso}px)`;
      }

      if (indiceActual <= 0) {
        track.style.transition = 'none';
        indiceActual = tarjetasActualizadas.length - 2;
        track.style.transform = `translateX(-${indiceActual * paso}px)`;
      }
    });
  }

  // 2. NAVEGACIÓN Y BOTONES
  const btnAtras = document.getElementById('btn-atras');
  const btnSiguiente = document.getElementById('btn-siguiente');

  if (btnAtras) {
    btnAtras.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'Index.html'; 
    });
  }

  if (btnSiguiente) {
    btnSiguiente.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'Ofertas.html'; 
    });
  }

  // 3. MODAL Y VENTANILLA (VALIDADO)
  const modal = document.getElementById('modal-producto');
  const btnCerrar = document.getElementById('cerrar-modal');

  if (modal && btnCerrar) {
    const especificacionesProductos = {
      "iphone16": {
        titulo: "iPhone 16",
        descripcion: "Equipado con el nuevo chip A18...",
        precio: "$1,000.00",
        imagen: "png7.png"
      }
    };

    document.querySelectorAll('.btn-informacion').forEach(boton => {
      boton.addEventListener('click', (e) => {
        const idProducto = e.target.getAttribute('data-id');
        const info = especificacionesProductos[idProducto];

        if (info) {
          document.getElementById('modal-titulo').innerText = info.titulo;
          document.getElementById('modal-descripcion').innerText = info.descripcion;
          document.getElementById('modal-precio').innerText = info.precio;
          document.getElementById('modal-imagen').src = info.imagen;
          modal.classList.remove('oculto');
        }
      });
    });

    btnCerrar.addEventListener('click', () => {
      modal.classList.add('oculto');
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('oculto');
      }
    });
  }

  // 4. OCULTAR PRODUCTOS EXTRA
  const productos = document.querySelectorAll('.contenedor-principal .card-producto');
  productos.forEach((producto, index) => {
    if (index >= 9) {
      producto.classList.add('producto-oculto');
    }
  });
});

// 5. MOSTRAR / OCULTAR CATÁLOGO
function alternarCatalogo() {
  const productos = document.querySelectorAll('.contenedor-principal .card-producto');
  const boton = document.getElementById('btnCatalogo');

  if (!boton) return;

  const estaMostrandoTodo = boton.innerText.includes("VER MENOS");

  productos.forEach((producto, index) => {
    if (index >= 9) {
      if (estaMostrandoTodo) {
        producto.classList.add('producto-oculto');
      } else {
        producto.classList.remove('producto-oculto');
      }
    }
  });

  if (estaMostrandoTodo) {
    boton.innerText = "VER CATÁLOGO COMPLETO";
    document.querySelector('.contenedor-principal').scrollIntoView({ behavior: 'smooth' });
  } else {
    boton.innerText = "VER MENOS";
  }
}

//productos destacados
document.addEventListener('DOMContentLoaded', () => {
  
  const botonesComprar = document.querySelectorAll('.btn-comprar');
  botonesComprar.forEach(boton => {
    boton.addEventListener('click', (e) => {
      const producto = e.target.getAttribute('data-producto');
      alert(`Añadido al carrito: ${producto}`);
    });
  });

  const botonesInfo = document.querySelectorAll('.btn-info');
  botonesInfo.forEach(boton => {
    boton.addEventListener('click', (e) => {
      const producto = e.target.getAttribute('data-producto');
      //alert(`Redirigiendo a la información detallada de: ${producto}`);
    });
  });

});

//seleccion de productos

document.addEventListener('DOMContentLoaded', () => {
  const btnAtras = document.getElementById('btn-atras');
  const btnSiguiente = document.getElementById('btn-siguiente');

  if (btnAtras) {
    btnAtras.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'Index.html'; 
    });
  }

  if (btnSiguiente) {
    btnSiguiente.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'Ofertas.html'; 
    });
  }
});

