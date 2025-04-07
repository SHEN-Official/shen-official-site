// 語言配置
const translations = {
    'zh-TW': {
        // 導航欄
        'nav_cybermaid': 'CyberMaid',
        'nav_language': '繁體中文',

        // 主標題
        'hero_title': 'CyberMaid',
        'hero_subtitle': '讓你的桌面充滿溫暖與樂趣',

        // 產品標籤
        'product_tag': '立即遊玩 >',

        // 產品詳情
        'product_modal_title': '為您打造專屬的虛擬伴侶，',
        'product_modal_subtitle': '讓每個工作時光都充滿溫暖與樂趣。',
        'product_name': '《CyberMaid》——你的專屬女僕，貼心陪伴！',
        'product_slogan': '✨ 最萌桌面女僕，讓你的電腦充滿活力！✨',
        'product_desc': '新世代桌面互動體驗，為你的電腦注入生命！',

        // 特色列表
        'features_title': '🎀 主要特色：',
        'features': [
            '💕 甜美視線追蹤：她的眼神將緊隨你的滑鼠移動，讓你感受到她的關注！',
            '💭 輕鬆互動體驗：點擊她的特定部位，觸發可愛反應，發掘更多樂趣！',
            '✨ 個性化互動：每位女僕都有獨特的性格和反應，創造專屬於你的互動體驗',
            '🎵 動態語音系統：即時回應你的互動，溫柔的聲音讓工作更有趣',
            '🌈 豐富的造型選擇：多樣化的服裝和配飾，讓你的專屬女僕更具個性'
        ],

        // 適合玩家
        'suitable_title': '🔥 適合這些玩家：',
        'suitable_players': [
            '✓ 喜愛二次元角色與女僕文化的粉絲',
            '✓ 想要桌面陪伴感的學生、上班族與直播主',
            '✓ 追求個性化桌面，讓美學與趣味兼具的玩家',
            '✓ 熱愛與虛擬角色互動的動漫愛好者',
            '✓ 尋找工作時光中的療癒體驗者'
        ],

        // 購買區域
        'cta_title': '🌟 開啟你的專屬桌面美好時光 🌟',
        'cta_desc': '立即體驗，讓 CyberMaid 為你的電腦帶來無限活力與溫暖！',
        'buy_steam': '立即購買',
        'coming_soon': '即將推出',

        // 年齡確認
        'age_verify_title': '年齡確認',
        'age_verify_desc': '本內容需要年齡確認才能瀏覽。',
        'age_verify_yes': '是，我已成年',
        'age_verify_no': '否，我未成年',
        'age_verify_fail': '很抱歉，您必須成年才能瀏覽此內容。',

        // 頁尾
        'footer_contact': '聯絡資訊',
        'footer_email': '',
        'footer_follow': '追蹤我們',
        'footer_rights': '保留一切權利'
    },
    'en': {
        // Navigation
        'nav_cybermaid': 'CyberMaid',
        'nav_language': 'English',

        // Hero section
        'hero_title': 'CyberMaid',
        'hero_subtitle': 'Bringing Warmth and Joy to Your Desktop',

        // Product tag
        'product_tag': 'Play Now >',

        // Product Modal
        'product_modal_title': 'Create Your Personal Interactive Experience',
        'product_modal_subtitle': 'Transform your computer from a work tool into a fun life companion',
        'product_name': 'CyberMaid - Breaking Through Dimensions',
        'product_slogan': '✨ Unprecedented Real Interaction, Bringing You the Warmest Companionship ✨',
        'product_desc': 'Combining cutting-edge interactive technology for a natural and immersive experience',

        // Features
        'features_title': '🎀 Key Features:',
        'features': [
            '💕 Highly Realistic Interaction: Advanced real-time system for natural interactive experience',
            '💭 Deep Personalization: Each character has unique personality and reactions, creating your exclusive moments',
            '✨ Immersive Experience: Carefully designed interaction mechanics for unprecedented intimacy',
            '🎵 Dynamic Voice System: Rich voice interactions for natural communication',
            '🌈 Rich Customization: Various outfits and accessories to create your perfect companion'
        ],

        // Target Players
        'suitable_title': '🔥 Why Choose CyberMaid:',
        'suitable_players': [
            '✓ Breakthrough interactive technology for natural experience',
            '✓ Complete personalization system for unique companionship',
            '✓ Continuously updated content for fresh experiences',
            '✓ Strong community support to share your moments',
            '✓ Best value for unlimited entertainment'
        ],

        // Call to Action
        'cta_title': '🌟 Start Your Wonderful Desktop Experience 🌟',
        'cta_desc': 'Try now and let CyberMaid bring endless vitality to your computer!',
        'buy_steam': 'Buy Now',
        'coming_soon': 'Coming Soon',

        // Age Verification
        'age_verify_title': 'Age Verification',
        'age_verify_desc': 'Age verification is required to view this content.',
        'age_verify_yes': 'Yes, I am an adult',
        'age_verify_no': 'No, I am not an adult',
        'age_verify_fail': 'Sorry, you must be an adult to view this content.',

        // Footer
        'footer_contact': 'Contact',
        'footer_email': '',
        'footer_follow': 'Follow Us',
        'footer_rights': 'All rights reserved'
    }
};

// 語言相關功能
function getCurrentLanguage() {
    const savedLang = localStorage.getItem('preferred_language');
    if (savedLang) {
        return savedLang;
    }
    
    // 獲取瀏覽器語言
    const browserLang = navigator.language || navigator.userLanguage;
    
    // 如果明確是中文，則使用中文
    if (browserLang.startsWith('zh')) {
        return 'zh-TW';
    }
    
    // 其他情況（包括英文或其他語言）都使用英文
    return 'en';
}

function setLanguage(lang) {
    localStorage.setItem('preferred_language', lang);
    updatePageContent(lang);
}

function updatePageContent(lang) {
    const t = translations[lang];

    // 更新導航欄
    document.querySelector('.cybermaid-link').textContent = t.nav_cybermaid;
    document.querySelector('.lang-btn span').textContent = t.nav_language;

    // 更新主標題
    document.querySelector('.hero-content h1').textContent = t.hero_title;
    document.querySelector('.hero-subtitle').textContent = t.hero_subtitle;

    // 更新產品標籤
    document.querySelector('.product-tag').textContent = t.product_tag;

    // 更新產品詳情模態框
    document.querySelector('.modal-header h2').textContent = t.product_modal_title;
    document.querySelector('.modal-header p').textContent = t.product_modal_subtitle;
    document.querySelector('.modal-body h3').textContent = t.product_name;
    document.querySelector('.modal-body h4').textContent = t.product_slogan;
    document.querySelector('.modal-body > p').textContent = t.product_desc;

    // 更新特色列表
    const featuresList = document.querySelector('.modal-body ul');
    if (featuresList) {
        featuresList.innerHTML = t.features.map(feature => `<li>${feature}</li>`).join('');
    }

    // 更新適合玩家列表
    const suitableList = document.querySelector('.modal-body ul:nth-of-type(2)');
    if (suitableList) {
        suitableList.innerHTML = t.suitable_players.map(player => `<li>${player}</li>`).join('');
    }

    // 更新CTA區域
    document.querySelector('.cta-section h4').textContent = t.cta_title;
    document.querySelector('.cta-section p').textContent = t.cta_desc;
    document.querySelector('.store-action').textContent = t.buy_steam;

    // 更新年齡確認模態框
    document.querySelector('#ageCheckModal h2').textContent = t.age_verify_title;
    document.querySelector('#ageCheckModal p').textContent = t.age_verify_desc;
    document.querySelector('.age-confirm-btn').textContent = t.age_verify_yes;
    document.querySelector('.age-deny-btn').textContent = t.age_verify_no;

    // 更新頁尾
    document.querySelector('.footer-section:nth-child(1) h4').textContent = t.footer_contact;
    const emailLink = document.querySelector('.footer-section:nth-child(1) a');
    if (emailLink) {
        emailLink.textContent = 'contact@shen.technology';
        emailLink.href = 'mailto:contact@shen.technology';
    }
    document.querySelector('.footer-section:nth-child(2) h4').textContent = t.footer_follow;
    document.querySelector('.footer-bottom p').innerHTML = 
        `&copy; ${new Date().getFullYear()} 神 Shen. ${t.footer_rights}`;
}

// 初始化語言設置
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    updatePageContent(currentLang);
    
    // 更新語言選擇器的激活狀態
    document.querySelectorAll('.language-dropdown a').forEach(link => {
        link.classList.toggle('active', link.dataset.lang === currentLang);
    });

    // 添加語言切換事件監聽
    document.querySelectorAll('.language-dropdown a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            setLanguage(lang);
            
            // 更新激活狀態
            document.querySelectorAll('.language-dropdown a').forEach(l => {
                l.classList.toggle('active', l === this);
            });

            // 更新當前顯示的語言文本
            document.querySelector('.lang-btn span').textContent = 
                lang === 'zh-TW' ? '繁體中文' : 'English';
        });
    });
}); 