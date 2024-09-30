

document.addEventListener("DOMContentLoaded", function(){
const body = document.querySelector('body');


document.querySelector("body > nav > div.nav-wrapper > div > button")

const scrollElement = document.getElementById('scroll');
const bodyElement = document.body;
const quoteElement = document.getElementById('quote');
const textContainer = document.querySelector('.text-container');

let isQuoteVisible = false; 

window.addEventListener('scroll', function() {
    const rect = scrollElement.getBoundingClientRect();

    // 检查quote是否在视口内
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        if (!isQuoteVisible) {

            isQuoteVisible = true;

            // 应用效果
            document.body.style.backgroundColor = 'black'; // 背景变为黑色
            quoteElement.classList.add('blur'); // 添加模糊效果
            textContainer.classList.add('blur'); // 添加模糊效果到其他文本
        }

        // 确保页面固定在quote块
        window.scrollTo(0, rect.top + window.scrollY);
    } else {
        if (isQuoteVisible) {
            // 用户离开quote块，恢复效果
            isQuoteVisible = false;
            document.body.style.backgroundColor = '#F7F7F7'; // 恢复背景颜色
            quoteElement.classList.remove('blur'); // 移除模糊效果
            textContainer.classList.remove('blur'); // 移除模糊效果
        }
    }
});


const toggleButton = document.getElementById('toggleLanguage');
const chineseText = document.getElementById('chinese-text');
const englishText = document.getElementById('english-text');

toggleButton.addEventListener('click', function() {
  if (chineseText.style.display === 'none') {
    chineseText.style.display = 'block';
    englishText.style.display = 'none';
    toggleButton.textContent = 'English';
  } else {
    chineseText.style.display = 'none';
    englishText.style.display = 'block';
    toggleButton.textContent = '中文';
  }
});




})


