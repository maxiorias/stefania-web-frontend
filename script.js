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
// Mostrar mensajes
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
// Envío formulario
// ---------------------------

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = form.querySelector("button");

  if (btn.disabled) return;

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
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    const res = await fetch(
      "https://stefania-web-backend.onrender.com/enviar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre,
          email,
          mensaje
        }),
        signal: controller.signal
      }
    );

    clearTimeout(timeout);

    if (res.ok) {
      showMessage("✅ Mensaje enviado correctamente", "green");
      form.reset();
      updateCounter();
    } else {
      showMessage("❌ Error al enviar mensaje", "red");
    }

  } catch (error) {
    console.log(error);
    showMessage(
      "⚠️ No se pudo conectar con el servidor. Intentá nuevamente.",
      "red"
    );
  }

  btn.disabled = false;
  btn.innerText = "Enviar";
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navbar ul");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}