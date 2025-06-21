<?php
// Простая обработка заказов
$thxPage = 'success.html';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit('Invalid request');
}

// Получаем данные формы
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';
$subid = isset($_POST['subid']) ? htmlspecialchars($_POST['subid']) : '';
$offerId = isset($_POST['offerId']) ? htmlspecialchars($_POST['offerId']) : '';

// Простое логирование заказа
$logData = date('Y-m-d H:i:s') . " - Nombre: $name, Teléfono: $phone, SubID: $subid, OfferID: $offerId\n";
file_put_contents('orders.log', $logData, FILE_APPEND | LOCK_EX);

// Перенаправляем на страницу успеха
header('Location: ' . $thxPage);
exit();
?>