document.addEventListener("DOMContentLoaded", function () {
    const previewImages = document.querySelectorAll(".preview-img");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0
    // Agregar event listeners a las miniaturas de vista previa

    function showSlide(index) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    const ChangeBg = (index) => {
        const img = document.getElementById("history"); // Selecciona el elemento por su id
        console.log(img);
        img.className = '';
        img.classList.add(`C${index + 1}`);
        showSlide(index)
    }

    previewImages.forEach((preview, index) => {
        preview.addEventListener("click", function () {
            ChangeBg(index)
        });
    });

    slides.forEach((slide, index) => {
        slide.addEventListener("click", function () {
            ChangeBg(index)
        })
    })

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});
