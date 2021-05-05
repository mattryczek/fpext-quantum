function injectStyles(url) {
    browser.storage.sync.get({
        prettyFootprints: true,
        dark: false
    }, function(items) {
        if ((!items.prettyFootprints || items.dark) && url.endsWith('fp-material.css'))
            return;

        if (url.endsWith('fp-material-dark.css') && !items.dark)
            return;

        if (!document.body) {
            setTimeout(injectStyles.bind(null, url), 10);
            return;
        }

        var elem = document.createElement('link');
        elem.rel = 'stylesheet';
        elem.setAttribute('href', url);
        document.body.appendChild(elem);
    });
}

function injectAll() {
    injectStyles(browser.extension.getURL('css/fp-material.css'));
    injectStyles(browser.extension.getURL('css/fp-material-dark.css'));
    injectStyles(browser.extension.getURL('css/fixify.css'));
    injectStyles(browser.extension.getURL('css/attachments.css'));
}

injectAll();