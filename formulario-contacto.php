<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"]
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "yedromauricio86@gmail.com";
    $cabeceras = "From: $nombre\r\n";

    // Puedes agregar más información en el cuerpo del mensaje si lo deseas
    $cuerpoMensaje = "Nombre: $nombre\nAsunto: $asunto\nMensaje: $mensaje";

    // Enviar el correo
    mail($destinatario, $asunto, $cuerpoMensaje, $cabeceras);
}
?>