<?php
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$email = $_POST["email"];
$asunto = $_POST["asunto"];
$servicios = $_POST["servicios"];
$mensaje = $_POST["mensaje"];

//echo $nombre, $apellido, $email, $asunto, $servicios, $mensaje;

header("Location:http://localhost:8888/julia-retuerta/24-05-13-web-php/contacto.php?respuesta=".$nombre.", su mensaje se ha enviado con éxito");

?>