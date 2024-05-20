<?php
$pagina = "CONTACTO";
include "php/header.php";

?>
<!--cuerpo CONTACTO
<h1>CONTACTO</h1>-->
<section class="contacto">
    <div class="contacto__bloque">
        
        <div class="contacto__contenido">
           
            <form action="php/datos.php" method="post" id="fomulario">
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
            <option value="ecommerce">Tienda Online</option>
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
          <label for="">He leído y acepto la política de privacidad</label>
          <p></p>
        </div>
        <div class="boton">
          <input type="button" name="" id="envio"   value="Enviar" />
        </div>
      </form>
      <p id="respuesta">
        <?php
            if(isset($_GET["respuesta"])){
                echo $_GET["respuesta"];
                //echo $_GET["nombre"] ;
            }
            else{
               //echo "Mensaje no enviado"; 
            }

        ?>
      </p>
        </div>
        <div class="contacto__foto">
        <img src="./images/contacto.jpeg" alt="">
        <h2 class="contacto__titular">CONTACTO</h2>
            <h3 class="contacto__subtitular">    PUMA Headquarters</h3>
            <h3 class="contacto__subtitular">   PUMA SE</h3>
            <h3 class="contacto__subtitular">   PUMA WAY 1</h3>
            <h3 class="contacto__subtitular">   91074 Herzogenaurach, GERMANY</h3>
        </div>
    </div>
</section>
<?php
include "php/filtro_tienda.php";
?>
<?php
include "php/footer.php";
?>