<?php
$pagina = "INICIO";
include "php/header.php";
include "php/galeria.php";
?>
<!--cuerpo INICIO-->
<?php
include "php/filtro_tienda.php";
?>

<section class="nosotros nosotros--home">
    <div class="nosotros__bloque">
        <div class="nosotros__foto">
        <img src="./images/corpora.png" alt="">
        </div>
        <div class="nosotros__contenido">
            <h2 class="nosotros__titular">ABOUT US</h2>
            <h3 class="nosotros__subtitular">If you need more information about PUMA, you are welcome to contact us. Here you will find contacts for media inquiries about all topics concerning PUMA.</h3>
            <div class="nosotros__btn">
                <a href="nosotros.php">VER MÁS</a>
            </div>
        </div>
    </div>
</section>
<?php
include "php/footer.php";
?>