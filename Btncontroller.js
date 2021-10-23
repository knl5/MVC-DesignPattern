

export default class ButtonController {
    constructor(controller) {
        this.state = 'Neutral';
        controller = this.state;

        this.onClick();
    }

    

    neutralState() {
        this.state = 'Neutral';
    }

    releasedState() {
        this.state = 'Released';
    }

    onClick() {
        this.button.addEventListener('click', () => {
            if(this.state === 'Neutral') {
                this.state = 'Released';
            } else {
                this.state = 'Neutral';
            }
        })
    }
}