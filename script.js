/* JYM Tecnología | Interacciones y contacto */
const CONFIG = {
  // Escribe el número completo con indicativo de país, solo números.
  // Ejemplo Colombia: 573001234567
  whatsappNumber: "573175662566"
};

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

function getWhatsAppUrl(message) {
  const number = CONFIG.whatsappNumber.replace(/\D/g, "");
  if (!number || number.includes("X")) {
    alert("Antes de usar WhatsApp, configura tu número en el archivo script.js.");
    return null;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message) {
  const url = getWhatsAppUrl(message);
  if (url) window.open(url, "_blank", "noopener,noreferrer");
}

const defaultMessage = "Hola, estoy interesado en conocer los servicios de JYM Tecnología.";
["contactWhatsApp", "footerWhatsApp", "floatingWhatsApp"].forEach((id) => {
  const link = document.getElementById(id);
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsApp(defaultMessage);
  });
});

// Los enlaces de cada servicio seleccionan automáticamente el servicio en el formulario.
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const select = document.getElementById("serviceSelect");
    select.value = link.dataset.service;
  });
});

// El formulario prepara un mensaje con los datos y lo abre en WhatsApp.
// No almacena información ni envía datos a un servidor.
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const message = [
    "Hola, JYM Tecnología. Quiero solicitar información/cotización.",
    "",
    `Nombre: ${data.get("name")}`,
    `Empresa: ${data.get("company") || "No indicada"}`,
    `Correo: ${data.get("email")}`,
    `Teléfono: ${data.get("phone")}`,
    `Servicio: ${data.get("service")}`,
    `Requerimiento: ${data.get("message")}`
  ].join("\n");

  openWhatsApp(message);
});
