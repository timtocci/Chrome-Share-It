/** app.js */
var defaultentries = [
    {
        "menu": "facebook.com",
        "active": 1
    }, {
        "menu": "twitter.com",
        "active": 1
    }, {
        "menu": "plus.google.com",
        "active": 1
    }, {
        "menu": "linkedin.com",
        "active": 1
    }, {
        "menu": "digg.com",
        "active": 1
    }, {
        "menu": "stumbleupon.com",
        "active": 1
    }, {
        "menu": "tumblr.com",
        "active": 1
    }, {
        "menu": "friendfeed.com",
        "active": 1
    }, {
        "menu": "fark.com",
        "active": 1
    }, {
        "menu": "blinklist.com",
        "active": 1
    }, {
        "menu": "plurk.com",
        "active": 1
    }, {
        "menu": "pinterest.com",
        "active": 1
    }
];
var entries = {};
if (!localStorage.getItem("entries")) {
    localStorage.setItem("entries", JSON.stringify(defaultentries));
}
entries = JSON.parse(localStorage.getItem("entries"));
function isActive(menu) {
    console.log("isActive");
    var elen = entries.length;
    console.assert(!elen == 0);
    for (i = 0; i < elen; i++) {
        if (entries[i]["menu"] == menu) {
            console.log(entries[i]["menu"]);
            if (entries[i]["active"] == 1) {
                return true;
            } else {
                return false;
            }
        }
    }
}
function setActive(menu) {
    console.log("setActive");
    var elen = entries.length;
    console.log(menu);
    console.assert(!elen == 0);
    for (i = 0; i < elen; i++) {
        if (entries[i]["menu"] == menu) {
            entries[i]["active"] = 1;
        }
    }
    localStorage.setItem("entries", JSON.stringify(entries));
}
function setInactive(menu) {
    console.log("setInactive");
    var elen = entries.length;
    console.log(menu);
    console.assert(!elen == 0);
    for (i = 0; i < elen; i++) {
        if (entries[i]["menu"] == menu) {
            entries[i]["active"] = 0;
        }
    }
    localStorage.setItem("entries", JSON.stringify(entries));
}
function openextensions() {
    console.log("openextensions");
    var createProperties = {url: "chrome://extensions/"};
    chrome.tabs.create(createProperties);
}
/* Create the context menu */
var hp = chrome.contextMenus.create({"title": "Share-it"});

if (isActive("facebook.com")) {
    chrome.contextMenus.create({"title": "facebook.com", "contexts": ["page"], "parentId": hp, "onclick": facebookIt});
}
function facebookIt(i, t) {
    var createProperties = {url: "http://www.facebook.com/sharer.php?u=" + encodeURI(t.url) + "&src=" + encodeURIComponent("Share-it")};
    chrome.tabs.create(createProperties);
}

if (isActive("twitter.com")) {
    chrome.contextMenus.create({"title": "twitter.com", "contexts": ["page"], "parentId": hp, "onclick": twitterIt});
}
function twitterIt(i, t) {
    var createProperties = {url: "https://twitter.com/share?url=" + encodeURI(t.url) + "&text=" + encodeURIComponent(t.title)};
    chrome.tabs.create(createProperties);
}

if (isActive("plus.google.com")) {
    chrome.contextMenus.create({
        "title": "plus.google.com",
        "contexts": ["page"],
        "parentId": hp,
        "onclick": googleplusIt
    });
}
function googleplusIt(i, t) {
    var createProperties = {url: "https://plusone.google.com/_/+1/confirm?hl=en&url=" + encodeURI(t.url)};
    chrome.tabs.create(createProperties);
}

if (isActive("linkedin.com")) {
    chrome.contextMenus.create({"title": "linkedin.com", "contexts": ["page"], "parentId": hp, "onclick": linkedinIt});
}
function linkedinIt(i, t) {
    var createProperties = {url: "http://www.linkedin.com/cws/share?url=" + encodeURI(t.url)};
    chrome.tabs.create(createProperties);
}

if (isActive("digg.com")) {
    chrome.contextMenus.create({"title": "digg.com", "contexts": ["page"], "parentId": hp, "onclick": diggIt});
}
function diggIt(i, t) {
    var createProperties = {url: "http://digg.com/submit?url=" + encodeURI(t.url) + "&title=" + encodeURIComponent(t.title)};
    chrome.tabs.create(createProperties);
}

if (isActive("stumbleupon.com")) {
    chrome.contextMenus.create({
        "title": "stumbleupon.com",
        "contexts": ["page"],
        "parentId": hp,
        "onclick": stumbleuponIt
    });
}
function stumbleuponIt(i, t) {
    var createProperties = {url: "http://www.stumbleupon.com/submit?url=" + encodeURI(t.url)};
    chrome.tabs.create(createProperties);
}

if (isActive("tumblr.com")) {
    chrome.contextMenus.create({"title": "tumblr.com", "contexts": ["page"], "parentId": hp, "onclick": tumblrIt});
}
function tumblrIt(i, t) {
    var createProperties = {url: "http://www.tumblr.com/share/link?url=" + encodeURI(t.url)};
    chrome.tabs.create(createProperties);
}

if (isActive("friendfeed.com")) {
    chrome.contextMenus.create({
        "title": "friendfeed.com",
        "contexts": ["page"],
        "parentId": hp,
        "onclick": friendfeedIt
    });
}
function friendfeedIt(i, t) {
    var createProperties = {url: "http://www.friendfeed.com/share?url=" + encodeURI(t.url) + "&title=" + encodeURIComponent(t.title)};
    chrome.tabs.create(createProperties);
}

if (isActive("fark.com")) {
    chrome.contextMenus.create({"title": "fark.com", "contexts": ["page"], "parentId": hp, "onclick": farkIt});
}
function farkIt(i, t) {
    var createProperties = {url: "http://cgi.fark.com/cgi/fark/farkit.pl?u=" + encodeURI(t.url) + "&h=" + encodeURIComponent(t.title)};
    chrome.tabs.create(createProperties);
}

if (isActive("blinklist.com")) {
    chrome.contextMenus.create({
        "title": "blinklist.com",
        "contexts": ["page"],
        "parentId": hp,
        "onclick": blinklistIt
    });
}
function blinklistIt(i, t) {
    var createProperties = {url: "http://www.blinklist.com/index.php?Action=Blink/Addblink.php&Url=" + encodeURI(t.url) + "&Title=" + encodeURIComponent(t.title)};
    chrome.tabs.create(createProperties);
}

if (isActive("plurk.com")) {
    chrome.contextMenus.create({"title": "plurk.com", "contexts": ["page"], "parentId": hp, "onclick": plurkIt});
}
function plurkIt(i, t) {
    var createProperties = {url: "http://plurk.com/?qualifier=shares&status=" + encodeURIComponent(t.title) + "%20%2D%20" + encodeURI(t.url)};
    chrome.tabs.create(createProperties);
}

if (isActive("pinterest.com")) {
    chrome.contextMenus.create({
        "title": "pinterest.com",
        "contexts": ["page"],
        "parentId": hp,
        "onclick": pinterestIt
    });
}
function pinterestIt(i, t) {
    var createProperties = {url: "http://pinterest.com/pin/create/button/?url=" + encodeURI(t.url)};
    chrome.tabs.create(createProperties);
}