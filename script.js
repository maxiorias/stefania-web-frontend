// ---------------------------
// Referencias a elementos
// ---------------------------
const form = document.querySelector(".form-contacto");
const textarea = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const msgBox = document.getElementById("form-msg");

const MAX_LENGTH = 500;


// ---------------------------
// Contador de caracteres
// ---------------------------
textarea.addEventListener("input", updateCounter);

function updateCounter() {
  contador.textContent = `${textarea.value.length} / ${MAX_LENGTH}`;
}


// ---------------------------
// Mostrar mensajes en pantalla
// ---------------------------
function showMessage(text, color) {
  msgBox.innerHTML = text;
  msgBox.style.color = color;
  msgBox.style.margin = "10px 0";
}


// ---------------------------
// Validaciones
// ---------------------------
function validateForm(nombre, email, mensaje) {
  if (nombre.length < 2) {
    showMessage("Ingresá un nombre válido.", "red");
    return false;
  }

  if (!email.includes("@")) {
    showMessage("Ingresá un correo válido.", "red");
    return false;
  }

  if (mensaje.length < 10) {
    showMessage("El mensaje debe tener al menos 10 caracteres.", "red");
    return false;
  }

  return true;
}


// ---------------------------
// Envío del formulario
// ---------------------------
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = form.querySelector("button");
  btn.disabled = true;
  btn.innerText = "Enviando...";
  msgBox.innerHTML = "";

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = textarea.value.trim();

  if (!validateForm(nombre, email, mensaje)) {
    btn.disabled = false;
    btn.innerText = "Enviar";
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/enviar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, mensaje })
    });

    if (res.ok) {
      showMessage("✅ Mensaje enviado correctamente", "green");
      form.reset();
      updateCounter();
    } else {
      showMessage("Error al enviar mensaje.", "red");
    }

  } catch (error) {
    showMessage("No se pudo conectar con el servidor.", "red");
  }

  btn.disabled = false;
  btn.innerText = "Enviar";
});

