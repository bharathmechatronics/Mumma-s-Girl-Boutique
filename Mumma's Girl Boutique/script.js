// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    const navBrand = document.getElementById('nav-brand');
    const navLinks = document.querySelectorAll('.nav-link');
    const navBtn = document.querySelector('.nav-btn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('bg-transparent', 'py-4');
            navbar.classList.add('bg-white', 'shadow-md', 'py-2');
            
            navBrand.classList.remove('text-white');
            navBrand.classList.add('text-dark');
            
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-dark');
            });
            
        } else {
            navbar.classList.add('bg-transparent', 'py-4');
            navbar.classList.remove('bg-white', 'shadow-md', 'py-2');
            
            navBrand.classList.add('text-white');
            navBrand.classList.remove('text-dark');
            
            navLinks.forEach(link => {
                link.classList.add('text-white');
                link.classList.remove('text-dark');
            });
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMenu() {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('translate-x-full');
        }, 10);
    }

    function closeMenu() {
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }

    mobileMenuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Scroll Reveal Animation
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    
    window.addEventListener("scroll", reveal);
    reveal(); // Trigger on load
});
