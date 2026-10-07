//alternar
function mostrarPantalla(nombrePantalla) {
  const principal = document.getElementById('pantalla-principal');
  const contacto = document.getElementById('pantalla-contacto');

  if (nombrePantalla === 'contacto') {
    principal.classList.remove('activa');
    contacto.classList.add('activa');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    contacto.classList.remove('activa');
    principal.classList.add('activa');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function enviarMensaje(event) {
  event.preventDefault(); 

  const toast = document.getElementById('notificacion-exito');
  const formulario = document.getElementById('form-queja');

  // mensaje recibido
  toast.classList.add('activo');

  formulario.reset();

  // espera
  setTimeout(() => {
    toast.classList.remove('activo');
    mostrarPantalla('principal');
  }, 3000);
}