<?php
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$email = $_POST["email"];
$asunto = $_POST["asunto"];
$servicios = $_POST["servicios"];
$mensaje = $_POST["mensaje"];

//echo $nombre, $apellido, $email, $asunto, $servicios, $mensaje;

$to="rosariomartinez@profesorestrazos.net";
$subject =$asunto;
$message = '
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulario atención al cliente</title>
    <style>
      section {
        padding: 20px;
        width: 80%;
        margin: auto;
        background-color: #f0f0f0;
      }
      table {
        width: 100%;
        border: 1px solid black;
        border-collapse: collapse;
      }
      td,
      th {
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <section>
      <p>Formulario atención al cliente</p>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Servicios</th>
        </tr>
        <tr>
          <td>'.$nombre.'</td>
          <td>'.$apellido.'</td>
          <td>'.$email.'</td>
          <td>'.$servicios.'</td>
        </tr>
      </table>
      <h2>Mensaje</h2>
      <p>'.$mensaje.'</p>
    </section>
  </body>
</html>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <rosariomartinez@profesorestrazos.net>' . "\r\n";
if(mail($to,$subject,$message,$headers)){
    header("Location:http://localhost:8888/html-12/web-php/contacto.php?respuesta=Mensaje enviado con éxito");
}else{
    header("Location:http://localhost:8888/html-12/web-php/contacto.php?respuesta=Algo ha fallado. Inténtalo más tarde"); 
}

/*
<?php
$to = "somebody@example.com, somebodyelse@example.com";
$subject = "HTML email";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>
<tr>
<td>John</td>
<td>Doe</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@example.com>' . "\r\n";
$headers .= 'Cc: myboss@example.com' . "\r\n";

mail($to,$subject,$message,$headers);
?>
*/

?>