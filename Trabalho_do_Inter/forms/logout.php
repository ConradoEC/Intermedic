<?php
    if(!isset($_SESSION))
    {
        session_start();
    }
    setcookie('nome', null, -1);
    setcookie('senha', null, -1);
    setcookie('email', null, -1);
    // setcookie('PHPSESSID', null, -1);
    session_destroy();

    header('Location: http://localhost/Trabalho_do_Inter/');
?>