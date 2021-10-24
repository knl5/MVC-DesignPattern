import ButtonController from "./Btncontroller.js";

export default class ButtonTime extends ButtonController {
    constructor(time) {
        super();

        this.returnNeutral(time);
    }

    returnNeutral(time) {
        if (this.releasedState) {
            this.timeOut(time);
        }
    }

    timeOut(time) {
        setInterval(() => {
            this.neutralState();
            this.view.setNeutral();
        }, time);
    }
}