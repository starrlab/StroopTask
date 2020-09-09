const CONTROL_GOES_FIRST = false;
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

const KEYBOARD_PRESS_HAPPY = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(39); //This is the arrow key code
const KEYBOARD_PRESS_FEAR = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(37); //This is the arrow key code
const KEYBOARD_PRESS_FEMALE = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(39); //This is the arrow key code
const KEYBOARD_PRESS_MALE = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(37); //This is the arrow key code
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
let f_c_m_hi_4 = {stimulus: "img/ES/f_c_m_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_i_f_as_4 = {stimulus: "img/ES/f_i_f_as_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_f_hi_4 = {stimulus: "img/ES/h_c_f_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_c_m_af_4 = {stimulus: "img/ES/f_c_m_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_i_m_ca_4 = {stimulus: "img/ES/h_i_m_ca_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_i_f_hi_1 = {stimulus: "img/ES/f_i_f_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let f_c_f_af_1 = {stimulus: "img/ES/f_c_f_af_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_i_m_ca_3 = {stimulus: "img/ES/h_i_m_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}
let f_i_m_hi_3 = {stimulus: "img/ES/f_i_m_hi_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }}
let h_c_m_as_1 = {stimulus: "img/ES/h_c_m_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }}

let h_c_fe_af_4 = {control: "img/Control/h_c_fe_af_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_i_fe_as_1 = {control: "img/Control/h_i_fe_as_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_ma_ca_3 = {control: "img/Control/f_i_ma_ca_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_fe_af_3 = {control: "img/Control/f_c_fe_af_3.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_ma_hi_1 = {control: "img/Control/f_i_ma_hi_1.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let f_c_fe_hi_4 = {control: "img/Control/f_c_fe_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let h_c_fe_as_2 = {control: "img/Control/h_c_fe_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_c_ma_hi_4 = {control: "img/Control/f_c_ma_hi_4.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_MALE }}
let h_i_fe_as_2 = {control: "img/Control/h_i_fe_as_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}
let f_i_fe_hi_2 = {control: "img/Control/f_i_fe_hi_2.png",data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEMALE }}

sequence = [f_c_m_hi_4, f_i_f_as_4, h_c_f_hi_4, f_c_m_af_4, h_i_m_ca_4, f_i_f_hi_1, f_c_f_af_1, h_i_m_ca_3, f_i_m_hi_3, h_c_m_as_1];
controlSequence = [h_c_fe_af_4, h_i_fe_as_1, f_i_ma_ca_3, f_c_fe_af_3, f_i_ma_hi_1, f_c_fe_hi_4, h_c_fe_as_2, f_c_ma_hi_4, h_i_fe_as_2, f_i_fe_hi_2];

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
    }
};

let feedback = {
    type: 'html-keyboard-response',
    trial_duration: ERROR_DISPLAY_LENGTH,
    choices: jsPsych.NO_KEYS,
    stimulus: function(){
        let last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        let correctResponse = jsPsych.data.get().last(1).values()[0].correct_response;
        let expression = "";
        let incorrectExpression = "";
        let correctResponseDirection = "";
        let inCorrectResponseDirection = "";
        if(correctResponse === "leftarrow"){
            expression = "fear";
            incorrectExpression = "happy";
            correctResponseDirection = "left arrow";
            inCorrectResponseDirection = "right arrow";
        }
        else{
            expression = "happy";
            incorrectExpression = "fear";
            correctResponseDirection = "right arrow";
            inCorrectResponseDirection = "left arrow";
        }

        if(last_trial_correct){
            return "<h1>Correct - you entered " + correctResponseDirection + " for " + expression + " and the facial expression was " + expression + "</h1>";
        } else {
            return "<h1>Incorrect - you entered " + inCorrectResponseDirection + " for " + incorrectExpression + ", and the facial expression was " + expression + "</h1>"
        }
    },
    on_load: function (data) {
        console.log(jsPsych.data.get().last(1).values()[0]);
    }
}

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
        data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
        data.user_response = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
    }
};

let controlFeedback = {
    type: 'html-keyboard-response',
    trial_duration: ERROR_DISPLAY_LENGTH,
    choices: jsPsych.NO_KEYS,
    stimulus: function(){
        let last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        let correctResponse = jsPsych.data.get().last(1).values()[0].correct_response;
        let gender = "";
        let incorrectExpression = "";
        let correctResponseDirection = "";
        let inCorrectResponseDirection = "";
        if(correctResponse === "leftarrow"){
            gender = "male";
            incorrectExpression = "female";
            correctResponseDirection = "left arrow";
            inCorrectResponseDirection = "right arrow";
        }
        else{
            gender = "female";
            incorrectExpression = "male";
            correctResponseDirection = "right arrow";
            inCorrectResponseDirection = "left arrow";
        }

        if(last_trial_correct){
            return "<h1>Correct - you entered " + correctResponseDirection + " for " + gender + " and the gender was " + gender + "</h1>";
        } else {
            return "<h1>Incorrect - you entered " + inCorrectResponseDirection + " for " + incorrectExpression + ", and the gender was " + gender + "</h1>"
        }
    },
    on_load: function (data) {
        console.log(jsPsych.data.get().last(1).values()[0]);
    }
}

let halfwayThrough = Math.floor(controlSequence.length / 2);
let controlFirstHalf = controlSequence.slice(0, halfwayThrough);
let controlSecondHalf = controlSequence.slice(halfwayThrough, controlSequence.length);
halfwayThrough = Math.floor(sequence.length / 2);
let ESFirstHalf = sequence.slice(0, halfwayThrough);
let ESSecondHalf = sequence.slice(halfwayThrough, sequence.length);

if(CONTROL_GOES_FIRST) {
    let test_procedure = {
        timeline: [fixation, control, controlFeedback],
        timeline_variables: controlFirstHalf
    };
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, test, feedback],
        timeline_variables: ESFirstHalf
    };
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, control, controlFeedback],
        timeline_variables: controlSecondHalf
    };
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, test, feedback],
        timeline_variables: ESSecondHalf
    };
    timeline.push(test_procedure);

} else{
    let test_procedure = {
        timeline: [fixation, test, feedback],
        timeline_variables: ESFirstHalf
    };
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, control, controlFeedback],
        timeline_variables: controlFirstHalf
    };
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, test, feedback],
        timeline_variables: ESSecondHalf
    };
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, control, controlFeedback],
        timeline_variables: controlSecondHalf
    };
    timeline.push(test_procedure);
}

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