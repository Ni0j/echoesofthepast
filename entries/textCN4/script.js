

document.addEventListener("DOMContentLoaded", function(){
const body = document.querySelector('body');


document.querySelector("body > nav > div.nav-wrapper > div > button")

// const scrollElement = document.getElementById('scroll');
// const quoteElement = document.getElementById('quote');
// const textContainer = document.querySelector('.text-container');

// let isQuoteVisible = false;

// window.addEventListener('scroll', function() {
//     const rect = scrollElement.getBoundingClientRect();

//     // 检查quote是否在视口内
//     if (rect.top <= window.innerHeight && rect.bottom >= 0) {
//         if (!isQuoteVisible) {
//             isQuoteVisible = true;
            
//             // 应用背景颜色和模糊效果
//             document.body.classList.add('fade-in');
//             textContainer.classList.add('blur');
//         }
//     } else {
//         if (isQuoteVisible) {
//             isQuoteVisible = false;
            
//             // 恢复背景颜色和模糊效果
//             document.body.classList.remove('fade-in');
//             textContainer.classList.remove('blur');
//         }
//     }
// });


// const toggleButton = document.getElementById('toggleLanguage');
// const chineseText = document.getElementById('chinese-text');
// const englishText = document.getElementById('english-text');

// // 默认中文显示，英文隐藏
// chineseText.style.display = 'block';
// englishText.style.display = 'none';

// toggleButton.addEventListener('click', function() {
//   if (chineseText.style.display === 'none') {
//     chineseText.style.display = 'block';
//     englishText.style.display = 'none';
//     toggleButton.textContent = 'English';
//   } else {
//     chineseText.style.display = 'none';
//     englishText.style.display = 'block';
//     toggleButton.textContent = '中文';
//   }
// });

// const translations = {
//   en: {
//       title: "Echoes of The Past",
//       chapCN: "Suppression of Malevolent Ghosts",
//       chapEN: "Suppressing malevolent ghosts that bring misfortune, financial loss, and plotting harm",
//       chineseText: `<!-- 中文内容 -->`,
//       englishText: `<!-- 英文内容 -->`
//   },
//   zh: {
//       title: "回声之歌",
//       chapCN: "厭横損財，謀害之鬼",
//       chapEN: "<span class='supp'>Suppressing</span><br>malevolent ghosts<br>that brings misfortune, <br>financial loss<br> and plotting harm",
//       chineseText: `<!-- 中文内容 -->`,
//       englishText: `<!-- 英文内容 -->`
//   }
// };

// // 默认语言
// let currentLang = 'en';

// // 切换语言的函数
// function switchLanguage(lang) {
//   currentLang = lang;
//   const elements = document.querySelectorAll("[data-key]");

//   elements.forEach(element => {
//       const key = element.getAttribute("data-key");
//       element.innerHTML = translations[lang][key];
//   });
// }

// // 初始化
// document.getElementById('toggleLanguage').addEventListener('click', () => {
//   const newLang = currentLang === 'en' ? 'zh' : 'en';
//   switchLanguage(newLang);
//   document.getElementById('toggleLanguage').textContent = newLang === 'en' ? 'English' : '中文';
// });

// // 默认加载英文内容
// switchLanguage('en');


})


