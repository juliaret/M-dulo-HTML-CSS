<?php
$pagina = "INICIO";
include "php/header.php";
include "php/galeria.php";
?>

<!--CUERPO INICIO-->
<?php
include "php/filtro_tienda.php";
?>

<section class="nosotros nosotros--home">
    <div class="nosotros__bloque">
    <div class="nosotros__foto">
        <img src="./images/corporativa.jpeg" alt="">
    </div>
    <div class="nosotros__contenido">
        <h2 class="nosotros__titular">About us</h2>
        <h3 class="nosotros__subtitular">We are a global family of brands and businesses. We make it possible for customers around the world to express themselves through fashion and design in a sustainable way.</h3>
        <div class="nosotros__btn">
            <a href="nosotros.php">VER MÁS</a>
        </div>
    </div>
    </div>

</section>

<?php
include "php/footer.php";
?>