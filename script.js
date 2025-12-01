// Flashcard data organized by categories
const flashcardData = {
    greetings: [
        { japanese: "こんにちは", romaji: "Konnichiwa", vietnamese: "Xin chào", example: "こんにちは、元気ですか？" },
        { japanese: "おはよう", romaji: "Ohayou", vietnamese: "Chào buổi sáng", example: "おはよう、今日もいい天気ですね。" },
        { japanese: "こんばんは", romaji: "Konbanwa", vietnamese: "Chào buổi tối", example: "こんばんは、お疲れ様です。" },
        { japanese: "さようなら", romaji: "Sayounara", vietnamese: "Tạm biệt", example: "さようなら、また明日！" },
        { japanese: "ありがとう", romaji: "Arigatou", vietnamese: "Cảm ơn", example: "ありがとうございます。" },
        { japanese: "すみません", romaji: "Sumimasen", vietnamese: "Xin lỗi", example: "すみません、道を教えてください。" },
        { japanese: "はい", romaji: "Hai", vietnamese: "Vâng/Đúng", example: "はい、分かりました。" },
        { japanese: "いいえ", romaji: "Iie", vietnamese: "Không", example: "いいえ、大丈夫です。" },
        { japanese: "おやすみ", romaji: "Oyasumi", vietnamese: "Chúc ngủ ngon", example: "おやすみなさい。" },
        { japanese: "いただきます", romaji: "Itadakimasu", vietnamese: "Xin mời (trước khi ăn)", example: "いただきます！美味しそう。" }
    ],
    numbers: [
        { japanese: "一", romaji: "Ichi", vietnamese: "Một (1)", example: "一つください。" },
        { japanese: "二", romaji: "Ni", vietnamese: "Hai (2)", example: "二人で行きます。" },
        { japanese: "三", romaji: "San", vietnamese: "Ba (3)", example: "三時に会いましょう。" },
        { japanese: "四", romaji: "Yon/Shi", vietnamese: "Bốn (4)", example: "四月は桜の季節です。" },
        { japanese: "五", romaji: "Go", vietnamese: "Năm (5)", example: "五分待ってください。" },
        { japanese: "六", romaji: "Roku", vietnamese: "Sáu (6)", example: "六時に起きます。" },
        { japanese: "七", romaji: "Nana/Shichi", vietnamese: "Bảy (7)", example: "七月に日本へ行きます。" },
        { japanese: "八", romaji: "Hachi", vietnamese: "Tám (8)", example: "八百屋で野菜を買います。" },
        { japanese: "九", romaji: "Kyuu/Ku", vietnamese: "Chín (9)", example: "九月は涼しいです。" },
        { japanese: "十", romaji: "Juu", vietnamese: "Mười (10)", example: "十個のりんごがあります。" }
    ],
    colors: [
        { japanese: "赤", romaji: "Aka", vietnamese: "Màu đỏ", example: "赤い花が好きです。" },
        { japanese: "青", romaji: "Ao", vietnamese: "Màu xanh dương", example: "空は青いです。" },
        { japanese: "黄色", romaji: "Kiiro", vietnamese: "Màu vàng", example: "黄色いバナナを食べます。" },
        { japanese: "緑", romaji: "Midori", vietnamese: "Màu xanh lá", example: "緑の野菜は体にいいです。" },
        { japanese: "白", romaji: "Shiro", vietnamese: "Màu trắng", example: "白い雪が降っています。" },
        { japanese: "黒", romaji: "Kuro", vietnamese: "Màu đen", example: "黒い猫がいます。" },
        { japanese: "オレンジ", romaji: "Orenji", vietnamese: "Màu cam", example: "オレンジジュースを飲みます。" },
        { japanese: "ピンク", romaji: "Pinku", vietnamese: "Màu hồng", example: "ピンクの服を着ています。" },
        { japanese: "紫", romaji: "Murasaki", vietnamese: "Màu tím", example: "紫のぶどうが美味しいです。" },
        { japanese: "茶色", romaji: "Chairo", vietnamese: "Màu nâu", example: "茶色の犬を飼っています。" }
    ],
    family: [
        { japanese: "お父さん", romaji: "Otousan", vietnamese: "Bố", example: "お父さんは会社員です。" },
        { japanese: "お母さん", romaji: "Okaasan", vietnamese: "Mẹ", example: "お母さんは料理が上手です。" },
        { japanese: "兄", romaji: "Ani", vietnamese: "Anh trai", example: "兄は大学生です。" },
        { japanese: "姉", romaji: "Ane", vietnamese: "Chị gái", example: "姉は東京に住んでいます。" },
        { japanese: "弟", romaji: "Otouto", vietnamese: "Em trai", example: "弟は高校生です。" },
        { japanese: "妹", romaji: "Imouto", vietnamese: "Em gái", example: "妹はピアノを弾きます。" },
        { japanese: "おじいさん", romaji: "Ojiisan", vietnamese: "Ông", example: "おじいさんは庭で野菜を育てています。" },
        { japanese: "おばあさん", romaji: "Obaasan", vietnamese: "Bà", example: "おばあさんの料理が大好きです。" },
        { japanese: "家族", romaji: "Kazoku", vietnamese: "Gia đình", example: "家族と一緒に旅行します。" },
        { japanese: "両親", romaji: "Ryoushin", vietnamese: "Bố mẹ", example: "両親に感謝しています。" }
    ],
    food: [
        { japanese: "ご飯", romaji: "Gohan", vietnamese: "Cơm", example: "ご飯を食べましょう。" },
        { japanese: "寿司", romaji: "Sushi", vietnamese: "Sushi", example: "寿司は日本料理です。" },
        { japanese: "ラーメン", romaji: "Raamen", vietnamese: "Mì ramen", example: "ラーメンが食べたいです。" },
        { japanese: "お茶", romaji: "Ocha", vietnamese: "Trà", example: "お茶を飲みませんか？" },
        { japanese: "水", romaji: "Mizu", vietnamese: "Nước", example: "水をください。" },
        { japanese: "肉", romaji: "Niku", vietnamese: "Thịt", example: "肉と野菜を買います。" },
        { japanese: "魚", romaji: "Sakana", vietnamese: "Cá", example: "新鮮な魚が好きです。" },
        { japanese: "野菜", romaji: "Yasai", vietnamese: "Rau", example: "野菜をたくさん食べます。" },
        { japanese: "果物", romaji: "Kudamono", vietnamese: "Trái cây", example: "果物は体にいいです。" },
        { japanese: "パン", romaji: "Pan", vietnamese: "Bánh mì", example: "朝はパンを食べます。" }
    ]
};

let currentCategory = 'greetings';
let currentCards = [...flashcardData[currentCategory]];
let currentIndex = 0;

// DOM Elements
let flashcard, japaneseText, romajiText, vietnameseText, exampleSentence, progressFill, progressText, prevBtn, nextBtn;

// Flag to prevent double initialization
let initialized = false;

// Initialize DOM elements
function initDOMElements() {
    flashcard = document.getElementById('flashcard');
    japaneseText = document.getElementById('japaneseText');
    romajiText = document.getElementById('romajiText');
    vietnameseText = document.getElementById('vietnameseText');
    exampleSentence = document.getElementById('exampleSentence');
    progressFill = document.getElementById('progressFill');
    progressText = document.getElementById('progressText');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    
    // Check if all required elements are found
    if (!flashcard || !japaneseText || !romajiText || !vietnameseText || 
        !exampleSentence || !progressFill || !progressText || !prevBtn || !nextBtn) {
        console.error('Required DOM elements not found');
        return false;
    }
    return true;
}

// Initialize the app
function init() {
    if (initialized) return;
    if (!initDOMElements()) return;
    initialized = true;
    
    updateCard();
    updateProgress();
    updateButtons();
}

// Update the current card display
function updateCard() {
    const card = currentCards[currentIndex];
    japaneseText.textContent = card.japanese;
    romajiText.textContent = card.romaji;
    vietnameseText.textContent = card.vietnamese;
    exampleSentence.textContent = card.example;
    
    // Reset flip state
    flashcard.classList.remove('flipped');
}

// Flip the card
function flipCard() {
    flashcard.classList.toggle('flipped');
}

// Go to previous card
function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
        updateProgress();
        updateButtons();
    }
}

// Go to next card
function nextCard() {
    if (currentIndex < currentCards.length - 1) {
        currentIndex++;
        updateCard();
        updateProgress();
        updateButtons();
    }
}

// Update progress bar and text
function updateProgress() {
    const progress = ((currentIndex + 1) / currentCards.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `${currentIndex + 1} / ${currentCards.length}`;
}

// Update button states
function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentCards.length - 1;
}

// Shuffle the cards
function shuffleCards() {
    // Fisher-Yates shuffle algorithm
    for (let i = currentCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
    }
    currentIndex = 0;
    updateCard();
    updateProgress();
    updateButtons();
}

// Change category
function changeCategory() {
    const categorySelect = document.getElementById('category');
    currentCategory = categorySelect.value;
    currentCards = [...flashcardData[currentCategory]];
    currentIndex = 0;
    updateCard();
    updateProgress();
    updateButtons();
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            prevCard();
            break;
        case 'ArrowRight':
            nextCard();
            break;
        case ' ':
        case 'Enter':
            flipCard();
            event.preventDefault();
            break;
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Also call init immediately in case DOMContentLoaded already fired
if (document.readyState !== 'loading') {
    init();
}
