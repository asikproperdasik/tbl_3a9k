document.addEventListener("DOMContentLoaded", function() {
    const textArray = [
        "Привет! Я Tbl_3a9k.", 
        "Смотри мои ссылки!", 
        "Добро пожаловать в мой мир!"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    const speed = 100;
    const pauseTime = 1500;

    const targetElement = document.getElementById("typewriter-text");

    function type() {
        if (textIndex < textArray.length) {
            const currentText = textArray[textIndex];
            
            if (charIndex < currentText.length) {
                targetElement.textContent += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(type, speed);
            } else {
                setTimeout(erase, pauseTime);
            }
        } else {
            textIndex = 0;
            setTimeout(type, speed);
        }
    }

    function erase() {
        const currentText = textArray[textIndex];
        
        if (charIndex > 0) {
            targetElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, speed / 2);
        } else {
            textIndex++;
            setTimeout(type, 500);
        }
    }

    type();
});
