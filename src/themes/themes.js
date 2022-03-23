const themeSelector = document.getElementById('themeSelector');
const themeLink = document.getElementById('themeLink');

const themes = [
    './themes/theme-1.css',
    './themes/theme-2.css',
    './themes/theme-3.css'
];

themeSelector.addEventListener('click', () => {
    let hrefValue =  themeLink.getAttribute('href');

    if(hrefValue === themes[0]) {
        themeLink.setAttribute('href', themes[1]);
    } else if(hrefValue === themes[1]) {
        themeLink.setAttribute('href', themes[2]);
    } else {
        themeLink.setAttribute('href', themes[0]);
    }
});


