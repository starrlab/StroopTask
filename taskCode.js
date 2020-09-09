/*************Variables************/
const VERSION = "1";
const SEQUENCE_NUMBER_ES = 2; //Choose 1-8
const SEQUENCE_NUMBER_CONTROL = 1; //Choose 1-8
const CONTROL_GOES_FIRST = true;

//Trial time settings
const STIMULUS_DURATION = 1000; //This is the total time the image will be displayed before disapearing.
const TRIAL_DURATION = 3000; //This is the total time before the curent trial moves on to next trial
const POST_TRIAL_GAP = 0; //Sets the time after the trial finishes to wait until the fixation starts (trial hang time).
const FEEDBACK_DURATION = 250; //Sets how long the green dot stays on screen if user inputs a response

//Image settings
const STIMULUS_HEIGHT = 500; //Changes the height of the images. Set to null for no changes
const STIMULUS_WIDTH = null; //Changes the width of the images.  Set to null for no changes
const MAINTAIN_IMG_ASPECT_RATIO = true; //must be true or false. Set only the width or height and set to true will keep the aspect ration of the image. Set to false if want to change height/width together.

//Fixation settings
const FIXATION_DURATION = [2000, 2250, 2500, 2750, 3000]; //Sets the fixation duration. Can add as many values as you want or subtract values from array.
const FIXATION_KEY = '+';
const FIXATION_SIZE = 60;

//MISC settings
const NUMBER_OF_TRIALS = 1; //This will run through the entire ESSequence n number of times as specified.
const KEYBOARD_PRESS_TUTORIAL = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(13); //This is the tutorial key code
const KEYBOARD_PRESS_HAPPY = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(39); //This is the arrow key code
const KEYBOARD_PRESS_FEAR = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(37); //This is the arrow key code
const KEYBOARD_PRESS_FEMALE = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(39); //This is the arrow key code
const KEYBOARD_PRESS_MALE = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(37); //This is the arrow key code
let timeline = [];
let ESSequence = [];
let controlSequence = [];

/***********Image variables (pre-loaded)*************/
let f_c_f_af_1 = {stimulus: "img/ES/f_c_f_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_af_2 = {stimulus: "img/ES/f_c_f_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_af_3 = {stimulus: "img/ES/f_c_f_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_af_4 = {stimulus: "img/ES/f_c_f_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_af_1 = {stimulus: "img/ES/f_i_f_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_af_2 = {stimulus: "img/ES/f_i_f_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_af_3 = {stimulus: "img/ES/f_i_f_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_af_4 = {stimulus: "img/ES/f_i_f_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_f_af_1 = {stimulus: "img/ES/h_c_f_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_f_af_2 = {stimulus: "img/ES/h_c_f_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_f_af_3 = {stimulus: "img/ES/h_c_f_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_f_af_4 = {stimulus: "img/ES/h_c_f_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_af_1 = {stimulus: "img/ES/h_i_f_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_af_2 = {stimulus: "img/ES/h_i_f_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_af_3 = {stimulus: "img/ES/h_i_f_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_af_4 = {stimulus: "img/ES/h_i_f_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_c_f_as_1 = {stimulus: "img/ES/f_c_f_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_as_2 = {stimulus: "img/ES/f_c_f_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_as_3 = {stimulus: "img/ES/f_c_f_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_as_4 = {stimulus: "img/ES/f_c_f_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_as_1 = {stimulus: "img/ES/f_i_f_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_as_2 = {stimulus: "img/ES/f_i_f_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_as_3 = {stimulus: "img/ES/f_i_f_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_as_4 = {stimulus: "img/ES/f_i_f_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_f_as_1 = {stimulus: "img/ES/h_c_f_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_f_as_2 = {stimulus: "img/ES/h_c_f_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_f_as_3 = {stimulus: "img/ES/h_c_f_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_f_as_4 = {stimulus: "img/ES/h_c_f_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_as_1 = {stimulus: "img/ES/h_i_f_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_as_2 = {stimulus: "img/ES/h_i_f_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_as_3 = {stimulus: "img/ES/h_i_f_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_as_4 = {stimulus: "img/ES/h_i_f_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_c_f_ca_1 = {stimulus: "img/ES/f_c_f_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_ca_2 = {stimulus: "img/ES/f_c_f_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_ca_3 = {stimulus: "img/ES/f_c_f_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_ca_4 = {stimulus: "img/ES/f_c_f_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_ca_1 = {stimulus: "img/ES/f_i_f_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_ca_2 = {stimulus: "img/ES/f_i_f_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_ca_3 = {stimulus: "img/ES/f_i_f_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_ca_4 = {stimulus: "img/ES/f_i_f_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_f_ca_1 = {stimulus: "img/ES/h_c_f_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_f_ca_2 = {stimulus: "img/ES/h_c_f_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_f_ca_3 = {stimulus: "img/ES/h_c_f_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_f_ca_4 = {stimulus: "img/ES/h_c_f_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_ca_1 = {stimulus: "img/ES/h_i_f_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_ca_2 = {stimulus: "img/ES/h_i_f_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_ca_3 = {stimulus: "img/ES/h_i_f_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_ca_4 = {stimulus: "img/ES/h_i_f_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_c_f_hi_1 = {stimulus: "img/ES/f_c_f_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_hi_2 = {stimulus: "img/ES/f_c_f_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_hi_3 = {stimulus: "img/ES/f_c_f_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_hi_4 = {stimulus: "img/ES/f_c_f_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_hi_1 = {stimulus: "img/ES/f_i_f_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_hi_2 = {stimulus: "img/ES/f_i_f_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_hi_3 = {stimulus: "img/ES/f_i_f_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_hi_4 = {stimulus: "img/ES/f_i_f_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_f_hi_1 = {stimulus: "img/ES/h_c_f_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_f_hi_2 = {stimulus: "img/ES/h_c_f_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_f_hi_3 = {stimulus: "img/ES/h_c_f_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_f_hi_4 = {stimulus: "img/ES/h_c_f_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_hi_1 = {stimulus: "img/ES/h_i_f_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_hi_2 = {stimulus: "img/ES/h_i_f_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_hi_3 = {stimulus: "img/ES/h_i_f_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_f_hi_4 = {stimulus: "img/ES/h_i_f_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_c_m_af_1 = {stimulus: "img/ES/f_c_m_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_af_2 = {stimulus: "img/ES/f_c_m_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_af_3 = {stimulus: "img/ES/f_c_m_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_af_4 = {stimulus: "img/ES/f_c_m_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_af_1 = {stimulus: "img/ES/f_i_m_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_af_2 = {stimulus: "img/ES/f_i_m_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_af_3 = {stimulus: "img/ES/f_i_m_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_af_4 = {stimulus: "img/ES/f_i_m_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_m_af_1 = {stimulus: "img/ES/h_c_m_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_m_af_2 = {stimulus: "img/ES/h_c_m_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_m_af_3 = {stimulus: "img/ES/h_c_m_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_m_af_4 = {stimulus: "img/ES/h_c_m_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_af_1 = {stimulus: "img/ES/h_i_m_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_af_2 = {stimulus: "img/ES/h_i_m_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_af_3 = {stimulus: "img/ES/h_i_m_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_af_4 = {stimulus: "img/ES/h_i_m_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_c_m_as_1 = {stimulus: "img/ES/f_c_m_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_as_2 = {stimulus: "img/ES/f_c_m_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_as_3 = {stimulus: "img/ES/f_c_m_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_as_4 = {stimulus: "img/ES/f_c_m_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_as_1 = {stimulus: "img/ES/f_i_m_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_as_2 = {stimulus: "img/ES/f_i_m_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_as_3 = {stimulus: "img/ES/f_i_m_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_as_4 = {stimulus: "img/ES/f_i_m_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_m_as_1 = {stimulus: "img/ES/h_c_m_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_m_as_2 = {stimulus: "img/ES/h_c_m_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_m_as_3 = {stimulus: "img/ES/h_c_m_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_m_as_4 = {stimulus: "img/ES/h_c_m_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_as_1 = {stimulus: "img/ES/h_i_m_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_as_2 = {stimulus: "img/ES/h_i_m_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_as_3 = {stimulus: "img/ES/h_i_m_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_as_4 = {stimulus: "img/ES/h_i_m_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_c_m_ca_1 = {stimulus: "img/ES/f_c_m_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_ca_2 = {stimulus: "img/ES/f_c_m_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_ca_3 = {stimulus: "img/ES/f_c_m_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_ca_4 = {stimulus: "img/ES/f_c_m_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_ca_1 = {stimulus: "img/ES/f_i_m_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_ca_2 = {stimulus: "img/ES/f_i_m_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_ca_3 = {stimulus: "img/ES/f_i_m_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_ca_4 = {stimulus: "img/ES/f_i_m_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_m_ca_1 = {stimulus: "img/ES/h_c_m_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_m_ca_2 = {stimulus: "img/ES/h_c_m_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_m_ca_3 = {stimulus: "img/ES/h_c_m_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_m_ca_4 = {stimulus: "img/ES/h_c_m_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_ca_1 = {stimulus: "img/ES/h_i_m_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_ca_2 = {stimulus: "img/ES/h_i_m_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_ca_3 = {stimulus: "img/ES/h_i_m_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_ca_4 = {stimulus: "img/ES/h_i_m_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_c_m_hi_1 = {stimulus: "img/ES/f_c_m_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_hi_2 = {stimulus: "img/ES/f_c_m_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_hi_3 = {stimulus: "img/ES/f_c_m_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_m_hi_4 = {stimulus: "img/ES/f_c_m_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_hi_1 = {stimulus: "img/ES/f_i_m_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_hi_2 = {stimulus: "img/ES/f_i_m_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_hi_3 = {stimulus: "img/ES/f_i_m_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_m_hi_4 = {stimulus: "img/ES/f_i_m_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_m_hi_1 = {stimulus: "img/ES/h_c_m_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_m_hi_2 = {stimulus: "img/ES/h_c_m_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_m_hi_3 = {stimulus: "img/ES/h_c_m_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_c_m_hi_4 = {stimulus: "img/ES/h_c_m_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_hi_1 = {stimulus: "img/ES/h_i_m_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_hi_2 = {stimulus: "img/ES/h_i_m_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_hi_3 = {stimulus: "img/ES/h_i_m_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let h_i_m_hi_4 = {stimulus: "img/ES/h_i_m_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}

/***********Control Image variables (pre-loaded)*************/
let f_c_fe_af_1 = {control: "img/Control/f_c_fe_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_af_2 = {control: "img/Control/f_c_fe_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_af_3 = {control: "img/Control/f_c_fe_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_af_4 = {control: "img/Control/f_c_fe_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_af_1 = {control: "img/Control/f_i_fe_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_af_2 = {control: "img/Control/f_i_fe_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_af_3 = {control: "img/Control/f_i_fe_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_af_4 = {control: "img/Control/f_i_fe_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_af_1 = {control: "img/Control/h_c_fe_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_af_2 = {control: "img/Control/h_c_fe_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_af_3 = {control: "img/Control/h_c_fe_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_af_4 = {control: "img/Control/h_c_fe_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_af_1 = {control: "img/Control/h_i_fe_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_af_2 = {control: "img/Control/h_i_fe_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_af_3 = {control: "img/Control/h_i_fe_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_af_4 = {control: "img/Control/h_i_fe_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_as_1 = {control: "img/Control/f_c_fe_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_as_2 = {control: "img/Control/f_c_fe_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_as_3 = {control: "img/Control/f_c_fe_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_as_4 = {control: "img/Control/f_c_fe_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_as_1 = {control: "img/Control/f_i_fe_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_as_2 = {control: "img/Control/f_i_fe_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_as_3 = {control: "img/Control/f_i_fe_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_as_4 = {control: "img/Control/f_i_fe_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_as_1 = {control: "img/Control/h_c_fe_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_as_2 = {control: "img/Control/h_c_fe_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_as_3 = {control: "img/Control/h_c_fe_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_as_4 = {control: "img/Control/h_c_fe_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_as_1 = {control: "img/Control/h_i_fe_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_as_2 = {control: "img/Control/h_i_fe_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_as_3 = {control: "img/Control/h_i_fe_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_as_4 = {control: "img/Control/h_i_fe_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_ca_1 = {control: "img/Control/f_c_fe_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_ca_2 = {control: "img/Control/f_c_fe_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_ca_3 = {control: "img/Control/f_c_fe_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_ca_4 = {control: "img/Control/f_c_fe_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_ca_1 = {control: "img/Control/f_i_fe_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_ca_2 = {control: "img/Control/f_i_fe_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_ca_3 = {control: "img/Control/f_i_fe_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_ca_4 = {control: "img/Control/f_i_fe_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_ca_1 = {control: "img/Control/h_c_fe_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_ca_2 = {control: "img/Control/h_c_fe_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_ca_3 = {control: "img/Control/h_c_fe_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_ca_4 = {control: "img/Control/h_c_fe_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_ca_1 = {control: "img/Control/h_i_fe_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_ca_2 = {control: "img/Control/h_i_fe_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_ca_3 = {control: "img/Control/h_i_fe_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_ca_4 = {control: "img/Control/h_i_fe_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_hi_1 = {control: "img/Control/f_c_fe_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_hi_2 = {control: "img/Control/f_c_fe_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_hi_3 = {control: "img/Control/f_c_fe_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_fe_hi_4 = {control: "img/Control/f_c_fe_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_hi_1 = {control: "img/Control/f_i_fe_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_hi_2 = {control: "img/Control/f_i_fe_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_hi_3 = {control: "img/Control/f_i_fe_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_hi_4 = {control: "img/Control/f_i_fe_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_hi_1 = {control: "img/Control/h_c_fe_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_hi_2 = {control: "img/Control/h_c_fe_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_hi_3 = {control: "img/Control/h_c_fe_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_hi_4 = {control: "img/Control/h_c_fe_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_hi_1 = {control: "img/Control/h_i_fe_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_hi_2 = {control: "img/Control/h_i_fe_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_hi_3 = {control: "img/Control/h_i_fe_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_hi_4 = {control: "img/Control/h_i_fe_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_ma_af_1 = {control: "img/Control/f_c_ma_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_af_2 = {control: "img/Control/f_c_ma_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_af_3 = {control: "img/Control/f_c_ma_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_af_4 = {control: "img/Control/f_c_ma_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_af_1 = {control: "img/Control/f_i_ma_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_af_2 = {control: "img/Control/f_i_ma_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_af_3 = {control: "img/Control/f_i_ma_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_af_4 = {control: "img/Control/f_i_ma_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_af_1 = {control: "img/Control/h_c_ma_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_af_2 = {control: "img/Control/h_c_ma_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_af_3 = {control: "img/Control/h_c_ma_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_af_4 = {control: "img/Control/h_c_ma_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_af_1 = {control: "img/Control/h_i_ma_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_af_2 = {control: "img/Control/h_i_ma_af_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_af_3 = {control: "img/Control/h_i_ma_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_af_4 = {control: "img/Control/h_i_ma_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_as_1 = {control: "img/Control/f_c_ma_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_as_2 = {control: "img/Control/f_c_ma_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_as_3 = {control: "img/Control/f_c_ma_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_as_4 = {control: "img/Control/f_c_ma_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_as_1 = {control: "img/Control/f_i_ma_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_as_2 = {control: "img/Control/f_i_ma_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_as_3 = {control: "img/Control/f_i_ma_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_as_4 = {control: "img/Control/f_i_ma_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_as_1 = {control: "img/Control/h_c_ma_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_as_2 = {control: "img/Control/h_c_ma_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_as_3 = {control: "img/Control/h_c_ma_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_as_4 = {control: "img/Control/h_c_ma_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_as_1 = {control: "img/Control/h_i_ma_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_as_2 = {control: "img/Control/h_i_ma_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_as_3 = {control: "img/Control/h_i_ma_as_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_as_4 = {control: "img/Control/h_i_ma_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_ca_1 = {control: "img/Control/f_c_ma_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_ca_2 = {control: "img/Control/f_c_ma_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_ca_3 = {control: "img/Control/f_c_ma_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_ca_4 = {control: "img/Control/f_c_ma_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_ca_1 = {control: "img/Control/f_i_ma_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_ca_2 = {control: "img/Control/f_i_ma_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_ca_3 = {control: "img/Control/f_i_ma_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_ca_4 = {control: "img/Control/f_i_ma_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_ca_1 = {control: "img/Control/h_c_ma_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_ca_2 = {control: "img/Control/h_c_ma_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_ca_3 = {control: "img/Control/h_c_ma_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_ca_4 = {control: "img/Control/h_c_ma_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_ca_1 = {control: "img/Control/h_i_ma_ca_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_ca_2 = {control: "img/Control/h_i_ma_ca_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_ca_3 = {control: "img/Control/h_i_ma_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_ca_4 = {control: "img/Control/h_i_ma_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_hi_1 = {control: "img/Control/f_c_ma_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_hi_2 = {control: "img/Control/f_c_ma_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_hi_3 = {control: "img/Control/f_c_ma_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_ma_hi_4 = {control: "img/Control/f_c_ma_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_hi_1 = {control: "img/Control/f_i_ma_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_hi_2 = {control: "img/Control/f_i_ma_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_hi_3 = {control: "img/Control/f_i_ma_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_i_ma_hi_4 = {control: "img/Control/f_i_ma_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_hi_1 = {control: "img/Control/h_c_ma_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_hi_2 = {control: "img/Control/h_c_ma_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_hi_3 = {control: "img/Control/h_c_ma_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_c_ma_hi_4 = {control: "img/Control/h_c_ma_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_hi_1 = {control: "img/Control/h_i_ma_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_hi_2 = {control: "img/Control/h_i_ma_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_hi_3 = {control: "img/Control/h_i_ma_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_ma_hi_4 = {control: "img/Control/h_i_ma_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}

/***********Test trials ESSequences*************/
switch(SEQUENCE_NUMBER_ES) {
    case 1:
        ESSequence = [h_i_m_ca_4, f_i_m_as_2, h_c_m_as_4, f_i_m_as_3, h_c_f_af_4, f_i_m_ca_1, f_c_m_af_4, h_c_m_af_2, f_c_f_ca_2, f_i_f_hi_1, h_i_f_as_2, f_i_f_af_4, f_c_f_af_3, h_c_f_hi_1, h_i_f_ca_1, h_c_m_hi_1, f_i_f_hi_4, h_i_f_af_4, f_i_m_hi_2, h_c_m_af_4, f_c_f_af_1, h_c_m_ca_3, f_c_f_as_1, h_i_f_as_3, f_i_m_af_4, f_c_f_hi_3, h_i_m_hi_2, f_i_f_hi_3, h_c_m_ca_4, h_i_m_af_2, h_c_f_as_4, h_i_m_af_1, h_c_f_af_2, h_i_f_as_4, f_i_f_ca_3, h_i_f_hi_3, f_c_f_ca_1, f_i_m_hi_4, f_c_f_af_2, f_i_f_as_3, f_c_m_as_3, h_i_m_af_3, f_c_m_as_4, f_i_m_hi_3, h_c_f_as_1, h_i_m_as_2, f_c_m_ca_3, f_i_f_as_2, f_c_f_hi_2, h_i_f_as_1, f_c_m_af_2, f_i_f_af_3, h_i_f_ca_4, h_c_f_hi_2, f_i_f_ca_2, h_c_f_af_3, f_i_f_ca_1, f_c_m_as_1, h_i_f_ca_2, h_c_f_ca_1, f_c_m_ca_4, h_c_m_as_2, f_i_f_ca_4, h_i_m_af_4, h_c_m_ca_2, h_i_f_hi_4, f_c_f_hi_1, h_i_f_af_1, f_c_m_hi_3, f_i_m_ca_2, h_i_m_as_4, f_i_m_ca_4, h_c_m_hi_4, f_i_f_as_4, h_i_f_hi_2, h_c_m_as_3, f_c_m_ca_1, h_c_f_hi_4, f_c_f_ca_3, h_i_m_ca_2, h_c_f_ca_2, h_i_m_as_1, f_c_m_hi_2, h_c_m_as_1, f_c_f_hi_4, f_i_m_as_4, h_c_f_hi_3, h_i_f_ca_3, f_c_f_ca_4, f_i_m_as_1, h_i_m_ca_1, f_i_f_hi_2, h_c_f_as_3, f_c_m_af_3, h_i_f_af_3, f_c_f_as_3, h_i_m_as_3, f_i_m_af_2, h_c_f_as_2, h_i_m_hi_4, h_c_f_ca_3, h_i_m_hi_1, h_c_m_af_1, f_c_m_as_2, h_i_m_hi_3, f_i_m_ca_3, h_c_m_hi_3, f_c_f_af_4, h_c_f_ca_4, h_i_m_ca_3, h_c_m_hi_2, h_i_f_hi_1, f_c_m_ca_2, f_i_f_af_1, h_c_m_ca_1, f_c_m_hi_1, h_i_f_af_2, h_c_m_af_3, f_i_f_as_1, f_c_m_hi_4, f_i_m_af_3, h_c_f_af_1, f_c_m_af_1, f_i_m_hi_1, f_c_f_as_2, f_i_m_af_1, f_c_f_as_4, f_i_f_af_2];
        break;
    case 2:
        ESSequence = [f_i_f_as_3, h_c_m_hi_1, h_i_f_as_3, f_c_m_hi_3, f_i_m_af_4, h_c_f_af_1, f_i_m_af_1, h_i_f_hi_2, f_i_f_as_2, h_i_f_af_2, h_c_f_as_3, f_c_m_as_1, h_i_f_ca_2, f_c_f_as_2, h_i_f_hi_1, f_c_f_af_2, f_i_m_as_1, f_c_f_as_3, h_i_m_hi_2, h_c_m_as_3, f_c_m_ca_1, h_c_f_as_2, f_c_m_ca_2, f_i_f_af_4, h_i_m_ca_3, f_i_f_as_4, h_i_m_ca_1, h_c_f_hi_4, f_c_m_as_4, h_c_f_as_4, f_i_m_ca_1, h_i_f_ca_4, f_c_f_ca_3, f_i_m_hi_4, h_c_m_as_1, h_i_m_af_4, h_c_f_af_4, f_i_f_af_1, f_c_f_as_4, h_c_m_ca_1, f_i_m_as_4, h_c_m_hi_2, f_c_f_as_1, f_i_m_af_3, h_i_m_as_1, f_c_m_ca_3, h_c_f_as_1, f_c_m_hi_4, f_i_f_ca_4, h_c_f_ca_1, f_c_f_hi_4, f_i_m_ca_2, h_c_f_af_2, f_i_m_hi_2, h_i_f_af_3, h_c_f_ca_2, h_i_m_hi_3, h_c_m_ca_3, f_c_m_af_4, f_i_m_hi_3, h_i_m_hi_1, f_i_f_ca_1, h_c_m_hi_4, h_i_f_as_4, h_c_f_hi_3, h_i_m_as_2, f_i_f_hi_1, h_c_m_af_1, f_i_m_hi_1, h_i_f_af_4, f_c_m_as_3, h_i_f_hi_3, f_i_f_as_1, f_c_m_as_2, f_i_m_ca_4, f_c_m_af_1, h_c_f_af_3, f_c_f_af_1, h_i_f_ca_3, f_c_f_hi_1, f_i_f_hi_4, h_i_m_ca_2, h_c_m_af_4, f_c_f_af_3, h_c_f_ca_4, f_i_f_af_3, f_c_f_ca_2, h_c_m_af_3, h_i_f_ca_1, f_i_f_hi_2, h_c_f_ca_3, h_i_m_af_1, f_i_m_ca_3, f_c_f_ca_4, h_i_f_as_2, f_i_f_ca_3, h_c_m_ca_2, f_c_m_hi_2, f_i_m_as_2, f_c_f_hi_2, f_i_m_af_2, h_i_m_ca_4, h_c_f_hi_1, h_i_m_as_3, f_c_m_af_2, f_i_f_hi_3, h_i_f_as_1, f_c_f_hi_3, h_c_m_ca_4, f_c_m_ca_4, f_i_f_af_2, h_c_m_as_2, h_i_m_as_4, f_c_f_ca_1, h_i_m_af_2, f_c_m_hi_1, h_i_f_af_1, h_c_m_as_4, f_i_m_as_3, h_i_m_af_3, h_c_m_hi_3, f_c_f_af_4, h_i_f_hi_4, f_c_m_af_3, f_i_f_ca_2, h_c_f_hi_2, h_i_m_hi_4, h_c_m_af_2];
        break;
    case 3:
        ESSequence = [h_c_f_hi_2, h_i_f_af_2, f_c_f_hi_3, h_c_m_ca_4, h_i_m_af_3, h_c_f_as_1, f_i_m_af_3, f_c_f_hi_1, f_i_m_as_3, h_i_f_as_3, h_c_m_ca_3, f_c_f_ca_1, h_i_m_af_2, f_c_f_af_1, h_i_m_hi_2, f_i_f_hi_1, f_c_m_hi_1, h_i_f_as_2, h_c_f_ca_3, h_i_f_as_4, h_c_m_hi_1, f_i_f_hi_4, h_i_m_ca_3, f_c_f_ca_2, h_i_f_hi_1, h_c_f_hi_4, f_i_m_ca_4, h_c_m_ca_1, f_c_m_ca_2, f_i_f_af_3, h_c_m_as_3, h_i_f_as_1, f_i_m_af_2, h_i_f_hi_2, f_c_m_as_4, h_i_f_hi_4, f_i_m_hi_2, h_i_m_af_1, h_c_m_hi_2, h_i_m_as_4, f_i_m_af_1, f_c_m_as_2, h_c_m_as_4, f_c_f_ca_3, f_i_m_ca_3, h_i_f_ca_2, f_c_f_hi_2, h_i_f_hi_3, h_c_f_as_4, h_i_f_af_4, f_i_m_af_4, h_c_f_hi_1, f_i_f_ca_1, f_c_m_af_4, f_i_f_af_1, h_c_m_af_3, f_c_m_ca_4, f_i_m_as_2, f_c_f_ca_4, f_i_f_ca_3, f_c_m_as_1, h_i_m_af_4, f_i_m_as_1, f_c_m_hi_4, f_i_f_as_4, h_c_m_hi_3, f_c_f_af_4, f_i_m_ca_2, f_c_m_af_1, h_i_m_hi_3, h_c_f_ca_4, h_i_m_ca_4, f_i_f_af_4, h_i_f_af_1, f_c_f_af_3, f_i_f_as_2, f_c_f_as_1, h_i_m_hi_4, f_i_m_hi_3, h_i_m_as_1, h_c_m_as_2, h_i_f_ca_4, f_c_f_af_2, h_c_f_ca_1, f_c_m_hi_2, h_c_f_af_2, f_c_m_af_2, h_i_m_ca_2, f_c_f_as_2, f_i_m_ca_1, h_c_f_as_2, h_i_m_as_3, h_c_f_ca_2, f_i_f_hi_3, h_c_m_hi_4, f_i_f_af_2, h_i_m_as_2, f_c_m_hi_3, h_i_f_af_3, f_c_f_hi_4, f_i_f_ca_2, h_c_m_af_4, h_i_f_ca_3, f_c_f_as_4, f_i_f_ca_4, h_i_f_ca_1, h_c_m_af_1, f_i_m_hi_4, h_c_f_af_4, f_i_f_as_3, h_i_m_hi_1, h_c_f_af_3, f_i_m_as_4, f_c_m_ca_3, f_i_m_hi_1, h_c_m_ca_2, f_c_m_af_3, h_i_m_ca_1, h_c_f_hi_3, f_i_f_hi_2, h_c_f_as_3, f_i_f_as_1, h_c_m_af_2, f_c_m_as_3, h_c_m_as_1, f_c_m_ca_1, h_c_f_af_1, f_c_f_as_3];
        break;
    case 4:
        ESSequence = [f_c_m_as_4, h_c_f_hi_2, f_i_m_af_2, h_c_f_ca_2, f_c_f_hi_2, f_i_f_af_1, h_i_f_ca_4, f_c_m_hi_1, f_i_f_hi_2, h_i_f_af_3, f_c_m_hi_3, h_c_f_hi_3, f_c_f_ca_4, h_c_f_hi_4, f_i_f_ca_2, f_c_f_as_3, f_i_m_as_4, h_i_m_ca_3, f_i_f_hi_4, h_i_m_af_1, f_i_f_ca_1, h_i_f_as_4, f_c_f_af_1, h_c_f_af_2, f_c_f_as_2, h_c_f_ca_3, f_c_m_af_4, f_i_m_af_3, h_c_m_as_2, h_i_m_hi_4, f_i_m_hi_3, h_i_m_af_4, h_c_m_ca_2, f_i_m_ca_3, f_c_f_af_4, h_c_m_hi_4, h_i_m_as_3, f_c_f_hi_4, f_i_f_ca_4, h_i_f_ca_1, f_i_f_as_4, h_i_m_as_2, f_i_m_ca_4, h_i_m_af_2, f_i_m_as_1, h_i_m_hi_3, f_c_f_hi_3, h_i_f_af_4, f_i_f_hi_1, f_c_f_ca_1, h_c_m_hi_1, f_c_f_ca_2, f_i_f_as_2, f_c_m_af_1, h_i_m_as_4, h_c_m_hi_3, f_i_m_hi_2, h_c_m_af_1, f_c_m_ca_1, h_i_m_ca_2, f_c_m_as_3, f_i_f_as_1, h_i_f_as_3, h_c_f_af_3, h_i_f_hi_4, f_c_m_af_3, h_c_f_ca_1, f_c_m_ca_2, f_i_m_hi_4, h_c_m_af_2, f_c_m_hi_2, f_i_m_ca_2, f_c_m_hi_4, h_c_m_as_1, h_i_m_ca_1, f_i_f_af_4, f_c_m_as_2, h_i_m_hi_2, f_c_m_ca_3, h_c_f_as_4, h_i_f_as_1, f_c_f_af_2, h_c_m_af_4, f_i_f_af_2, f_c_m_ca_4, h_i_f_ca_3, h_c_m_ca_3, f_i_m_ca_1, h_c_f_ca_4, f_i_m_as_3, f_c_f_ca_3, h_i_m_af_3, h_c_f_af_1, f_c_m_af_2, h_i_m_as_1, h_c_m_ca_1, h_i_m_hi_1, h_c_f_as_1, h_i_f_as_2, f_i_m_as_2, f_c_f_hi_1, f_i_f_ca_3, h_i_f_af_1, h_c_m_af_3, f_c_f_as_4, h_c_m_ca_4, f_c_f_af_3, h_i_f_hi_2, h_c_f_af_4, h_i_m_ca_4, h_c_f_as_2, f_c_f_as_1, h_c_m_as_3, h_i_f_hi_3, h_c_m_hi_2, f_i_m_hi_1, h_i_f_af_2, f_i_m_af_1, f_c_m_as_1, h_c_f_as_3, f_i_f_af_3, h_i_f_hi_1, f_i_f_as_3, h_c_f_hi_1, h_i_f_ca_2, f_i_f_hi_3, h_c_m_as_4, f_i_m_af_4];
        break;
    case 5:
        ESSequence = [h_i_m_af_2, h_c_f_as_4, h_i_f_as_2, f_i_f_af_4, h_i_f_af_1, h_c_m_af_2, f_i_m_af_4, h_c_m_af_3, f_c_m_as_1, h_i_f_as_3, f_c_m_af_2, h_c_f_as_1, f_c_f_ca_4, h_c_m_hi_1, f_c_m_af_3, h_c_m_hi_3, h_i_f_ca_2, h_c_m_as_1, f_c_m_ca_3, f_i_f_as_1, f_c_f_as_4, h_c_f_as_3, h_i_f_ca_4, h_c_f_af_4, h_i_m_hi_4, f_c_f_hi_3, h_c_m_as_3, f_c_f_as_3, h_i_f_as_4, f_c_m_ca_1, h_c_f_af_1, f_i_m_as_4, f_c_m_af_4, h_i_m_hi_3, h_c_m_ca_1, h_i_m_hi_1, f_i_m_as_3, h_c_f_ca_1, h_i_m_ca_4, h_c_f_ca_2, h_i_m_ca_1, f_c_m_hi_1, h_i_f_ca_1, f_i_m_as_2, h_i_f_hi_4, h_c_f_af_2, h_i_m_ca_2, f_i_f_af_3, h_c_f_hi_3, f_c_m_as_3, f_i_f_af_1, h_c_f_hi_2, h_i_m_as_3, f_i_f_as_2, f_c_f_ca_2, f_i_m_ca_4, h_i_f_hi_1, f_c_m_hi_3, f_i_m_ca_2, f_c_f_af_3, f_i_f_ca_4, h_c_m_hi_2, h_i_f_af_3, f_i_f_as_3, h_i_m_af_4, h_c_m_ca_4, f_i_m_hi_3, h_i_f_ca_3, f_c_f_hi_2, f_i_m_af_1, h_i_f_hi_2, f_i_f_ca_1, h_i_m_af_3, f_c_m_as_2, h_c_m_af_4, f_i_m_hi_4, f_c_m_as_4, h_i_f_af_4, f_c_f_hi_1, f_i_m_hi_2, h_c_m_as_2, h_i_m_af_1, f_c_f_af_4, f_i_m_ca_3, h_c_m_hi_4, f_c_f_af_1, f_i_m_hi_1, f_c_m_hi_4, h_c_m_ca_3, f_i_m_ca_1, h_c_f_ca_4, h_i_f_as_1, h_c_m_as_4, f_c_f_ca_3, h_c_f_hi_4, f_c_f_ca_1, f_i_m_as_1, h_i_f_hi_3, h_c_m_ca_2, f_i_f_hi_4, h_i_f_af_2, h_c_f_af_3, f_i_f_hi_3, f_c_m_ca_2, h_c_f_as_2, f_c_m_ca_4, f_i_f_af_2, h_i_m_hi_2, f_i_m_af_2, h_c_m_af_1, h_i_m_ca_3, f_i_f_as_4, h_c_f_ca_3, f_i_f_hi_1, h_i_m_as_4, f_c_f_af_2, h_i_m_as_2, f_c_m_af_1, f_i_f_ca_2, f_c_f_as_1, h_i_m_as_1, f_c_f_as_2, f_i_m_af_3, f_c_m_hi_2, f_i_f_ca_3, f_c_f_hi_4, h_c_f_hi_1, f_i_f_hi_2];
        break;
    case 6:
        ESSequence = [h_i_f_hi_2, h_c_f_as_3, h_i_f_as_1, f_i_f_as_2, h_c_m_ca_3, f_i_f_hi_1, h_i_f_as_3, h_c_f_hi_1, f_c_f_ca_1, h_c_m_af_2, f_c_f_as_4, f_i_m_hi_2, h_c_m_hi_1, f_c_f_hi_3, h_c_f_hi_2, h_i_f_as_4, f_c_f_af_3, f_i_m_as_4, f_c_f_af_4, h_c_f_as_4, f_i_m_as_2, h_i_f_af_1, f_c_f_as_1, h_i_f_hi_3, f_i_m_hi_1, f_c_f_hi_4, h_c_f_ca_2, f_c_m_hi_1, h_c_f_ca_3, h_i_f_ca_4, h_c_f_as_2, f_c_f_af_1, f_i_f_ca_4, f_c_m_ca_4, f_i_f_hi_2, h_c_f_af_3, f_c_m_as_1, h_i_f_ca_3, f_c_m_as_4, f_i_f_hi_4, h_c_f_hi_3, h_i_f_af_2, h_c_m_ca_2, h_i_f_ca_2, f_c_f_af_2, h_i_m_af_1, f_i_f_af_2, f_c_m_ca_3, f_i_f_as_4, h_i_m_hi_3, h_c_m_af_3, f_c_m_hi_3, f_i_m_as_3, h_i_m_hi_1, h_c_f_ca_1, f_c_m_as_2, h_i_m_as_1, f_c_m_af_4, h_c_m_hi_3, h_i_m_hi_4, f_i_f_as_1, h_c_m_af_4, h_i_f_hi_4, f_i_f_af_3, h_i_f_ca_1, f_i_m_af_4, h_i_f_hi_1, f_c_m_ca_2, h_i_m_as_3, f_i_f_ca_3, f_c_m_hi_4, h_c_m_af_1, h_i_m_af_2, f_c_f_ca_4, h_c_f_hi_4, f_i_f_af_1, h_c_m_as_3, h_i_m_ca_1, f_i_m_hi_4, h_i_m_ca_4, f_i_m_ca_2, h_c_m_hi_2, f_c_f_ca_3, f_i_m_hi_3, h_c_m_as_1, h_i_f_af_3, h_c_m_as_4, f_c_f_as_3, f_i_m_as_1, h_i_m_as_2, f_c_f_as_2, h_i_m_as_4, f_i_m_af_3, h_c_m_ca_4, h_i_m_af_4, f_i_m_af_2, h_i_m_hi_2, f_c_m_af_1, h_c_f_ca_4, f_i_f_ca_2, h_c_m_ca_1, f_c_m_af_3, f_i_f_ca_1, h_c_f_af_4, f_i_m_af_1, f_c_f_hi_1, f_i_f_as_3, f_c_m_hi_2, f_i_m_ca_1, h_i_f_as_2, f_c_f_hi_2, h_c_f_as_1, h_i_f_af_4, f_c_f_ca_2, f_i_m_ca_4, h_c_m_hi_4, h_i_m_af_3, f_c_m_af_2, f_i_m_ca_3, h_c_m_as_2, f_c_m_as_3, f_i_f_af_4, f_c_m_ca_1, f_i_f_hi_3, h_i_m_ca_2, h_c_f_af_1, h_i_m_ca_3, h_c_f_af_2];
        break;
    case 7:
        ESSequence = [h_c_f_hi_2, h_i_m_af_3, f_c_m_ca_1, f_i_m_af_1, h_i_f_ca_1, h_c_m_af_2, f_i_m_hi_3, h_c_m_af_4, f_c_m_as_3, h_i_m_hi_3, h_c_f_af_4, f_c_m_af_2, h_i_f_as_1, f_c_m_as_1, h_i_m_as_2, f_i_m_hi_2, h_c_m_ca_4, h_i_f_as_4, h_c_f_ca_4, f_i_f_hi_3, h_i_f_as_3, f_c_m_ca_3, f_i_m_af_3, h_c_m_af_1, f_c_f_ca_2, f_i_f_ca_3, h_i_m_ca_3, f_c_f_hi_4, h_c_m_as_3, f_c_f_hi_2, f_i_m_as_3, h_c_f_as_2, h_i_m_hi_1, h_c_m_as_2, f_i_f_af_3, h_i_m_af_2, h_c_m_ca_1, h_i_m_af_4, f_i_m_hi_1, h_i_f_as_2, h_c_f_af_1, h_i_f_hi_2, h_c_f_ca_1, h_i_f_hi_4, f_c_f_hi_3, f_i_f_as_3, h_c_m_as_1, f_i_f_ca_4, h_i_m_as_4, h_c_f_ca_2, h_i_m_ca_2, h_c_f_hi_1, h_i_m_hi_4, f_i_m_ca_3, f_c_f_as_3, h_i_f_ca_2, f_c_f_af_3, h_i_m_as_1, h_c_f_hi_3, f_c_f_ca_4, f_i_f_as_4, f_c_m_as_2, f_i_f_hi_4, f_c_m_ca_4, f_i_f_ca_1, h_c_m_hi_3, f_c_f_as_1, f_i_m_ca_1, h_i_f_hi_3, f_c_f_af_1, h_i_m_ca_4, f_c_m_hi_4, f_i_f_af_1, h_c_f_af_2, f_i_m_af_4, h_i_f_af_4, f_c_f_as_2, f_i_f_af_2, f_c_m_af_1, f_i_m_hi_4, h_c_m_ca_3, f_c_m_as_4, h_i_f_hi_1, f_i_m_af_2, f_c_m_hi_1, f_i_m_ca_4, f_c_f_ca_3, h_i_f_af_3, h_c_f_hi_4, h_i_f_ca_3, f_i_f_af_4, h_c_f_as_3, h_i_m_hi_2, f_c_f_af_2, h_c_m_af_3, f_i_f_as_1, f_c_m_ca_2, h_c_f_as_4, f_i_m_as_1, h_i_m_af_1, f_c_f_as_4, h_c_f_as_1, h_i_m_ca_1, f_i_m_as_4, h_c_m_ca_2, h_i_f_ca_4, f_i_m_as_2, h_c_f_af_3, f_i_f_hi_1, f_c_m_hi_3, f_i_f_as_2, f_c_f_hi_1, h_i_f_af_2, f_i_f_hi_2, f_c_m_hi_2, h_i_m_as_3, f_i_m_ca_2, h_c_m_as_4, f_c_f_ca_1, h_c_f_ca_3, f_c_f_af_4, h_i_f_af_1, f_c_m_af_4, h_c_m_hi_4, f_i_f_ca_2, h_c_m_hi_1, f_c_m_af_3, h_c_m_hi_2];
        break;
    case 8:
        ESSequence = [f_i_f_ca_4, f_c_f_ca_2, f_i_f_hi_3, f_c_m_hi_4, h_c_f_hi_1, h_i_m_hi_1, h_c_m_hi_4, h_i_m_hi_3, f_i_f_hi_1, h_c_f_af_3, f_i_f_af_1, h_c_f_hi_4, h_i_m_ca_2, f_i_f_ca_2, h_c_m_af_2, h_i_m_as_3, f_i_m_ca_4, h_c_m_ca_3, f_c_f_af_1, h_c_f_ca_4, f_c_m_as_2, h_c_m_ca_2, f_i_f_as_2, f_c_f_hi_1, f_i_f_as_3, f_c_m_af_1, h_i_m_ca_4, f_c_f_ca_1, h_i_f_hi_4, f_i_m_hi_2, h_i_m_af_1, f_i_f_af_3, h_i_m_as_1, f_i_m_af_2, h_c_f_ca_3, f_c_m_hi_1, f_i_m_ca_1, f_c_m_hi_3, f_i_f_hi_2, h_i_m_hi_4, h_c_f_hi_3, h_i_f_af_1, f_i_f_ca_3, f_c_f_as_1, h_i_f_ca_4, f_i_m_ca_2, h_i_f_as_4, h_c_m_hi_1, f_i_m_af_4, h_i_m_as_4, f_c_m_af_4, h_i_f_af_2, f_i_m_as_2, h_i_m_hi_2, f_c_f_as_4, h_i_f_ca_2, f_i_m_hi_4, h_c_m_as_2, f_i_f_as_4, h_c_m_af_1, f_i_m_ca_3, f_c_f_af_3, f_i_m_hi_3, h_i_f_as_2, f_i_m_as_4, h_i_f_as_3, f_i_m_hi_1, h_c_m_as_3, f_i_f_hi_4, h_c_m_ca_1, f_c_f_af_2, h_i_f_af_4, h_c_f_af_1, f_c_f_hi_4, h_c_m_hi_3, f_i_f_af_2, f_c_f_af_4, h_i_f_af_3, h_c_f_ca_2, f_c_f_hi_2, h_i_f_hi_3, h_c_m_hi_2, f_c_f_hi_3, h_c_f_as_2, h_i_m_as_2, h_c_m_as_1, f_c_m_af_2, f_i_m_as_1, h_i_m_ca_1, f_c_f_as_2, h_i_m_af_4, f_i_f_ca_1, h_c_f_af_4, h_i_m_af_2, f_i_f_as_1, f_c_m_as_1, f_i_m_af_1, h_c_f_af_2, h_i_f_ca_3, h_c_m_as_4, f_i_f_af_4, h_c_f_ca_1, f_c_m_ca_3, h_c_m_af_3, h_i_f_ca_1, h_c_f_hi_2, f_c_m_ca_4, f_i_m_as_3, h_c_m_af_4, f_c_f_ca_4, h_i_m_ca_3, f_c_m_hi_2, h_i_m_af_3, f_c_m_ca_1, h_c_f_as_1, f_c_m_as_3, h_c_m_ca_4, f_c_f_ca_3, h_i_f_hi_1, f_c_m_ca_2, f_i_m_af_3, h_c_f_as_3, h_i_f_hi_2, f_c_m_af_3, h_i_f_as_1, f_c_f_as_3, h_c_f_as_4, f_c_m_as_4];
        break;
    default:
        alert("ERROR: Could not determine ESSequence! Please pick a ESSequence between 1-8 and try again.");
}


switch(SEQUENCE_NUMBER_CONTROL){
    case 1:
        controlSequence = [h_i_fe_ca_4,f_c_ma_af_3,h_i_ma_hi_4,f_i_ma_ca_2,f_c_fe_ca_4,h_i_fe_as_1,f_c_fe_af_2,f_i_fe_hi_2,h_i_fe_hi_3,h_c_fe_af_2,f_c_ma_af_1,h_i_ma_ca_2,f_c_ma_af_2,h_c_fe_hi_2,f_i_ma_ca_4,h_i_fe_ca_1,h_c_fe_hi_4,f_i_fe_ca_3,h_c_fe_af_1,f_c_ma_hi_1,h_c_ma_af_3,h_i_fe_hi_4,f_i_fe_af_4,f_c_fe_af_1,h_i_ma_hi_2,h_c_fe_as_2,f_i_fe_as_3,h_i_ma_ca_1,h_c_ma_af_2,h_i_fe_hi_1,h_c_ma_ca_4,f_i_ma_hi_1,f_c_fe_hi_2,h_c_ma_hi_3,h_i_fe_as_4,f_c_ma_ca_3,h_c_fe_as_4,f_c_fe_as_2,h_i_ma_hi_3,f_i_ma_hi_4,h_c_ma_ca_1,f_i_ma_hi_3,h_c_ma_as_2,h_i_ma_af_2,f_i_fe_ca_2,f_c_ma_hi_4,f_i_ma_af_1,h_c_ma_as_1,h_i_fe_as_3,f_i_ma_as_4,f_c_ma_as_3,f_i_fe_af_1,h_c_ma_hi_4,f_c_fe_as_1,f_i_ma_af_3,h_c_fe_af_3,f_c_ma_as_2,h_c_ma_as_3,f_c_fe_as_4,h_i_fe_hi_2,f_i_ma_hi_2,h_c_fe_ca_4,f_i_fe_af_3,f_c_ma_as_1,h_c_ma_hi_1,f_c_ma_as_4,f_i_ma_ca_1,f_c_fe_af_3,h_i_fe_as_2,f_c_ma_ca_4,f_i_fe_as_2,h_i_ma_af_4,f_c_fe_hi_3,f_i_ma_ca_3,h_c_ma_af_4,h_i_ma_hi_1,f_i_ma_af_2,h_c_fe_hi_1,h_i_ma_ca_3,f_c_ma_ca_1,h_i_fe_af_2,h_c_fe_af_4,h_i_fe_af_3,f_i_fe_hi_1,h_c_fe_ca_1,f_c_fe_af_4,h_c_fe_ca_2,f_i_fe_as_1,f_c_fe_as_3,f_i_fe_hi_4,f_c_ma_af_4,h_c_ma_ca_3,h_i_ma_as_4,f_c_fe_ca_1,h_c_fe_ca_3,f_i_fe_ca_1,f_c_ma_ca_2,h_i_ma_af_1,f_i_ma_as_2,h_c_ma_hi_2,h_i_fe_af_4,h_c_fe_as_1,f_c_fe_hi_4,h_c_ma_af_1,f_i_fe_hi_3,h_i_ma_as_3,f_i_fe_af_2,f_c_fe_ca_2,h_i_ma_ca_4,f_i_ma_as_1,h_i_ma_as_2,h_c_fe_hi_3,f_c_fe_ca_3,h_i_ma_af_3,f_i_fe_ca_4,f_c_ma_hi_3,f_i_ma_as_3,h_i_fe_af_1,h_c_ma_as_4,f_i_fe_as_4,h_i_fe_ca_3,f_c_ma_hi_2,h_i_fe_ca_2,h_c_fe_as_3,f_i_ma_af_4,h_i_ma_as_1,f_c_fe_hi_1,h_c_ma_ca_2];
        break;
    case 2:
        controlSequence = [h_c_ma_ca_4,f_c_ma_as_2,h_c_fe_hi_1,f_i_ma_as_1,h_c_fe_as_2,h_i_ma_as_1,f_c_fe_af_2,h_c_ma_as_4,h_i_fe_af_4,f_i_fe_as_4,f_c_ma_as_4,h_c_ma_af_1,h_i_ma_as_3,f_i_fe_af_2,h_i_ma_ca_4,h_c_ma_as_3,f_c_fe_hi_1,h_c_fe_hi_2,f_i_fe_as_2,h_i_fe_af_1,h_c_ma_af_2,f_c_fe_as_2,h_i_fe_ca_4,f_i_ma_ca_4,f_c_fe_as_1,h_i_fe_hi_3,h_c_fe_ca_2,f_i_fe_ca_1,h_i_fe_as_3,f_i_ma_as_2,f_c_ma_hi_3,f_i_fe_hi_4,f_c_fe_af_1,f_i_ma_ca_3,f_c_ma_af_2,h_i_ma_ca_1,h_c_fe_hi_3,h_i_fe_hi_2,h_c_fe_af_3,f_i_ma_ca_2,h_c_ma_ca_1,f_c_ma_as_3,h_i_fe_as_1,h_c_ma_hi_3,h_i_fe_ca_2,f_c_ma_as_1,f_i_ma_hi_3,h_i_fe_af_2,f_c_fe_ca_3,f_i_fe_ca_2,h_c_fe_af_4,h_i_ma_af_1,f_c_ma_hi_4,f_i_fe_af_4,f_c_ma_af_4,h_c_ma_as_2,f_i_fe_af_1,h_i_fe_af_3,h_c_fe_af_2,h_i_ma_as_4,f_i_ma_as_3,f_c_fe_as_3,f_i_fe_hi_1,f_c_ma_ca_2,f_i_ma_hi_1,h_c_fe_ca_3,h_i_ma_hi_3,f_i_ma_hi_2,h_c_ma_hi_4,f_c_fe_af_3,h_i_ma_ca_3,h_c_ma_af_3,f_i_ma_hi_4,h_i_ma_hi_1,f_c_fe_hi_3,h_c_fe_as_1,h_i_ma_as_2,h_c_fe_hi_4,f_i_fe_as_3,h_i_ma_af_4,f_i_fe_hi_2,f_c_fe_as_4,f_i_ma_af_4,h_i_fe_ca_3,f_c_ma_hi_1,f_i_ma_af_2,h_i_fe_as_4,h_c_ma_ca_3,f_c_fe_ca_2,f_i_fe_hi_3,h_c_fe_ca_4,f_i_ma_ca_1,f_c_fe_ca_1,h_i_ma_af_2,f_c_fe_ca_4,h_i_fe_hi_1,h_c_ma_hi_2,h_i_ma_ca_2,f_c_fe_hi_2,f_i_ma_as_4,h_i_fe_as_2,h_c_fe_af_1,h_i_fe_ca_1,f_c_ma_hi_2,f_i_ma_af_3,h_c_ma_ca_2,h_i_fe_hi_4,f_c_ma_af_1,h_c_ma_af_4,f_i_ma_af_1,f_c_ma_af_3,f_i_fe_as_1,h_c_fe_ca_1,h_i_ma_af_3,f_c_ma_ca_4,f_i_fe_af_3,h_c_fe_as_4,f_c_fe_af_4,f_i_fe_ca_4,f_c_fe_hi_4,h_c_ma_hi_1,f_c_ma_ca_1,f_i_fe_ca_3,h_i_ma_hi_2,f_c_ma_ca_3,h_c_ma_as_1,h_i_ma_hi_4,h_c_fe_as_3];
        break;
    case 3:
        controlSequence = [h_c_ma_hi_2,f_c_ma_hi_1,h_c_ma_hi_3,h_i_fe_hi_2,h_c_fe_hi_1,h_i_ma_ca_2,f_i_ma_ca_3,h_i_fe_as_3,h_c_ma_ca_4,h_i_ma_af_1,f_i_fe_as_2,h_i_ma_hi_2,h_c_ma_af_4,f_i_ma_af_1,h_c_ma_as_4,f_c_ma_as_2,h_i_fe_hi_4,h_c_fe_as_1,h_i_fe_af_3,h_c_ma_hi_4,f_c_fe_ca_4,h_i_ma_ca_4,f_i_fe_ca_1,h_c_ma_af_2,f_i_ma_hi_1,f_c_ma_hi_4,h_c_fe_af_4,f_c_fe_af_3,h_i_fe_as_4,h_c_fe_ca_2,f_c_ma_hi_2,h_c_fe_hi_4,f_i_ma_as_4,h_i_fe_hi_1,f_i_ma_af_2,h_c_ma_af_3,h_i_ma_ca_3,f_c_fe_ca_1,h_i_ma_ca_1,h_c_ma_hi_1,f_i_ma_as_1,h_i_fe_ca_3,f_i_ma_ca_2,h_i_ma_hi_4,f_c_fe_af_2,h_i_ma_af_3,h_c_ma_as_2,f_c_fe_as_3,f_i_fe_ca_2,f_c_fe_ca_3,h_c_ma_af_1,f_i_fe_hi_2,h_i_fe_as_1,h_c_ma_ca_2,f_c_fe_hi_2,h_i_ma_as_3,f_c_ma_af_4,f_i_fe_hi_1,f_c_ma_hi_3,f_i_fe_af_3,h_i_fe_hi_3,h_c_fe_as_3,f_i_fe_as_4,f_c_ma_af_2,h_i_ma_af_4,f_i_ma_as_3,h_i_fe_ca_2,f_c_ma_af_1,h_c_fe_af_3,f_c_fe_as_2,h_c_fe_hi_3,f_i_ma_ca_4,f_c_fe_as_1,f_i_ma_hi_3,h_i_fe_ca_4,f_c_ma_ca_4,h_c_fe_as_2,h_i_ma_hi_3,f_i_fe_ca_4,h_c_ma_ca_1,f_c_ma_ca_2,f_i_fe_af_4,h_i_ma_as_2,h_c_fe_as_4,f_i_fe_af_2,f_c_ma_as_4,h_i_fe_as_2,h_c_fe_ca_4,h_i_fe_af_2,f_i_fe_hi_4,h_c_fe_af_2,f_i_ma_af_3,h_i_ma_hi_1,f_c_fe_hi_1,f_i_ma_hi_2,f_c_ma_af_3,f_i_fe_as_3,f_c_fe_af_1,h_c_fe_ca_1,h_i_ma_af_2,f_c_fe_hi_4,h_i_ma_as_1,f_c_fe_ca_2,h_i_fe_ca_1,f_i_ma_ca_1,h_c_fe_ca_3,f_i_fe_hi_3,h_c_ma_ca_3,f_i_fe_af_1,h_i_fe_af_4,f_i_fe_as_1,f_c_fe_af_4,f_i_ma_af_4,f_c_ma_as_1,h_i_fe_af_1,f_c_ma_ca_1,f_i_ma_as_2,h_c_fe_hi_2,f_c_ma_as_3,f_i_fe_ca_3,f_c_ma_ca_3,f_i_ma_hi_4,f_c_fe_as_4,h_c_ma_as_1,f_c_fe_hi_3,h_c_ma_as_3,h_i_ma_as_4,h_c_fe_af_1];
        break;
    case 4:
        controlSequence = [h_i_fe_ca_2,f_i_fe_af_1,f_c_ma_hi_1,f_i_fe_as_1,f_c_fe_as_4,f_i_ma_ca_3,h_c_fe_af_1,h_i_fe_hi_4,f_i_fe_ca_1,h_c_ma_as_2,h_i_ma_ca_4,f_i_ma_as_3,h_i_ma_hi_1,f_c_ma_hi_4,h_c_fe_ca_3,f_i_ma_as_4,h_i_fe_as_4,f_c_fe_af_4,h_c_ma_hi_3,f_i_ma_ca_1,h_c_fe_ca_1,f_c_fe_hi_2,h_i_ma_as_4,f_i_ma_ca_2,h_c_fe_as_3,f_c_fe_af_1,h_c_fe_af_4,h_i_ma_as_3,f_i_ma_hi_1,f_c_fe_ca_4,h_c_fe_ca_2,f_c_ma_as_3,h_c_ma_ca_4,f_i_fe_hi_1,f_c_ma_as_1,f_i_ma_af_3,f_c_fe_hi_3,f_i_ma_hi_4,f_c_fe_ca_1,f_i_ma_af_4,h_i_fe_as_1,f_c_fe_ca_3,h_c_fe_as_1,h_i_ma_ca_1,h_c_fe_hi_4,f_c_fe_hi_1,f_i_fe_af_2,h_c_fe_hi_2,f_i_fe_as_4,h_c_fe_ca_4,f_i_ma_ca_4,h_c_fe_as_4,h_i_ma_af_3,f_c_ma_ca_4,h_i_fe_hi_3,h_c_ma_af_2,h_i_ma_af_4,f_i_fe_ca_3,f_c_ma_ca_1,h_c_ma_ca_2,f_c_fe_ca_2,h_c_ma_as_3,f_c_fe_af_3,h_c_ma_ca_3,f_i_fe_as_2,f_c_ma_as_2,f_i_ma_as_1,h_i_fe_af_2,f_i_fe_hi_2,h_i_ma_af_2,f_i_ma_as_2,h_i_fe_af_3,f_c_ma_ca_3,h_c_fe_hi_3,f_i_ma_af_1,h_c_ma_hi_2,h_i_fe_af_1,f_c_fe_as_3,f_i_fe_ca_2,f_c_ma_hi_3,h_i_ma_as_2,f_i_fe_af_3,h_c_ma_af_1,h_i_ma_ca_2,h_c_ma_as_4,f_i_ma_af_2,h_i_fe_ca_1,h_c_fe_af_2,h_i_fe_as_3,f_i_fe_hi_3,h_i_ma_hi_4,f_c_ma_af_4,h_c_fe_af_3,f_c_ma_hi_2,h_i_fe_af_4,f_c_fe_as_1,h_i_ma_ca_3,h_c_ma_hi_1,f_i_fe_af_4,h_i_fe_as_2,h_c_ma_af_3,h_i_ma_hi_3,f_c_fe_hi_4,h_i_fe_ca_4,f_c_ma_ca_2,h_i_ma_af_1,f_i_ma_hi_3,f_c_ma_as_4,h_i_fe_hi_2,f_c_fe_af_2,h_c_fe_hi_1,f_c_ma_af_1,h_c_ma_hi_4,h_i_fe_hi_1,f_i_fe_hi_4,h_i_fe_ca_3,h_c_ma_as_1,h_i_ma_hi_2,f_c_ma_af_2,f_i_fe_ca_4,h_c_ma_af_4,h_i_ma_as_1,h_c_ma_ca_1,f_c_ma_af_3,f_i_ma_hi_2,f_c_fe_as_2,f_i_fe_as_3,h_c_fe_as_2];
        break;
    case 5:
        controlSequence = [h_c_fe_ca_3,f_c_ma_ca_4,h_c_ma_as_3,f_c_ma_ca_1,h_i_fe_hi_1,f_i_ma_hi_3,h_c_ma_af_1,h_i_ma_as_1,f_c_fe_af_4,h_i_fe_as_3,f_i_ma_ca_3,h_i_fe_ca_1,f_i_fe_as_2,f_c_ma_hi_2,h_i_ma_af_2,h_c_ma_as_2,f_c_fe_af_2,f_i_fe_af_4,h_c_ma_hi_2,f_i_fe_hi_4,h_i_ma_af_4,f_c_ma_as_2,f_i_ma_af_3,f_c_fe_as_2,h_c_fe_as_4,h_i_fe_af_3,h_c_ma_hi_4,h_i_ma_af_1,f_c_fe_as_4,f_i_fe_as_3,f_c_fe_af_3,f_i_fe_hi_1,f_c_ma_hi_4,h_c_ma_ca_3,f_i_ma_hi_4,h_i_fe_ca_2,h_c_fe_af_3,f_c_fe_hi_2,h_c_fe_ca_1,f_i_fe_ca_3,h_c_ma_as_1,h_i_ma_ca_1,f_i_ma_as_2,f_c_ma_af_3,f_i_fe_as_1,f_c_fe_hi_3,f_i_ma_hi_1,h_i_fe_hi_4,h_c_fe_hi_3,f_c_ma_hi_3,h_c_fe_hi_4,h_i_fe_hi_3,h_c_ma_ca_1,h_i_ma_hi_2,f_i_fe_af_3,h_c_fe_as_3,h_i_fe_ca_3,h_c_ma_hi_3,h_i_ma_ca_4,f_c_fe_ca_3,f_i_ma_hi_2,h_i_fe_af_1,h_c_fe_hi_2,f_i_fe_ca_1,f_c_fe_ca_4,h_i_ma_hi_4,f_i_ma_af_2,h_c_fe_af_4,f_c_ma_ca_3,h_i_ma_hi_3,f_c_ma_af_4,h_i_ma_as_2,h_c_ma_af_3,h_i_ma_ca_2,f_c_ma_af_1,h_i_fe_af_2,f_c_fe_as_3,h_c_ma_af_2,h_i_fe_as_4,f_i_ma_ca_4,f_c_ma_as_3,h_i_ma_af_3,f_i_fe_hi_3,f_c_fe_hi_1,h_i_ma_hi_1,f_i_fe_af_1,f_c_fe_ca_2,h_i_fe_as_1,f_i_ma_af_4,f_c_fe_ca_1,h_c_ma_as_4,h_i_fe_af_4,f_c_ma_ca_2,f_i_ma_as_3,h_c_fe_ca_4,f_c_ma_af_2,f_i_fe_hi_2,f_c_fe_af_1,h_c_ma_ca_4,f_i_fe_ca_4,f_c_fe_hi_4,h_i_ma_as_4,h_c_fe_as_2,f_i_ma_ca_2,h_i_ma_as_3,f_c_ma_as_4,h_i_fe_as_2,h_c_ma_af_4,f_i_ma_as_4,f_c_ma_hi_1,h_i_fe_ca_4,h_c_fe_ca_2,f_i_ma_ca_1,f_c_fe_as_1,h_c_ma_ca_2,h_i_ma_ca_3,h_c_fe_af_2,f_i_ma_af_1,f_c_ma_as_1,h_c_fe_as_1,f_i_fe_af_2,h_c_fe_af_1,f_i_fe_as_4,h_c_fe_hi_1,f_i_ma_as_1,h_c_ma_hi_1,f_i_fe_ca_2,h_i_fe_hi_2];
        break;
    case 6:
        controlSequence = [f_c_fe_ca_1,f_i_fe_af_3,h_c_fe_as_3,h_i_ma_hi_2,f_i_fe_ca_4,h_c_ma_af_2,f_i_ma_ca_4,h_c_fe_hi_3,f_i_fe_ca_3,h_i_ma_ca_1,h_c_fe_ca_3,f_c_fe_ca_4,h_i_ma_ca_4,f_c_fe_hi_1,h_i_ma_af_1,f_i_ma_af_3,h_c_ma_as_2,f_i_fe_as_3,h_i_ma_ca_3,h_c_fe_ca_1,f_c_ma_hi_1,h_i_ma_as_1,f_c_fe_as_1,h_c_ma_as_1,h_i_fe_af_2,h_c_fe_hi_4,h_i_fe_af_3,f_i_ma_ca_1,f_c_ma_ca_2,f_i_fe_as_4,f_c_fe_as_3,h_c_ma_hi_2,f_c_fe_af_1,h_i_fe_ca_3,h_c_ma_ca_4,h_i_ma_af_2,f_c_fe_af_2,h_i_ma_hi_3,f_i_ma_as_2,h_c_ma_af_1,h_i_fe_af_4,f_i_fe_hi_1,h_i_fe_hi_3,f_c_ma_hi_2,h_c_ma_as_3,f_c_ma_af_1,h_c_ma_hi_3,f_i_ma_af_1,f_c_fe_ca_2,h_i_fe_ca_4,f_c_fe_hi_2,f_i_fe_as_2,h_i_ma_as_3,f_i_ma_as_4,h_c_fe_as_4,f_c_fe_hi_4,h_c_fe_af_4,h_i_fe_as_4,f_i_fe_ca_2,f_c_ma_af_4,h_c_ma_as_4,f_i_fe_as_1,f_c_fe_as_2,h_c_fe_af_2,f_i_fe_hi_3,h_c_ma_ca_1,f_i_fe_hi_4,h_i_ma_as_2,h_c_ma_af_4,h_i_fe_af_1,h_c_fe_hi_2,f_i_ma_hi_2,h_c_ma_af_3,f_i_fe_af_4,f_c_fe_af_3,h_c_ma_ca_3,f_c_fe_hi_3,f_i_ma_hi_1,h_i_fe_ca_1,f_c_fe_af_4,h_c_fe_ca_2,f_c_fe_as_4,h_c_fe_af_3,f_i_ma_ca_3,h_i_fe_hi_1,h_c_ma_hi_1,f_i_fe_hi_2,f_c_ma_ca_1,f_i_ma_as_1,h_i_fe_as_2,f_c_fe_ca_3,f_i_ma_af_4,h_c_fe_ca_4,h_i_ma_af_4,f_i_ma_ca_2,f_c_ma_as_3,h_i_ma_as_4,f_c_ma_ca_4,h_c_fe_hi_1,f_i_fe_af_2,h_c_fe_af_1,f_c_ma_hi_4,h_c_fe_as_1,f_c_ma_ca_3,f_i_ma_as_3,f_c_ma_af_3,f_i_ma_hi_3,h_i_fe_as_1,h_c_fe_as_2,f_i_fe_ca_1,f_c_ma_as_1,h_c_ma_ca_2,f_c_ma_hi_3,h_i_ma_hi_4,f_c_ma_af_2,h_i_ma_ca_2,f_i_ma_af_2,h_i_fe_ca_2,f_c_ma_as_2,h_i_fe_as_3,f_c_ma_as_4,h_i_ma_af_3,f_i_fe_af_1,h_i_fe_hi_2,h_c_ma_hi_4,h_i_ma_hi_1,f_i_ma_hi_4,h_i_fe_hi_4];
        break;
    case 7:
        controlSequence = [h_c_ma_af_3,h_i_fe_af_2,f_c_fe_ca_2,h_i_fe_ca_1,f_c_ma_ca_3,h_i_ma_as_4,h_c_ma_hi_2,f_c_fe_hi_2,f_i_ma_af_3,f_c_fe_as_1,h_c_fe_as_3,h_i_fe_hi_4,f_c_fe_af_3,h_i_ma_as_3,h_c_fe_ca_2,f_c_fe_ca_4,f_i_fe_as_2,h_i_fe_as_3,h_c_ma_as_3,f_c_ma_hi_1,h_c_ma_as_4,f_c_ma_as_2,f_i_fe_af_4,h_i_ma_as_2,f_i_fe_hi_1,h_i_ma_hi_3,f_c_fe_hi_4,h_c_ma_hi_1,f_i_ma_ca_2,f_c_ma_hi_4,h_i_fe_hi_1,h_c_fe_hi_3,f_i_ma_ca_4,h_i_fe_af_3,f_c_fe_as_4,f_i_fe_af_2,h_c_ma_as_1,f_i_ma_as_4,h_i_fe_hi_2,f_i_fe_ca_4,h_i_ma_ca_1,h_c_fe_af_2,h_i_ma_af_3,f_c_ma_as_4,h_c_fe_hi_2,f_i_ma_af_1,h_i_ma_as_1,f_i_ma_hi_4,h_c_fe_ca_4,f_i_fe_ca_2,h_i_fe_as_4,h_c_fe_as_1,f_c_ma_af_4,f_i_ma_ca_3,h_i_fe_af_4,h_c_ma_ca_4,h_i_fe_ca_2,h_c_ma_ca_1,f_c_ma_as_3,f_i_ma_hi_1,f_c_fe_hi_1,f_i_ma_as_3,h_i_ma_hi_2,f_i_fe_ca_3,f_c_fe_as_3,h_i_fe_hi_3,f_c_fe_ca_3,f_i_fe_af_1,f_c_ma_ca_2,h_c_fe_as_2,f_c_fe_ca_1,f_i_ma_as_2,h_c_fe_ca_3,f_i_fe_hi_4,f_c_ma_ca_4,h_c_fe_af_4,f_i_fe_as_3,h_c_ma_hi_4,f_i_fe_ca_1,h_c_fe_hi_4,f_i_fe_as_4,h_i_ma_af_2,f_i_ma_ca_1,h_c_fe_af_1,f_c_ma_hi_2,h_c_fe_as_4,f_c_fe_af_1,h_i_ma_af_4,h_c_ma_hi_3,f_i_ma_as_1,f_c_ma_af_1,h_c_ma_ca_2,h_i_ma_af_1,f_c_fe_af_4,h_i_ma_hi_4,f_i_ma_hi_2,h_i_ma_ca_2,h_c_ma_af_2,f_c_fe_as_2,h_i_ma_ca_4,h_c_fe_af_3,f_c_ma_af_2,h_c_ma_as_2,f_i_fe_hi_2,f_c_ma_as_1,h_i_fe_af_1,f_c_ma_ca_1,h_i_ma_hi_1,f_i_ma_hi_3,f_c_fe_hi_3,h_i_ma_ca_3,h_c_ma_af_4,f_c_ma_hi_3,h_c_ma_af_1,f_c_fe_af_2,h_i_fe_ca_4,f_c_ma_af_3,f_i_ma_af_2,h_i_fe_as_1,h_c_ma_ca_3,f_i_ma_af_4,h_i_fe_as_2,f_i_fe_af_3,h_c_fe_ca_1,f_i_fe_hi_3,h_c_fe_hi_1,f_i_fe_as_1,h_i_fe_ca_3];
        break;
    case 8:
        controlSequence = [h_i_ma_af_2,h_c_fe_hi_2,f_i_fe_af_2,h_i_fe_as_3,f_i_fe_af_1,f_c_ma_as_1,f_i_ma_af_3,f_c_fe_as_2,h_c_fe_af_2,f_c_fe_af_4,f_i_fe_hi_4,h_c_ma_ca_2,f_i_fe_ca_3,f_c_fe_as_3,h_i_fe_hi_2,f_c_ma_hi_4,h_i_ma_af_4,f_i_fe_af_4,f_c_ma_af_1,h_i_ma_hi_1,h_c_ma_af_2,h_i_ma_as_2,f_i_fe_ca_4,h_i_ma_as_1,f_c_ma_ca_3,h_c_ma_as_1,h_i_ma_hi_3,f_i_fe_as_1,h_i_ma_as_3,f_i_ma_ca_4,f_c_fe_hi_4,f_i_ma_ca_2,f_c_fe_af_1,h_i_fe_af_2,h_c_fe_as_4,f_i_ma_ca_1,h_c_ma_hi_1,h_i_fe_as_4,h_c_fe_hi_4,f_i_fe_hi_2,f_c_ma_ca_4,h_c_ma_ca_3,f_c_fe_hi_2,h_c_ma_hi_2,f_i_ma_hi_4,h_c_fe_ca_2,f_c_fe_ca_1,f_i_ma_af_2,h_c_fe_as_2,f_i_ma_af_4,h_c_ma_as_4,f_c_ma_hi_3,h_i_ma_as_4,f_i_fe_as_2,h_c_ma_af_4,f_i_ma_hi_3,h_i_fe_hi_1,f_i_ma_as_1,f_c_fe_ca_2,h_i_fe_hi_4,f_c_ma_as_4,h_i_ma_ca_3,h_c_fe_ca_4,h_i_fe_ca_1,h_c_fe_af_1,f_c_ma_hi_1,h_c_ma_hi_4,h_i_fe_af_4,h_c_ma_ca_1,f_c_fe_af_3,h_c_fe_ca_1,f_i_ma_as_3,h_c_ma_af_3,f_c_ma_af_2,h_i_fe_as_1,f_i_fe_as_4,h_i_fe_as_2,f_c_ma_af_4,f_i_fe_ca_1,f_c_fe_as_4,h_i_ma_af_1,h_c_fe_hi_3,h_i_ma_ca_1,f_c_fe_hi_1,h_i_fe_ca_3,f_c_ma_af_3,f_i_fe_hi_3,f_c_ma_as_2,h_c_ma_as_3,f_i_fe_ca_2,h_c_fe_as_3,h_i_fe_ca_4,f_c_ma_ca_2,f_i_ma_as_4,h_c_ma_af_1,f_c_fe_af_2,h_c_fe_hi_1,f_i_ma_ca_3,f_c_fe_ca_3,h_i_fe_ca_2,h_c_fe_ca_3,h_i_fe_af_3,h_c_ma_ca_4,f_c_ma_ca_1,h_c_fe_af_3,f_i_fe_as_3,f_c_fe_hi_3,f_i_ma_hi_1,f_c_ma_as_3,h_i_ma_ca_2,h_c_fe_af_4,f_i_ma_as_2,f_c_ma_hi_2,h_i_fe_hi_3,h_c_ma_hi_3,f_i_fe_hi_1,h_i_fe_af_1,h_c_ma_as_2,h_i_ma_hi_4,f_i_fe_af_3,h_i_ma_hi_2,f_c_fe_as_1,h_i_ma_ca_4,f_i_ma_af_1,h_c_fe_as_1,h_i_ma_af_3,f_i_ma_hi_2,f_c_fe_ca_4];
        break;
    default:
        alert("ERROR: Could not determine Control Sequence! Please pick a Control Sequence between 1-8 and try again.");
}
ESSequence = [h_i_m_ca_4, f_i_m_as_2, h_c_m_as_4, f_i_m_as_3, h_c_f_af_4];
controlSequence = [h_i_fe_ca_4,f_c_ma_af_3,h_i_ma_hi_4,f_i_ma_ca_2, f_c_fe_ca_4];

/***********Instructions Screen*************/
let EStutorial1 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>In this task you will see faces with two different expression types: happy and fear, " +
        " and you will also see red text written over these faces.</p>" +
        "<p>Please ignore the red text and indicate the facial expression type: happy or fear by entering on your keyboard " +
        "<strong>" + KEYBOARD_PRESS_HAPPY + "</strong> for happy and <strong>" + KEYBOARD_PRESS_FEAR + "</strong> for fear.</p>" +
        "<p><strong>-Press ENTER key to continue-</strong></p>"
};

let EStutorial2 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>facial expression</strong> is <strong>happy</strong>; so you would enter → for happy</p>" +
        "<p>Press ENTER key to continue</p><br>" +
        "<div><img src='img/ES/h_c_m_hi_1.png'/>" +
        "<p><strong>Facial Expression - Happy</strong><br>Word Meaning - Happy</p>" +
        "</div>",
};

let EStutorial3 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>facial expression</strong> is <strong>fear</strong>; so you would enter ← for fear</p>" +
        "<p>Press ENTER key to continue</p><br>" +
        "<div><img src='img/ES/f_c_f_ca_1.png'/>" +
        "<p><strong>Facial Expression - Fear</strong><br>Word Meaning - Happy</p>" +
        "</div>",
};

//Adds a fixation in between trials for number of millisecond
//User cannot press key to move forward
let fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:' + FIXATION_SIZE + 'px;">' + FIXATION_KEY + '</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: function(){
        return jsPsych.randomization.sampleWithoutReplacement(FIXATION_DURATION, 1)[0];
    },
    data: { test_part: 'fixation' }
};

//Chooses what keyboard inputs are allowed for user to move forward
let test = {
    type: "image-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: [KEYBOARD_PRESS_HAPPY, KEYBOARD_PRESS_FEAR],
    stimulus_duration: STIMULUS_DURATION,
    trial_duration: TRIAL_DURATION,
    maintain_aspect_ration: MAINTAIN_IMG_ASPECT_RATIO,
    stimulus_height: STIMULUS_HEIGHT,
    stimulus_width: STIMULUS_WIDTH,
    post_trial_gap: POST_TRIAL_GAP,
    data: jsPsych.timelineVariable('data'),
    on_load: function (data) {
        //do work
    },
    on_finish: function (data) {
        jsPsych.data.addProperties({ESSequence: SEQUENCE_NUMBER_ES});
        jsPsych.data.addProperties({ControlSequence: SEQUENCE_NUMBER_CONTROL});
        data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
        data.user_response = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
        data.trial = "ES";
    }
};

//Chooses what keyboard inputs are allowed for user to move forward
let control = {
    type: "image-keyboard-response",
    stimulus: jsPsych.timelineVariable('control'),
    choices: [KEYBOARD_PRESS_FEMALE, KEYBOARD_PRESS_MALE],
    stimulus_duration: STIMULUS_DURATION,
    trial_duration: TRIAL_DURATION,
    maintain_aspect_ration: MAINTAIN_IMG_ASPECT_RATIO,
    stimulus_height: STIMULUS_HEIGHT,
    stimulus_width: STIMULUS_WIDTH,
    post_trial_gap: POST_TRIAL_GAP,
    data: jsPsych.timelineVariable('data'),
    on_load: function (data) {
        //do work
    },
    on_finish: function (data) {
        jsPsych.data.addProperties({ESSequence: SEQUENCE_NUMBER_ES});
        jsPsych.data.addProperties({ControlSequence: SEQUENCE_NUMBER_CONTROL});
        data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
        data.user_response = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
        data.trial = "Control";
    }
};

let feedback = {
    type: 'html-keyboard-response',
    stimulus: function(){
        if(jsPsych.data.get().last(1).values()[0].rt !== null){
            return '<span class="green fixation-dimensions"></span>'
        }
        else{
            return '<span></span>'
        }
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: FEEDBACK_DURATION,
    data: { block_type: 'GreenCircle' }
}

let halfwayThrough = Math.floor(controlSequence.length / 2);
let controlFirstHalf = controlSequence.slice(0, halfwayThrough);
let controlSecondHalf = controlSequence.slice(halfwayThrough, controlSequence.length);
halfwayThrough = Math.floor(ESSequence.length / 2);
let ESFirstHalf = ESSequence.slice(0, halfwayThrough);
let ESSecondHalf = ESSequence.slice(halfwayThrough, ESSequence.length);

if(CONTROL_GOES_FIRST){
    //add first half control array to finalSequence array
    //add first half ES array to finalSequence array
    //add second half control array to finalSequence array
    //add second half ES array to finalSequence array
    let test_procedure = {
        timeline: [fixation, control, feedback],
        timeline_variables: controlFirstHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, test, feedback],
        timeline_variables: ESFirstHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    timeline.push(EStutorial1);
    timeline.push(EStutorial2);
    timeline.push(EStutorial3);
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, control, feedback],
        timeline_variables: controlSecondHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, test, feedback],
        timeline_variables: ESSecondHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    timeline.push(EStutorial1);
    timeline.push(EStutorial2);
    timeline.push(EStutorial3);
    timeline.push(test_procedure);
}
else{
    //add first half ES array to finalSequence array
    //add first half control array to finalSequence array
    //add second half ES array to finalSequence array
    //add second half control array to finalSequence array
    let test_procedure = {
        timeline: [fixation, test, feedback],
        timeline_variables: ESFirstHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    timeline.push(EStutorial1);
    timeline.push(EStutorial2);
    timeline.push(EStutorial3);
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, control, feedback],
        timeline_variables: controlFirstHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, test, feedback],
        timeline_variables: ESSecondHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    timeline.push(EStutorial1);
    timeline.push(EStutorial2);
    timeline.push(EStutorial3);
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, control, feedback],
        timeline_variables: controlSecondHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    timeline.push(test_procedure);
}

/***********Debrief Screen************/
    //allows you to show user statistics of trials
var debrief_block = {
        type: "html-keyboard-response",
        stimulus: function () {

            var trials = jsPsych.data.get().filter({ test_part: 'test' });
            var correct_trials = trials.filter({ correct: true });
            var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
            var rt = Math.round(correct_trials.select('rt').mean());

            return "<p>You got <strong>" + accuracy + "%</strong> correct.</p>" +
                "<p>Average response time was <strong>" + rt + "ms</strong>.</p>" +
                "<p>Press any key to complete the experiment. Thank you!</p>";

        },
        on_load: function () {
            let filename = "task_" + Date.now().toString() + "_ver" + VERSION + ".json";
            saveData(jsPsych.data.get().json(), filename);
        }
    };
//add this to timeline
timeline.push(debrief_block);

/*********Start Experiment************/
//Display data shows the data displayed at end of trials
jsPsych.init({
    timeline: timeline
});

///////////////////
/// SAVE DATA
//////////////////
var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var json = data,
            blob = new Blob([json], { type: "octet/stream" }),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());