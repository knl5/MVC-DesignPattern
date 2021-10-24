import Button from "./class/Button.js";
import ButtonController from "./controller/Btncontroller.js";
import ButtonTime from "./controller/ButtonTime.js";
import ButtonView from "./view/Btnview.js";

const button = new Button(new ButtonView('Neutral'), new ButtonController());
const button1 = new Button(new ButtonView('Neutral'), new ButtonTime(2000));
console.log(button, button1);