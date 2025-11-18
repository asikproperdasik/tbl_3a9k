document.addEventListener("DOMContentLoaded", function() {
    const textArray = [
        "qq! I`m Tbl_3a9k.", 
        "What the fuck?", 
        "Hello World!"
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

// МЕТЕОРЫ, пролетающие над фоном
const mc = document.getElementById('meteors-canvas');
if (mc) {
    const mCtx = mc.getContext('2d');
    function resizeMC() {
        mc.width = window.innerWidth;
        mc.height = window.innerHeight;
    }
    resizeMC();
    window.addEventListener("resize", resizeMC);

    function Meteor() {
        this.x = Math.random() * mc.width;
        this.y = -10;
        this.length = 60 + Math.random() * 60;
        this.speed = 4 + Math.random() * 4;
        this.angle = Math.PI / 4; // 45 градусов
        this.alpha = 0.7 + Math.random() * 0.3;
        this.color = `rgba(210,166,255,${this.alpha})`;
    }
    Meteor.prototype.draw = function() {
        mCtx.save();
        mCtx.strokeStyle = this.color;
        mCtx.lineWidth = 2.5;
        mCtx.beginPath();
        mCtx.moveTo(this.x, this.y);
        mCtx.lineTo(
            this.x + Math.cos(this.angle) * this.length,
            this.y + Math.sin(this.angle) * this.length
        );
        mCtx.shadowColor = "#d2a6ff";
        mCtx.shadowBlur = 14;
        mCtx.stroke();
        mCtx.restore();
    };
    Meteor.prototype.update = function(){
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
    };

    let meteors = [];
    function animateMeteors() {
        mCtx.clearRect(0, 0, mc.width, mc.height);
        if (Math.random() > 0.95) meteors.push(new Meteor());
        for (let i = meteors.length - 1; i >= 0; i--) {
            meteors[i].draw();
            meteors[i].update();
            if (meteors[i].x > mc.width || meteors[i].y > mc.height) {
                meteors.splice(i, 1);
            }
        }
        requestAnimationFrame(animateMeteors);
    }
    animateMeteors();
}
