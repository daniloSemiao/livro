document.addEventListener('DOMContentLoaded', function() {
    const bananaContainer = document.querySelector('.banana-container');
    
    for(let i = 0; i < 50; i++) {
        const banana = document.createElement('div');
        banana.className = 'banana';
        banana.textContent = '🍌';
        banana.style.left = Math.random() * 100 + '%';
        banana.style.top = Math.random() * 100 + '%';
        banana.style.animationDelay = Math.random() * 2 + 's';
        bananaContainer.appendChild(banana);
    }
});