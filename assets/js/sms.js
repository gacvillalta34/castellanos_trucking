const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
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
        alert('¡Correo enviado exitosamente!');  // Alerta de éxito
      }, (err) => {
        // Si ocurre un error
        btn.value = 'Send Email';  // Restablecer el texto del botón
        alert('Error: ' + JSON.stringify(err));  // Alerta de error con los detalles
      });
  });
