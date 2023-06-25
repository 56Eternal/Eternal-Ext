//global stuff
const ss = document.styleSheets[0];
const socialContainer = document.querySelector(".social-container");
socialContainer.style.width = "auto";
const messageList = document.querySelector(".message-list");

//setting variables
var amountRulesAdded = 0;
var theme = 0;

if (localStorage.getItem("theme") != null) {
    theme = parseInt(localStorage.getItem("theme"));
}
var adblocker = false;
if (localStorage.getItem("adblocker") != null) {
    adblocker = localStorage.getItem("adblocker") === "true";
}
var oldChatStyling = true;
if (localStorage.getItem("oldChatStyling") != null) {
    oldChatStyling = localStorage.getItem("oldChatStyling") === "true";
}
var rainbowTime = false;
if (localStorage.getItem("rainbowTime") != null) {
    rainbowTime = localStorage.getItem("rainbowTime") === "true";
}
var messageTime = true;
if (localStorage.getItem("messageTime") != null) {
    messageTime = localStorage.getItem("messageTime") === "true";
}
var mothershipDigits = 1;
if (localStorage.getItem("mothershipDigits") != null) {
    mothershipDigits = parseInt(localStorage.getItem("mothershipDigits"));
}
var rainbowText = false;
if (localStorage.getItem("rainbowText") != null) {
    rainbowText = localStorage.getItem("rainbowText") === "true";
}

updateTheme();
addChangeThemeButton();
if (adblocker) {
    lowerPlayerData();
}
if (oldChatStyling) {
    makeOldChatStyling();
}
addGiantChatButton();
addTimeToMessages();
addOptionsMenu();
addAnimations();
if (rainbowText) {
    makeRainbowText();
}


function addAnimations() {
    var css = document.createElement("style");
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
#giant-chat:hover{
    background:#2b9047;
    transition:all .4s ease;
}
`));
    document.head.appendChild(css);
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
    themeButtonText.title = "hi";
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
        // console.log("Theme: " + theme + ", amountRulesAdded: " + amountRulesAdded);
        updateTheme();

        themeButtonText.innerHTML = "Theme " + theme;
    }

    themeButton.appendChild(themeMinus);
    themeButton.appendChild(themeButtonText);
    themeButton.appendChild(themePlus);
    socialContainer.appendChild(themeButton);
}


function updateTheme() {
    misaversUrl = "https://media.discordapp.net/attachments/1041104770758344814/1074257122302373968/misavers.png?width=200&height=145";
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
            ss.insertRule('.fade-box {background: url(background: url(' + misaversUrl + ') !important;}', 2);
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
            //cactus 194°
            ss.insertRule('.fade-box {background: rgba(0,0,0,0)!important;}', 0);
            ss.insertRule('.replay-list-header {background: rgba(0,0,0,0)!important;}', 1);
            ss.insertRule('.swal2-popup {background: rgba(0,0,0,0)!important;}', 2);
            amountRulesAdded = 3;
            break;

        case 10:
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

function addGiantChatButton() {
    var chatbox = document.querySelector(".chatbox");
    var tateSizeChat = false;
    var originalHeight;
    const newbutton2 = document.createElement('div');
    newbutton2.id = "giant-chat";
    newbutton2.style.background = "#32a852";
    newbutton2.style.cursor = "pointer";
    newbutton2.style.padding = "5px 15px";
    newbutton2.style.textShadow = "1px 1px 2px #000";
    newbutton2.style.borderRadius = "4px";
    newbutton2.style.margin = "0px 4px";
    newbutton2.style.boxShadow = '0 0 1px 1px #000';
    newbutton2.style.textAlign = "center";
    newbutton2.innerHTML = "Giant Chat";
    newbutton2.onmouseenter = function () {
        this.style.background = "#2b9047";
        this.style.transition = "0.2s";
    }
    newbutton2.onmouseleave = function () {
        this.style.background = "#32a852";
        this.style.transition = "0.2s";
    }
    newbutton2.onclick = function () {
        makeChatTateSize();
    }

    socialContainer.style.width = "auto";
    socialContainer.appendChild(newbutton2);

    function makeChatTateSize() {
        if (tateSizeChat) {
            chatbox.style.height = originalHeight;
            tateSizeChat = false;
        }
        else {
            originalHeight = chatbox.style.height;
            chatbox.style.height = "830px";
            tateSizeChat = true;
        }
    }
}

//messages show time posted
function addTimeToMessages() {
    var colorCode = 1;
    function createTimeStamp() {
        const now = new Date();
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();
        var motherships = now.getMilliseconds();

        motherships = motherships.toString();
        if (motherships.length == 1) {
            motherships = "00" + motherships;
        }
        else if (motherships.length == 2) {
            motherships = "0" + motherships;
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
        motherships = motherships.slice(0, mothershipDigits);
        if (motherships.length != 0) {
            motherships = "." + motherships;
        }
        var time = "[" + hours + ":" + minutes + ":" + seconds + motherships + "]";
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
                document.getElementById("chatbox-input").setAttribute("placeholder", "Messages in chat: " + messageList.childElementCount);
                oldChildElementCount = messageList.childElementCount;
                var messageTimeElement = createTimeStamp();
                const newMessage = messageList.lastChild;
                try {
                    newMessage.prepend(messageTimeElement);
                } catch (thisRatio) {
                    console.log("caught this ratio");
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
    ss.insertRule('.message-from {font-size: 14px !important;}', 100);
    ss.insertRule('.message-from-name {font-size: 14px !important;}', 100);
    ss.insertRule('.message-row {align-items: baseline !important;}', 100);
}

function addOptionsMenu() {
    let optionsDiv = document.createElement("div");
    optionsDiv.id = "ext-options-div";
    optionsDiv.style.position = "absolute";
    optionsDiv.style.textAlign = "left";
    optionsDiv.style.width = "200px";
    optionsDiv.style.height = "300px";
    optionsDiv.style.top = "60px";
    optionsDiv.style.backgroundColor = "rgb(0,0,0,.5)";
    optionsDiv.style.color = "white"
    optionsDiv.innerHTML = `
    <label id="label-test-id" for="messageTimeCheckBox" tip="Shows the time a message in chat was sent along with the message.">Display Message Time:</label> 
    <input type="checkbox" id="messageTimeCheckBox"><br>
    <label for="rainbowTimeCheckBox" tip="time the message was sent is displayed in rainbow colors.">Rainbow Message Time:</label> 
    <input type="checkbox" id="rainbowTimeCheckBox"><br>
    <label for="adblockerCheckBox" tip="For people who use an adblocker which moves the name field, play button etc. to the top of the menu. Reload page to apply changes.">Using adblocker:</label> 
    <input type="checkbox" id="adblockerCheckBox"><br>
    <label for="oldChatStylingCheckBox" tip="Changes the look of the chat to how it was before update 94df. Reload page to apply changes.">Old Chat Styling:</label> 
    <input type="checkbox" id="oldChatStylingCheckBox"><br>
    <label for="rainbowTextCheckBox" tip="Changes the menu text color to be animated. Reload page to apply changes.">Rainbow Text:</label> 
    <input type="checkbox" id="rainbowTextCheckBox"><br>
    <label for="mothershipDigitsSlider" tip="Changes the amount of millisecond digits displayed on chat message time">Millisecond digits:</label> 
    <input type="range" min="0" max="3" value="0" id="mothershipDigitsSlider">
    <span id="mothershipDigitsDisplay">0
    <br>
       `;
    document.getElementById("overlay").append(optionsDiv);

    document.getElementById("messageTimeCheckBox").checked = messageTime;
    document.getElementById("messageTimeCheckBox").onclick = function () {
        messageTime = this.checked;
        localStorage.setItem("messageTime", messageTime);

    }
    document.getElementById("rainbowTimeCheckBox").checked = rainbowTime;
    document.getElementById("rainbowTimeCheckBox").onclick = function () {
        rainbowTime = !rainbowTime;
        localStorage.setItem("rainbowTime", rainbowTime);
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

    var msDigitsSlider = document.getElementById("mothershipDigitsSlider");

    msDigitsSlider.value = mothershipDigits;
    document.getElementById("mothershipDigitsDisplay").innerHTML = mothershipDigits;
    msDigitsSlider.oninput = function () {
        mothershipDigits = msDigitsSlider.value;
        document.getElementById("mothershipDigitsDisplay").innerHTML = mothershipDigits;
        localStorage.setItem("mothershipDigits", mothershipDigits);
    }

    document.getElementById("rainbowTextCheckBox").checked = rainbowText;
    document.getElementById("rainbowTextCheckBox").onclick = function () {
        rainbowText = !rainbowText;
        localStorage.setItem("rainbowText", rainbowText);
    }

}

function makeRainbowText() {
    ss.insertRule('.fade-box {animation: colorRotate 6s linear 0s infinite !important;) !important;}', 100)
    ss.insertRule('.replay-list-header {animation: colorRotate 6s linear 0s infinite !important;}', 100);
    ss.insertRule('.swal2-title {animation: colorRotate 6s linear 0s infinite !important;) !important;}', 100);
}
function createPopup() {
    let popup = document.createElement("div");
    popup.classList = "swal2-container swal2-top"
    popup.style.overflowY = "auto";
    popup.style.zIndex = "-1";
    popup.innerHTML = `
    <div aria-labelledby="swal2-title" aria-describedby="swal2-content" class="swal2-popup swal2-toast swal2-show" tabindex="-1" role="alert" aria-live="polite" style="display: flex;">
    <div class="swal2-header">
    </div><div class="swal2-icon swal2-question" style="display: none;"></div><div class="swal2-icon swal2-warning" style="display: none;"></div><div class="swal2-icon swal2-info" style="display: none;"></div><div class="swal2-icon swal2-success" style="display: none;"><div class="swal2-success-circular-line-left" style="background-color: rgba(0, 0, 0, 0);"></div><span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgba(0, 0, 0, 0);"></div><div class="swal2-success-circular-line-right" style="background-color: rgba(0, 0, 0, 0);"></div></div><img class="swal2-image" style="display: none;"><h2 class="swal2-title" id="swal2-title" style="display: flex;">Wow that is a good clip</h2><button type="button" class="swal2-close" aria-label="Close this dialog" style="display: flex;">×</button></div><div class="swal2-content"><div id="swal2-content" style="display: none;"></div><input class="swal2-input" style="display: none;"><input type="file" class="swal2-file" style="display: none;"><div class="swal2-range" style="display: none;"><input type="range"><output></output></div><select class="swal2-select" style="display: none;"></select><div class="swal2-radio" style="display: none;"></div><label for="swal2-checkbox" class="swal2-checkbox" style="display: none;"><input type="checkbox"><span class="swal2-label"></span></label><textarea class="swal2-textarea" style="display: none;"></textarea><div class="swal2-validation-message" id="swal2-validation-message"></div></div><div class="swal2-actions" style="display: none;"><button type="button" class="swal2-confirm swal2-styled" aria-label="" style="display: none; border-left-color: rgb(224, 142, 19); border-right-color: rgb(224, 142, 19);">OK</button><button type="button" class="swal2-cancel swal2-styled" aria-label="" style="display: none;">Cancel</button></div><div class="swal2-footer" style="display: none;"></div></div>`
    document.getElementById("overlay").append(popup);
}
