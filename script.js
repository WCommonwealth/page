// Hamburger Menu Toggle
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

// Section Fade-In on Scroll
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Background Dots and Lines Animation
const bgAnimation = document.getElementById('bg-animation');
const numDots = 50;

for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.animationDelay = `${Math.random() * 5}s`;
    bgAnimation.appendChild(dot);

    // Add connecting lines occasionally (simplified logic)
    if (i % 5 === 0 && i > 0) {
        const line = document.createElement('div');
        line.classList.add('line');
        const prevDot = bgAnimation.children[i - 1];
        const dx = parseFloat(dot.style.left) - parseFloat(prevDot.style.left);
        const dy = parseFloat(dot.style.top) - parseFloat(prevDot.style.top);
        const length = Math.sqrt(dx * dx + dy * dy) * 100; // Approximate length in %
        line.style.left = prevDot.style.left;
        line.style.top = prevDot.style.top;
        line.style.width = `${length}%`;
        line.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        bgAnimation.appendChild(line);
    }
}

// Placeholder for Real-time Wallet Net Worth (Demo)
const netWorthElement = document.querySelector('.net-worth');
setTimeout(() => {
    netWorthElement.textContent = 'Net Worth: $XXXXXX (Demo)';
}, 2000);

// For actual integration, uncomment and customize:
// async function fetchNetWorth() {
//     // Example: Fetch crypto prices from a public API like CoinGecko
//     // const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
//     // const data = await response.json();
//     // Calculate based on your holdings, e.g., total = holdings.btc * data.bitcoin.usd + ...
//     // netWorthElement.textContent = `Net Worth: $${total.toFixed(2)}`;
// }
// fetchNetWorth();
