function save_options() {
    let prettyFootprints = document.getElementById('prettyFootprints').checked;
    let popupMessage = document.getElementById('popupMessage').checked;
    let enableCards = document.getElementById('enableCards').checked;
    let showDownloadCategories = document.getElementById('showDownloadCategories').checked;
    let tabs = document.getElementById('tabs').checked;

    browser.storage.sync.set({
        prettyFootprints: prettyFootprints,
        enableCards: enableCards,
        popupMessage: popupMessage,
        showDownloadCategories: showDownloadCategories,
        tabs: tabs,
    });
}

// Restores select box and checkbox state using the preferences
// stored in browser.storage.
function restore_options() {
    browser.storage.sync.get({
        prettyFootprints: true,
        enableCards: false,
        popupMessage: false,
        showDownloadCategories: false,
        tabs: true,
    }, function(items) {
        document.getElementById('prettyFootprints').checked = items.prettyFootprints;
        document.getElementById('enableCards').checked = items.enableCards;
        document.getElementById('popupMessage').checked = items.popupMessage;
        document.getElementById('showDownloadCategories').checked = items.showDownloadCategories;
        document.getElementById('tabs').checked = items.tabs;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('opts').addEventListener('click', save_options);

function set_version() {
    let version = browser.runtime.getManifest().version;
    document.getElementById('version').innerText = "Footprints++ v" + version;
}

set_version();