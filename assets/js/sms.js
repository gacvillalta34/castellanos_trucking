const btn = document.getElementById('button');
const successModal = document.getElementById('successModal');
const errorModal = document.getElementById('errorModal');
const closeSuccessModal = document.getElementById('closeSuccessModal');
const closeErrorModal = document.getElementById('closeErrorModal');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Cambiar texto del botón a "Sending..."
  btn.value = 'Sending...';

  const serviceID = 'default_service';  // ID del servicio de EmailJS
  const templateID = 'template_h02127e';  // ID de la plantilla de EmailJS

  // Enviar el formulario a través de EmailJS
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      // Si el envío es exitoso
      btn.value = 'Send Email';  // Restablecer el texto del botón

      // Mostrar el modal de éxito
      successModal.style.display = "block";
    }, (err) => {
      // Si ocurre un error
      btn.value = 'Send Email';  // Restablecer el texto del botón

      // Mostrar el modal de error
      errorModal.style.display = "block";
    });
});

// Cerrar el modal de éxito
closeSuccessModal.onclick = function() {
  successModal.style.display = "none";
}

// Cerrar el modal de error
closeErrorModal.onclick = function() {
  errorModal.style.display = "none";
}

// Cerrar el modal cuando se haga clic fuera de él
window.onclick = function(event) {
  if (event.target === successModal) {
    successModal.style.display = "none";
  }
  if (event.target === errorModal) {
    errorModal.style.display = "none";
  }
}
