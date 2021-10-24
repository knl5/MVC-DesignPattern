export default class ButtonController {
    constructor() {
        this.controller = this.neutralState();
    }

    setView(view) {
        this.view = view
    }

    neutralState() {
        this.state = 'Neutral';
    }

    releasedState() {
        this.state = 'Released';
    }

    setLastState() {
        if (this.state === 'Neutral') {
            this.view.setNeutral();
        } else {
            this.view.setReleased();
        }
    }

    switchState() {
        if (this.state === 'Neutral') {
            this.releasedState();
            this.view.setReleased();
        } else {
            this.neutralState();
            this.view.setNeutral();
        }
    }

    onClick() {
        this.view.button.addEventListener('click', () => {
            this.switchState();
        });
    }

    onHover() {
        this.view.button.addEventListener('mouseenter', () => {
            this.view.setHover();
        });
    }

    onLeave() {
        this.view.button.addEventListener('mouseleave', () => {
            this.setLastState();
        });
    }

    onPressed() {
        this.view.button.addEventListener('mousedown', () => {
            this.view.setPressed();
        });
    }

    mouseListener() {
        this.onClick();
        this.onHover();
        this.onLeave();
        this.onPressed();
    }
}