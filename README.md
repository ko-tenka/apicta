# Flexacil Ultra - Landing Page

## 📋 Описание проекта

Это одностраничный сайт (landing page) для продажи продукта Flexacil Ultra - средства для лечения суставов. Сайт адаптирован для перуанского рынка с испанским языком и местными отзывами.

## 🚀 Функциональность

### ✅ Основные возможности:

- **Адаптивный дизайн** - работает на всех устройствах
- **Формы заказов** - 2 формы с валидацией
- **PHP обработка** - сохранение заказов в лог-файл
- **Страница успеха** - красивая страница подтверждения
- **Валидация форм** - проверка имени и телефона
- **Логирование** - все заказы сохраняются в `orders.log`

### 🎯 Технические особенности:

- **HTML5** - семантическая разметка
- **CSS3** - современные стили и анимации
- **JavaScript** - валидация и интерактивность
- **PHP** - обработка форм на сервере
- **jQuery** - упрощение работы с DOM


## 🛠 Установка и запуск

### Вариант 1: Live Server (для разработки)

1. Откройте папку в VS Code
2. Установите расширение Live Server
3. Нажмите "Go Live"
4. Сайт откроется на `http://127.0.0.1:5501`

### Вариант 2: PHP сервер (для полной функциональности)

1. Откройте терминал в папке проекта
2. Запустите: `php -S localhost:8000`
3. Откройте: `http://localhost:8000`

## 📝 Использование

### Отправка заказа:

1. Заполните форму (имя и телефон)
2. Нажмите "Ordenar"
3. Данные отправятся на `api.php`
4. Произойдет перенаправление на `success.html`
5. Заказ сохранится в `orders.log`


## 🌍 Адаптация для рынка

### Перуанская локализация:

- **Язык**: Испанский
- **Валюта**: PEN (перуанский соль)
- **Города**: Lima, Arequipa, Trujillo
- **Имена**: Перуанские имена в отзывах

## 📊 Логирование

### Формат лог-файла:

```
2025-06-21 15:42:05 - Nombre: Имя, Teléfono: Телефон, SubID: {subid}, OfferID: {offer_id}
```

## 📱 Адаптивность

Сайт адаптирован для:

- ✅ **Desktop** - 1200px+
- ✅ **Tablet** - 768px-1199px
- ✅ **Mobile** - до 767px

## 🔒 Безопасность

- ✅ **Валидация на клиенте** - JavaScript проверка
- ✅ **Валидация на сервере** - PHP проверка
- ✅ **Экранирование данных** - `htmlspecialchars()`
- ✅ **Проверка метода** - только POST запросы

## 📈 Производительность

- ✅ **Оптимизированные изображения** - WebP формат
- ✅ **Минифицированный jQuery** - быстрая загрузка
- ✅ **CSS оптимизация** - эффективные стили
- ✅ **Кэширование** - статические ресурсы

**Автор**: Разработано для тестового задания  
**Версия**: 1.0  
**Дата**: 2025
