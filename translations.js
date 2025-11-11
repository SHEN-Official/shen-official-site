// 語言配置
const translations = {
    'zh-TW': {
        // 導航欄
        'nav_cybermaid': 'CyberMaid',
        'nav_misty_onsen': 'Misty Onsen',
        'nav_language': '繁體中文',

        // 主標題
        'hero_subtitle': '探索全新的虛擬世界',

        // 產品標籤
        'product_tag': '立即遊玩 >',
        'product_nav_new': '全新',

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
        'footer_rights': '保留一切權利',

        // Misty Onsen 專用翻譯
        'misty_onsen_modal_title': '深入日本山區的神秘溫泉，',
        'misty_onsen_modal_subtitle': '遵循規則，生存下去——或者永遠留在山中。',
        'misty_onsen_name': '《Misty Onsen》——心理恐怖生存遊戲',
        'misty_onsen_slogan': '🌿 遵循規則，生存下去——或者永遠留在山中 🌿',
        'misty_onsen_desc': '第一人稱心理恐怖遊戲，設定在偏遠的日本山區溫泉。作為新的管理員，通過遵循備忘錄來生存。',
        'misty_onsen_rules_title': '📓 工作規則（必須遵循）：',
        'misty_onsen_rules': [
            '👕 穿著高度可見的服裝',
            '🛤️ 絕不偏離指定路線',
            '🔇 如果聽到有人呼喚，不要回頭或回應',
            '🚫 如果看到女性，記住——這座山上不應該有任何女性',
            '🏃 如果聞到任何奇怪氣味，立即撤離'
        ],
        'misty_onsen_features_title': '🎀 遊戲特色：',
        'misty_onsen_features': [
            '🌿 心理恐怖氛圍：恐懼來自孤立、環境和未知',
            '📖 基於神秘網路傳言：紮根於現實工作環境和山林禁忌',
            '⚡ 偶發突發事件：不以跳嚇為中心，但危險可能意外出現',
            '🏃 無戰鬥——只有決策和逃脫：遵循規則生存是你的唯一目標'
        ],
        'misty_onsen_suitable_title': '🔥 適合這些玩家：',
        'misty_onsen_suitable': [
            '✓ 喜愛心理恐怖和氛圍營造的玩家',
            '✓ 追求沉浸式恐怖體驗的冒險遊戲愛好者',
            '✓ 喜歡解謎和生存元素的玩家',
            '✓ 對日本文化和神秘傳言感興趣的玩家',
            '✓ 尋找獨特恐怖體驗的玩家'
        ],
        'misty_onsen_cta_title': '🌿 準備好面對山中的恐怖了嗎？🌿',
        'misty_onsen_cta_desc': '立即體驗，讓 Misty Onsen 帶你進入一個充滿恐懼和神秘的世界！',
        'misty_onsen_media_html': '媒體報導：<a href="https://gamesardor.net/top-steam-games-november-2025/" target="_blank" rel="noopener noreferrer">Games Ardor - 2025 年 11 月 Steam 精選遊戲</a>'
    },
    'en': {
        // Navigation
        'nav_cybermaid': 'CyberMaid',
        'nav_misty_onsen': 'Misty Onsen',
        'nav_language': 'English',

        // Hero section
        'hero_subtitle': 'Explore New Virtual Worlds',

        // Product tag
        'product_tag': 'Play Now >',
        'product_nav_new': 'New',

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
        'footer_rights': 'All rights reserved',

        // Misty Onsen specific translations
        'misty_onsen_modal_title': 'Deep in the Japanese mountains lies a mysterious onsen,',
        'misty_onsen_modal_subtitle': 'Follow the rules to survive—or stay in the mountain forever.',
        'misty_onsen_name': 'Misty Onsen - Psychological Horror Survival Game',
        'misty_onsen_slogan': '🌿 Follow the rules to survive—or stay in the mountain forever 🌿',
        'misty_onsen_desc': 'A first-person psychological horror game set at a remote hot-spring facility in the Japanese mountains. As the new caretaker, survive by following the memorandum.',
        'misty_onsen_rules_title': '📓 Work Rules (Must Follow):',
        'misty_onsen_rules': [
            '👕 Wear highly visible clothing',
            '🛤️ Never stray from the designated route',
            '🔇 If you hear someone calling, do not look back or respond',
            '🚫 If you see a woman, remember—there shouldn\'t be any on this mountain',
            '🏃 If you detect any strange odor, evacuate immediately'
        ],
        'misty_onsen_features_title': '🎀 Game Features:',
        'misty_onsen_features': [
            '🌿 Psychological horror atmosphere: Fear arises from isolation, ambience, and the unknown',
            '📖 Inspired by mysterious online rumors: Grounded in realistic work settings and mountain-forest taboos',
            '⚡ Occasional sudden events: Not centered on jump scares, but danger can appear unexpectedly',
            '🏃 No combat—only decisions and escape: Surviving by the rules is your only goal'
        ],
        'misty_onsen_suitable_title': '🔥 Suitable for these players:',
        'misty_onsen_suitable': [
            '✓ Players who love psychological horror and atmospheric experiences',
            '✓ Adventure game enthusiasts seeking immersive horror experiences',
            '✓ Players who enjoy puzzle-solving and survival elements',
            '✓ Players interested in Japanese culture and mysterious rumors',
            '✓ Players looking for unique horror experiences'
        ],
        'misty_onsen_cta_title': '🌿 Ready to face the horror in the mountain? 🌿',
        'misty_onsen_cta_desc': 'Experience now and let Misty Onsen take you into a world full of fear and mystery!',
        'misty_onsen_media_html': 'Media mention: <a href="https://gamesardor.net/top-steam-games-november-2025/" target="_blank" rel="noopener noreferrer">Games Ardor – Top Steam Games (November 2025)</a>'
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
    document.querySelector('.hero-subtitle').textContent = t.hero_subtitle;

    // 更新產品標籤
    document.querySelectorAll('.product-tag').forEach(tag => {
        tag.textContent = t.product_tag;
    });
    const productNavNew = document.querySelector('.product-nav-new');
    if (productNavNew) {
        productNavNew.textContent = t.product_nav_new;
    }

    // 更新 CyberMaid 產品詳情模態框
    const cybermaidModal = document.getElementById('productModal');
    if (cybermaidModal) {
        cybermaidModal.querySelector('.modal-header h2').textContent = t.product_modal_title;
        cybermaidModal.querySelector('.modal-header p').textContent = t.product_modal_subtitle;
        cybermaidModal.querySelector('.modal-body h3').textContent = t.product_name;
        
        // 更新產品標語與段落標題（主要特色、適合玩家）
        const modalH4s = cybermaidModal.querySelectorAll('.modal-body h4');
        if (modalH4s && modalH4s.length > 0) {
            // 第 1 個 h4：產品標語
            modalH4s[0].textContent = t.product_slogan;
            // 第 2 個 h4：主要特色
            if (modalH4s.length > 1) {
                modalH4s[1].textContent = t.features_title;
            }
            // 第 3 個 h4：適合玩家
            if (modalH4s.length > 2) {
                modalH4s[2].textContent = t.suitable_title;
            }
        }
        cybermaidModal.querySelector('.modal-body > p').textContent = t.product_desc;

        // 更新特色列表
        const featuresList = cybermaidModal.querySelector('.modal-body ul');
        if (featuresList) {
            featuresList.innerHTML = t.features.map(feature => `<li>${feature}</li>`).join('');
        }

        // 更新適合玩家列表
        const suitableList = cybermaidModal.querySelector('.modal-body ul:nth-of-type(2)');
        if (suitableList) {
            suitableList.innerHTML = t.suitable_players.map(player => `<li>${player}</li>`).join('');
        }

        // 更新CTA區域
        cybermaidModal.querySelector('.cta-section h4').textContent = t.cta_title;
        cybermaidModal.querySelector('.cta-section p').textContent = t.cta_desc;
        cybermaidModal.querySelector('.store-action').textContent = t.buy_steam;
    }

    // 更新 Misty Onsen 模態框
    const mistyOnsenModal = document.getElementById('mistyOnsenModal');
    if (mistyOnsenModal) {
        mistyOnsenModal.querySelector('.modal-header h2').textContent = t.misty_onsen_modal_title;
        mistyOnsenModal.querySelector('.modal-header p').textContent = t.misty_onsen_modal_subtitle;
        mistyOnsenModal.querySelector('.modal-body h3').textContent = t.misty_onsen_name;
        mistyOnsenModal.querySelector('.modal-body h4').textContent = t.misty_onsen_slogan;
        mistyOnsenModal.querySelector('.modal-body > p').textContent = t.misty_onsen_desc;

        // 更新工作規則標題和列表
        const mistyH4s = mistyOnsenModal.querySelectorAll('.modal-body h4');
        if (mistyH4s && mistyH4s.length > 1) {
            mistyH4s[1].textContent = t.misty_onsen_rules_title;
        }
        const mistyRulesList = mistyOnsenModal.querySelector('.modal-body ul');
        if (mistyRulesList) {
            mistyRulesList.innerHTML = t.misty_onsen_rules.map(rule => `<li>${rule}</li>`).join('');
        }

        // 更新遊戲特色標題和列表
        if (mistyH4s && mistyH4s.length > 2) {
            mistyH4s[2].textContent = t.misty_onsen_features_title;
        }
        if (mistyH4s && mistyH4s.length > 3) {
            mistyH4s[3].textContent = t.misty_onsen_suitable_title;
        }
        const mistyFeaturesList = mistyOnsenModal.querySelector('.modal-body ul:nth-of-type(2)');
        if (mistyFeaturesList) {
            mistyFeaturesList.innerHTML = t.misty_onsen_features.map(feature => `<li>${feature}</li>`).join('');
        }

        // 更新適合玩家列表
        const mistySuitableList = mistyOnsenModal.querySelector('.modal-body ul:nth-of-type(3)');
        if (mistySuitableList) {
            mistySuitableList.innerHTML = t.misty_onsen_suitable.map(player => `<li>${player}</li>`).join('');
        }

        // 更新CTA區域
        mistyOnsenModal.querySelector('.cta-section h4').textContent = t.misty_onsen_cta_title;
        mistyOnsenModal.querySelector('.cta-section p').textContent = t.misty_onsen_cta_desc;
        const mistyMediaMention = mistyOnsenModal.querySelector('.cta-section .media-mention');
        if (mistyMediaMention) {
            mistyMediaMention.innerHTML = t.misty_onsen_media_html;
        }
        mistyOnsenModal.querySelectorAll('.store-action').forEach(action => {
            action.textContent = t.buy_steam;
        });
    }

    // 更新年齡確認模態框
    document.querySelector('#ageCheckModal h2').textContent = t.age_verify_title;
    document.querySelector('#ageCheckModal p').textContent = t.age_verify_desc;
    document.querySelector('.age-confirm-btn').textContent = t.age_verify_yes;
    document.querySelector('.age-deny-btn').textContent = t.age_verify_no;

    // 更新頁尾
    document.querySelector('.footer-section:nth-child(1) h4').textContent = t.footer_contact;
    const emailElement = document.querySelector('.footer-section:nth-child(1) p');
    if (emailElement) {
        emailElement.textContent = 'shen@shen.technology';
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