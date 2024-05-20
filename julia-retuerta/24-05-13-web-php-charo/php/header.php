<?php
include "variables.php";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pagina; ?> - <?php echo $nombre_web; ?> </title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    <link rel="stylesheet" href="css/galeria.css">
    <link rel="stylesheet" href="css/estilos.css">
    <script src="js/navegacion.js" defer></script>
    <?php
        if($pagina=='INICIO'){
            ?>
            <script src="js/galeria.js" defer></script>
            <?php
        }
        if($pagina=='CONTACTO'){
            ?>
        <script src="js/validacion.js" defer></script>
        <?php
        }
    ?>
   
   

</head>
<body>
    <!--header-->
    <header class="header" id="<?php echo $pagina; ?>">
    <div class="header__fijo">
        <a class="header__logo" href="./inicio.php"><img src="./images/logo.webp" alt=""></a>
        <span id="hamburguesa"><i class="bi bi-list"></i></span>
    </div>
        <nav class="nav">
            <ul class="nav__navbar">
                <li class="nav__list "><a class="nav__link" href="./inicio.php">Inicio</a></li>
                <li class="nav__list"><a class="nav__link" href="./nosotros.php">Nosotros</a></li>
                <li class="nav__list"><a class="nav__link" href="./tienda.php">Tienda</a></li>
                <li class="nav__list"><a class="nav__link" href="./contacto.php">Contacto</a></li>
        </ul>
        </nav>
    </header>
   
    
