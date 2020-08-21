//Image settings
const STIMULUS_HEIGHT = 500; //Changes the height of the images. Set to null for no changes
const STIMULUS_WIDTH = null; //Changes the width of the images.  Set to null for no changes
const MAINTAIN_IMG_ASPECT_RATIO = true; //must be true or false. Set only the width or height and set to true will keep the aspect ration of the image. Set to false if want to change height/width together.

//Fixation settings
const FIXATION_DURATION = [2000, 2250, 2500, 2750, 3000]; //Sets the fixation duration. Can add as many values as you want or subtract values from array.
const FIXATION_KEY = '+';
const FIXATION_SIZE = 60;

const KEYBOARD_PRESS_HAPPY = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(39); //This is the arrow key code
const KEYBOARD_PRESS_FEAR = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(37); //This is the arrow key code
let timeline = [];
let sequence = [];

/***********Instructions Screen*************/
    //instructions for the experiment
let instructions = {
        type: "html-keyboard-response",
        stimulus: "<p>In this task you will see faces with two different expression types: happy and fear, " +
            " and you will also see red text written over these faces.</p>" +
            "<p>Please ignore the red text and indicate the facial expression type: happy or fear by entering on your keyboard " +
            "<strong>" + KEYBOARD_PRESS_HAPPY + "</strong> for happy and <strong>" + KEYBOARD_PRESS_FEAR + "</strong> for fear.</p>" +
            "<p><strong>-Press any key to continue-</strong></p>"
    };
//add instructions to the timeline
timeline.push(instructions);

/***********Image variables (pre-loaded)*************/
let f_c_m_hi_4 = {stimulus: "img/f_c_m_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_as_4 = {stimulus: "img/f_i_f_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_f_hi_4 = {stimulus: "img/h_c_f_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_af_4 = {stimulus: "img/f_c_m_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_i_m_ca_4 = {stimulus: "img/h_i_m_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_hi_1 = {stimulus: "img/f_i_f_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_af_1 = {stimulus: "img/f_c_f_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_i_m_ca_3 = {stimulus: "img/h_i_m_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_hi_3 = {stimulus: "img/f_i_m_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_m_as_1 = {stimulus: "img/h_c_m_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
