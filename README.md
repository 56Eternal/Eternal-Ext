# Eternal Extension

Extension for vanis.io which adds selected custom themes, timestamps to messages, backups for your game settings and skins and lots of other features.


## How to install
Download this repository as `.zip`. Then, unzip it into a new folder where you want to "install" the extension to. Open that unzipped directory and delete the `scripts` folder and its contents, so you should only have 5 files and no folders in total. Now follow the steps based on the browser you play vanis with.

### Chrome:
- open a new tab, type `chrome://extensions/` in the URL bar and turn on developer mode (top right)
- click on "load unpacked extension" (top left)
- select the folder that contains the unzipped extension

### Firefox:
open a new tab, type `about:debugging` in the URL bar, click the "This Firefox" option, click the "Load Temporary Add-on" button, then select the `manifest.json` file in the folder containing the unzipped extension.

Due to Firefox Security Settings, unofficial extensions like this one automatically get removed again when firefox is closed, so either you never close firefox or you add the extension back to Firefox every time you open it. Yes I know it sucks.


## How to update
When a new version is available, you just press `ctrl+shift+r` on vanis.io to update.

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

In order to set your skin list, you just paste it in the appropriate text field, click the button below and refresh the page. 

As an example let's say you want to send your skin list to your friend. 
1. you and your friends need to install this extension.
2. you copy your skin list to clipboard.
3. you go to discord, tpye a backtick `` ` ``, paste from clipboard, and type another backtick`` ` ``.
4. your friend copies the message, pastes it in the text field which says "set skin list", clicks the button below, and then refreshes the page. Now he should have your skin list.

You can also use this feature to easily set up your skin list, settings and hotkeys on a new device.


### skins.vanis.io
This extension currently makes 2 changes to the skins page:
1. Skins have an animated rainbow background, this way you can easily identify a transparent skin.
2. Next to where it says "Your Skins", it will say how many skins you have uploaded so far.


## About the Extension
I decided to publish my extension now because I felt like it. **Look through this code at your own risk.** I know it's bad, this is basically my first project and I am just having fun with it (You can see my first commit is from 1.5, simply because I didn't know anything about git other than that it exists before that). That being said, Any optimizations are very welcome, just dm me :)


## For questions
Discord: eternal8910