document.addEventListener('DOMContentLoaded', () => {

  // 1. Efecto y alerta al dar clic en enlaces de redes sociales
  const socialLinks = document.querySelectorAll('.social-item');

  socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const redSocial = link.querySelector('.handle').innerText;
      console.log(`El usuario está visitando: ${redSocial}`);
    });
  });

  // 2. Animación suave al hacer hover sobre las columnas del footer
  const footerHeaders = document.querySelectorAll('.col-header');

  footerHeaders.forEach(header => {
    header.addEventListener('mouseenter', () => {
      header.style.backgroundColor = '#84b6cb';
    });
    
    header.addEventListener('mouseleave', () => {
      header.style.backgroundColor = '#a0c9d9';
    });