var css = document.createElement("style");
css.appendChild(document.createTextNode(`
@keyframes colorRotate {
    from {
      background: #6666ff;
    }
    10% {
      background: #0099ff;
    }
    50% {
      background: #00ff00;
    }
    75% {
      background: #ff3399;
    }
    100% {
      background: #6666ff;
    }
  }
.skin {
    animation: colorRotate 6s linear 0s infinite !important;
}

`));
document.head.appendChild(css);
