// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Hiển thị/ẩn menu
    menuBtn.classList.toggle('close');   // Thêm dòng này để đổi icon thành X
});


const closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});
