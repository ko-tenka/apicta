 $(document).ready(function(){
    $(".top-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    // Валидация форм
    $('.x_order_form').on('input', 'input[name="name"], input[name="phone"]', function() {
        validateForm($(this).closest('form'));
    });

    $('.x_order_form').on('submit', function(e) {
        if (!validateForm($(this))) {
            e.preventDefault();
            console.log('Form validation failed');
            return false;
        }
        
        // Показываем индикатор загрузки
        const submitBtn = $(this).find('button[type="submit"]');
        submitBtn.prop('disabled', true).text('Enviando...');
        
        console.log('Form submitted successfully');
        // Форма отправляется обычным способом на api.php
    });

    function validateForm(form) {
        const nameInput = form.find('input[name="name"]');
        const phoneInput = form.find('input[name="phone"]');
        const submitBtn = form.find('button[type="submit"]');
        
        let isValid = true;
        
        // Валидация имени
        if (nameInput.val().trim().length < 2) {
            nameInput.addClass('error');
            isValid = false;
        } else {
            nameInput.removeClass('error');
        }
        
        // Валидация телефона (минимум 10 цифр)
        const phoneValue = phoneInput.val().replace(/\D/g, '');
        if (phoneValue.length < 10) {
            phoneInput.addClass('error');
            isValid = false;
        } else {
            phoneInput.removeClass('error');
        }
        
        // Активация/деактивация кнопки
        if (isValid) {
            submitBtn.prop('disabled', false);
        } else {
            submitBtn.prop('disabled', true);
        }
        
        return isValid;
    }
});

// Плавная прокрутка для якорных ссылок
var links = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < links.length; ++i) {
  links[i].addEventListener('click', function (event) {
    event.preventDefault();
    var elemID = this.getAttribute('href');

    document.querySelector(elemID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}