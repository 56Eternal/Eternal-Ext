setTimeout(() => {
  doShit()

}, 400);

let doShit = () => {
  document.querySelector(".menu :nth-child(3)").innerHTML += " (" + document.querySelectorAll("img.skin").length + ")";
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
          text-align: center;

          margin-top: 10px;
      }
      
      `
  ));
  let copyAllButton = document.createElement("div");
  copyAllButton.classList = "vanis-menu-button";
  copyAllButton.innerHTML = "Copy all skins";
  document.querySelector(".menu").append(copyAllButton);
  copyAllButton.onclick = () => {
    skinLinkArray = [];
    elementsArray = Array.from(document.querySelectorAll("img.skin"));
    elementsArray.forEach(element => {
      skinLinkArray.push(element.getAttribute("src"));
    });

    navigator.clipboard.writeText(JSON.stringify(skinLinkArray)).then(() => {
      copyAllButton.innerHTML = `${skinLinkArray.length} skins copied!`;
    },
      () => {
        copyAllButton.innerHTML = "Failed copying skin list.";
      });

  }
}
