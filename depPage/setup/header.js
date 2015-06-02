document.write('\
        <a href="/"><div class="title">\
            Garrett Mills\
        </div></a>\
        <div class="navi">\
            <ul>\
                <li><a href="/about/">About Me</a></li>\
                <li><a href="/projects/">Projects</a></li>\
                <li><a href="/works/">My Works</a></li>\
                <li><a href="http://cestaberous.gq">Minecraft: Cestaberous</a></li>\
                <li><a href="/resources/">Resources</a></li>\
                <li><a href="/contact/">Contact Me</a></li>\
                <li><a href="/blog/">My Blog</a></li>\
                <li class="copyright" onclick="showQuote();">&copy;</li>\
            </ul>\
        </div>\
        <div id="cr" class="crbox">\
            All code in this website, unless otherwise specified, is licensed with the GNU GPL-2 license.\
            <a href="http://opensource.org/licenses/GPL-2.0">View License</a>\
            <br/><br/>\
            Welcome, '+name+'! <a href="#" onclick="signOut();">Sign out</a><br/><br/>\
            <div class="g-signin2" data-onsuccess="onSignIn"></div>\
            <br/>\
            <p id="qotd"></p>\
        </div>\
        <script type="text/javascript" src="/depPage/quoteBar/randQuote.js"></script>\
\
');