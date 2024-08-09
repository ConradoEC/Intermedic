<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="style.css">
        <title>Intermedic | Login</title>
    </head>
    <body>
        <?php
            include_once("./forms-cadastro/conexao.php");

            if(!isset($_SESSION['login']))
            {
                if(isset($_POST['datas']))
                {
                    session_start();
                    $name = $_POST['nome'];
                    $password = $_POST['senha'];
                    $email = $_POST['email'];

                    $sql = "SELECT * FROM cadastro_intermedic WHERE nome = '$name' AND senha = '$password' AND email = '$email'";
                    mysqli_query($conexao, $sql);
                    $obj = mysqli_fetch_object(mysqli_query($conexao, $sql));
                    if($obj->id != '')
                    {
                        // $script = "<script> var obj_id = '" . $obj->id . "' </script>";
                        // echo $script;
                        $_SESSION['login'] = true;
                        setcookie('nome', $name, time() + 3600);
                        setcookie('senha', $password, time() + 3600);
                        setcookie('email', $email, time() + 3600);
                        header('Location: http://localhost/Trabalho_do_Inter?id='. $obj->id . '&lastName=' . $obj->sobrenome . '&WasBorn=' . $obj->dataNascimento);
                    }
                    else
                    {  
                        header('Location: index.php?indice=algoEstaErrado');
                    }
                };

                include('login.php');
            }
            // else
            // {
            //     unset($_SESSION['login']);
            //     setcookie('nome', null, -1);
            //     setcookie('senha', null, -1);
            //     setcookie('email', null, -1);
            //     session_destroy();
            //     header('Location: index.php');

            //     // if(isset($_GET['logout'])){

            //     // }
            // }
        ?>
        <script src="script.js"></script>
    </body>
</html>