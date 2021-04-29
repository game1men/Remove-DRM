// na některých webech to háže výjimku proto ten try catch, v budoucnu možná dopíšu lepší fix
try {
    chrome.browserAction.onClicked.addListener(function(tab) {
        //úpravy DOMu se musí provádět zvlášť ve scriptu
        chrome.tabs.executeScript({
            file: 'main.js'
        }, receiveUrl);
        //vrácenou URL to otevře v novém okně 
        function receiveUrl(url) {
            if (url != "") {
                chrome.tabs.create({ url: url.toString() });
            }
        }
    });
} catch (error) {

}