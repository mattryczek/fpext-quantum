function save_options() {
    let prettyFootprints = document.getElementById('prettyFootprints').checked;
    let popupMessage = document.getElementById('popupMessage').checked;
    let enableCards = document.getElementById('enableCards').checked;
    let showDownloadCategories = document.getElementById('showDownloadCategories').checked;
    let tabs = document.getElementById('tabs').checked;
    let showLocationWarning = document.getElementById('locationWarning').checked;
    let fixconduits = document.getElementById('fixconduits').checked;
    let dark = document.getElementById('dark').checked;

    browser.storage.sync.set({
        prettyFootprints: prettyFootprints,
        enableCards: enableCards,
        popupMessage: popupMessage,
        showDownloadCategories: showDownloadCategories,
        tabs: tabs,
        showLocationWarning: showLocationWarning,
        fixconduits: fixconduits,
        dark: dark
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in browser.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    browser.storage.sync.get({
        prettyFootprints: true,
        enableCards: false,
        popupMessage: false,
        showDownloadCategories: false,
        tabs: true,
        showLocationWarning: true,
        fixconduits: true,
        dark: false
    }, function(items) {
        document.getElementById('prettyFootprints').checked = items.prettyFootprints;
        document.getElementById('enableCards').checked = items.enableCards;
        document.getElementById('popupMessage').checked = items.popupMessage;
        document.getElementById('showDownloadCategories').checked = items.showDownloadCategories;
        document.getElementById('tabs').checked = items.tabs;
        document.getElementById('locationWarning').checked = items.showLocationWarning;
        document.getElementById('fixconduits').checked = items.fixconduits;
        document.getElementById('dark').checked = items.dark;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);