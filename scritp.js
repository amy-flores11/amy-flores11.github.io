///Soporte
document.addEventListener('DOMContentLoaded', () => {
  const botonesAcordeon = document.querySelectorAll('.acordeon');

  botonesAcordeon.forEach(boton => {
    boton.addEventListener('click', () => {
      // Obtiene el div con la clase .respuesta que está justo abajo del botón
      const respuesta = boton.nextElementSibling;

      // Alterna la clase 'activo' en la respuesta
      respuesta.classList.toggle('activo');
    });
  });
});

//login

window.onload = = () => {
  let user = sessionStorage.getItem("usuario")

  if(user){
    document.getElementById("btn-login").textContent = user
  }else{
    window.location = "../HTML/login.html"
  }
}

//cerrar sesion

document.getElementById("")
