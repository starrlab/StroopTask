/*************Variables************/
const VERSION = "1";
const SEQUENCE_NUMBER = 1; //sequence can be 1-8
const STIMULUS_DURATION = 1000;
const FIXATION_DURATION = 2000;
const NUMBER_OF_TRIALS = 1;
const KEYBOARD_PRESS_HAPPY = 'h';
const KEYBOARD_PRESS_FEAR = 'f';
const FIXATION_KEY = '+';
let timeline = [];
let sequence = [];
/***********Instructions Screen************
    //instructions for the experiment
let instructions = {
        type: "html-keyboard-response",
        stimulus: "<p>In this task you will see faces with two different expression types: happy and fear, " +
            " and you will also see red text written over these faces.</p>" +
            "<p>Please ignore the red text and indicate the facial expression type: happy or fear by entering on your keyboard " +
            "<strong>" + KEYBOARD_PRESS_HAPPY + "</strong> for happy and <strong>" + KEYBOARD_PRESS_FEAR + "</strong> for fear.</p>" +
            "<p>-Press any key to continue-</p>" +
            "<div style='width: 1000px;'>" +
            "<div style='float: left;'><img src=" + h_i_m_ca_4 + "></img><img src=" + h_i_m_ca_1 + "></img>" +
            "<p class='small'><strong>Press the " + KEYBOARD_PRESS_HAPPY + " key</strong></p></div>" +
            "<div class='float: right;'><img src=" + imageLocationFearCongruent + "></img><img src=" + imageLocationFearIncongruent + "></img>" +
            "<p class='small'><strong>Press the " + KEYBOARD_PRESS_FEAR + " key</strong></p></div>" +
            "</div>"
    };
//add instructions to the timeline
timeline.push(instructions);
 */

/***********Test trials*************/
    //test trials. Chooses where the images are located.
    //Adds data fields to show if what the correct key is supposed to be
let f_c_f_af_1 = {
        stimulus: "img/f_c_f_af_1.png",
        data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }
}

let f_c_f_af_2 = {
    stimulus: "img/f_c_f_af_2.png",
    data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }
}

let f_c_f_af_3 = {
    stimulus: "img/f_c_f_af_3.png",
    data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }
}

let f_c_f_af_4 = {
    stimulus: "img/f_c_f_af_4.png",
    data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }
}

switch(SEQUENCE_NUMBER) {
    case 1:
        sequence = [h_i_m_ca_4, f_i_m_as_2, h_c_m_as_4, f_i_m_as_3, h_c_f_af_4, f_i_m_ca_1, f_c_m_af_4, h_c_m_af_2, f_c_f_ca_2, f_i_f_hi_1, h_i_f_as_2, f_i_f_af_4, f_c_f_af_3, h_c_f_hi_1, h_i_f_ca_1, h_c_m_hi_1, f_i_f_hi_4, h_i_f_af_4, f_i_m_hi_2, h_c_m_af_4, f_c_f_af_1, h_c_m_ca_3, f_c_f_as_1, h_i_f_as_3, f_i_m_af_4, f_c_f_hi_3, h_i_m_hi_2, f_i_f_hi_3, h_c_m_ca_4, h_i_m_af_2, h_c_f_as_4, h_i_m_af_1, h_c_f_af_2, h_i_f_as_4, f_i_f_ca_3, h_i_f_hi_3, f_c_f_ca_1, f_i_m_hi_4, f_c_f_af_2, f_i_f_as_3, f_c_m_as_3, h_i_m_af_3, f_c_m_as_4, f_i_m_hi_3, h_c_f_as_1, h_i_m_as_2, f_c_m_ca_3, f_i_f_as_2, f_c_f_hi_2, h_i_f_as_1, f_c_m_af_2, f_i_f_af_3, h_i_f_ca_4, h_c_f_hi_2, f_i_f_ca_2, h_c_f_af_3, f_i_f_ca_1, f_c_m_as_1, h_i_f_ca_2, h_c_f_ca_1, f_c_m_ca_4, h_c_m_as_2, f_i_f_ca_4, h_i_m_af_4, h_c_m_ca_2, h_i_f_hi_4, f_c_f_hi_1, h_i_f_af_1, f_c_m_hi_3, f_i_m_ca_2, h_i_m_as_4, f_i_m_ca_4, h_c_m_hi_4, f_i_f_as_4, h_i_f_hi_2, h_c_m_as_3, f_c_m_ca_1, h_c_f_hi_4, f_c_f_ca_3, h_i_m_ca_2, h_c_f_ca_2, h_i_m_as_1, f_c_m_hi_2, h_c_m_as_1, f_c_f_hi_4, f_i_m_as_4, h_c_f_hi_3, h_i_f_ca_3, f_c_f_ca_4, f_i_m_as_1, h_i_m_ca_1, f_i_f_hi_2, h_c_f_as_3, f_c_m_af_3, h_i_f_af_3, f_c_f_as_3, h_i_m_as_3, f_i_m_af_2, h_c_f_as_2, h_i_m_hi_4, h_c_f_ca_3, h_i_m_hi_1, h_c_m_af_1, f_c_m_as_2, h_i_m_hi_3, f_i_m_ca_3, h_c_m_hi_3, f_c_f_af_4, h_c_f_ca_4, h_i_m_ca_3, h_c_m_hi_2, h_i_f_hi_1, f_c_m_ca_2, f_i_f_af_1, h_c_m_ca_1, f_c_m_hi_1, h_i_f_af_2, h_c_m_af_3, f_i_f_as_1, f_c_m_hi_4, f_i_m_af_3, h_c_f_af_1, f_c_m_af_1, f_i_m_hi_1, f_c_f_as_2, f_i_m_af_1, f_c_f_as_4, f_i_f_af_2];
        break;
    case 2:
        // code block
        break;
    case 3:
        // code block
        break;
    case 4:
        // code block
        break;
    case 5:
        // code block
        break;
    case 6:
        // code block
        break;
    case 7:
        // code block
        break;
    case 8:
        // code block
        break;
    default:
        alert("Could not determine sequence!");
}

//Adds a fixation in between trials for number of millisecond
//User cannot press key to move forward
let fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:60px;">' + FIXATION_KEY + '</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: FIXATION_DURATION,
    data: { test_part: 'fixation' }
};

//Chooses what keyboard inputs are allowed for user to move forward
let test = {
    type: "image-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: [KEYBOARD_PRESS_HAPPY, KEYBOARD_PRESS_FEAR],
    stimulus_duration: STIMULUS_DURATION,
    data: jsPsych.timelineVariable('data'),
    on_load: function (data) {
        //do work
    },
    on_finish: function (data) {
        data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
        data.user_response = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
    }
};

//create a test object with images and keyboard inputs.
//Order of tests are randomized and repeated n number of times
let test_procedure = {
    timeline: [fixation, test],
    timeline_variables: sequence,
    repetitions: NUMBER_OF_TRIALS
};
//add this to the timeline
timeline.push(test_procedure);

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