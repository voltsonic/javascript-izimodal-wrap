import iziWrapMethodsAbstract from "./iziWrapMethodsAbstract";
export default class iziWrapMethodsContent extends iziWrapMethodsAbstract {
    backgroundColor(to: string): iziWrapMethodsContent;
    set(content: string, isDefault?: boolean): iziWrapMethodsContent;
    reset(): iziWrapMethodsContent;
}
