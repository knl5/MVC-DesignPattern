export default class Button {
    constructor(view, controller) {
        this.view = view;
        this.controller = controller;
        
        this.init();
    }

    init() {
        this.view.setController(this.controller);
        this.controller.setView(this.view);

        this.view.create();
        this.controller.mouseListener();
    }

}