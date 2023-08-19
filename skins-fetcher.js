fetch('https://raw.githubusercontent.com/56eternal/Eternal-Ext/main/scripts/skins.js')
  .then(response => response.text())
  .then(scriptContent => {
    eval(scriptContent);
  })
  .catch(error => {
    console.error('Error fetching external script:', error);
  });
