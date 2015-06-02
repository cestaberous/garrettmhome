var isOpen = false;
var isMobile = false;
var onLoginRedir;
document.write('\
        <script src="/lib/jsurl/getvars.js"></script>\
        <script src="/depPage/setup/jquery-1.11.3.js"></script>\
        <script src="/lib/xml/xmlLib.js"/>\
        <script src="/depPage/setup/utils.js"></script>\
        <link rel="stylesheet" type="text/css" href="/depPage/css/index.css"/>\
        <title>Garrett Mills</title>\
        <link rel="shortcut icon" href="/depPage/images/favicon.ico"/>\
');

function showQuote() {
    if (isOpen != true) {
        document.getElementById("cr").style.visibility="visible";
        isOpen = true;
    }
    else {
        document.getElementById("cr").style.visibility="hidden";
        isOpen = false;
    }
}