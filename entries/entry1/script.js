

document.addEventListener("DOMContentLoaded", function(){
const body = document.querySelector('body');


document.querySelector("body > nav > div.nav-wrapper > div > button")

const scrollElement = document.getElementById('scroll');

        window.addEventListener('scroll', function() {
            const rect = scrollElement.getBoundingClientRect();

            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                document.body.style.backgroundColor = 'black'; // 滚动到元素时背景变为黑色
            } else {
                document.body.style.backgroundColor = '#F7F7F7'; 
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


