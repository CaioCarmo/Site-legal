function showAlert() {
    alert("Mais informações em breve!");
}

function redirectToPage() {
    window.location.href = "https://media.tenor.com/I52W87bM7K8AAAAi/anime-aaaa.gif";
}

function updateParallax() {
    const sections = Array.from(document.querySelectorAll('.parallax-section'));
    const viewportHeight = window.innerHeight;
    const speed = 0.22;

    const progressValues = sections.map(section => {
        const rect = section.getBoundingClientRect();
        const rawProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        return Math.min(Math.max(rawProgress, 0), 1);
    });

    sections.forEach((section, index) => {
        const layer = section.querySelector('.background-layer');
        if (!layer) return;

        const previousComplete = index === 0 || progressValues.slice(0, index).every(value => value >= 1);
        const sectionProgress = previousComplete ? progressValues[index] : 0;
        const offset = sectionProgress * viewportHeight * speed;

        layer.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
}

window.addEventListener('scroll', updateParallax);
window.addEventListener('resize', updateParallax);
window.addEventListener('load', updateParallax);
