import iziWrapMethodsAbstract from "./iziWrapMethodsAbstract";
export default class iziWrapMethodsDisplay extends iziWrapMethodsAbstract {
    get(): 'closed' | 'closing' | 'opened' | 'opening';
    fullscreen(enable?: boolean): iziWrapMethodsDisplay;
    toggle(): iziWrapMethodsDisplay;
    open(): iziWrapMethodsDisplay;
    close(): iziWrapMethodsDisplay;
}
