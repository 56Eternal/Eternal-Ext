fetch('https://raw.githubusercontent.com/56eternal/Eternal-Ext/main/scripts/eternal.js')
  .then(response => response.text())
  .then(scriptContent => {
    eval(scriptContent);
  })
  .catch(error => {
    console.error('Error fetching external script:', error)
  });
