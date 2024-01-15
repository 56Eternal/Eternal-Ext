# Eternal Extension

Extension for vanis.io which adds selected custom themes, timestamps to messages, backups for your game settings and skins and lots of other features.
**No, this is not Rise, and no, this extension does not let you multibox in 1 tab.**


## How to install
Download this repository as `.zip`. Then, unzip it into a new folder where you want to "install" the extension to. Open that unzipped directory and delete the `scripts` folder and its contents, so you should only have 5 files and no folders in total. Now follow the steps based on the browser you play vanis with.

### Chrome:
- open a new tab, type `chrome://extensions/` in the URL bar
- turn on developer mode (top right)
- click on "load unpacked extension" (top left)
- select the folder that contains the unzipped extension

### Firefox:
- open a new tab, type `about:debugging` in the URL bar
- click the "This Firefox" option
- click the "Load Temporary Add-on" button
- select the `manifest.json` file in the folder containing the unzipped extension

Due to Firefox Security Settings, unofficial extensions like this one automatically get removed again when firefox is closed, so either you never close firefox or you add the extension back to Firefox every time you open it. Yes I know it sucks.

### Microsoft Edge:
- open a new tab, type `about:debugging` in the URL bar
- turn on developer mode (on the left side)
- click "load unpacked extension"
- select the folder that contains the unzipped extension

### Other Browsers:
- look up how to "load unpacked extension" or "load extension from folder" in your browser, or dm me for help :)

## How to update
When a new version is available, it updates automatically when you reload vanis.io. If that doesn't work, try pressing `ctrl+shift+r`.

The version displayed on the extensions menu cannot be updated dynamically, meaning it will always display the version from the time you installed the extension until you reinstall the extension, so don't be confused by that.


## How to use
If you installed the extension properly and open vanis.io with the extension running, you should see 2 new buttons at the very bottom of the menu, to the right of the button leading you to skins.vanis.io. 

### Themes
The first button is for changing your menu theme. Go ahead and look through all the currently existing themes to pick one. New themes may (and probably will) be added in the future. Bear in mind this extension was originally only for personal use, which is why there are some "trash themes" still left in.

### Extension Menu

#### General
Under this tab you find general settings for the extension. Hover over each setting to get an explanation on what they do.

#### Misc
This tab is for backing up your settings, hotkeys and skins list. **Before you do anything, first click the "Copy skin list to clipboard" button and then paste that text somewhere secure.** If you want to paste it to discord, it is **necessary** to add a backtick (`` ` ``) character at the start and end of the message. If you don't do that, the data will get corrupted. Alternatively, you can paste it in a .txt file on your computer.

Now, do the same thing for your settings and hotkeys.

**It is important to first back up this data securely before trying to set it to something else. Incase something goes wrong, you can always revert it.**

In order to set/add your skin list, you just paste it in the appropriate text field, click the button below and refresh the page. 

As an example let's say you want to send your skin list to your friend. 
1. you and your friends need to install this extension.
2. you copy your skin list to clipboard.
3. you go to discord, tpye a backtick `` ` ``, paste from clipboard, and type another backtick`` ` ``.
4. your friend copies the message, pastes it in the text field which says "set skin list", clicks the "Set" button below, and then refreshes the page. Now he should have your skin list. Instead of setting it as the new skin list, he can also add all the skins to his own skin list, by pressing the "Add" button.

You can also use this feature to easily set up your skin list, settings and hotkeys on a new device.


### skins.vanis.io
This extension currently makes 2 changes to the skins page:
1. Next to where it says "Your Skins", it will say how many skins you have uploaded so far.
2. Below the logout in the left menu, a button is added to copy all currently displayed skins to clipboard. You can then just paste it in the corresponding text field in my extension menu in vanis.io, and either set it as the new skin list, or add all the skins to your current skin list.


## About the Extension
I decided to publish my extension now because I felt like it. **Look through this code at your own risk.** I know it's bad, this is basically my first project and I am just having fun with it (You can see my first commit is from 1.5, simply because I didn't know anything about git other than that it exists before that). That being said, Any optimizations are very welcome, just dm me :)

If you want to add part of my extension to your own extension, please credit me or I will cry for days on end

## For questions
Discord: eternal8910
