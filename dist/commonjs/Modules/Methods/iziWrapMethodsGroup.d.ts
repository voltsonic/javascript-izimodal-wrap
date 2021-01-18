import iziWrapMethods from "../iziWrapMethods";
import iziWrapMethodsAbstract from "./iziWrapMethodsAbstract";
export default class iziWrapMethodsGroup extends iziWrapMethodsAbstract {
    get(): any;
    set(to: string): iziWrapMethodsGroup;
    next(transitionIn?: string, transitionOut?: string): iziWrapMethods;
    prev(transitionIn?: string, transitionOut?: string): iziWrapMethods;
}
