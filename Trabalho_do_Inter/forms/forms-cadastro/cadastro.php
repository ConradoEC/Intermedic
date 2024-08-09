<?php
    include("./conexao.php");

    $nome = $_POST['nome'];
    $sobrenome = $_POST['sobrenome'];
    $dataNascimento = $_POST['dataNascimento'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "INSERT INTO cadastro_intermedic(nome, sobrenome, dataNascimento, email, senha) 
    VALUES ('$nome', '$sobrenome', '$dataNascimento',  '$email', '$senha')";

    if(mysqli_query($conexao, $sql)){
        echo "Usuário cadastrado com sucesso";
    }
    else{
        echo "Erro" .mysqli_connect_error($conexao);
    }

    mysqli_close($conexao);
?> 