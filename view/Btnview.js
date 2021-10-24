export default class ButtonView {
    constructor(text) {
        this.view = text;
    }

    setController(controller) {
        this.state = controller;
    }

    create() {
        this.button = document.createElement('button');
        this.button.innerText = this.view;
        document.body.append(this.button);
    }

    setNeutral() {
        this.button.innerText = 'Neutral';
    }

    setHover() {
        this.button.innerText = 'Hover';
    }

    setReleased() {
        this.button.innerText = 'Released';
    }

    setPressed() {
        this.button.innerText = 'Pressed';
    }
}