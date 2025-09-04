// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Section Fade In
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Background Dots and Lines Animation
const bg = document.getElementById('bg-animation');
const numDots = 50;

for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.animationDelay = `${Math.random() * 5}s`;
    bg.appendChild(dot);

    // Occasionally add lines between dots (simplified)
    if (i % 5 === 0 && i > 0) {
        const line = document.createElement('div');
        line.classList.add('line');
        const prevDot = bg.children[i-1];
        const dx = parseFloat(dot.style.left) - parseFloat(prevDot.style.left);
        const dy = parseFloat(dot.style.top) - parseFloat(prevDot.style.top);
        const length = Math.sqrt(dx*dx + dy*dy) * 100; // in vw/vh approx
        line.style.left = prevDot.style.left;
        line.style.top = prevDot.style.top;
        line.style.width = `${length}%`;
        line.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        bg.appendChild(line);
    }
}

// Placeholder for Real-time Wallet Net Worth
// To implement: Use fetch to API like CoinGecko, but need wallet details.
// Example stub:
const netWorth = document.querySelector('.net-worth');
// Simulate loading
setTimeout(() => {
    netWorth.textContent = 'Net Worth: $XXXXXX (Demo)';
}, 2000);

// For real: 
// async function fetchNetWorth() {
//     // Fetch prices, multiply by holdings, etc.
// }
// fetchNetWorth();
