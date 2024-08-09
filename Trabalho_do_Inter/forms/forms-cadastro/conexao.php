<?php
    $servidor = "sql10.freesqldatabase.com";
    $usuario = "sql10665993" ;
    $senha = "gyD43pWnva";
    $dbname = "sql10665993";

    $conexao = mysqli_connect($servidor, $usuario, $senha, $dbname);
    if (!$conexao){
        die("Houve um erro: " .mysqli_connect_error());
    }
?>