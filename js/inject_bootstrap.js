chrome.storage.sync.get({
    enableCards: true
}, function(items) {
    if (!items.enableCards) {
        return;
    }
    inject();
});

function inject() {
    let boot_css = document.createElement("link");

    boot_css.type = "text/css";
    boot_css.rel = "stylesheet";
    boot_css.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css";
    boot_css.crossorigin = "anonymous";
    document.head.appendChild(boot_css);

    let boot_js = document.createElement("script");

    boot_js.type = "application/javascript";
    boot_js.async = false;
    boot_js.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js";
    boot_js.crossorigin = "anonymous";

    document.head.appendChild(boot_js);
}