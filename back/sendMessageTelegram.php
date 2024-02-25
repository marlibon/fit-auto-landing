<?php
// Проверяем авторизацию пользователя
include 'authorization.php';

// настройки
$token = "bot5506734715:AAGYKstSIFt0GGWmthQ8_ScDOqHnQmAbVtU"; // токен пит стопа
$chat_id_msk = "-1001698638520"; // москва
$chat_id_podolsk = "-1002053626026"; // подольск
$chat_id = $chat_id_msk;
//$token = "bot6128124968:AAEsrI21MpH-C_0qSfrF4eDOcMEBrst3WYQ"; // токен шеф чебурек
//$chat_id = "-1001857657187"; // шеф чебурек
// Получение тела запроса
$request_body = file_get_contents('php://input');

// Распаковка тела запроса
$data = json_decode($request_body, true);


// Получение данных из запроса
$message = $data['message'];
if ($data['city'] === 'podolsk') {
    $chat_id = $chat_id_podolsk;
} else {
    $chat_id = $chat_id_msk;
}
// Формирование URL запроса к Telegram API
$url = 'https://api.telegram.org/' . $token . '/sendMessage?chat_id=' . $chat_id . '&parse_mode=html&text=' .$message;

// Отправляем запрос
$response = file_get_contents($url);

// Возвращаем ответ
http_response_code(200);
if (!$response) {
  echo json_encode(array('success' => false, 'error' => 'Failed to send message'));
  exit();
} else { 
  echo $response;
}

?>
