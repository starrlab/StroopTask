import {KEYBOARD_PRESS_FEAR, KEYBOARD_PRESS_HAPPY} from '../configurations'
/***********Instructions Screen*************/
const instructions = () => {
    return{
        type: "html-keyboard-response",
        stimulus: "<p>In this task you will see faces with two different expression types: happy and fear, " +
            " and you will also see red text written over these faces.</p>" +
            "<p>Please ignore the red text and indicate the facial expression type: happy or fear by entering on your keyboard " +
            "<strong>" + KEYBOARD_PRESS_HAPPY + "</strong> for happy and <strong>" + KEYBOARD_PRESS_FEAR + "</strong> for fear.</p>" +
            "<p><strong>-Press any key to continue-</strong></p>"
    }
};

export default instructions;

