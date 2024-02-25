<?php 
// ниже настройки, разрешающие подключение со всего откуда можно 
//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
//header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
    
$auth_token = "fF11DSRsLUml9Pvtx8QpC1GF!6e4ze/dSc/R7jZwDBxC15jwwhaerpNYlG5V";

if (!isset($_SERVER['HTTP_AUTHORIZATION']) || $_SERVER['HTTP_AUTHORIZATION'] !== $auth_token) {
  header("HTTP/1.1 401 Unauthorized");
  exit;
}
?>