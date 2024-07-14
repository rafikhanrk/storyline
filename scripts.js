document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const hash = window.location.hash || '#slide1';
    const targetSlide = document.querySelector(hash);
    
    if (targetSlide) {
        targetSlide.style.display = 'block';
        targetSlide.style.left = '0';
    }
    
    slides.forEach(slide => {
        slide.addEventListener('transitionend', () => {
            if (!slide.matches(hash)) {
                slide.style.display = 'none';
            }
        });
    });

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            
            slides.forEach(slide => {
                if (slide !== target) {
                    slide.style.left = '100%';
                    slide.style.display = 'none';
                }
            });

            target.style.display = 'block';
            setTimeout(() => target.style.left = '0', 10);
        });
    });
});
