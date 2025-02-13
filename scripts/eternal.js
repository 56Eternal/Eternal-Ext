//global stuff
const screenwidth = screen.width;
const version = "2.1.8";
const latestFeatures = `- Added Chat Message Translation\n
- Added option to get a popup of new changes when extension gets an update\n
- Added Theme 15, which can be customized
Hover over these options in the extension menu for more detail.`;
const ss = document.styleSheets[0];
const socialContainer = document.querySelector(".social-container");
socialContainer.style.width = "auto";
const messageList = document.querySelector(".message-list");
let colorCode = 0;
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
let amountRulesAdded = 0;

if (!localStorage.getItem("goodbyeMessageSeen2")) {
    alert("Hello everyone, \nthank you all for this journey (almost 5 and a half years for me) and thank you for using my (scuffed) extension. I hope I will see you in another ball game or on discord in one of the many community servers. \n- Eternal");
    localStorage.setItem("goodbyeMessageSeen2", true)
}
let theme = parseInt(localStorage?.getItem("theme") ?? 0);
let adblocker = localStorage?.getItem("adblocker") === "true" ?? false;
let oldChatStyling = localStorage.getItem("oldChatStyling") === "true" ?? true;
let rainbowTime = localStorage.getItem("rainbowTime") === "true" ?? false;
let messageTime = localStorage.getItem("messageTime") === "true" ?? true;
let msDigits = parseInt(localStorage.getItem("msDigits") ?? 1);
let rainbowText = localStorage.getItem("rainbowText") === "true" ?? false;
let deleteStatScreenAd = localStorage.getItem("deleteStatScreenAd") === "true" ?? false;
let offerTranslation = localStorage.getItem("offerTranslation") === "true" ?? false;
let alertUpdates = localStorage.getItem("alertUpdates") === "true" ?? false;
let themeColor1 = localStorage.getItem("theme-color1") ?? "#000000";
let themeColor2 = localStorage.getItem("theme-color2") ?? "#000000";
let extOptionsHidden = localStorage.getItem("extOptionsHidden") === "true" ?? false;

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
addResetMessageTimeColorButton()
addTimeToMessages();
addAnimations();
if (rainbowText) {
    makeRainbowText();
}
if (deleteStatScreenAd) {
    deleteStatScreenAdd();
}
addExtOptionsToggleButton();
alertExtUpdates();
localStorage.setItem("previousVersion", version)

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
    let amountThemes = 16;
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
    themeMinus.onclick = () => {
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
    themePlus.onclick = () => {
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
    let basicTheme = (primary, secondary, rad1, rad2, rad3) => {
        ss.insertRule(`::-webkit-scrollbar-thumb {background-color: ${primary} !important;}`, 0);
        ss.insertRule(`#overlay {background: radial-gradient(rgba(${rad1}, ${rad2}, ${rad3}, 0.75) 300px,rgba(0,0,0,.75)) !important;}`, 0);
        ss.insertRule(`.fade-box, .replay-list-header, .swal2-popup, .tooltip {background: linear-gradient(to right bottom, ${primary}, ${secondary}) !important;}`, 0);
        return 3;
    }
    switch (theme) {
        case 0:
            //default background: linear-gradient(to right bottom, #273b5e, #0f1724); rgba(0,17,33,.75)
            amountRulesAdded = 0;
            break;
        case 1:
            //purple
            amountRulesAdded = basicTheme("#5e2757", "#240f21", 31, 0, 33);
            break;
        case 2:
            //wine red
            amountRulesAdded = basicTheme("#5e2730", "#240f13", 33, 0, 10);
            break;
        case 3:
            //petrol
            amountRulesAdded = basicTheme("#275e42", "#0f2419", 0, 33, 11)
            break;
        case 4:
            //cyan
            amountRulesAdded = basicTheme("#52afb7", "#275a5e", 0, 33, 31)
            break;
        case 5:
            //brown -202°
            amountRulesAdded = basicTheme("#5e3627", "#24140f", 33, 4, 0)
            break;
        case 6:
            //cactus 194°
            amountRulesAdded = basicTheme("#5e5727", "#24210f", 33, 24, 0)
            break;
        case 7:
            //misavers (broken since discord image links expire, idk what to do with it yet)
            ss.insertRule('::-webkit-scrollbar-thumb, .fade-box, .replay-list-header, .swal2-popup, .tooltip {background: url(' + misaversUrl + ') !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(0,17,33,.75) 300px,rgba(0,0,0,.75)) !important;}', 0);
            amountRulesAdded = 2;
            break;
        case 8:
            //quotes (broken since discord image links expire, idk what to do with it yet)
            ss.insertRule('::-webkit-scrollbar-thumb {background: url(' + misaversUrl + ') !important;}', 0);
            ss.insertRule('.fade-box {background: url(' + misaversUrl + ') !important;}', 0);
            ss.insertRule('.swal2-popup {background: url(' + misaversUrl + ') !important;}', 0);
            ss.insertRule('.replay-list-header {background: url(https://cdn.discordapp.com/attachments/1041104770758344814/1074337213061541970/image.png) !important;}', 0);
            ss.insertRule('.replay-list {background: url(https://cdn.discordapp.com/attachments/1041104770758344814/1074340235518947408/replay-list.png) !important;}', 0);
            ss.insertRule('.tooltip {background: url(' + misaversUrl + ') !important;}', 0);
            amountRulesAdded = 6;
            break;
        case 9:
            //transparent
            ss.insertRule('.fade-box, .replay-list-header, .swal2-popup, .tooltip {background: #00000000 !important;}', 0);
            amountRulesAdded = 1;
            break;
        case 10:
            //animation
            ss.insertRule('.fade-box, .tooltip {animation: menuFlashing 0.43s ease-out infinite !important;}', 0);
            amountRulesAdded = 1;
            break;
        case 11:
            //blue black
            //for overlay: top left gradient color darkened 90%
            amountRulesAdded = basicTheme("#009eff", "#000000", 0, 16, 25);
            break;

        case 12:
            //red black
            //for overlay: top left gradient color darkened 90%
            amountRulesAdded = basicTheme("#ff0000", "#000000", 25, 0, 0)
            break;

        case 13:
            //red black 2
            //for overlay: top left gradient color darkened 80%
            amountRulesAdded = basicTheme("#960000", "#000000", 30, 0, 0)
            break;

        case 14:
            //orange black 2
            //for overlay: top left gradient color darkened 90%
            amountRulesAdded = basicTheme("#ff4c00", "#000000", 25, 8, 0)
            break;

        case 15:
            amountRulesAdded = basicTheme(themeColor1, themeColor2, 0, 0, 0)
            break;

        default:
            console.log("You shouldn't see this");
            amountRulesAdded = 0;
    }
    localStorage.setItem("theme", theme);
}

function addBigChatButton() {
    let chatbox = document.querySelector(".chatbox");
    let bigChat = false;
    let originalHeight;

    const bigChatButton = document.querySelector("#big-chat");
    bigChatButton.onclick = () => {
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
}
function addResetMessageTimeColorButton() {
    document.querySelector("#reset-message-time-color").onclick = () => colorCode = 0;
}

//messages show time posted
function addTimeToMessages() {

    /**
     * @returns HTMLSpanElement containing the current time
     */
    function createTimeStamp() {
        const now = new Date();
        let seconds = now.getSeconds();
        let minutes = now.getMinutes();
        let hours = now.getHours();
        let ms = now.getMilliseconds();

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
        let time = "[" + hours + ":" + minutes + ":" + seconds + ms + "]";
        const messageTimeElement = document.createElement('span');
        messageTimeElement.classList = "chat-message-time";
        messageTimeElement.style.fontSize = "12px";
        messageTimeElement.style.marginRight = "5px";
        messageTimeElement.style.marginBottom = "auto";
        messageTimeElement.innerHTML = time;
        if (rainbowTime) {
            let colors = ["red", "darkorange", "yellow", "lime", "cyan", "dodgerblue", "blueviolet", "magenta"];
            messageTimeElement.style.color = colors[colorCode] || "#fff";
            colorCode = (colorCode + 1) % 8;
        }
        else {
            messageTimeElement.style.color = "#fff";
        }
        return messageTimeElement;
    }

    function createTranslationIcon(messageContent) {
        const svgText = `<svg height="16px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="0" fill="none" width="20" height="20"/><g><path d="M11 7H9.49c-.63 0-1.25.3-1.59.7L7 5H4.13l-2.39 7h1.69l.74-2H7v4H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v2zM6.51 9H4.49l1-2.93zM10 8h7c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2zm7.25 5v-1.08h-3.17V9.75h-1.16v2.17H9.75V13h1.28c.11.85.56 1.85 1.28 2.62-.87.36-1.89.62-2.31.62-.01.02.22.97.2 1.46.84 0 2.21-.5 3.28-1.15 1.09.65 2.48 1.15 3.34 1.15-.02-.49.2-1.44.2-1.46-.43 0-1.49-.27-2.38-.63.7-.77 1.14-1.77 1.25-2.61h1.36zm-3.81 1.93c-.5-.46-.85-1.13-1.01-1.93h2.09c-.17.8-.51 1.47-1 1.93l-.04.03s-.03-.02-.04-.03z"/></g></svg>`
        const icon = new DOMParser().parseFromString(svgText, "image/svg+xml").documentElement;
        // icon.onclick = (t) => {
        //     fetch("https://libretranslate.com/detect", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             q: "Welche Sprache?"
        //         })
        //     }).then(d => {
        //         console.log(d)
        //     })
        // }
        let link = document.createElement("a");
        link.href = `https://translate.google.com/?sl=auto&tl=en&op=translate&text=${messageContent}`;
        link.target = "_blank";
        link.appendChild(icon);
        link.style.marginLeft = "6px";
        link.classList.add("translation")
        return link;
    }

    let firstTime = true;
    let oldMessageListChildElementCount;
    const config = { attributes: false, childList: true, subtree: false };
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {

            //when new message appears
            oldMessageListChildElementCount = messageList.childElementCount;

            if (messageTime) {
                messageList.lastChild.prepend(createTimeStamp());
                if (firstTime) {
                    fixTimestampsAfterFullChat();
                    firstTime = !firstTime;
                }
            }
            if (offerTranslation) {
                // console.log(messageList.lastChild.childNodes)
                const messageContent = messageList.lastChild.querySelector(".message-text").textContent;
                messageList.lastChild.append(createTranslationIcon(messageContent));
            }
            messageList.lastChild.querySelector(".message-text").onclick = (e) => {
                navigator.clipboard.writeText(e.target.textContent).catch(err => {
                    console.log(err);

                })
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(messageList, config);

    function fixTimestampsAfterFullChat() {
        const toObserve = messageList;
        const observer2 = new MutationObserver(() => {
            if (toObserve.childElementCount == oldMessageListChildElementCount) {
                cascadeTimestampsAndTranslation();
            }
        });
        observer2.observe(toObserve, { subtree: true, characterData: true });
    }

    function cascadeTimestampsAndTranslation() {
        const newMessage = messageList.lastChild;
        for (let i = 0; i < 99; i++) {
            messageList.childNodes[i].firstChild.innerHTML = messageList.childNodes[i + 1].firstChild.innerHTML;
            messageList.childNodes[i].firstChild.style.color = messageList.childNodes[i + 1].firstChild.style.color;
            messageList.childNodes[i].querySelector(".translation").href = messageList.childNodes[i + 1].querySelector(".translation").href;
        }
        let messageTimeElement = createTimeStamp();
        newMessage.prepend(messageTimeElement);
        newMessage.childNodes[1].remove();

        let translationIcon = createTranslationIcon(newMessage.querySelector(".message-text").textContent);
        newMessage.querySelector(".translation").remove();
        newMessage.append(translationIcon);

    }


}



function makeOldChatStyling() {
    //set to 100 so it doesn't interfere with the rules for theme
    ss.insertRule('.message-from, .message-from-name {font-size: 14px !important;}', 100);
    ss.insertRule('.message-row {align-items: baseline !important;}', 100);
}

function addOptionsMenu() {
    //reorganize main menu
    document.querySelector(".account-wrapper").style.gridRow = "2/3";
    document.querySelector(".account-wrapper").nextElementSibling.style.gridRow = "3/4";
    if (screenwidth <= 1500) {
        if (extOptionsHidden == false) {
            document.querySelector(".account-wrapper").style.display = "none";
            document.querySelector("#main-container > div:nth-child(5)").style.display = "none";
        }

    }
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
    const setSkinListTip = "Click this button to overwrite your current skin list with the new one above. Type 'clear' and click to clear your skin list. Reload page to see the new skin list.";
    const addToSkinListTip = "Click this button to add the list of skins above to your current skin list. Reload page to see the new skin list.";
    const setSettingsTip = "Paste the settings in the text field above and then click this button. Reload page to play with the new settings.";
    const setHotkeysTip = "Paste the hotkeys in the text field above and then click this button. Reload page to play with the new hotkeys.";
    const saveThemeTip = "Enter hex color codes (with or without the leading #). You can add transparency by adding 2 more digits (#ffffff00 is completely transparent)";
    optionsDiv.innerHTML = `
    <div class="tabs">
    <div class="tab active" id="ext-options-tab-general">General</div>
    <div class="tab" id="ext-options-tab-misc" tip='DANGEROUS! Please read the tutorial in the "README.md" file, and message eternal8910 if you have any questions, before clicking anything in this tab.'>Misc</div>
    <div class="tab" id="ext-options-tab-theme" tip='Customize Theme 15'>Theme</div>
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
    <label for="deleteStatScreenAdCheckBox" tip="Deletes the ad on the stat screen, so your mouse movement is still accurate when you play with the stat screen still open">Delete Respawn Ad:</label> 
    <input type="checkbox" id="deleteStatScreenAdCheckBox"><br>
    <label for="offerTranslationCheckBox" tip="Display option to translate next to a chat message.">Offer Translation:</label>
    <input type="checkbox" id="offerTranslationCheckBox"><br>
    <label for="alertUpdatesCheckBox" tip="Gives a popup with all the new features whenever the extension is updated">Alert Updates:</label>
    <input type="checkbox" id="alertUpdatesCheckBox"><br>
    <button id="big-chat" class="vanis-menu-button mt10">Big Chat</button><br>
    <button id="reset-message-time-color" class="vanis-menu-button mt10">Reset Message Time Color</button><br>
    <p style="position: absolute; bottom: 10px;" tip="Latest features:\n${latestFeatures}"> Eternal Extension v${version}</p>
    </div>
    <div id="ext-options-misc" style="padding: 16px; display: none;">
    <button class="vanis-menu-button mt10" id="copy-skin-list-button" tip="Click to copy your skin list to send it to someone else or save it somewhere secure.">Copy skin list to clipboard</button>
    <input class="vanis-menu-tf mt10" id="set-skin-list-tf" placeholder="Set skin list..."></input>
    <button class="vanis-menu-button mt10" id="set-skin-list-button" tip="${setSkinListTip}">Set</button>
    <button style="margin-left: 5px;" class="vanis-menu-button mt10" id="add-to-skin-list-button" tip="${addToSkinListTip}">Add</button>
    <br>
    <button class="vanis-menu-button mt10" id="copy-settings-button" tip="Click to copy your vanis settings to send them to someone else or save them somewhere secure.">Copy settings to clipboard</button>
    <input class="vanis-menu-tf mt10" id="set-settings-tf" placeholder="Set settings..."></input>
    <button class="vanis-menu-button mt10" id="set-settings-button" tip="${setSettingsTip}">Set</button>
    <br>
    <button class="vanis-menu-button mt10" id="copy-hotkeys-button" tip="Click to copy your vanis hotkeys to send them to someone else or save them somewhere secure.">Copy hotkeys to clipboard</button>
    <input class="vanis-menu-tf mt10" id="set-hotkeys-tf" placeholder="Set hotkeys..."></input>
    <button class="vanis-menu-button mt10" id="set-hotkeys-button" tip="${setHotkeysTip}">Set</button>
    <br>
    </div>
    <div id="ext-options-theme" style="padding: 16px; display: none;">
    <p>Theme 15:</p>
    <input class="vanis-menu-tf mt10" id="theme-color1-tf" placeholder="Set color 1..."></input>
    <input class="vanis-menu-tf mt10" id="theme-color2-tf" placeholder="Set color 2..."></input>
    <button class="vanis-menu-button mt10" id="save-theme-button" tip="${saveThemeTip}">Save Theme</button>
    </div>
       `;
    document.getElementById("main-container").append(optionsDiv);

    optionsDiv.children[0].children[0].onclick = () => openExtOptionsTab("general");
    optionsDiv.children[0].children[1].onclick = () => openExtOptionsTab("misc");
    optionsDiv.children[0].children[2].onclick = () => openExtOptionsTab("theme")

    //general tab
    document.getElementById("messageTimeCheckBox").checked = messageTime;
    document.getElementById("messageTimeCheckBox").onclick = () => {
        messageTime = this.checked;
        localStorage.setItem("messageTime", messageTime);

    }

    let msDigitsSlider = document.getElementById("msDigitsSlider");

    msDigitsSlider.value = msDigits;
    document.getElementById("msDigitsDisplay").innerHTML = msDigits;
    msDigitsSlider.oninput = () => {
        msDigits = msDigitsSlider.value;
        document.getElementById("msDigitsDisplay").innerHTML = msDigits;
        localStorage.setItem("msDigits", msDigits);
    }

    document.getElementById("rainbowTimeCheckBox").checked = rainbowTime;
    document.getElementById("rainbowTimeCheckBox").onclick = () => {
        rainbowTime = !rainbowTime;
        localStorage.setItem("rainbowTime", rainbowTime);
    }

    document.getElementById("adblockerCheckBox").checked = adblocker;
    document.getElementById("adblockerCheckBox").onclick = () => {
        adblocker = !adblocker;
        localStorage.setItem("adblocker", adblocker);
    }

    document.getElementById("oldChatStylingCheckBox").checked = oldChatStyling;
    document.getElementById("oldChatStylingCheckBox").onclick = () => {
        oldChatStyling = !oldChatStyling;
        localStorage.setItem("oldChatStyling", oldChatStyling);
    }

    document.getElementById("rainbowTextCheckBox").checked = rainbowText;
    document.getElementById("rainbowTextCheckBox").onclick = () => {
        rainbowText = !rainbowText;
        localStorage.setItem("rainbowText", rainbowText);
    }
    document.getElementById("deleteStatScreenAdCheckBox").checked = deleteStatScreenAd;
    document.getElementById("deleteStatScreenAdCheckBox").onclick = () => {
        deleteStatScreenAd = !deleteStatScreenAd;
        localStorage.setItem("deleteStatScreenAd", deleteStatScreenAd);
    }
    document.getElementById("offerTranslationCheckBox").checked = offerTranslation;
    document.getElementById("offerTranslationCheckBox").onclick = () => {
        offerTranslation = !offerTranslation;
        localStorage.setItem("offerTranslation", offerTranslation);
    }
    document.getElementById("alertUpdatesCheckBox").checked = alertUpdates;
    document.getElementById("alertUpdatesCheckBox").onclick = () => {
        alertUpdates = !alertUpdates;
        localStorage.setItem("alertUpdates", alertUpdates);
    }


    //misc tab: skins
    let copySkinListButton = document.querySelector("#copy-skin-list-button");
    copySkinListButton.onclick = () => {
        navigator.clipboard.writeText(localStorage.getItem("skins")).then(() => {
            copySkinListButton.innerHTML = "Copied!";
        },
            () => {
                copySkinListButton.innerHTML = "Failed copying skin list.";
            });
    }

    let setSkinListButton = document.querySelector("#set-skin-list-button");
    setSkinListButton.onclick = () => {
        let value = document.getElementById("set-skin-list-tf").value.trim();
        if (isValidArray(value)) {
            localStorage.setItem("skins", value);
            success("updated")
        }
        else {
            if (value === "clear") {
                localStorage.removeItem("skins");
                success("cleared")
            }
            else {
                setSkinListButton.innerHTML = "Error";
                setSkinListButton.setAttribute("tip", "ERROR: The input in the text field above was invalid.");
            }
        }
        function success(action) {
            setSkinListButton.innerHTML = `Skin list ${action}!`;
            setSkinListButton.setAttribute("tip", setSkinListTip);
            document.getElementById("set-skin-list-tf").value = "";
        }
    }

    let addToSkinListButton = document.querySelector("#add-to-skin-list-button");
    addToSkinListButton.onclick = () => {
        let value = document.getElementById("set-skin-list-tf").value.trim();
        debugger
        if (isValidArray(value)) {
            let newSkins = Array.from(JSON.parse(value));
            try {
                let oldSkins = Array.from(JSON.parse(localStorage.getItem("skins")));
                localStorage.setItem("skins", JSON.stringify(oldSkins.concat(...newSkins)));
            }
            catch (e) {
                localStorage.setItem("skins", value);
            }
            addToSkinListButton.innerHTML = `${newSkins.length} skins added!`;
            addToSkinListButton.setAttribute("tip", addToSkinListTip);
            document.getElementById("set-skin-list-tf").value = "";
            success("updated")
        }
        else {
            addToSkinListButton.innerHTML = "Error";
            addToSkinListButton.setAttribute("tip", "ERROR: The input in the text field above was invalid.");
        }
    }


    //misc tab: settings
    let copySettingsButton = document.querySelector("#copy-settings-button")
    copySettingsButton.onclick = () => {
        navigator.clipboard.writeText(localStorage.getItem("settings")).then(() => {
            copySettingsButton.innerHTML = "Copied!"
        },
            () => {
                copySettingsButton.innerHTML = "Failed copying settings."
            });
    }

    let setSettingsButton = document.querySelector("#set-settings-button")
    setSettingsButton.onclick = () => {
        const value = document.getElementById("set-settings-tf").value.trim();
        if (isValidJSON(value)) {
            localStorage.setItem("settings", value);
            setSettingsButton.innerHTML = "Settings updated!";
            setSettingsButton.setAttribute("tip", setSettingsTip)
            document.getElementById("set-settings-tf").value = "";
        }
        else {
            setSettingsButton.innerHTML = "Error";
            setSettingsButton.setAttribute("tip", "ERROR: The input in the text field above was invalid.")
        }
    }


    //misc tab: hotkeys
    let copyHotkeysButton = document.querySelector("#copy-hotkeys-button")
    copyHotkeysButton.onclick = () => {
        navigator.clipboard.writeText(localStorage.getItem("hotkeys")).then(() => {
            copyHotkeysButton.innerHTML = "Copied!"
        },
            () => {
                copyHotkeysButton.innerHTML = "Failed copying hotkeys."
            });
    }

    let setHotkeysButton = document.querySelector("#set-hotkeys-button")
    setHotkeysButton.onclick = () => {
        const value = document.getElementById("set-hotkeys-tf").value.trim();
        if (isValidJSON(value)) {
            localStorage.setItem("hotkeys", value);
            setHotkeysButton.innerHTML = "Hotkeys updated!";
            setHotkeysButton.setAttribute("tip", setHotkeysTip);
            document.getElementById("set-hotkeys-tf").value = "";
        }
        else {
            setHotkeysButton.innerHTML = "Error";
            setHotkeysButton.setAttribute("tip", "ERROR: The input in the text field above was invalid.")
        }
    }

    //theme tab inputs
    let color1Tf = document.querySelector("#theme-color1-tf");
    let color2Tf = document.querySelector("#theme-color2-tf");
    color1Tf.value = themeColor1;
    color2Tf.value = themeColor2;

    //theme tab: save
    let saveThemeButton = document.querySelector("#save-theme-button");
    saveThemeButton.onclick = () => {
        saveThemeButton.setAttribute("tip", "");
        let errorString = "";
        let color1 = document.querySelector("#theme-color1-tf").value || "#000000";
        let color2 = document.querySelector("#theme-color2-tf").value || "#000000";
        color1 = color1.startsWith("#") ? color1 : "#" + color1;
        color2 = color2.startsWith("#") ? color2 : "#" + color2;
        if (isValidHexcode(color1)) {
            localStorage.setItem("theme-color1", color1);
            themeColor1 = color1;
        }
        else {
            errorString += "Color 1 is invalid! \n"
        }
        if (isValidHexcode(color2)) {
            localStorage.setItem("theme-color2", color2);
            themeColor2 = color2;
        }
        else {
            errorString += "Color 2 is invalid! \n"
        }
        saveThemeButton.setAttribute("tip", errorString === "" ? saveThemeTip : errorString);
        saveThemeButton.innerHTML = errorString === "" ? "Theme updated!" : "Error";
        updateTheme();
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
}

function makeRainbowText() {
    ss.insertRule('.fade-box, .replay-list-header, .swal2-title {animation: colorRotate 6s linear 0s infinite !important;}', 100)
}

function deleteStatScreenAdd() {
    document.querySelector("#vanis-io_300x250_2").remove();
}

function addExtOptionsToggleButton() {
    let extOptionsMenu = document.getElementById("ext-options-menu");
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
    extOptionsToggleButton.innerHTML = "Toggle Extension Menu";
    extOptionsToggleButton.onmouseenter = () => {
        this.style.background = "#2b9047";
        this.style.transition = "0.2s";
    }
    extOptionsToggleButton.onmouseleave = () => {
        this.style.background = "#32a852";
        this.style.transition = "0.2s";
    }
    extOptionsToggleButton.onclick = () => {
        if (extOptionsHidden) {
            if (screenwidth <= 1500) {
                document.querySelector(".account-wrapper").style.display = "none";
                document.querySelector("#main-container > div:nth-child(5)").style.display = "none";
            }
            extOptionsMenu.style.display = "block";
            extOptionsHidden = false;
            localStorage.setItem("extOptionsHidden", extOptionsHidden);
        } else {
            if (screenwidth <= 1500) {
                document.querySelector(".account-wrapper").style.display = "block";
                document.querySelector("#main-container > div:nth-child(5)").style.display = "flex";
            }
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
function isValidJSON(string) {
    try {
        JSON.parse(string);
        return true;
    }
    catch (e) {
        return false;
    }
}
function isValidArray(string) {
    try {
        const json = JSON.parse(string);
        return Array.isArray(json);
    } catch (e) {
        return false;
    }
}

function alertExtUpdates() {
    if (localStorage.getItem("previousVersion") !== version && alertUpdates) {
        alert("Eternal Extension got updated:\n" + latestFeatures + "\nYou can see this again by hovering over the Version in the Extension Menu.");
    }
}

function isValidHexcode(input) {
    return /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(input);
}
