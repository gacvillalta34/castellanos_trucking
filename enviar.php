<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/PHPMailer.php';
require 'src/Exception.php';
require 'src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    // Crear una instancia de PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP de Outlook
        $mail->isSMTP();                                            // Establecer el uso de SMTP
        $mail->Host = 'smtp-mail.outlook.com';                        // Servidor SMTP de Outlook
        $mail->SMTPAuth = true;                                       // Activar autenticación SMTP
        $mail->Username = 'gacvillalta34@outlook.com';                // Tu correo de Outlook (el que envía el mensaje)
        $mail->Password = '86767041';              // Usa la contraseña de aplicación generada
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;           // Habilitar encriptación TLS
        $mail->Port = 587;                                           // Puerto SMTP de Outlook

        // Destinatarios
        $mail->setFrom('gacvillalta34@outlook.com', 'Formulario de Contacto');  // Correo del remitente
        $mail->addAddress('gacvillalta33@gmail.com');  // Correo del destinatario (reemplázalo con tu correo)

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje de contacto';
        $mail->Body    = "Nombre: $nombre<br>Correo: $correo<br><br>Mensaje:<br>$mensaje";

        // Enviar el correo
        $mail->send();
        echo 'Mensaje enviado con éxito.';
    } catch (Exception $e) {
        echo "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
    }
}
?>
