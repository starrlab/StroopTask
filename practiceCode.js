const CONTROL_GOES_FIRST = false;
let leftArrowIsFearFemale = true;
//Image settings
const STIMULUS_HEIGHT = 500; //Changes the height of the images. Set to null for no changes
const STIMULUS_WIDTH = null; //Changes the width of the images.  Set to null for no changes
const MAINTAIN_IMG_ASPECT_RATIO = true; //must be true or false. Set only the width or height and set to true will keep the aspect ration of the image. Set to false if want to change height/width together.

//Trial time settings
const STIMULUS_DURATION = 2000; //This is the total time the image will be displayed before disapearing.
const TRIAL_DURATION = 3000; //This is the total time before the curent trial moves on to next trial
const POST_TRIAL_GAP = 0; //Sets the time after the trial finishes to wait until the fixation starts (trial hang time).

const FEEDBACK_DURATION = 5000; //Sets how long the feedback screen stays on after user inputs a response
const FEEDBACK_POST_TRIAL_GAP = [1000, 1250, 1500, 1750, 2000]; //Sets how long the after the feedback screen finishes a blank screen will be displayed before fixation

//Fixation settings
const FIXATION_DURATION = [1000]; //Sets the fixation duration. Can add as many values as you want or subtract values from array.
const FIXATION_KEY = '+';
const FIXATION_SIZE = 60;

const KEYBOARD_PRESS_TUTORIAL = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(13); //This is the tutorial key code
const KEYBOARD_PRESS_RIGHT = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(39); //This is the arrow key code
const KEYBOARD_PRESS_LEFT = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(37); //This is the arrow key code
let timeline = [];
let sequence = [];

/***********Image variables (pre-loaded)*************/
let f_c_m_hi_4 = {stimulus: "img/ES/f_c_m_hi_4.png",data: { test_part: 'test'}}
let f_i_f_as_4 = {stimulus: "img/ES/f_i_f_as_4.png",data: { test_part: 'test'}}
let h_c_f_hi_4 = {stimulus: "img/ES/h_c_f_hi_4.png",data: { test_part: 'test' }}
let f_c_m_af_4 = {stimulus: "img/ES/f_c_m_af_4.png",data: { test_part: 'test'}}
let h_i_m_ca_4 = {stimulus: "img/ES/h_i_m_ca_4.png",data: { test_part: 'test' }}
let f_i_f_hi_1 = {stimulus: "img/ES/f_i_f_hi_1.png",data: { test_part: 'test'}}
let f_c_f_af_1 = {stimulus: "img/ES/f_c_f_af_1.png",data: { test_part: 'test'}}
let h_i_m_ca_3 = {stimulus: "img/ES/h_i_m_ca_3.png",data: { test_part: 'test' }}
let f_i_m_hi_3 = {stimulus: "img/ES/f_i_m_hi_3.png",data: { test_part: 'test'}}
let h_c_m_as_1 = {stimulus: "img/ES/h_c_m_as_1.png",data: { test_part: 'test' }}

let h_c_fe_af_4 = {control: "img/Control/h_c_fe_af_4.png",data: { test_part: 'test' }}
let h_i_fe_as_1 = {control: "img/Control/h_i_fe_as_1.png",data: { test_part: 'test' }}
let f_i_ma_ca_3 = {control: "img/Control/f_i_ma_ca_3.png",data: { test_part: 'test' }}
let f_c_fe_af_3 = {control: "img/Control/f_c_fe_af_3.png",data: { test_part: 'test' }}
let f_i_ma_hi_1 = {control: "img/Control/f_i_ma_hi_1.png",data: { test_part: 'test' }}
let f_c_fe_hi_4 = {control: "img/Control/f_c_fe_hi_4.png",data: { test_part: 'test' }}
let h_c_fe_as_2 = {control: "img/Control/h_c_fe_as_2.png",data: { test_part: 'test' }}
let f_c_ma_hi_4 = {control: "img/Control/f_c_ma_hi_4.png",data: { test_part: 'test' }}
let h_i_fe_as_2 = {control: "img/Control/h_i_fe_as_2.png",data: { test_part: 'test' }}
let f_i_fe_hi_2 = {control: "img/Control/f_i_fe_hi_2.png",data: { test_part: 'test' }}

sequence = [f_c_m_hi_4, f_i_f_as_4, h_c_f_hi_4, f_c_m_af_4, h_i_m_ca_4, f_i_f_hi_1, f_c_f_af_1, h_i_m_ca_3, f_i_m_hi_3, h_c_m_as_1];
controlSequence = [h_c_fe_af_4, h_i_fe_as_1, f_i_ma_ca_3, f_c_fe_af_3, f_i_ma_hi_1, f_c_fe_hi_4, h_c_fe_as_2, f_c_ma_hi_4, h_i_fe_as_2, f_i_fe_hi_2];

/***********Instructions Screen*************/
let EStutorial1 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>In this task you will see faces with two different expression types: happy and fear, " +
        " and you will also see red text written over these faces.</p>" +
        "<p>Please ignore the red text and indicate the facial expression type: happy or fear by entering on your keyboard " +
        "→ for <strong>happy</strong> and ← for <strong>fear</strong>.</p>" +
        "<p>Press Enter key to continue</p>"
};

let EStutorial2 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>facial expression</strong> is <strong>happy</strong>; so you would enter → for happy</p>" +
        "<p>Press Enter key to continue</p><br>" +
        "<div><img src='img/ES/h_c_m_hi_1.png'/>" +
        "<p><strong>Facial Expression - Happy</strong><br>Word Meaning - Happy</p>" +
        "</div>",
};

let EStutorial3 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>facial expression</strong> is <strong>fear</strong>; so you would enter ← for fear</p>" +
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
        "← for <strong>happy</strong> and → for <strong>fear</strong>.</p>" +
        "<p>Press Enter key to continue</p>",
    on_finish: function (data) {
        leftArrowIsFearFemale = false;
    }
};

let EStutorial5 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>facial expression</strong> is <strong>happy</strong>; so you would enter ← for happy</p>" +
        "<p>Press Enter key to continue</p><br>" +
        "<div><img src='img/ES/h_c_m_hi_1.png'/>" +
        "<p><strong>Facial Expression - Happy</strong><br>Word Meaning - Happy</p>" +
        "</div>",
};

let EStutorial6 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>facial expression</strong> is <strong>fear</strong>; so you would enter → for fear</p>" +
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
        "<p>face: male or female by entering on your keyboard → for <strong>male</strong> and ← for <strong>female</strong>. " +
        "<p>Press Enter key to continue</p>"
};

let controltutorial2 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>gender</strong> is <strong>male</strong>; so you would enter → for male</p>" +
        "<p>Press Enter key to continue</p><br>" +
        "<div><img src='img/Control/h_c_ma_hi_1.png'/>" +
        "<p><strong>Gender - Male</strong><br>Word Meaning - Male</p>" +
        "</div>",
};

let controltutorial3 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>gender</strong> is <strong>female</strong>; so you would enter ← for female</p>" +
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
        "<p>face: male or female by entering on your keyboard ← for <strong>male</strong> and → for <strong>female</strong>. " +
        "<p>Press Enter key to continue</p>",
    on_finish: function (data) {
        leftArrowIsFearFemale = false;
    }
};

let controltutorial5 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>gender</strong> is <strong>male</strong>; so you would enter ← for male</p>" +
        "<p>Press Enter key to continue</p><br>" +
        "<div><img src='img/Control/h_c_ma_hi_1.png'/>" +
        "<p><strong>Gender - Male</strong><br>Word Meaning - Male</p>" +
        "</div>",
};

let controltutorial6 = {
    type: "html-keyboard-response",
    choices: [KEYBOARD_PRESS_TUTORIAL],
    stimulus: "<p>Here is an example of one of the stimuli you will see in the task.  For this image, the <strong>gender</strong> is <strong>female</strong>; so you would enter → for female</p>" +
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
    choices: [KEYBOARD_PRESS_LEFT, KEYBOARD_PRESS_RIGHT],
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
        data.linux_time_on_finish =  Date.now().toString();
        if(leftArrowIsFearFemale && data.stimulus.charAt(7) == 'f'){
            data.correct_response = KEYBOARD_PRESS_LEFT;
        }
        else if(leftArrowIsFearFemale && data.stimulus.charAt(7) == 'h'){
            data.correct_response = KEYBOARD_PRESS_RIGHT;
        }
        else if(!leftArrowIsFearFemale && data.stimulus.charAt(7) == 'f'){
            data.correct_response = KEYBOARD_PRESS_RIGHT;
        }
        else if(!leftArrowIsFearFemale && data.stimulus.charAt(7) == 'h'){
            data.correct_response = KEYBOARD_PRESS_LEFT;
        }
        data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
        data.user_response = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
    }
};

let feedback = {
    type: 'html-keyboard-response',
    trial_duration: FEEDBACK_DURATION,
    post_trial_gap: function(){
        return jsPsych.randomization.sampleWithoutReplacement(FEEDBACK_POST_TRIAL_GAP, 1)[0];
    },
    choices: jsPsych.NO_KEYS,
    stimulus: function(){
        let last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        let correctResponse = jsPsych.data.get().last(1).values()[0].correct_response;
        let expression = "";
        let incorrectExpression = "";
        let correctResponseDirection = "";
        let inCorrectResponseDirection = "";
        if(correctResponse === "leftarrow"){
            if(leftArrowIsFearFemale){
                expression = "fear";
                incorrectExpression = "happy";
                correctResponseDirection = "left arrow";
                inCorrectResponseDirection = "right arrow";
            }
            else{
                expression = "happy";
                incorrectExpression = "fear";
                correctResponseDirection = "left arrow";
                inCorrectResponseDirection = "right arrow";
            }
        }
        else{
            if(leftArrowIsFearFemale){
                expression = "happy";
                incorrectExpression = "fear";
                correctResponseDirection = "right arrow";
                inCorrectResponseDirection = "left arrow";
            }
            else{
                expression = "fear";
                incorrectExpression = "happy";
                correctResponseDirection = "right arrow";
                inCorrectResponseDirection = "left arrow";
            }
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
    choices: [KEYBOARD_PRESS_LEFT, KEYBOARD_PRESS_RIGHT],
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
        data.linux_time_on_finish =  Date.now().toString();
        if(leftArrowIsFearFemale && data.stimulus.charAt(16) == 'f'){
            data.correct_response = KEYBOARD_PRESS_LEFT;
        }
        else if(leftArrowIsFearFemale && data.stimulus.charAt(16) == 'm'){
            data.correct_response = KEYBOARD_PRESS_RIGHT;
        }
        else if(!leftArrowIsFearFemale && data.stimulus.charAt(16) == 'f'){
            data.correct_response = KEYBOARD_PRESS_RIGHT;
        }
        else if(!leftArrowIsFearFemale && data.stimulus.charAt(16) == 'm'){
            data.correct_response = KEYBOARD_PRESS_LEFT;
        }
        data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
        data.user_response = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
    }
};

let controlFeedback = {
    type: 'html-keyboard-response',
    trial_duration: FEEDBACK_DURATION,
    post_trial_gap: function(){
        return jsPsych.randomization.sampleWithoutReplacement(FEEDBACK_POST_TRIAL_GAP, 1)[0];
    },
    choices: jsPsych.NO_KEYS,
    stimulus: function(){
        let last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        let correctResponse = jsPsych.data.get().last(1).values()[0].correct_response;
        let gender = "";
        let incorrectExpression = "";
        let correctResponseDirection = "";
        let inCorrectResponseDirection = "";
        if(correctResponse === "leftarrow"){
            if(leftArrowIsFearFemale){
                gender = "female";
                incorrectExpression = "male";
                correctResponseDirection = "left arrow";
                inCorrectResponseDirection = "right arrow";
            }
            else{
                gender = "male";
                incorrectExpression = "female";
                correctResponseDirection = "left arrow";
                inCorrectResponseDirection = "right arrow";
            }
        }
        else{
            if(leftArrowIsFearFemale){
                gender = "male";
                incorrectExpression = "female";
                correctResponseDirection = "right arrow";
                inCorrectResponseDirection = "left arrow";
            }
            else{
                gender = "female";
                incorrectExpression = "male";
                correctResponseDirection = "right arrow";
                inCorrectResponseDirection = "left arrow";
            }
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
    timeline.push(controltutorial1);
    timeline.push(controltutorial2);
    timeline.push(controltutorial3);
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, test, feedback],
        timeline_variables: ESFirstHalf
    };
    timeline.push(EStutorial1);
    timeline.push(EStutorial2);
    timeline.push(EStutorial3);
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, control, controlFeedback],
        timeline_variables: controlSecondHalf
    };
    timeline.push(controltutorial4);
    timeline.push(controltutorial5);
    timeline.push(controltutorial6);
    timeline.push(test_procedure);

    test_procedure = {
        timeline: [fixation, test, feedback],
        timeline_variables: ESSecondHalf
    };
    timeline.push(EStutorial4);
    timeline.push(EStutorial5);
    timeline.push(EStutorial6);
    timeline.push(test_procedure);

} else{
    let test_procedure = {
        timeline: [fixation, test, feedback],
        timeline_variables: ESFirstHalf
    };
    timeline.push(EStutorial1);
    timeline.push(EStutorial2);
    timeline.push(EStutorial3);
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, control, controlFeedback],
        timeline_variables: controlFirstHalf
    };
    timeline.push(controltutorial1);
    timeline.push(controltutorial2);
    timeline.push(controltutorial3);
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, test, feedback],
        timeline_variables: ESSecondHalf
    };
    timeline.push(EStutorial4);
    timeline.push(EStutorial5);
    timeline.push(EStutorial6);
    timeline.push(test_procedure);
    test_procedure = {
        timeline: [fixation, control, controlFeedback],
        timeline_variables: controlSecondHalf
    };
    timeline.push(controltutorial4);
    timeline.push(controltutorial5);
    timeline.push(controltutorial6);
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