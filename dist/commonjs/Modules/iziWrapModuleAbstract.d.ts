import iziModalWrap from "../iziModalWrap";
export default abstract class iziWrapModuleAbstract {
    protected w: iziModalWrap;
    constructor(modal: iziModalWrap);
    init(): void;
    up(): any | iziModalWrap;
}
