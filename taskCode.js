/*************Variables************/
const VERSION = "1";
const SEQUENCE_NUMBER_ES = 2; //Choose 1-8
const SEQUENCE_NUMBER_CONTROL = 1; //Choose 1-8
const CONTROL_GOES_FIRST = false;
const LEFT_ARROW_IS_FEAR_FEMALE = true;

//Trial time settings
const STIMULUS_DURATION = 2000; //This is the total time the image will be displayed before disapearing.
const TRIAL_DURATION = 3000; //This is the total time before the curent trial moves on to next trial
const POST_TRIAL_GAP = [1000, 1250, 1500, 1750, 2000]; //Sets the time after the trial finishes to wait until the fixation starts (trial hang time).

//Image settings
const STIMULUS_HEIGHT = 550; //Changes the height of the images. Set to null for no changes
const STIMULUS_WIDTH = null; //Changes the width of the images.  Set to null for no changes
const MAINTAIN_IMG_ASPECT_RATIO = true; //must be true or false. Set only the width or height and set to true will keep the aspect ration of the image. Set to false if want to change height/width together.

//Fixation settings
const FIXATION_DURATION = [1000]; //Sets the fixation duration. Can add as many values as you want or subtract values from array.
const FIXATION_KEY = '+';
const FIXATION_SIZE = 60;

//MISC settings
const NUMBER_OF_TRIALS = 1; //This will run through the entire ESSequence n number of times as specified.
const KEYBOARD_PRESS_TUTORIAL = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(13); //This is the tutorial key code
const KEYBOARD_PRESS_RIGHT = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(39); //This is the arrow key code
const KEYBOARD_PRESS_LEFT = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(37); //This is the arrow key code
let timeline = [];
let ESSequence = [];
let controlSequence = [];
let times = "";

times = "Trial, Time, Event, MetaData, Value\n";
times += "0, 0,'meta-data',"+ "version," + VERSION + "\n";
times += "0, 0,'meta-data',"+ "CONTROL_GOES_FIRST," + CONTROL_GOES_FIRST + "\n";
times += "0, 0,'meta-data',"+ "LEFT_ARROW_IS_FEAR_FEMALE," + LEFT_ARROW_IS_FEAR_FEMALE + "\n";
times += "0, 0,'meta-data',"+ "SEQUENCE_NUMBER_ES," + SEQUENCE_NUMBER_ES + "\n";
times += "0, 0,'meta-data',"+ "SEQUENCE_NUMBER_CONTROL," + SEQUENCE_NUMBER_CONTROL + "\n";
times += "0, 0,'meta-data',"+ "STIMULUS_DURATION," + STIMULUS_DURATION + "\n";
times += "0, 0,'meta-data',"+ "TRIAL_DURATION," + TRIAL_DURATION + "\n";
times += "0, 0,'meta-data',"+ "POST_TRIAL_GAP," + POST_TRIAL_GAP + "\n";
times += "0, 0,'meta-data',"+ "FIXATION_DURATION," + FIXATION_DURATION + "\n";
times += "0, 0,'meta-data',"+ "NUMBER_OF_TRIALS," + NUMBER_OF_TRIALS + "\n";

/***********Image variables (pre-loaded)*************/
let f_c_f_af_1 = {stimulus: "img/ES/f_c_f_af_1.png",data: { test_part: 'test' }}
let f_c_f_af_2 = {stimulus: "img/ES/f_c_f_af_2.png",data: { test_part: 'test' }}
let f_c_f_af_3 = {stimulus: "img/ES/f_c_f_af_3.png",data: { test_part: 'test' }}
let f_c_f_af_4 = {stimulus: "img/ES/f_c_f_af_4.png",data: { test_part: 'test' }}
let f_i_f_af_1 = {stimulus: "img/ES/f_i_f_af_1.png",data: { test_part: 'test' }}
let f_i_f_af_2 = {stimulus: "img/ES/f_i_f_af_2.png",data: { test_part: 'test' }}
let f_i_f_af_3 = {stimulus: "img/ES/f_i_f_af_3.png",data: { test_part: 'test' }}
let f_i_f_af_4 = {stimulus: "img/ES/f_i_f_af_4.png",data: { test_part: 'test' }}
let h_c_f_af_1 = {stimulus: "img/ES/h_c_f_af_1.png",data: { test_part: 'test' }}
let h_c_f_af_2 = {stimulus: "img/ES/h_c_f_af_2.png",data: { test_part: 'test' }}
let h_c_f_af_3 = {stimulus: "img/ES/h_c_f_af_3.png",data: { test_part: 'test' }}
let h_c_f_af_4 = {stimulus: "img/ES/h_c_f_af_4.png",data: { test_part: 'test' }}
let h_i_f_af_1 = {stimulus: "img/ES/h_i_f_af_1.png",data: { test_part: 'test' }}
let h_i_f_af_2 = {stimulus: "img/ES/h_i_f_af_2.png",data: { test_part: 'test' }}
let h_i_f_af_3 = {stimulus: "img/ES/h_i_f_af_3.png",data: { test_part: 'test' }}
let h_i_f_af_4 = {stimulus: "img/ES/h_i_f_af_4.png",data: { test_part: 'test' }}
let f_c_f_as_1 = {stimulus: "img/ES/f_c_f_as_1.png",data: { test_part: 'test' }}
let f_c_f_as_2 = {stimulus: "img/ES/f_c_f_as_2.png",data: { test_part: 'test' }}
let f_c_f_as_3 = {stimulus: "img/ES/f_c_f_as_3.png",data: { test_part: 'test' }}
let f_c_f_as_4 = {stimulus: "img/ES/f_c_f_as_4.png",data: { test_part: 'test' }}
let f_i_f_as_1 = {stimulus: "img/ES/f_i_f_as_1.png",data: { test_part: 'test' }}
let f_i_f_as_2 = {stimulus: "img/ES/f_i_f_as_2.png",data: { test_part: 'test' }}
let f_i_f_as_3 = {stimulus: "img/ES/f_i_f_as_3.png",data: { test_part: 'test' }}
let f_i_f_as_4 = {stimulus: "img/ES/f_i_f_as_4.png",data: { test_part: 'test' }}
let h_c_f_as_1 = {stimulus: "img/ES/h_c_f_as_1.png",data: { test_part: 'test' }}
let h_c_f_as_2 = {stimulus: "img/ES/h_c_f_as_2.png",data: { test_part: 'test' }}
let h_c_f_as_3 = {stimulus: "img/ES/h_c_f_as_3.png",data: { test_part: 'test' }}
let h_c_f_as_4 = {stimulus: "img/ES/h_c_f_as_4.png",data: { test_part: 'test' }}
let h_i_f_as_1 = {stimulus: "img/ES/h_i_f_as_1.png",data: { test_part: 'test' }}
let h_i_f_as_2 = {stimulus: "img/ES/h_i_f_as_2.png",data: { test_part: 'test' }}
let h_i_f_as_3 = {stimulus: "img/ES/h_i_f_as_3.png",data: { test_part: 'test' }}
let h_i_f_as_4 = {stimulus: "img/ES/h_i_f_as_4.png",data: { test_part: 'test' }}
let f_c_f_ca_1 = {stimulus: "img/ES/f_c_f_ca_1.png",data: { test_part: 'test' }}
let f_c_f_ca_2 = {stimulus: "img/ES/f_c_f_ca_2.png",data: { test_part: 'test' }}
let f_c_f_ca_3 = {stimulus: "img/ES/f_c_f_ca_3.png",data: { test_part: 'test' }}
let f_c_f_ca_4 = {stimulus: "img/ES/f_c_f_ca_4.png",data: { test_part: 'test' }}
let f_i_f_ca_1 = {stimulus: "img/ES/f_i_f_ca_1.png",data: { test_part: 'test' }}
let f_i_f_ca_2 = {stimulus: "img/ES/f_i_f_ca_2.png",data: { test_part: 'test' }}
let f_i_f_ca_3 = {stimulus: "img/ES/f_i_f_ca_3.png",data: { test_part: 'test' }}
let f_i_f_ca_4 = {stimulus: "img/ES/f_i_f_ca_4.png",data: { test_part: 'test' }}
let h_c_f_ca_1 = {stimulus: "img/ES/h_c_f_ca_1.png",data: { test_part: 'test' }}
let h_c_f_ca_2 = {stimulus: "img/ES/h_c_f_ca_2.png",data: { test_part: 'test' }}
let h_c_f_ca_3 = {stimulus: "img/ES/h_c_f_ca_3.png",data: { test_part: 'test' }}
let h_c_f_ca_4 = {stimulus: "img/ES/h_c_f_ca_4.png",data: { test_part: 'test' }}
let h_i_f_ca_1 = {stimulus: "img/ES/h_i_f_ca_1.png",data: { test_part: 'test' }}
let h_i_f_ca_2 = {stimulus: "img/ES/h_i_f_ca_2.png",data: { test_part: 'test' }}
let h_i_f_ca_3 = {stimulus: "img/ES/h_i_f_ca_3.png",data: { test_part: 'test' }}
let h_i_f_ca_4 = {stimulus: "img/ES/h_i_f_ca_4.png",data: { test_part: 'test' }}
let f_c_f_hi_1 = {stimulus: "img/ES/f_c_f_hi_1.png",data: { test_part: 'test' }}
let f_c_f_hi_2 = {stimulus: "img/ES/f_c_f_hi_2.png",data: { test_part: 'test' }}
let f_c_f_hi_3 = {stimulus: "img/ES/f_c_f_hi_3.png",data: { test_part: 'test' }}
let f_c_f_hi_4 = {stimulus: "img/ES/f_c_f_hi_4.png",data: { test_part: 'test' }}
let f_i_f_hi_1 = {stimulus: "img/ES/f_i_f_hi_1.png",data: { test_part: 'test' }}
let f_i_f_hi_2 = {stimulus: "img/ES/f_i_f_hi_2.png",data: { test_part: 'test' }}
let f_i_f_hi_3 = {stimulus: "img/ES/f_i_f_hi_3.png",data: { test_part: 'test' }}
let f_i_f_hi_4 = {stimulus: "img/ES/f_i_f_hi_4.png",data: { test_part: 'test' }}
let h_c_f_hi_1 = {stimulus: "img/ES/h_c_f_hi_1.png",data: { test_part: 'test' }}
let h_c_f_hi_2 = {stimulus: "img/ES/h_c_f_hi_2.png",data: { test_part: 'test' }}
let h_c_f_hi_3 = {stimulus: "img/ES/h_c_f_hi_3.png",data: { test_part: 'test' }}
let h_c_f_hi_4 = {stimulus: "img/ES/h_c_f_hi_4.png",data: { test_part: 'test' }}
let h_i_f_hi_1 = {stimulus: "img/ES/h_i_f_hi_1.png",data: { test_part: 'test' }}
let h_i_f_hi_2 = {stimulus: "img/ES/h_i_f_hi_2.png",data: { test_part: 'test' }}
let h_i_f_hi_3 = {stimulus: "img/ES/h_i_f_hi_3.png",data: { test_part: 'test' }}
let h_i_f_hi_4 = {stimulus: "img/ES/h_i_f_hi_4.png",data: { test_part: 'test' }}
let f_c_m_af_1 = {stimulus: "img/ES/f_c_m_af_1.png",data: { test_part: 'test' }}
let f_c_m_af_2 = {stimulus: "img/ES/f_c_m_af_2.png",data: { test_part: 'test' }}
let f_c_m_af_3 = {stimulus: "img/ES/f_c_m_af_3.png",data: { test_part: 'test' }}
let f_c_m_af_4 = {stimulus: "img/ES/f_c_m_af_4.png",data: { test_part: 'test' }}
let f_i_m_af_1 = {stimulus: "img/ES/f_i_m_af_1.png",data: { test_part: 'test' }}
let f_i_m_af_2 = {stimulus: "img/ES/f_i_m_af_2.png",data: { test_part: 'test' }}
let f_i_m_af_3 = {stimulus: "img/ES/f_i_m_af_3.png",data: { test_part: 'test' }}
let f_i_m_af_4 = {stimulus: "img/ES/f_i_m_af_4.png",data: { test_part: 'test' }}
let h_c_m_af_1 = {stimulus: "img/ES/h_c_m_af_1.png",data: { test_part: 'test' }}
let h_c_m_af_2 = {stimulus: "img/ES/h_c_m_af_2.png",data: { test_part: 'test' }}
let h_c_m_af_3 = {stimulus: "img/ES/h_c_m_af_3.png",data: { test_part: 'test' }}
let h_c_m_af_4 = {stimulus: "img/ES/h_c_m_af_4.png",data: { test_part: 'test' }}
let h_i_m_af_1 = {stimulus: "img/ES/h_i_m_af_1.png",data: { test_part: 'test' }}
let h_i_m_af_2 = {stimulus: "img/ES/h_i_m_af_2.png",data: { test_part: 'test' }}
let h_i_m_af_3 = {stimulus: "img/ES/h_i_m_af_3.png",data: { test_part: 'test' }}
let h_i_m_af_4 = {stimulus: "img/ES/h_i_m_af_4.png",data: { test_part: 'test' }}
let f_c_m_as_1 = {stimulus: "img/ES/f_c_m_as_1.png",data: { test_part: 'test' }}
let f_c_m_as_2 = {stimulus: "img/ES/f_c_m_as_2.png",data: { test_part: 'test' }}
let f_c_m_as_3 = {stimulus: "img/ES/f_c_m_as_3.png",data: { test_part: 'test' }}
let f_c_m_as_4 = {stimulus: "img/ES/f_c_m_as_4.png",data: { test_part: 'test' }}
let f_i_m_as_1 = {stimulus: "img/ES/f_i_m_as_1.png",data: { test_part: 'test' }}
let f_i_m_as_2 = {stimulus: "img/ES/f_i_m_as_2.png",data: { test_part: 'test' }}
let f_i_m_as_3 = {stimulus: "img/ES/f_i_m_as_3.png",data: { test_part: 'test' }}
let f_i_m_as_4 = {stimulus: "img/ES/f_i_m_as_4.png",data: { test_part: 'test' }}
let h_c_m_as_1 = {stimulus: "img/ES/h_c_m_as_1.png",data: { test_part: 'test' }}
let h_c_m_as_2 = {stimulus: "img/ES/h_c_m_as_2.png",data: { test_part: 'test' }}
let h_c_m_as_3 = {stimulus: "img/ES/h_c_m_as_3.png",data: { test_part: 'test' }}
let h_c_m_as_4 = {stimulus: "img/ES/h_c_m_as_4.png",data: { test_part: 'test' }}
let h_i_m_as_1 = {stimulus: "img/ES/h_i_m_as_1.png",data: { test_part: 'test' }}
let h_i_m_as_2 = {stimulus: "img/ES/h_i_m_as_2.png",data: { test_part: 'test' }}
let h_i_m_as_3 = {stimulus: "img/ES/h_i_m_as_3.png",data: { test_part: 'test' }}
let h_i_m_as_4 = {stimulus: "img/ES/h_i_m_as_4.png",data: { test_part: 'test' }}
let f_c_m_ca_1 = {stimulus: "img/ES/f_c_m_ca_1.png",data: { test_part: 'test' }}
let f_c_m_ca_2 = {stimulus: "img/ES/f_c_m_ca_2.png",data: { test_part: 'test' }}
let f_c_m_ca_3 = {stimulus: "img/ES/f_c_m_ca_3.png",data: { test_part: 'test' }}
let f_c_m_ca_4 = {stimulus: "img/ES/f_c_m_ca_4.png",data: { test_part: 'test' }}
let f_i_m_ca_1 = {stimulus: "img/ES/f_i_m_ca_1.png",data: { test_part: 'test' }}
let f_i_m_ca_2 = {stimulus: "img/ES/f_i_m_ca_2.png",data: { test_part: 'test' }}
let f_i_m_ca_3 = {stimulus: "img/ES/f_i_m_ca_3.png",data: { test_part: 'test' }}
let f_i_m_ca_4 = {stimulus: "img/ES/f_i_m_ca_4.png",data: { test_part: 'test' }}
let h_c_m_ca_1 = {stimulus: "img/ES/h_c_m_ca_1.png",data: { test_part: 'test' }}
let h_c_m_ca_2 = {stimulus: "img/ES/h_c_m_ca_2.png",data: { test_part: 'test' }}
let h_c_m_ca_3 = {stimulus: "img/ES/h_c_m_ca_3.png",data: { test_part: 'test' }}
let h_c_m_ca_4 = {stimulus: "img/ES/h_c_m_ca_4.png",data: { test_part: 'test' }}
let h_i_m_ca_1 = {stimulus: "img/ES/h_i_m_ca_1.png",data: { test_part: 'test' }}
let h_i_m_ca_2 = {stimulus: "img/ES/h_i_m_ca_2.png",data: { test_part: 'test' }}
let h_i_m_ca_3 = {stimulus: "img/ES/h_i_m_ca_3.png",data: { test_part: 'test' }}
let h_i_m_ca_4 = {stimulus: "img/ES/h_i_m_ca_4.png",data: { test_part: 'test' }}
let f_c_m_hi_1 = {stimulus: "img/ES/f_c_m_hi_1.png",data: { test_part: 'test' }}
let f_c_m_hi_2 = {stimulus: "img/ES/f_c_m_hi_2.png",data: { test_part: 'test' }}
let f_c_m_hi_3 = {stimulus: "img/ES/f_c_m_hi_3.png",data: { test_part: 'test' }}
let f_c_m_hi_4 = {stimulus: "img/ES/f_c_m_hi_4.png",data: { test_part: 'test' }}
let f_i_m_hi_1 = {stimulus: "img/ES/f_i_m_hi_1.png",data: { test_part: 'test' }}
let f_i_m_hi_2 = {stimulus: "img/ES/f_i_m_hi_2.png",data: { test_part: 'test' }}
let f_i_m_hi_3 = {stimulus: "img/ES/f_i_m_hi_3.png",data: { test_part: 'test' }}
let f_i_m_hi_4 = {stimulus: "img/ES/f_i_m_hi_4.png",data: { test_part: 'test' }}
let h_c_m_hi_1 = {stimulus: "img/ES/h_c_m_hi_1.png",data: { test_part: 'test' }}
let h_c_m_hi_2 = {stimulus: "img/ES/h_c_m_hi_2.png",data: { test_part: 'test' }}
let h_c_m_hi_3 = {stimulus: "img/ES/h_c_m_hi_3.png",data: { test_part: 'test' }}
let h_c_m_hi_4 = {stimulus: "img/ES/h_c_m_hi_4.png",data: { test_part: 'test' }}
let h_i_m_hi_1 = {stimulus: "img/ES/h_i_m_hi_1.png",data: { test_part: 'test' }}
let h_i_m_hi_2 = {stimulus: "img/ES/h_i_m_hi_2.png",data: { test_part: 'test' }}
let h_i_m_hi_3 = {stimulus: "img/ES/h_i_m_hi_3.png",data: { test_part: 'test' }}
let h_i_m_hi_4 = {stimulus: "img/ES/h_i_m_hi_4.png",data: { test_part: 'test' }}

/***********Control Image variables (pre-loaded)*************/
let f_c_fe_af_1 = {control: "img/Control/f_c_fe_af_1.png",data: { test_part: 'test'}}
let f_c_fe_af_2 = {control: "img/Control/f_c_fe_af_2.png",data: { test_part: 'test'}}
let f_c_fe_af_3 = {control: "img/Control/f_c_fe_af_3.png",data: { test_part: 'test'}}
let f_c_fe_af_4 = {control: "img/Control/f_c_fe_af_4.png",data: { test_part: 'test'}}
let f_i_fe_af_1 = {control: "img/Control/f_i_fe_af_1.png",data: { test_part: 'test'}}
let f_i_fe_af_2 = {control: "img/Control/f_i_fe_af_2.png",data: { test_part: 'test'}}
let f_i_fe_af_3 = {control: "img/Control/f_i_fe_af_3.png",data: { test_part: 'test'}}
let f_i_fe_af_4 = {control: "img/Control/f_i_fe_af_4.png",data: { test_part: 'test'}}
let h_c_fe_af_1 = {control: "img/Control/h_c_fe_af_1.png",data: { test_part: 'test'}}
let h_c_fe_af_2 = {control: "img/Control/h_c_fe_af_2.png",data: { test_part: 'test'}}
let h_c_fe_af_3 = {control: "img/Control/h_c_fe_af_3.png",data: { test_part: 'test'}}
let h_c_fe_af_4 = {control: "img/Control/h_c_fe_af_4.png",data: { test_part: 'test'}}
let h_i_fe_af_1 = {control: "img/Control/h_i_fe_af_1.png",data: { test_part: 'test'}}
let h_i_fe_af_2 = {control: "img/Control/h_i_fe_af_2.png",data: { test_part: 'test'}}
let h_i_fe_af_3 = {control: "img/Control/h_i_fe_af_3.png",data: { test_part: 'test'}}
let h_i_fe_af_4 = {control: "img/Control/h_i_fe_af_4.png",data: { test_part: 'test'}}
let f_c_fe_as_1 = {control: "img/Control/f_c_fe_as_1.png",data: { test_part: 'test'}}
let f_c_fe_as_2 = {control: "img/Control/f_c_fe_as_2.png",data: { test_part: 'test'}}
let f_c_fe_as_3 = {control: "img/Control/f_c_fe_as_3.png",data: { test_part: 'test'}}
let f_c_fe_as_4 = {control: "img/Control/f_c_fe_as_4.png",data: { test_part: 'test'}}
let f_i_fe_as_1 = {control: "img/Control/f_i_fe_as_1.png",data: { test_part: 'test'}}
let f_i_fe_as_2 = {control: "img/Control/f_i_fe_as_2.png",data: { test_part: 'test'}}
let f_i_fe_as_3 = {control: "img/Control/f_i_fe_as_3.png",data: { test_part: 'test'}}
let f_i_fe_as_4 = {control: "img/Control/f_i_fe_as_4.png",data: { test_part: 'test'}}
let h_c_fe_as_1 = {control: "img/Control/h_c_fe_as_1.png",data: { test_part: 'test'}}
let h_c_fe_as_2 = {control: "img/Control/h_c_fe_as_2.png",data: { test_part: 'test'}}
let h_c_fe_as_3 = {control: "img/Control/h_c_fe_as_3.png",data: { test_part: 'test'}}
let h_c_fe_as_4 = {control: "img/Control/h_c_fe_as_4.png",data: { test_part: 'test'}}
let h_i_fe_as_1 = {control: "img/Control/h_i_fe_as_1.png",data: { test_part: 'test'}}
let h_i_fe_as_2 = {control: "img/Control/h_i_fe_as_2.png",data: { test_part: 'test'}}
let h_i_fe_as_3 = {control: "img/Control/h_i_fe_as_3.png",data: { test_part: 'test'}}
let h_i_fe_as_4 = {control: "img/Control/h_i_fe_as_4.png",data: { test_part: 'test'}}
let f_c_fe_ca_1 = {control: "img/Control/f_c_fe_ca_1.png",data: { test_part: 'test'}}
let f_c_fe_ca_2 = {control: "img/Control/f_c_fe_ca_2.png",data: { test_part: 'test'}}
let f_c_fe_ca_3 = {control: "img/Control/f_c_fe_ca_3.png",data: { test_part: 'test'}}
let f_c_fe_ca_4 = {control: "img/Control/f_c_fe_ca_4.png",data: { test_part: 'test'}}
let f_i_fe_ca_1 = {control: "img/Control/f_i_fe_ca_1.png",data: { test_part: 'test'}}
let f_i_fe_ca_2 = {control: "img/Control/f_i_fe_ca_2.png",data: { test_part: 'test'}}
let f_i_fe_ca_3 = {control: "img/Control/f_i_fe_ca_3.png",data: { test_part: 'test'}}
let f_i_fe_ca_4 = {control: "img/Control/f_i_fe_ca_4.png",data: { test_part: 'test'}}
let h_c_fe_ca_1 = {control: "img/Control/h_c_fe_ca_1.png",data: { test_part: 'test'}}
let h_c_fe_ca_2 = {control: "img/Control/h_c_fe_ca_2.png",data: { test_part: 'test'}}
let h_c_fe_ca_3 = {control: "img/Control/h_c_fe_ca_3.png",data: { test_part: 'test'}}
let h_c_fe_ca_4 = {control: "img/Control/h_c_fe_ca_4.png",data: { test_part: 'test'}}
let h_i_fe_ca_1 = {control: "img/Control/h_i_fe_ca_1.png",data: { test_part: 'test'}}
let h_i_fe_ca_2 = {control: "img/Control/h_i_fe_ca_2.png",data: { test_part: 'test'}}
let h_i_fe_ca_3 = {control: "img/Control/h_i_fe_ca_3.png",data: { test_part: 'test'}}
let h_i_fe_ca_4 = {control: "img/Control/h_i_fe_ca_4.png",data: { test_part: 'test'}}
let f_c_fe_hi_1 = {control: "img/Control/f_c_fe_hi_1.png",data: { test_part: 'test'}}
let f_c_fe_hi_2 = {control: "img/Control/f_c_fe_hi_2.png",data: { test_part: 'test'}}
let f_c_fe_hi_3 = {control: "img/Control/f_c_fe_hi_3.png",data: { test_part: 'test'}}
let f_c_fe_hi_4 = {control: "img/Control/f_c_fe_hi_4.png",data: { test_part: 'test'}}
let f_i_fe_hi_1 = {control: "img/Control/f_i_fe_hi_1.png",data: { test_part: 'test'}}
let f_i_fe_hi_2 = {control: "img/Control/f_i_fe_hi_2.png",data: { test_part: 'test'}}
let f_i_fe_hi_3 = {control: "img/Control/f_i_fe_hi_3.png",data: { test_part: 'test'}}
let f_i_fe_hi_4 = {control: "img/Control/f_i_fe_hi_4.png",data: { test_part: 'test'}}
let h_c_fe_hi_1 = {control: "img/Control/h_c_fe_hi_1.png",data: { test_part: 'test'}}
let h_c_fe_hi_2 = {control: "img/Control/h_c_fe_hi_2.png",data: { test_part: 'test'}}
let h_c_fe_hi_3 = {control: "img/Control/h_c_fe_hi_3.png",data: { test_part: 'test'}}
let h_c_fe_hi_4 = {control: "img/Control/h_c_fe_hi_4.png",data: { test_part: 'test'}}
let h_i_fe_hi_1 = {control: "img/Control/h_i_fe_hi_1.png",data: { test_part: 'test'}}
let h_i_fe_hi_2 = {control: "img/Control/h_i_fe_hi_2.png",data: { test_part: 'test'}}
let h_i_fe_hi_3 = {control: "img/Control/h_i_fe_hi_3.png",data: { test_part: 'test'}}
let h_i_fe_hi_4 = {control: "img/Control/h_i_fe_hi_4.png",data: { test_part: 'test'}}
let f_c_ma_af_1 = {control: "img/Control/f_c_ma_af_1.png",data: { test_part: 'test'}}
let f_c_ma_af_2 = {control: "img/Control/f_c_ma_af_2.png",data: { test_part: 'test'}}
let f_c_ma_af_3 = {control: "img/Control/f_c_ma_af_3.png",data: { test_part: 'test'}}
let f_c_ma_af_4 = {control: "img/Control/f_c_ma_af_4.png",data: { test_part: 'test'}}
let f_i_ma_af_1 = {control: "img/Control/f_i_ma_af_1.png",data: { test_part: 'test'}}
let f_i_ma_af_2 = {control: "img/Control/f_i_ma_af_2.png",data: { test_part: 'test'}}
let f_i_ma_af_3 = {control: "img/Control/f_i_ma_af_3.png",data: { test_part: 'test'}}
let f_i_ma_af_4 = {control: "img/Control/f_i_ma_af_4.png",data: { test_part: 'test'}}
let h_c_ma_af_1 = {control: "img/Control/h_c_ma_af_1.png",data: { test_part: 'test'}}
let h_c_ma_af_2 = {control: "img/Control/h_c_ma_af_2.png",data: { test_part: 'test'}}
let h_c_ma_af_3 = {control: "img/Control/h_c_ma_af_3.png",data: { test_part: 'test'}}
let h_c_ma_af_4 = {control: "img/Control/h_c_ma_af_4.png",data: { test_part: 'test'}}
let h_i_ma_af_1 = {control: "img/Control/h_i_ma_af_1.png",data: { test_part: 'test'}}
let h_i_ma_af_2 = {control: "img/Control/h_i_ma_af_2.png",data: { test_part: 'test'}}
let h_i_ma_af_3 = {control: "img/Control/h_i_ma_af_3.png",data: { test_part: 'test'}}
let h_i_ma_af_4 = {control: "img/Control/h_i_ma_af_4.png",data: { test_part: 'test'}}
let f_c_ma_as_1 = {control: "img/Control/f_c_ma_as_1.png",data: { test_part: 'test'}}
let f_c_ma_as_2 = {control: "img/Control/f_c_ma_as_2.png",data: { test_part: 'test'}}
let f_c_ma_as_3 = {control: "img/Control/f_c_ma_as_3.png",data: { test_part: 'test'}}
let f_c_ma_as_4 = {control: "img/Control/f_c_ma_as_4.png",data: { test_part: 'test'}}
let f_i_ma_as_1 = {control: "img/Control/f_i_ma_as_1.png",data: { test_part: 'test'}}
let f_i_ma_as_2 = {control: "img/Control/f_i_ma_as_2.png",data: { test_part: 'test'}}
let f_i_ma_as_3 = {control: "img/Control/f_i_ma_as_3.png",data: { test_part: 'test'}}
let f_i_ma_as_4 = {control: "img/Control/f_i_ma_as_4.png",data: { test_part: 'test'}}
let h_c_ma_as_1 = {control: "img/Control/h_c_ma_as_1.png",data: { test_part: 'test'}}
let h_c_ma_as_2 = {control: "img/Control/h_c_ma_as_2.png",data: { test_part: 'test'}}
let h_c_ma_as_3 = {control: "img/Control/h_c_ma_as_3.png",data: { test_part: 'test'}}
let h_c_ma_as_4 = {control: "img/Control/h_c_ma_as_4.png",data: { test_part: 'test'}}
let h_i_ma_as_1 = {control: "img/Control/h_i_ma_as_1.png",data: { test_part: 'test'}}
let h_i_ma_as_2 = {control: "img/Control/h_i_ma_as_2.png",data: { test_part: 'test'}}
let h_i_ma_as_3 = {control: "img/Control/h_i_ma_as_3.png",data: { test_part: 'test'}}
let h_i_ma_as_4 = {control: "img/Control/h_i_ma_as_4.png",data: { test_part: 'test'}}
let f_c_ma_ca_1 = {control: "img/Control/f_c_ma_ca_1.png",data: { test_part: 'test'}}
let f_c_ma_ca_2 = {control: "img/Control/f_c_ma_ca_2.png",data: { test_part: 'test'}}
let f_c_ma_ca_3 = {control: "img/Control/f_c_ma_ca_3.png",data: { test_part: 'test'}}
let f_c_ma_ca_4 = {control: "img/Control/f_c_ma_ca_4.png",data: { test_part: 'test'}}
let f_i_ma_ca_1 = {control: "img/Control/f_i_ma_ca_1.png",data: { test_part: 'test'}}
let f_i_ma_ca_2 = {control: "img/Control/f_i_ma_ca_2.png",data: { test_part: 'test'}}
let f_i_ma_ca_3 = {control: "img/Control/f_i_ma_ca_3.png",data: { test_part: 'test'}}
let f_i_ma_ca_4 = {control: "img/Control/f_i_ma_ca_4.png",data: { test_part: 'test'}}
let h_c_ma_ca_1 = {control: "img/Control/h_c_ma_ca_1.png",data: { test_part: 'test'}}
let h_c_ma_ca_2 = {control: "img/Control/h_c_ma_ca_2.png",data: { test_part: 'test'}}
let h_c_ma_ca_3 = {control: "img/Control/h_c_ma_ca_3.png",data: { test_part: 'test'}}
let h_c_ma_ca_4 = {control: "img/Control/h_c_ma_ca_4.png",data: { test_part: 'test'}}
let h_i_ma_ca_1 = {control: "img/Control/h_i_ma_ca_1.png",data: { test_part: 'test'}}
let h_i_ma_ca_2 = {control: "img/Control/h_i_ma_ca_2.png",data: { test_part: 'test'}}
let h_i_ma_ca_3 = {control: "img/Control/h_i_ma_ca_3.png",data: { test_part: 'test'}}
let h_i_ma_ca_4 = {control: "img/Control/h_i_ma_ca_4.png",data: { test_part: 'test'}}
let f_c_ma_hi_1 = {control: "img/Control/f_c_ma_hi_1.png",data: { test_part: 'test'}}
let f_c_ma_hi_2 = {control: "img/Control/f_c_ma_hi_2.png",data: { test_part: 'test'}}
let f_c_ma_hi_3 = {control: "img/Control/f_c_ma_hi_3.png",data: { test_part: 'test'}}
let f_c_ma_hi_4 = {control: "img/Control/f_c_ma_hi_4.png",data: { test_part: 'test'}}
let f_i_ma_hi_1 = {control: "img/Control/f_i_ma_hi_1.png",data: { test_part: 'test'}}
let f_i_ma_hi_2 = {control: "img/Control/f_i_ma_hi_2.png",data: { test_part: 'test'}}
let f_i_ma_hi_3 = {control: "img/Control/f_i_ma_hi_3.png",data: { test_part: 'test'}}
let f_i_ma_hi_4 = {control: "img/Control/f_i_ma_hi_4.png",data: { test_part: 'test'}}
let h_c_ma_hi_1 = {control: "img/Control/h_c_ma_hi_1.png",data: { test_part: 'test'}}
let h_c_ma_hi_2 = {control: "img/Control/h_c_ma_hi_2.png",data: { test_part: 'test'}}
let h_c_ma_hi_3 = {control: "img/Control/h_c_ma_hi_3.png",data: { test_part: 'test'}}
let h_c_ma_hi_4 = {control: "img/Control/h_c_ma_hi_4.png",data: { test_part: 'test'}}
let h_i_ma_hi_1 = {control: "img/Control/h_i_ma_hi_1.png",data: { test_part: 'test'}}
let h_i_ma_hi_2 = {control: "img/Control/h_i_ma_hi_2.png",data: { test_part: 'test'}}
let h_i_ma_hi_3 = {control: "img/Control/h_i_ma_hi_3.png",data: { test_part: 'test'}}
let h_i_ma_hi_4 = {control: "img/Control/h_i_ma_hi_4.png",data: { test_part: 'test'}}

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
//Used for debugging to have a smaller set to work with
//ESSequence = [f_c_m_hi_4, f_i_f_as_4, h_c_f_hi_4, f_c_m_af_4, h_i_m_ca_4, f_i_f_hi_1, f_c_f_af_1, h_i_m_ca_3, f_i_m_hi_3, h_c_m_as_1];
//controlSequence = [h_c_fe_af_4, h_i_fe_as_1, f_i_ma_ca_3, f_c_fe_af_3, f_i_ma_hi_1, f_c_fe_hi_4, h_c_fe_as_2, f_c_ma_hi_4, h_i_fe_as_2, f_i_fe_hi_2];

/***********Tutorial Screens*************/
let EStutorial1 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>In this task you will see faces with two different expression types: happy and fear, " +
        " and you will also see red text written over these faces.</p>" +
        "<p>Please ignore the red text and indicate the facial expression type: happy or fear by entering on your keyboard " +
        "<h2>→</h2> for <strong>happy</strong> and <h2>←</h2> for <strong>fear</strong>.</p>" +
        "<p>Press Enter key to continue</p>"
};

let EStutorial2 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>facial expression</strong> is <strong>happy</strong>; so you would enter <h2>→</h2> for happy</p>" +
        "<p>Press Enter key to continue</p><br>" +
        "<div><img src='img/ES/h_c_m_hi_1.png'/>" +
        "<p><strong>Facial Expression - Happy</strong><br>Word Meaning - Happy</p>" +
        "</div>",
};

let EStutorial3 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>facial expression</strong> is <strong>fear</strong>; so you would enter <h2>←</h2> for fear</p>" +
        "<p>Press Enter key to continue</p><br>" +
        "<div><img src='img/ES/f_i_f_ca_4.png'/>" +
        "<p><strong>Facial Expression - Fear</strong><br>Word Meaning - Happy</p>" +
        "</div>",
};

let EStutorial4 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>In this task you will see faces with two different expression types: happy and fear, " +
        " and you will also see red text written over these faces.</p>" +
        "<p>Please ignore the red text and indicate the facial expression type: happy or fear by entering on your keyboard " +
        "<h2>←</h2> for <strong>happy</strong> and <h2>→</h2> for <strong>fear</strong>.</p>" +
        "<p>Press Enter key to continue</p>"
};

let EStutorial5 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>facial expression</strong> is <strong>happy</strong>; so you would enter <h2>←</h2> for happy</p>" +
        "<p>Press Enter key to continue</p><br>" +
        "<div><img src='img/ES/h_c_m_hi_1.png'/>" +
        "<p><strong>Facial Expression - Happy</strong><br>Word Meaning - Happy</p>" +
        "</div>",
};

let EStutorial6 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>facial expression</strong> is <strong>fear</strong>; so you would enter <h2>→</h2> for fear</p>" +
        "<p>Press Enter key to continue</p><br>" +
        "<div><img src='img/ES/f_i_f_ca_4.png'/>" +
        "<p><strong>Facial Expression - Fear</strong><br>Word Meaning - Happy</p>" +
        "</div>",
};

let controltutorial1 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>In this task you will see male and female faces and you will also see red text" +
        " written over these faces.  Please ignore the red text and indicate the gender of the </p>" +
        "<p>face: male or female by entering on your keyboard <h2>→</h2> for <strong>male</strong> and <h2>←</h2> for <strong>female</strong>. " +
        "<p>Press Enter key to continue</p>"
};

let controltutorial2 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>gender</strong> is <strong>male</strong>; so you would enter <h2>→</h2> for male</p>" +
        "<p>Press Enter key to continue</p><br>" +
        "<div><img src='img/Control/h_c_ma_hi_1.png'/>" +
        "<p><strong>Gender - Male</strong><br>Word Meaning - Male</p>" +
        "</div>",
};

let controltutorial3 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>gender</strong> is <strong>female</strong>; so you would enter <h2>←</h2> for female</p>" +
        "<p>Press Enter key to continue</p><br>" +
        "<div><img src='img/Control/f_i_fe_as_1.png'/>" +
        "<p><strong>Gender - Female</strong><br>Word Meaning - Male</p>" +
        "</div>",
};

let controltutorial4 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>In this task you will see male and female faces and you will also see red text" +
        " written over these faces.  Please ignore the red text and indicate the gender of the </p>" +
        "<p>face: male or female by entering on your keyboard <h2>←</h2> for <strong>male</strong> and <h2>→</h2> for <strong>female</strong>. " +
        "<p>Press Enter key to continue</p>"
};

let controltutorial5 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>gender</strong> is <strong>male</strong>; so you would enter <h2>←</h2> for male</p>" +
        "<p>Press Enter key to continue</p><br>" +
        "<div><img src='img/Control/h_c_ma_hi_1.png'/>" +
        "<p><strong>Gender - Male</strong><br>Word Meaning - Male</p>" +
        "</div>",
};

let controltutorial6 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>gender</strong> is <strong>female</strong>; so you would enter <h2>→</h2> for female</p>" +
        "<p>Press Enter key to continue</p><br>" +
        "<div><img src='img/Control/f_i_fe_as_1.png'/>" +
        "<p><strong>Gender - Female</strong><br>Word Meaning - Male</p>" +
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
    data: { test_part: 'fixation' },
    on_finish: function (data) {
        data.linux_time_on_finish =  Date.now().toString();
    }
};

//Chooses what keyboard inputs are allowed for user to move forward
let test = {
    type: "image-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: [KEYBOARD_PRESS_RIGHT, KEYBOARD_PRESS_LEFT],
    stimulus_duration: STIMULUS_DURATION,
    trial_duration: TRIAL_DURATION,
    maintain_aspect_ration: MAINTAIN_IMG_ASPECT_RATIO,
    stimulus_height: STIMULUS_HEIGHT,
    stimulus_width: STIMULUS_WIDTH,
    post_trial_gap: function(){
        return jsPsych.randomization.sampleWithoutReplacement(POST_TRIAL_GAP, 1)[0];
    },
    data: jsPsych.timelineVariable('data'),
    on_finish: function (data) {
        data.linux_time_on_finish =  Date.now().toString();
        jsPsych.data.addProperties({Version: VERSION});
        jsPsych.data.addProperties({ESSequence: SEQUENCE_NUMBER_ES});
        jsPsych.data.addProperties({ControlSequence: SEQUENCE_NUMBER_CONTROL});
        if(LEFT_ARROW_IS_FEAR_FEMALE && data.stimulus.charAt(7) == 'f'){
            data.correct_response = KEYBOARD_PRESS_LEFT;
        }
        else if(LEFT_ARROW_IS_FEAR_FEMALE && data.stimulus.charAt(7) == 'h'){
            data.correct_response = KEYBOARD_PRESS_RIGHT;
        }
        else if(!LEFT_ARROW_IS_FEAR_FEMALE && data.stimulus.charAt(7) == 'f'){
            data.correct_response = KEYBOARD_PRESS_RIGHT;
        }
        else if(!LEFT_ARROW_IS_FEAR_FEMALE && data.stimulus.charAt(7) == 'h'){
            data.correct_response = KEYBOARD_PRESS_LEFT;
        }
        if(data.stimulus.charAt(7) == 'f'){
            data.facial_expression_type = "fear";
        }
        else{
            data.facial_expression_type = "happy";
        }
        if(data.stimulus.charAt(11) == 'f'){
            data.gender = "female";
        }
        else{
            data.gender = "male";
        }
        if(data.stimulus.charAt(9) == 'i'){
            data.congruency = "incongruent";
        }
        else{
            data.congruency = "congruent";
        }
        data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
        data.user_response = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
        data.trial = "ES";
    }
};

//Chooses what keyboard inputs are allowed for user to move forward
let control = {
    type: "image-keyboard-response",
    stimulus: jsPsych.timelineVariable('control'),
    choices: [KEYBOARD_PRESS_LEFT, KEYBOARD_PRESS_RIGHT],
    stimulus_duration: STIMULUS_DURATION,
    trial_duration: TRIAL_DURATION,
    maintain_aspect_ration: MAINTAIN_IMG_ASPECT_RATIO,
    stimulus_height: STIMULUS_HEIGHT,
    stimulus_width: STIMULUS_WIDTH,
    post_trial_gap: function(){
        return jsPsych.randomization.sampleWithoutReplacement(POST_TRIAL_GAP, 1)[0];
    },
    data: jsPsych.timelineVariable('data'),
    on_finish: function (data) {
        data.linux_time_on_finish =  Date.now().toString();
        jsPsych.data.addProperties({Version: VERSION});
        jsPsych.data.addProperties({ESSequence: SEQUENCE_NUMBER_ES});
        jsPsych.data.addProperties({ControlSequence: SEQUENCE_NUMBER_CONTROL});
        if(LEFT_ARROW_IS_FEAR_FEMALE && data.stimulus.charAt(16) == 'f'){
            data.correct_response = KEYBOARD_PRESS_LEFT;
        }
        else if(LEFT_ARROW_IS_FEAR_FEMALE && data.stimulus.charAt(16) == 'm'){
            data.correct_response = KEYBOARD_PRESS_RIGHT;
        }
        else if(!LEFT_ARROW_IS_FEAR_FEMALE && data.stimulus.charAt(16) == 'f'){
            data.correct_response = KEYBOARD_PRESS_RIGHT;
        }
        else if(!LEFT_ARROW_IS_FEAR_FEMALE && data.stimulus.charAt(16) == 'm'){
            data.correct_response = KEYBOARD_PRESS_LEFT;
        }
        if(data.stimulus.charAt(12) == 'f'){
            data.facial_expression_type = "fear";
        }
        else{
            data.facial_expression_type = "happy";
        }
        if(data.stimulus.charAt(16) == 'f'){
            data.gender = "female";
        }
        else{
            data.gender = "male";
        }
        if(data.stimulus.charAt(14) == 'i'){
            data.congruency = "incongruent";
        }
        else{
            data.congruency = "congruent";
        }
        data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
        data.user_response = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
        data.trial = "Control";
    }
};

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
        timeline: [fixation, control],
        timeline_variables: controlFirstHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    if(LEFT_ARROW_IS_FEAR_FEMALE){
        timeline.push(controltutorial1);
        timeline.push(controltutorial2);
        timeline.push(controltutorial3);
    }
    else{
        timeline.push(controltutorial4);
        timeline.push(controltutorial5);
        timeline.push(controltutorial6);
    }
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, test],
        timeline_variables: ESFirstHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    if(LEFT_ARROW_IS_FEAR_FEMALE){
        timeline.push(EStutorial1);
        timeline.push(EStutorial2);
        timeline.push(EStutorial3);
    }
    else{
        timeline.push(EStutorial4);
        timeline.push(EStutorial5);
        timeline.push(EStutorial6);
    }
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, control],
        timeline_variables: controlSecondHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    if(LEFT_ARROW_IS_FEAR_FEMALE){
        timeline.push(controltutorial1);
        timeline.push(controltutorial2);
        timeline.push(controltutorial3);
    }
    else{
        timeline.push(controltutorial4);
        timeline.push(controltutorial5);
        timeline.push(controltutorial6);
    }
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, test],
        timeline_variables: ESSecondHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    if(LEFT_ARROW_IS_FEAR_FEMALE){
        timeline.push(EStutorial1);
        timeline.push(EStutorial2);
        timeline.push(EStutorial3);
    }
    else{
        timeline.push(EStutorial4);
        timeline.push(EStutorial5);
        timeline.push(EStutorial6);
    }
    timeline.push(test_procedure);
}
else{
    //add first half ES array to finalSequence array
    //add first half control array to finalSequence array
    //add second half ES array to finalSequence array
    //add second half control array to finalSequence array
    let test_procedure = {
        timeline: [fixation, test],
        timeline_variables: ESFirstHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    if(LEFT_ARROW_IS_FEAR_FEMALE){
        timeline.push(EStutorial1);
        timeline.push(EStutorial2);
        timeline.push(EStutorial3);
    }
    else{
        timeline.push(EStutorial4);
        timeline.push(EStutorial5);
        timeline.push(EStutorial6);
    }
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, control],
        timeline_variables: controlFirstHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    if(LEFT_ARROW_IS_FEAR_FEMALE){
        timeline.push(controltutorial1);
        timeline.push(controltutorial2);
        timeline.push(controltutorial3);
    }
    else{
        timeline.push(controltutorial4);
        timeline.push(controltutorial5);
        timeline.push(controltutorial6);
    }
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, test],
        timeline_variables: ESSecondHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    if(LEFT_ARROW_IS_FEAR_FEMALE){
        timeline.push(EStutorial1);
        timeline.push(EStutorial2);
        timeline.push(EStutorial3);
    }
    else{
        timeline.push(EStutorial4);
        timeline.push(EStutorial5);
        timeline.push(EStutorial6);
    }
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, control],
        timeline_variables: controlSecondHalf,
        repetitions: NUMBER_OF_TRIALS
    };
    if(LEFT_ARROW_IS_FEAR_FEMALE){
        timeline.push(controltutorial1);
        timeline.push(controltutorial2);
        timeline.push(controltutorial3);
    }
    else{
        timeline.push(controltutorial4);
        timeline.push(controltutorial5);
        timeline.push(controltutorial6);
    }
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