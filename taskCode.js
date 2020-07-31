/*************Variables************/
//JsPsych Vars
let timeline = [];
const VERSION = "1";
const KEYBOARD_PRESS_HAPPY = 'h';
const KEYBOARD_PRESS_FEAR = 'f';
const STIMULUS_DURATION = 1000;
const FIXATION_DURATION = 2000;
const FIXATION_KEY = '+';
const numberOfTrials = 1;
const randomizedTrials = true;
//Images
const imageLocationHappyCongruent = "img/HappyCongruent.PNG";
const imageLocationHappyIncongruent = "img/HappyIncongruent.PNG";
const imageLocationFearCongruent = "img/FearCongruent.PNG";
const imageLocationFearIncongruent = "img/FearIncongruent.PNG";


/***********Instructions Screen*************/
    //instructions for the experiment
let instructions = {
        type: "html-keyboard-response",
        stimulus: "<p>In this task you will see faces with two different expression types: happy and fear, " +
            " and you will also see red text written over these faces.</p>" +
            "<p>Please ignore the red text and indicate the facial expression type: happy or fear by entering on your keyboard " +
            "<strong>" + KEYBOARD_PRESS_HAPPY + "</strong> for happy and <strong>" + KEYBOARD_PRESS_FEAR + "</strong> for fear.</p>" +
            "<p>-Press any key to continue-</p>" +
            "<div style='width: 1000px;'>" +
            "<div style='float: left;'><img src=" + imageLocationHappyCongruent + "></img><img src=" + imageLocationHappyIncongruent + "></img>" +
            "<p class='small'><strong>Press the " + KEYBOARD_PRESS_HAPPY + " key</strong></p></div>" +
            "<div class='float: right;'><img src=" + imageLocationFearCongruent + "></img><img src=" + imageLocationFearIncongruent + "></img>" +
            "<p class='small'><strong>Press the " + KEYBOARD_PRESS_FEAR + " key</strong></p></div>" +
            "</div>"
    };
//add instructions to the timeline
timeline.push(instructions);

/***********Test trials*************/
    //test trials. Chooses where the images are located.
    //Adds data fields to show if what the correct key is supposed to be
let h0 = {
        stimulus: imageLocationHappyCongruent,
        data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }
    }


let h1 = {
    stimulus: imageLocationHappyIncongruent,
    data: { test_part: 'test', correct_response: KEYBOARD_PRESS_HAPPY }
}

let s0 = {
    stimulus: imageLocationFearCongruent,
    data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }
}

let s1 = {
    stimulus: imageLocationFearIncongruent,
    data: { test_part: 'test', correct_response: KEYBOARD_PRESS_FEAR }
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
    }
};

//create a test object with images and keyboard inputs.
//Order of tests are randomized and repeated n number of times
let test_procedure = {
    timeline: [fixation, test],
    timeline_variables: [s0, h0, h1, s1],
    randomize_order: randomizedTrials,
    repetitions: numberOfTrials
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