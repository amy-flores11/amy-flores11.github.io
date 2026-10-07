// Función para alternar entre las vistas (Soporte principal vs Contacto)
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

// Control del envío del formulario y notificación
function enviarMensaje(event) {
  event.preventDefault(); // Evita el recargado por defecto de la página

  const toast = document.getElementById('notificacion-exito');
  const formulario = document.getElementById('form-queja');

  // Muestra la alerta "Mensaje Recibido"
  toast.classList.add('activo');

  // Resetea los campos del formulario
  formulario.reset();

  // Espera 3 segundos, oculta la alerta y vuelve automáticamente a la pantalla de Soporte
  setTimeout(() => {
    toast.classList.remove('activo');
    mostrarPantalla('principal');
  }, 3000);
}