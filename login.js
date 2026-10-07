// Cambiar visualmente entre formularios
function cambiarTab(tipo) {
  const formLogin = document.getElementById("form-login");
  const formRegistro = document.getElementById("form-registro");
  const btnLogin = document.getElementById("tab-login");
  const btnRegistro = document.getElementById("tab-registro");

  if (tipo === 'login') {
    formLogin.classList.add("active");
    formRegistro.classList.remove("active");
    btnLogin.classList.add("active");
    btnRegistro.classList.remove("active");
  } else {
    formRegistro.classList.add("active");
    formLogin.classList.remove("active");
    btnRegistro.classList.add("active");
    btnLogin.classList.remove("active");
  }
}

// Guardar nuevo usuario
function registrarUsuario(event) {
  event.preventDefault();
  
  const nombre = document.getElementById("reg-nombre").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-pass").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios_tecnoshop")) || [];

  if (usuarios.some(u => u.email === email)) {
    alert("Este correo ya está registrado.");
    return;
  }

  const nuevoUsuario = { nombre, email, password };
  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios_tecnoshop", JSON.stringify(usuarios));
  localStorage.setItem("usuario_activo", JSON.stringify(nuevoUsuario));

  alert(`¡Cuenta creada con éxito! Bienvenido, ${nombre}.`);
  window.location.href = "../Index.html";
}

// Validar inicio de sesión
function loginUsuario(event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-pass").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios_tecnoshop")) || [];
  const usuarioEncontrado = usuarios.find(u => u.email === email && u.password === password);

  if (usuarioEncontrado) {
    localStorage.setItem("usuario_activo", JSON.stringify(usuarioEncontrado));
    alert(`¡Bienvenido de nuevo, ${usuarioEncontrado.nombre}!`);
    window.location.href = "../Index.html";
  } else {
    alert("Correo o contraseña incorrectos.");
  }
}