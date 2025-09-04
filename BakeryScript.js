//شريط العلوي 
//الحصول على كل الروابط داخل الـ nav
const navLinks = document.querySelectorAll("nav a");

// إضافة حدث لكل رابط
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    // إزالة active من جميع الروابط
    navLinks.forEach(l => l.classList.remove("active"));

    // إضافة active للرابط اللي انضغط عليه
    this.classList.add("active");
  });
});


//صفحة home 
const galleryImgs = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImgs.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
  
