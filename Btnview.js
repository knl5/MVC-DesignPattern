

export default class ButtonView {
    constructor(view) {
        this.create();
        this.button.innerText = view;
    }

    create() {
        this.button = document.createElement('button');
        this.button.innerText = this.text;
        document.body.append(this.button);
        return this.button;
    }

    /* setNeutral() {
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
    } */
}