function injectSearchStyles(url) {
    var elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.setAttribute('href', url);
    document.body.appendChild(elem);
}

function injectSearch() {
    browser.storage.sync.get({
        dark: false
    }, items => {
        if (!items.dark)
            return;

        injectSearchStyles(browser.extension.getURL('css/homepage.css'));
    });
}

window.addEventListener("DOMContentLoaded", injectSearch);