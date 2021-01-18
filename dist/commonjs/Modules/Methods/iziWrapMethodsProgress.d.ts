import iziWrapMethods from "../iziWrapMethods";
import iziWrapMethodsAbstract from "./iziWrapMethodsAbstract";
export default class iziWrapMethodsProgress extends iziWrapMethodsAbstract {
    start(): iziWrapMethods;
    pause(): iziWrapMethods;
    resume(): iziWrapMethods;
    reset(): iziWrapMethodsProgress;
}
