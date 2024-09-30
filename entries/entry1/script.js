

document.addEventListener("DOMContentLoaded", function(){
const body = document.querySelector('body');


document.querySelector("body > nav > div.nav-wrapper > div > button")

const scrollElement = document.getElementById('scroll');
const quoteElement = document.getElementById('quote');
const textContainer = document.querySelector('.text-container');

let isQuoteVisible = false;

window.addEventListener('scroll', function() {
    const rect = scrollElement.getBoundingClientRect();

    // 检查quote是否在视口内
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        if (!isQuoteVisible) {
            isQuoteVisible = true;
            
            // 应用背景颜色和模糊效果
            document.body.classList.add('fade-in');
            textContainer.classList.add('blur');
        }
    } else {
        if (isQuoteVisible) {
            isQuoteVisible = false;
            
            // 恢复背景颜色和模糊效果
            document.body.classList.remove('fade-in');
            textContainer.classList.remove('blur');
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


