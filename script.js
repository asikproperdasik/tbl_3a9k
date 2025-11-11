document.addEventListener("DOMContentLoaded", function() {
    // Тексты, которые будут печататься в баннере
    const textArray = [
        "Привет! Я Tbl_3a9k.", 
        "Смотри мои ссылки!", 
        "Добро пожаловать в мой мир!"
    ];
    
    let textIndex = 0; // Индекс текущего текста
    let charIndex = 0; // Индекс текущего символа
    const speed = 100; // Скорость печати (мс)
    const pauseTime = 1500; // Пауза перед стиранием (мс)

    const targetElement = document.getElementById("typewriter-text");

    function type() {
        if (textIndex < textArray.length) {
            const currentText = textArray[textIndex];
            
            if (charIndex < currentText.length) {
                targetElement.textContent += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(type, speed);
            } else {
                // Пауза, затем стирание
                setTimeout(erase, pauseTime);
            }
        } else {
            // Начинаем цикл сначала
            textIndex = 0;
            setTimeout(type, speed);
        }
    }

    function erase() {
        const currentText = textArray[textIndex];
        
        if (charIndex > 0) {
            targetElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, speed / 2); // Стираем быстрее
        } else {
            // Переходим к следующему тексту
            textIndex++;
            setTimeout(type, 500); // Пауза перед началом печати следующего текста
        }
    }

    // Запускаем эффект
    type();
});
