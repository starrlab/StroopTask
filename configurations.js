//Current settings for the trials
const defaultSettings = {
    version: 1,
    numOfTrials: 1,
    fixationTime: 1000,
    prepTime: 2000,
    moveTime: 5000,
    prepErrorMessageDisplayLength: 5000
}

const KEYBOARD_PRESS_HAPPY = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(39); //This is the arrow key code
const KEYBOARD_PRESS_FEAR = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(37); //This is the arrow key code

const filename = "task_" + Date.now().toString() + "_ver" + defaultSettings.version + ".json";

export {
    defaultSettings,
    filename,
    KEYBOARD_PRESS_HAPPY,
    KEYBOARD_PRESS_FEAR
}