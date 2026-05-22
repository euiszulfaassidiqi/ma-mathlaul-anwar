// Hamburger Menu untuk Mobile Responsif
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle animasi hamburger
        hamburger.classList.toggle('active');
    });

    // Tutup menu saat link diklik
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth Scrolling untuk Anchor Links (opsional, jika ada internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Lightbox untuk Galeri (hanya aktif di gallery.html)
function openLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.9); display: flex; align-items: center; 
        justify-content: center; z-index: 2000;
    `;
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = 'max-width: 90%; max-height: 90%; border-radius: 8px;';
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = 'position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; cursor: pointer;';
    closeBtn.onclick = () => document.body.removeChild(lightbox);
    lightbox.appendChild(closeBtn);
    lightbox.appendChild(img);
    lightbox.onclick = (e) => { if (e.target === lightbox) document.body.removeChild(lightbox); };
    document.body.appendChild(lightbox);
}

// Inisialisasi Lightbox saat DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src));
    });
});

// Simulasi Submit Form Kontak (alert sukses)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah dikirim ke MA Mathlaul Anwar. Kami akan hubungi segera.');
        contactForm.reset();
    });
}

// Animasi Hamburger (opsional enhancement)
if (hamburger) {
    hamburger.addEventListener('click', () => {
        const spans = hamburger.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navLinks.classList.contains('active')) {
                span.style.transform = `rotate(${index * 120 + 45}deg) translateY(${index * 6 - 3}px)`;
            } else {
                span.style.transform = 'none';
            }
        });
    });
}