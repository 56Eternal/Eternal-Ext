var theme = 8; //0 = default, 1 = purple, 2 = wine red, 3 = petrol, 4 = cyan, 5 = brown, 6 = cactus, 7 = misavers, 8 = quotes
document.getElementById("player-data").style.marginTop = "300px"; //delete this line if you don't have ad blocker

var amountRulesAdded = 0;
var amountThemes = 9;
var ss = document.styleSheets[0];
updateTheme();

//Change Theme parent button
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
themeMinus.onmouseenter = function () {
    this.style.background = "#007777";
    this.style.transition = "0.2s";
}
themeMinus.onmouseleave = function () {
    this.style.background = "#008b8b";
    this.style.transition = "0.2s";
}
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
themePlus.onmouseenter = function () {
    this.style.background = "#007777";
    this.style.transition = "0.2s";
}
themePlus.onmouseleave = function () {
    this.style.background = "#008b8b";
    this.style.transition = "0.2s";
}
themePlus.onclick = function () {
    theme++;
    theme = theme % amountThemes;
    console.log("Theme: " + theme + ", amountRulesAdded: " + amountRulesAdded);
    updateTheme();

    themeButtonText.innerHTML = "Theme " + theme;
}

themeButton.appendChild(themeMinus);
themeButton.appendChild(themeButtonText);
themeButton.appendChild(themePlus);

function updateTheme() {
    for (let i = 0; i < amountRulesAdded; i++) {
        ss.deleteRule(0);
    }
    switch (theme) {
        case 0:
            //default #273b5e, #0f1724, rgba(0,17,33,.75)
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
            ss.insertRule('::-webkit-scrollbar-thumb {background: url(https://media.discordapp.net/attachments/1041104770758344814/1074257122302373968/misavers.png?width=200&height=145) !important;}', 0);
            ss.insertRule('#overlay {background: radial-gradient(rgba(0,17,33,.75) 300px,rgba(0,0,0,.75)) !important;}', 1);
            ss.insertRule('.fade-box {background: url(https://media.discordapp.net/attachments/1041104770758344814/1074257122302373968/misavers.png?width=200&height=145) !important;}', 2);
            ss.insertRule('.replay-list-header {background: url(https://media.discordapp.net/attachments/1041104770758344814/1074257122302373968/misavers.png?width=200&height=145) !important;}', 3);
            ss.insertRule('.swal2-popup {background: url(https://media.discordapp.net/attachments/1041104770758344814/1074257122302373968/misavers.png?width=200&height=145) !important;}', 4);
            amountRulesAdded = 5;
            break;

        case 8:
            //quotes
            ss.insertRule('::-webkit-scrollbar-thumb {background: url(https://media.discordapp.net/attachments/1041104770758344814/1074257122302373968/misavers.png?width=200&height=145) !important;}', 0);
            ss.insertRule('.fade-box {background: url(https://media.discordapp.net/attachments/1041104770758344814/1074257122302373968/misavers.png?width=200&height=145) !important;}', 1);
            ss.insertRule('.swal2-popup {background: url(https://media.discordapp.net/attachments/1041104770758344814/1074257122302373968/misavers.png?width=200&height=145) !important;}', 2);
            ss.insertRule('.replay-list-header {background: url(https://cdn.discordapp.com/attachments/1041104770758344814/1074337213061541970/image.png) !important;}', 3);
            ss.insertRule('.replay-list {background: url(https://cdn.discordapp.com/attachments/1041104770758344814/1074340235518947408/replay-list.png) !important;}', 4);
            amountRulesAdded = 5;
            break;

    }
}


const newbutton2 = document.createElement('div');
newbutton2.id = "big-chat";
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

var chatbox = document.getElementById("chatbox");
var tateSizeChat = false;
function makeChatTateSize() {
    if (tateSizeChat) {
        chatbox.style.height = "200px";
        // chatbox.style.width = "420px";
        tateSizeChat = false;
    }
    else {
        chatbox.style.height = "830px";
        // chatbox.style.width = "700px";
        tateSizeChat = true;
    }
}

document.querySelectorAll(".social-container").forEach(element => {
    element.style.width = "auto";
    element.appendChild(themeButton);
    element.appendChild(newbutton2);
});

//messages show time posted
addTimeToMessages();
function addTimeToMessages() {
    var messageList = document.getElementById("message-list");
    const config = { attributes: false, childList: true, subtree: false };
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            // if (messageList.childElementCount > 4) {
                var newMessage = messageList.lastChild;
                var today = new Date();
                
                var time = "[" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "]";
                const messageTimeDiv = document.createElement('span');
                messageTimeDiv.classList.add = "chat-message-time";
                messageTimeDiv.style.color = "rgb(130, 130, 130)";

                
                messageTimeDiv.style.fontSize = "12px";
                messageTimeDiv.innerHTML = time;
                
                newMessage.insertBefore(messageTimeDiv, newMessage.firstChild)
                console.log(time + newMessage.innerHTML);
            // }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(messageList, config);

}
