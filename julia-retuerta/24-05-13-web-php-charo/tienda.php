<?php
$pagina = "TIENDA";
include "php/header.php";
if(isset($_GET["cat"])){
   $categoria = $_GET["cat"]; 
}else{
    $categoria ="Todos los productos";
}


?>
<!--cuerpo TIENDA-->
<section class="pagina__titulo">
<h1>TIENDA - Categoría: <?php echo strtoupper($categoria); ?></h1>
</section>
<!--categoría MUJER-->
<?php
if(isset($_GET["cat"])){
    if($categoria=="mujer"){
        include "php/cat_mujer.php";
    }else if($categoria=="hombre"){
        include "php/cat_hombre.php";
    }else{
        include "php/cat_infantil.php";
    }
    ?>
<section class="ver-categorias">
    <a class="ver-categorias__btn" href="tienda.php">VER TODAS LAS CATEGORÍAS</a>
</section>

<?php
}else{
    include "php/cat_mujer.php";
    include "php/cat_hombre.php";
    include "php/cat_infantil.php";
}

include "php/filtro_tienda.php";

?>




<?php
include "php/footer.php"
?>