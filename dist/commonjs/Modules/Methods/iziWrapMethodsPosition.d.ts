import iziWrapMethodsAbstract from "./iziWrapMethodsAbstract";
export default class iziWrapMethodsPosition extends iziWrapMethodsAbstract {
    top(to: string | number): iziWrapMethodsPosition;
    bottom(to: string | number): iziWrapMethodsPosition;
    width(to: string | number): iziWrapMethodsPosition;
    zIndex(to: number): iziWrapMethodsPosition;
}
