document.addEventListener('DOMContentLoaded', function () {
  // Находим все кнопки с классами .product__heart и .product__bag
  const buttons = document.querySelectorAll('.product__heart, .product__bag');

  buttons.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Предотвращаем действие по умолчанию
      event.stopPropagation(); // Останавливаем всплытие события
    });
  });
});
