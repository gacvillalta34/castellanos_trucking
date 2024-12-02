const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_h02127e';

   const showModal = (title, message, isSuccess = true) => {
    const modal = document.getElementById('customModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
  
    // Configurar contenido del modal
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalTitle.style.color = isSuccess ? '#4CAF50' : '#f44336'; // Verde para éxito, rojo para error
    modalCloseBtn.style.backgroundColor = isSuccess ? '#4CAF50' : '#f44336';
  
    // Mostrar modal
    modal.style.display = 'block';
  
    // Cerrar modal al hacer clic en el botón
    modalCloseBtn.onclick = () => {
      modal.style.display = 'none';
    };
  };
  
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      showModal('Success!', 'Your email has been sent successfully.');
    }, (err) => {
      btn.value = 'Send Email';
      showModal('Error', `Failed to send email. Details: ${JSON.stringify(err)}`, false);
    });
  
});