// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');

// Mở menu
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('close');
});

// Đóng menu khi bấm nút X
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// 🚀 ĐẢM BẢO: KHÔNG CHẶN FORM SUBMIT
// Không có preventDefault()
// Không xử lý gì liên quan đến <form>
