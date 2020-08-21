//Image settings
const STIMULUS_HEIGHT = 500; //Changes the height of the images. Set to null for no changes
const STIMULUS_WIDTH = null; //Changes the width of the images.  Set to null for no changes
const MAINTAIN_IMG_ASPECT_RATIO = true; //must be true or false. Set only the width or height and set to true will keep the aspect ration of the image. Set to false if want to change height/width together.

//Trial time settings
const STIMULUS_DURATION = 1000; //This is the total time the image will be displayed before disapearing.
const TRIAL_DURATION = 3000; //This is the total time before the curent trial moves on to next trial
const POST_TRIAL_GAP = 1000; //Sets the time after the trial finishes to wait until the fixation starts (trial hang time).

//Fixation settings
const FIXATION_DURATION = [2000, 2250, 2500, 2750, 3000]; //Sets the fixation duration. Can add as many values as you want or subtract values from array.
const FIXATION_KEY = '+';
const FIXATION_SIZE = 60;

const ERROR_DISPLAY_LENGTH = 5000;
const ERROR_DISPLAY_MESSAGE = "You messed up A-A-Ron!";

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
let h_c_f_hi_4 = {stimulus: "img/h_c_f_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_c_m_af_4 = {stimulus: "img/f_c_m_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_i_m_ca_4 = {stimulus: "img/h_i_m_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_i_f_hi_1 = {stimulus: "img/f_i_f_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_af_1 = {stimulus: "img/f_c_f_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_i_m_ca_3 = {stimulus: "img/h_i_m_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_i_m_hi_3 = {stimulus: "img/f_i_m_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_m_as_1 = {stimulus: "img/h_c_m_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}

sequence = [f_c_m_hi_4, f_i_f_as_4, h_c_f_hi_4, f_c_m_af_4, h_i_m_ca_4, f_i_f_hi_1, f_c_f_af_1, h_i_m_ca_3, f_i_m_hi_3, h_c_m_as_1];

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
        data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
        data.user_response = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
        if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response) != data.key_press){
            console.log('wrong key');
            skipNextTrialFunc();
        }
    }
};

//create a test object with images and keyboard inputs.
//Order of tests are randomized and repeated n number of times
let test_procedure = {
    timeline: [fixation, test],
    timeline_variables: sequence
};
//add this to the timeline
timeline.push(test_procedure);

/***********Debrief Screen************/
    //allows you to show user statistics of trials
let debrief_block = {
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
            //let filename = "task_" + Date.now().toString() + "_ver" + VERSION + ".json";
            //saveData(jsPsych.data.get().json(), filename);
        }
    };
//add this to timeline
timeline.push(debrief_block);


/*********Start Experiment************/
//Display data shows the data displayed at end of trials
jsPsych.init({
    timeline: timeline
});

const skipNextTrialFunc = () => {
    //document.getElementById("error-header").innerHTML = ERROR_DISPLAY_MESSAGE;
    jsPsych.pauseExperiment();
    setTimeout(function(){
        //document.getElementById("error-header").innerHTML = '';
        jsPsych.resumeExperiment();
    }, ERROR_DISPLAY_LENGTH);
}