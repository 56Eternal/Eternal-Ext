//global stuff
const ss = document.styleSheets[0];
const socialContainer = document.querySelector(".social-container");
socialContainer.style.width = "auto";
const messageList = document.querySelector(".message-list");
let css = document.createElement("style");
document.head.appendChild(css);
css.appendChild(document.createTextNode(`
    .vanis-menu-button {
        background: #b1700f;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 0 1px 1px #000;
        color: #dadada;
        cursor: pointer;
        font-size: 16px;
        outline: none;
        padding: 5px 9px;
        text-shadow: 1px 1px 2px #000;
    }
    .vanis-menu-tf {
        background: rgba(0,0,0,.5);
        border: 1px solid #000;
        border-radius: 4px;
        box-sizing: border-box;
        color: #dadada;
        display: block;
        outline: 0;
        padding: 5px;
        width: 100%;
    
    }
    .mt10 {
        margin-top: 10px;
    }
    `
));
//setting variables
var amountRulesAdded = 0;

var theme = 0;
if (localStorage.getItem("theme") !== null) {
    theme = parseInt(localStorage.getItem("theme"));
}
var adblocker = false;
if (localStorage.getItem("adblocker") !== null) {
    adblocker = localStorage.getItem("adblocker") === "true";
}
var oldChatStyling = true;
if (localStorage.getItem("oldChatStyling") !== null) {
    oldChatStyling = localStorage.getItem("oldChatStyling") === "true";
}
var rainbowTime = false;
if (localStorage.getItem("rainbowTime") !== null) {
    rainbowTime = localStorage.getItem("rainbowTime") === "true";
}
var messageTime = true;
if (localStorage.getItem("messageTime") !== null) {
    messageTime = localStorage.getItem("messageTime") === "true";
}
var msDigits = 1;
if (localStorage.getItem("msDigits") !== null) {
    msDigits = parseInt(localStorage.getItem("msDigits"));
}
var rainbowText = false;
if (localStorage.getItem("rainbowText") !== null) {
    rainbowText = localStorage.getItem("rainbowText") === "true";
}
var deleteStatScreenAd = false;
if (localStorage.getItem("deleteStatScreenAd") !== null) {
    deleteStatScreenAd = localStorage.getItem("deleteStatScreenAd") === "true";
}

updateTheme();
addChangeThemeButton();
if (adblocker) {
    lowerPlayerData();
}
if (oldChatStyling) {
    makeOldChatStyling();
}
addOptionsMenu();
addBigChatButton();
addTimeToMessages();
addAnimations();
if (rainbowText) {
    makeRainbowText();
}
if (deleteStatScreenAd) {
    deleteStatScreenAdd();
}
addExtOptionsToggleButton();


function addAnimations() {
    css.appendChild(document.createTextNode(`
@keyframes menuFlashing {
    0%   {background: white;}
  100%  {background: black;}
  }  
@keyframes colorRotate {
    from {
      color: #6666ff;
    }
    10% {
      color: #0099ff;
    }
    50% {
      color: #00ff00;
    }
    75% {
      color: #ff3399;
    }
    100% {
      color: #6666ff;
    }
  }
#theme-plus:hover{
    background:#007777;
    transition:all .4s ease;
}
#theme-minus:hover{
    background:#007777;
    transition:all .4s ease;
}
`));
}

function lowerPlayerData() {
    document.getElementById("player-data").style.marginTop = "300px";
}


function addChangeThemeButton() {

    //Change Theme parent button
    var amountThemes = 14;
    const themeButton = document.createElement('div');
    themeButton.id = "theme-button";
    themeButton.style.display = "flex";
    themeButton.style.background = "#008b8b"; //=darkcyan
    themeButton.style.textShadow = "1px 1px 2px #000";
    themeButton.style.borderRadius = "4px";
    themeButton.style.margin = "0px 4px";
    themeButton.style.boxShadow = '0 0 1px 1px #000';
    themeButton.style.textAlign = "center";

    //Change Theme text
    const themeButtonText = document.createElement('div');
    themeButtonText.id = "theme-button-text";
    themeButtonText.style.margin = "5px 0px";
    themeButtonText.innerHTML = "Theme " + theme;
    themeButtonText.style.textDecoration = "underline";
    // themeButtonText.style.borderLeft = "1px solid black";
    // themeButtonText.style.borderRight = "1px solid black";
    themeButtonText.style.padding = "0px 5px";

    //minus button
    const themeMinus = document.createElement('div');
    themeMinus.id = "theme-minus";
    themeMinus.innerHTML = "-";
    themeMinus.style.width = "45px";
    themeMinus.style.cursor = "pointer";
    themeMinus.style.padding = "5px 0px";
    themeMinus.style.borderTopLeftRadius = "4px";
    themeMinus.style.borderBottomLeftRadius = "4px";
    themeMinus.onclick = function () {
        theme--;
        if (theme == -1) {
            theme = amountThemes - 1;
        }
        updateTheme();
        themeButtonText.innerHTML = "Theme " + theme;
    }

    //plus button
    const themePlus = document.createElement('div');
    themePlus.id = "theme-plus";
    themePlus.innerHTML = "+";
    themePlus.style.width = "45px";
    themePlus.style.cursor = "pointer";
    themePlus.style.padding = "5px 0px";
    themePlus.style.borderTopRightRadius = "4px";
    themePlus.style.borderBottomRightRadius = "4px";
    themePlus.onclick = function () {
        theme++;
        theme = theme % amountThemes;
        updateTheme();

        themeButtonText.innerHTML = "Theme " + theme;
    }

    themeButton.appendChild(themeMinus);
    themeButton.appendChild(themeButtonText);
    themeButton.appendChild(themePlus);
    socialContainer.appendChild(themeButton);
}


function updateTheme() {
    const misaversUrl = "https://media.discordapp.net/attachments/1041104770758344814/1074257122302373968/misavers.png?width=200&height=145";
    for (let i = 0; i < amountRulesAdded; i++) {
        ss.deleteRule(0);
    }
    switch (theme) {
        case 0:
            //default background: linear-gradient(to right bottom, #273b5e, #0f1724); rgba(0,17,33,.75)
            amountRulesAdded = 0;
            break;

        case 1:
            //purple
            ss.insertRule('::-webkit-scrollbar-thumb {background-color: #5e2757 !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(31, 0, 33, 0.75) 300px,rgba(0,0,0,.75)) !important;}', 1);
            ss.insertRule('.fade-box {background: linear-gradient(to right bottom, #5e2757, #240f21) !important;}', 2);
            ss.insertRule('.replay-list-header {background: linear-gradient(to right bottom, #5e2757, #240f21) !important;}', 3);
            ss.insertRule('.swal2-popup {background: linear-gradient(to right bottom, #5e2757, #240f21) !important;}', 4);
            amountRulesAdded = 5;
            break;

        case 2:
            //wine red
            ss.insertRule('::-webkit-scrollbar-thumb {background-color: #5e2730 !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(33, 0, 10, 0.75) 300px,rgba(0,0,0,.75)) !important;}', 1);
            ss.insertRule('.fade-box {background: linear-gradient(to right bottom, #5e2730, #240f13) !important;}', 2);
            ss.insertRule('.replay-list-header {background: linear-gradient(to right bottom, #5e2730, #240f13) !important;}', 3);
            ss.insertRule('.swal2-popup {background: linear-gradient(to right bottom, #5e2730, #240f13) !important;}', 4);
            amountRulesAdded = 5;
            break;

        case 3:
            //petrol
            ss.insertRule('::-webkit-scrollbar-thumb {background-color: #275e42 !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(0, 33, 11, 0.75) 300px,rgba(0,0,0,.75)) !important;}', 1);
            ss.insertRule('.fade-box {background: linear-gradient(to right bottom, #275e42, #0f2419) !important;}', 2);
            ss.insertRule('.replay-list-header {background: linear-gradient(to right bottom, #275e42, #0f2419) !important;}', 3);
            ss.insertRule('.swal2-popup {background: linear-gradient(to right bottom, #275e42, #0f2419) !important;}', 4);
            amountRulesAdded = 5;
            break;

        case 4:
            //cyan
            ss.insertRule('::-webkit-scrollbar-thumb {background-color: #52afb7 !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(0, 33, 31, 0.75) 300px,rgba(0,0,0,.75)) !important;}', 1);
            ss.insertRule('.fade-box {background: linear-gradient(to right bottom, #52afb7, #275a5e) !important;}', 2);
            ss.insertRule('.replay-list-header {background: linear-gradient(to right bottom, #52afb7, #275a5e) !important;}', 3);
            ss.insertRule('.swal2-popup {background: linear-gradient(to right bottom, #52afb7, #275a5e) !important;}', 4);
            amountRulesAdded = 5;
            break;

        case 5:
            //brown -202°
            ss.insertRule('::-webkit-scrollbar-thumb {background-color: #5e3627 !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(33, 4, 0, .75) 300px,rgba(0,0,0,.75)) !important;}', 1);
            ss.insertRule('.fade-box {background: linear-gradient(to right bottom, #5e3627, #24140f) !important;}', 2);
            ss.insertRule('.replay-list-header {background: linear-gradient(to right bottom, #5e3627, #24140f) !important;}', 3);
            ss.insertRule('.swal2-popup {background: linear-gradient(to right bottom, #5e3627, #24140f) !important;}', 4);
            amountRulesAdded = 5;
            break;

        case 6:
            //cactus 194°
            ss.insertRule('::-webkit-scrollbar-thumb {background-color: #5e5727 !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(33, 24, 0, 0.75) 300px,rgba(0,0,0,.75)) !important;}', 1);
            ss.insertRule('.fade-box {background: linear-gradient(to right bottom, #5e5727, #24210f) !important;}', 2);
            ss.insertRule('.replay-list-header {background: linear-gradient(to right bottom, #5e5727, #24210f) !important;}', 3);
            ss.insertRule('.swal2-popup {background: linear-gradient(to right bottom, #5e5727, #24210f) !important;}', 4);
            amountRulesAdded = 5;
            break;

        case 7:
            //misavers
            ss.insertRule('::-webkit-scrollbar-thumb {background: url(' + misaversUrl + ') !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(0,17,33,.75) 300px,rgba(0,0,0,.75)) !important;}', 1);
            ss.insertRule('.fade-box {background: url(' + misaversUrl + ') !important;}', 2);
            ss.insertRule('.replay-list-header {background: url(' + misaversUrl + ') !important;}', 3);
            ss.insertRule('.swal2-popup {background: url(' + misaversUrl + ') !important;}', 4);
            amountRulesAdded = 5;
            break;

        case 8:
            //quotes
            ss.insertRule('::-webkit-scrollbar-thumb {background: url(' + misaversUrl + ') !important;}', 0);
            ss.insertRule('.fade-box {background: url(' + misaversUrl + ') !important;}', 1);
            ss.insertRule('.swal2-popup {background: url(' + misaversUrl + ') !important;}', 2);
            ss.insertRule('.replay-list-header {background: url(https://cdn.discordapp.com/attachments/1041104770758344814/1074337213061541970/image.png) !important;}', 3);
            ss.insertRule('.replay-list {background: url(https://cdn.discordapp.com/attachments/1041104770758344814/1074340235518947408/replay-list.png) !important;}', 4);
            amountRulesAdded = 5;
            break;
        case 9:
            //transparent
            ss.insertRule('.fade-box {background: rgba(0,0,0,0)!important;}', 0);
            ss.insertRule('.replay-list-header {background: rgba(0,0,0,0)!important;}', 1);
            ss.insertRule('.swal2-popup {background: rgba(0,0,0,0)!important;}', 2);
            amountRulesAdded = 3;
            break;

        case 10:
            //animation
            ss.insertRule('.fade-box {animation: menuFlashing 0.43s ease-out infinite !important;}', 0);
            amountRulesAdded = 1;
            break;

        case 11:
            //blue black
            //for overlay: top left gradient color darkened 90%
            ss.insertRule('::-webkit-scrollbar-thumb {background-color: #009eff !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(0, 16, 25, 0.75) 300px, rgba(0,0,0,.75)) !important;}', 1);
            ss.insertRule('.fade-box {background: linear-gradient(to right bottom, #009eff, #000000) !important;}', 2);
            ss.insertRule('.replay-list-header {background: linear-gradient(to right bottom, #009eff, #000000) !important;}', 3);
            ss.insertRule('.swal2-popup {background: linear-gradient(to right bottom, #009eff, #000000) !important;}', 4);
            amountRulesAdded = 5;
            break;

        case 12:
            //red black
            //for overlay: top left gradient color darkened 90%
            ss.insertRule('::-webkit-scrollbar-thumb {background-color: #ff0000 !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(25, 0, 0, 0.75) 300px, rgba(0,0,0,.75)) !important;}', 1);
            ss.insertRule('.fade-box {background: linear-gradient(to right bottom, #ff0000, #000000) !important;}', 2);
            ss.insertRule('.replay-list-header {background: linear-gradient(to right bottom, #ff0000, #000000) !important;}', 3);
            ss.insertRule('.swal2-popup {background: linear-gradient(to right bottom, #ff0000, #000000) !important;}', 4);
            amountRulesAdded = 5;
            break;

        case 13:
            //orange black 2
            //for overlay: top left gradient color darkened 90%
            ss.insertRule('::-webkit-scrollbar-thumb {background-color: #ff4c00 !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(25, 8, 0, 0.75) 300px, rgba(0,0,0,.75)) !important;}', 1);
            ss.insertRule('.fade-box {background: linear-gradient(to right bottom, #ff4c00, #000000) !important;}', 2);
            ss.insertRule('.replay-list-header {background: linear-gradient(to right bottom, #ff4c00, #000000) !important;}', 3);
            ss.insertRule('.swal2-popup {background: linear-gradient(to right bottom, #ff4c00, #000000) !important;}', 4);
            amountRulesAdded = 5;
            break;


        //unused 1
        case 443534:
            //red black 2
            //for overlay: top left gradient color darkened 80%
            ss.insertRule('::-webkit-scrollbar-thumb {background-color: #960000 !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(30, 0, 0, 0.75) 300px, rgba(0,0,0,.75)) !important;}', 1);
            ss.insertRule('.fade-box {background: linear-gradient(to right bottom, #960000, #000000) !important;}', 2);
            ss.insertRule('.replay-list-header {background: linear-gradient(to right bottom, #960000, #000000) !important;}', 3);
            ss.insertRule('.swal2-popup {background: linear-gradient(to right bottom, #960000, #000000) !important;}', 4);
            amountRulesAdded = 5;
            break;


        default:
            console.log("UHFEHUIFKRRZBIGHK");
    }
    localStorage.setItem("theme", theme);
}

function addBigChatButton() {
    var chatbox = document.querySelector(".chatbox");
    var bigChat = false;
    var originalHeight;
    const bigChatButton = document.createElement('button');
    bigChatButton.id = "big-chat";
    bigChatButton.classList = "vanis-menu-button mt10";


    bigChatButton.innerHTML = "Big Chat";
    bigChatButton.onclick = function () {
        makeChatBig();
    }

    function makeChatBig() {
        if (bigChat) {
            chatbox.style.height = originalHeight;
            bigChat = false;
        }
        else {
            originalHeight = chatbox.style.height;
            chatbox.style.height = "830px";
            bigChat = true;
        }
    }

    document.getElementById("ext-options-general").appendChild(bigChatButton);
}

//messages show time posted
function addTimeToMessages() {
    var colorCode = 1;
    function createTimeStamp() {
        const now = new Date();
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();
        var ms = now.getMilliseconds();

        ms = ms.toString();
        if (ms.length == 1) {
            ms = "00" + ms;
        }
        else if (ms.length == 2) {
            ms = "0" + ms;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        ms = ms.slice(0, msDigits);
        if (ms.length != 0) {
            ms = "." + ms;
        }
        var time = "[" + hours + ":" + minutes + ":" + seconds + ms + "]";
        const messageTimeElement = document.createElement('span');
        messageTimeElement.classList = "chat-message-time";
        messageTimeElement.style.fontSize = "12px";
        messageTimeElement.style.marginRight = "5px";
        messageTimeElement.style.marginBottom = "1px";
        messageTimeElement.innerHTML = time;
        if (rainbowTime) {
            switch (colorCode) {
                case 1:
                    messageTimeElement.style.color = "red";
                    break;

                case 2:
                    messageTimeElement.style.color = "darkorange";
                    break;

                case 3:
                    messageTimeElement.style.color = "yellow";
                    break;

                case 4:
                    messageTimeElement.style.color = "green";
                    break;

                case 5:
                    messageTimeElement.style.color = "cyan";
                    break;

                case 6:
                    messageTimeElement.style.color = "dodgerblue";
                    break;

                case 7:
                    messageTimeElement.style.color = "blueviolet";
                    break;

                case 0:
                    messageTimeElement.style.color = "magenta";
                    break;
            }
            colorCode = (colorCode + 1) % 8;
        }

        else {
            messageTimeElement.style.color = "rgb(130, 130, 130)";
        }
        return messageTimeElement;
    }

    var firstTime = true;
    var oldChildElementCount;
    const config = { attributes: false, childList: true, subtree: false };
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (messageTime) {
                oldChildElementCount = messageList.childElementCount;
                var messageTimeElement = createTimeStamp();
                const newMessage = messageList.lastChild;
                try {
                    newMessage.prepend(messageTimeElement);
                } catch (thisRatio) {
                };
                if (firstTime) {
                    fixTimestampsAfterFullChat();
                    firstTime = !firstTime;

                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(messageList, config);

    function fixTimestampsAfterFullChat() {
        const toObserve = messageList;
        const observer2 = new MutationObserver((mutationsList) => {
            if (toObserve.childElementCount == oldChildElementCount) {
                cascadeTimestamps();
            }
        });
        observer2.observe(toObserve, { subtree: true, characterData: true });
    }

    function cascadeTimestamps() {
        for (let i = 0; i < 99; i++) {
            messageList.childNodes[i].firstChild.innerHTML = messageList.childNodes[i + 1].firstChild.innerHTML;
            messageList.childNodes[i].firstChild.style.color = messageList.childNodes[i + 1].firstChild.style.color;
        }
        var messageTimeElement = createTimeStamp();
        const newMessage = messageList.lastChild;
        try {
            newMessage.prepend(messageTimeElement);
            newMessage.childNodes[1].remove();
        } catch (thisRatio) {
            console.log(thisRatio);
        };

    }


}



function makeOldChatStyling() {
    //set to 100 so it doesn't interfere with the rules for theme
    ss.insertRule('.message-from {font-size: 14px !important;}', 100);
    ss.insertRule('.message-from-name {font-size: 14px !important;}', 100);
    ss.insertRule('.message-row {align-items: baseline !important;}', 100);
}

function addOptionsMenu() {
    //reorganize main menu
    document.querySelector(".account-wrapper").style.gridRow = "2/3";
    document.querySelector(".account-wrapper").nextElementSibling.style.gridRow = "3/4";
    document.getElementById("main-container").style.gridTemplateColumns = "300px 330px 300px 250px";

    //add options menu
    let optionsDiv = document.createElement("div");
    optionsDiv.id = "ext-options-menu";
    optionsDiv.classList = "fade-box tab-menu";
    optionsDiv.style.gridRow = "2/4";
    optionsDiv.style.textAlign = "left";
    optionsDiv.style.top = "60px";
    optionsDiv.style.backgroundColor = "rgb(0,0,0,.5)";
    optionsDiv.style.color = "white"
    optionsDiv.innerHTML = `
    <div class="tabs">
    <div class="tab active" id="ext-options-tab-general">General</div>
    <div class="tab" id="ext-options-tab-misc" tip='DANGEROUS! Please read the tutorial in the "README.md" file, and message eternal8910 if you have any questions, before clicking anything in this tab.'>Misc</div>
    </div>

    <div id="ext-options-general" style="padding: 16px;">
    <label for="messageTimeCheckBox" tip="Shows the time a message in chat was sent along with the message.">Display Message Time:</label> 
    <input type="checkbox" id="messageTimeCheckBox"><br>
    <label for="msDigitsSlider" tip="Changes the amount of millisecond digits displayed on chat message time">Millisecond digits:</label> 
    <input type="range" min="0" max="3" value="0" id="msDigitsSlider">
    <span id="msDigitsDisplay">0</span>
    <br>
    <label for="rainbowTimeCheckBox" tip="time the message was sent is displayed in rainbow colors.">Rainbow Message Time:</label> 
    <input type="checkbox" id="rainbowTimeCheckBox"><br>
    <label for="adblockerCheckBox" tip="For people who use an adblocker which moves the name field, play button etc. to the top of the menu. Reload page to apply changes.">Using adblocker:</label> 
    <input type="checkbox" id="adblockerCheckBox"><br>
    <label for="oldChatStylingCheckBox" tip="Changes the look of the chat to how it was before update 94df. Reload page to apply changes.">Old Chat Styling:</label> 
    <input type="checkbox" id="oldChatStylingCheckBox"><br>
    <label for="rainbowTextCheckBox" tip="Changes the menu text color to be animated. Reload page to apply changes.">Rainbow Text:</label> 
    <input type="checkbox" id="rainbowTextCheckBox"><br>
    <label for="deleteStatScreenAdCheckBox" tip="Deletes the ad on the stat screen, so your mouse movement is still accurate when you play with the stat screen still open(I heard some people actually do that)">Delete Respawn Ad:</label> 
    <input type="checkbox" id="deleteStatScreenAdCheckBox"><br>
    
    </div>
    <div id="ext-options-misc" style="padding: 16px; display: none;">
    <button class="vanis-menu-button mt10" id="copy-skin-list-button" tip="Click to copy your skin list to send it to someone else or save it somewhere secure.">Copy skin list to clipboard</button>
    <input class="vanis-menu-tf mt10" id="set-skin-list-tf" placeholder="Set skin list..."></input>
    <button class="vanis-menu-button mt10" id="set-skin-list-button" tip="Paste the skin list in the text field above and then click this button. Reload page to see the new skin list.">Set</button>
    <br>
    <button class="vanis-menu-button mt10" id="copy-settings-button" tip="Click to copy your vanis settings to send them to someone else or save them somewhere secure.">Copy settings to clipboard</button>
    <input class="vanis-menu-tf mt10" id="set-settings-tf" placeholder="Set settings..."></input>
    <button class="vanis-menu-button mt10" id="set-settings-button" tip="Paste the settings in the text field above and then click this button. Reload page to play with the new settings.">Set</button>
    <br>
    <button class="vanis-menu-button mt10" id="copy-hotkeys-button" tip="Click to copy your vanis hotkeys to send them to someone else or save them somewhere secure.">Copy hotkeys to clipboard</button>
    <input class="vanis-menu-tf mt10" id="set-hotkeys-tf" placeholder="Set hotkeys..."></input>
    <button class="vanis-menu-button mt10" id="set-hotkeys-button" tip="Paste the hotkeys in the text field above and then click this button. Reload page to play with the new hotkeys.">Set</button>
    <br>
    </div>
       `;
    document.getElementById("main-container").append(optionsDiv);

    optionsDiv.children[0].children[0].onclick = function () { openExtOptionsTab("general") };
    optionsDiv.children[0].children[1].onclick = function () { openExtOptionsTab("misc") };

    //general tab
    document.getElementById("messageTimeCheckBox").checked = messageTime;
    document.getElementById("messageTimeCheckBox").onclick = function () {
        messageTime = this.checked;
        localStorage.setItem("messageTime", messageTime);

    }

    document.getElementById("adblockerCheckBox").checked = adblocker;
    document.getElementById("adblockerCheckBox").onclick = function () {
        adblocker = !adblocker;
        localStorage.setItem("adblocker", adblocker);
    }
    document.getElementById("oldChatStylingCheckBox").checked = oldChatStyling;
    document.getElementById("oldChatStylingCheckBox").onclick = function () {
        oldChatStyling = !oldChatStyling;
        localStorage.setItem("oldChatStyling", oldChatStyling);
    }
    document.getElementById("rainbowTimeCheckBox").checked = rainbowTime;
    document.getElementById("rainbowTimeCheckBox").onclick = function () {
        rainbowTime = !rainbowTime;
        localStorage.setItem("rainbowTime", rainbowTime);
    }
    document.getElementById("deleteStatScreenAdCheckBox").checked = deleteStatScreenAd;
    document.getElementById("deleteStatScreenAdCheckBox").onclick = function () {
        deleteStatScreenAd = !deleteStatScreenAd;
        localStorage.setItem("deleteStatScreenAd", deleteStatScreenAd);
    }

    var msDigitsSlider = document.getElementById("msDigitsSlider");

    msDigitsSlider.value = msDigits;
    document.getElementById("msDigitsDisplay").innerHTML = msDigits;
    msDigitsSlider.oninput = function () {
        msDigits = msDigitsSlider.value;
        document.getElementById("msDigitsDisplay").innerHTML = msDigits;
        localStorage.setItem("msDigits", msDigits);
    }

    document.getElementById("rainbowTextCheckBox").checked = rainbowText;
    document.getElementById("rainbowTextCheckBox").onclick = function () {
        rainbowText = !rainbowText;
        localStorage.setItem("rainbowText", rainbowText);
    }


    //misc tab: skins
    let copySkinListButton = document.querySelector("#copy-skin-list-button");
    copySkinListButton.onclick = function () {
        navigator.clipboard.writeText(localStorage.getItem("skins")).then(() => {
            copySkinListButton.innerHTML = "Copied!";
        },
            () => {
                copySkinListButton.innerHTML = "Failed copying skin list.";
            });
    }

    let setSkinListButton = document.querySelector("#set-skin-list-button");
    setSkinListButton.onclick = function () {
        try {
            localStorage.setItem("skins", document.getElementById("set-skin-list-tf").value);
            setSkinListButton.innerHTML = "Skin list updated!";
        } catch (error) {
            setSkinListButton.value = "Error: not enough storage!";
        }
    }


    //misc tab: settings
    let copySettingsButton = document.querySelector("#copy-settings-button")
    copySettingsButton.onclick = function () {
        navigator.clipboard.writeText(localStorage.getItem("settings")).then(() => {
            copySettingsButton.innerHTML = "Copied!"
        },
            () => {
                copySettingsButton.innerHTML = "Failed copying settings."
            });
    }

    let setSettingsButton = document.querySelector("#set-settings-button")
    setSettingsButton.onclick = function () {
        try {
            localStorage.setItem("settings", document.getElementById("set-settings-tf").value);
            setSettingsButton.innerHTML = "Settings updated!";
        } catch (error) {
            setSettingsButton.value = "Error: not enough storage!";
        }
    }

    //misc tab: hotkeys
    let copyHotkeysButton = document.querySelector("#copy-hotkeys-button")
    copyHotkeysButton.onclick = function () {
        navigator.clipboard.writeText(localStorage.getItem("hotkeys")).then(() => {
            copyHotkeysButton.innerHTML = "Copied!"
        },
            () => {
                copyHotkeysButton.innerHTML = "Failed copying hotkeys."
            });
    }

    let setHotkeysButton = document.querySelector("#set-hotkeys-button")
    setHotkeysButton.onclick = function () {
        try {
            localStorage.setItem("hotkeys", document.getElementById("set-hotkeys-tf").value);
            setHotkeysButton.innerHTML = "Hotkeys updated!";
        } catch (error) {
            setHotkeysButton.value = "Error: not enough storage!";
        }
    }

}

function openExtOptionsTab(tabName) {
    const optionsDiv = document.getElementById("ext-options-menu");
    const tabs = optionsDiv.children[0].children
    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        tab.classList = "tab";
        document.getElementById("ext-options-tab-" + tabName).classList = "tab active";
        optionsDiv.children[i + 1].style.display = "none";
        document.getElementById("ext-options-" + tabName).style.display = "block";

    }

    console.log(tabName);

}


function makeRainbowText() {
    ss.insertRule('.fade-box {animation: colorRotate 6s linear 0s infinite !important;}', 100)
    ss.insertRule('.replay-list-header {animation: colorRotate 6s linear 0s infinite !important;}', 100);
    ss.insertRule('.swal2-title {animation: colorRotate 6s linear 0s infinite !important;}', 100);
}

function deleteStatScreenAdd() {
    document.querySelector("#vanis-io_300x250_2").remove();
}

function addExtOptionsToggleButton() {
    let extOptionsMenu = document.getElementById("ext-options-menu");
    let extOptionsHidden = false;
    if (localStorage.getItem("extOptionsHidden") !== null) {
        extOptionsHidden = localStorage.getItem("extOptionsHidden") === "true";
    }
    const extOptionsToggleButton = document.createElement('div');
    extOptionsToggleButton.id = "ext-options-toggle-button";
    extOptionsToggleButton.style.background = "#32a852";
    extOptionsToggleButton.style.cursor = "pointer";
    extOptionsToggleButton.style.padding = "5px 15px";
    extOptionsToggleButton.style.textShadow = "1px 1px 2px #000";
    extOptionsToggleButton.style.borderRadius = "4px";
    extOptionsToggleButton.style.margin = "0px 4px";
    extOptionsToggleButton.style.boxShadow = '0 0 1px 1px #000';
    extOptionsToggleButton.style.textAlign = "center";
    extOptionsToggleButton.style.textDecoration = "underline";
    extOptionsToggleButton.innerHTML = "Toggle Extension Menu";
    extOptionsToggleButton.onmouseenter = function () {
        this.style.background = "#2b9047";
        this.style.transition = "0.2s";
    }
    extOptionsToggleButton.onmouseleave = function () {
        this.style.background = "#32a852";
        this.style.transition = "0.2s";
    }
    extOptionsToggleButton.onclick = function () {
        if (extOptionsHidden) {
            extOptionsMenu.style.display = "block";
            extOptionsHidden = false;
            localStorage.setItem("extOptionsHidden", extOptionsHidden);
        } else {
            extOptionsMenu.style.display = "none";
            extOptionsHidden = true;
            localStorage.setItem("extOptionsHidden", extOptionsHidden);
        }
    }
    if (extOptionsHidden) {
        extOptionsMenu.style.display = "none";
    }
    socialContainer.appendChild(extOptionsToggleButton);
}