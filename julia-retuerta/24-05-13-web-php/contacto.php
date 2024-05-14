<?php
$pagina = "CONTACTO";
include "php/header.php";
?>

<!--CUERPO CONTACTO-->
<!--<h1>CONTACTO</h1>-->

<section class="contacto">
    <div class="contacto__bloque">

    <div class="contacto__contenido">


        <form action="php/datos.php" method="post" id="formulario">
        <div>
          <label for="">Nombre</label>
          <input type="text" name="nombre" id="nombre" />
          <p></p>
        </div>

        <div>
          <label for="">Apellido</label>
          <input type="text" name="apellido" id="apellido" />
          <p></p>
        </div>

        <div>
          <label for="">Email</label>
          <input type="email" name="email" id="email" />
          <p></p>
        </div>

        <div>
          <label for="">Asunto</label>
          <input type="text" name="asunto" id="asunto" />
          <p></p>
        </div>

        <div>
          <label for="">Servicios</label>
          <select name="servicios" id="servicios">
            <option value="">Selecciona una opción</option>
            <option value="ecommerce">Tienda online</option>
            <option value="devoluciones">Devoluciones</option>
          </select>
          <p></p>
        </div>

        <div>
          <label for="">Mensaje</label>
          <textarea name="mensaje" id="mensaje"></textarea>
          <p></p>
        </div>

        <div>
          <input type="checkbox" name="politica" id="politica" />
          <label for="">He leído y acepto la Política de privacidad</label>
          <p></p>
        </div>

        <div class="boton">
          <input
            type="button"
            name=""
            id="enviar"
            value="Enviar"
          />
        </div>
      </form>

      <p id="respuesta">
        <?php
        if(isset($_GET["respuesta"])){
          echo $_GET ["respuesta"];
          //echo $_GET ["nombre"];
        } else {
          //echo "Mensaje no enviado";
        }
        ?>

      </p>

    </div>

    <div class="contacto__foto">
            <img src="./images/corporativa.jpeg" alt="">
            <h2 class="contacto__titular">CONTACTO</h2>
        <h3 class="contacto__subtitular">H & M Hennes & Mauritz AB</h3>
        <h3 class="contacto__subtitular">Mäster Samuelsgatan 46A</h3>
        <h3 class="contacto__subtitular">SE-106 38 Stockholm</h3>
        <h3 class="contacto__subtitular">Sweden</h3>
        </div>
    </div>

</section>

<?php
include "php/footer.php";

?>