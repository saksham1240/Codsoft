document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skill');

    skillItems.forEach(function (item) {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });

    function typeWriter(text, element, delay) {
        let i = 0;
        const speed = 50; 
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval); 
            }
        }, speed);
    }

    const textElement = document.querySelector("#typing-text");
    
    textElement.textContent = "";

    typeWriter("Hi there, I'm Saksham Lamba", textElement, 50);
});