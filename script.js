// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Remove the navbar transparency effect on scroll since we want it consistent
const nav = document.querySelector('.nav-container');
let lastScroll = 0;

// Fade in elements on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Add fade-in class for animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading state to button
        const submitButton = this.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = '傳送中...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual form submission logic)
        setTimeout(() => {
            submitButton.textContent = '已送出！';
            this.reset();
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        }, 1500);
    });
}

// Add hover effect for grid items
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 確保 DOM 完全加載後再執行
document.addEventListener('DOMContentLoaded', function() {
    console.log('頁面完全加載完成');
    
    // 語言切換相關
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.language-dropdown');

    // 點擊語言按鈕時顯示/隱藏下拉選單
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });

        // 點擊其他地方時關閉下拉選單
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.language-switcher')) {
                langDropdown.classList.remove('show');
            }
        });
    }

    // 模態框相關
    const ageModal = document.getElementById('ageCheckModal');
    const productModal = document.getElementById('productModal');
    const confirmBtn = document.querySelector('.age-confirm-btn');
    const denyBtn = document.querySelector('.age-deny-btn');
    const closeBtn = document.querySelector('.close-button');
    
    // 初始化模態框樣式
    if (ageModal) {
        ageModal.style.display = 'none';
    }
    if (productModal) {
        productModal.style.display = 'none';
    }
    
    // 檢查年齡確認狀態
    function checkAgeVerification() {
        return localStorage.getItem('ageVerified') === 'true';
    }

    // 關閉模態框的函數
    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // 打開模態框的函數
    function openModal(modal) {
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // 找到所有帶有 cybermaidTrigger class 的元素並添加點擊事件
    document.querySelectorAll('.cybermaidTrigger').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (checkAgeVerification()) {
                openModal(productModal);
            } else {
                openModal(ageModal);
            }
        });
    });

    // 確認年齡
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            localStorage.setItem('ageVerified', 'true');
            closeModal(ageModal);
            openModal(productModal);
        });
    }

    // 拒絕年齡
    if (denyBtn) {
        denyBtn.addEventListener('click', function() {
            closeModal(ageModal);
            // 根據當前語言顯示不同的提示
            const currentLang = localStorage.getItem('preferred_language') || 'en';
            const message = currentLang === 'zh-TW' ? 
                '很抱歉，您必須成年才能瀏覽此內容。' : 
                'Sorry, you must be an adult to view this content.';
            alert(message);
        });
    }

    // 關閉產品詳情
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeModal(productModal);
        });
    }

    // 點擊模態框背景關閉
    window.onclick = function(e) {
        if (e.target === productModal) {
            closeModal(productModal);
        }
        if (e.target === ageModal) {
            closeModal(ageModal);
        }
    };
});

// 產品詳情模態框相關邏輯
document.querySelectorAll('.cybermaidTrigger').forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        showAgeCheckModal();
    });
}); 