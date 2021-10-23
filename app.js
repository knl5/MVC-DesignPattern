import ButtonView from "./btnview.js";
import ButtonController from "./Btncontroller.js";
import Button from "./Button.js";


/* class App {
    constructor() {
        this.button = new ButtonView;
    }

    createButton() {
        
    }
} */

const button = new Button(new ButtonController('Neuutral'), new ButtonView('Neutral'));
console.log(button)