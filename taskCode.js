/*************Variables************/
    //JsPsych Vars
    //Chooses what keyboard inputs that can be adjusted and are allowed for user click for each image
const keyboardPressHappy = 'h';
const keyboardPressSad = 'f';
//Key to display between trials to user
const fixationKey = '+';
//Number of trials
const numberOfTrials = 1;
//Randomize order of trials set to true, if not randomized set to false
const randomizedTrials = true;
//Images to use for each and their path
const imageLocationHappyCongruent = "img/HappyCongruent.PNG";
const imageLocationHappyIncongruent = "img/HappyIncongruent.PNG";
const imageLocationSadCongruent = "img/SadCongruent.PNG";
const imageLocationSadIncongruent = "img/SadIncongruent.PNG";
//Timeline is used as the set of trials we want to run in the experiment
let timeline = [];

/***********Instructions Screen*************/
    //instructions for the experiment
let instructions = {
        type: "html-keyboard-response",
        stimulus: "<p>In this task you will see faces with two different expression types: happy and fear, " +
            " and you will also see red text written over these faces.</p>" +
            "<p>Please ignore the red text and indicate the facial expression type: happy or fear by entering on your keyboard " +
            "<strong>" + keyboardPressHappy + "</strong> for happy and <strong>" + keyboardPressSad + "</strong> for fear.</p>" +
            "<p>-Press any key to continue-</p>" +
            "<div style='width: 1000px;'>" +
            "<div style='float: left;'><img src=" + imageLocationHappyCongruent + "></img><img src=" + imageLocationHappyIncongruent + "></img>" +
            "<p class='small'><strong>Press the " + keyboardPressHappy + " key</strong></p></div>" +
            "<div class='float: right;'><img src=" + imageLocationSadCongruent + "></img><img src=" + imageLocationSadIncongruent + "></img>" +
            "<p class='small'><strong>Press the " + keyboardPressSad + " key</strong></p></div>" +
            "</div>"
    };
//add instructions to the timeline
timeline.push(instructions);

/***********Test trials*************/
    //test trials. Chooses where the images are located.
    //Adds data fields to show if what the correct key is supposed to be
let h0 = {
        stimulus: imageLocationHappyCongruent,
        data: { test_part: 'test', correct_response: keyboardPressHappy }
    }


let h1 = {
    stimulus: imageLocationHappyIncongruent,
    data: { test_part: 'test', correct_response: keyboardPressHappy }
}

let s0 = {
    stimulus: imageLocationSadCongruent,
    data: { test_part: 'test', correct_response: keyboardPressSad }
}

let s1 = {
    stimulus: imageLocationSadIncongruent,
    data: { test_part: 'test', correct_response: keyboardPressSad }
}
/*
let test_stimuli = [
    { stimulus: imageLocationHappyCongruent, data: { test_part: 'test', correct_response: keyboardPressHappy } },
    { stimulus: imageLocationHappyIncongruent, data: { test_part: 'test', correct_response: keyboardPressHappy } },
    { stimulus: imageLocationSadCongruent, data: { test_part: 'test', correct_response: keyboardPressSad } },
    { stimulus: imageLocationSadIncongruent, data: { test_part: 'test', correct_response: keyboardPressSad } }
];*/
//Adds a + in between trials for randomized number of millisecond. This is set in trial_duration
//User cannot press key to move forward
let fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:60px;">' + fixationKey + '</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 2000,
    data: { test_part: 'fixation' }
};

//Chooses what keyboard inputs are allowed for user to move forward
let test = {
    type: "image-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: [keyboardPressHappy, keyboardPressSad],
    stimulus_duration: 1000,
    data: jsPsych.timelineVariable('data'),
    on_start: function (data) {
        //send data to rcs for start
        /*
        sock.send(numMilliSecSinceNineteenSeventy);
        sock.receive();
        */
    },
    on_finish: function (data) {
        //send data to rcs for stop
        /*
        sock.send(numMilliSecSinceNineteenSeventy);
        sock.receive();
        */
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

        }
    };
//add this to timeline
timeline.push(debrief_block);

/*********Start Experiment************/
//Display data shows the data displayed at end of trials
jsPsych.init({
    timeline: timeline,
    on_finish: function () {
        jsPsych.data.displayData();
    }
});