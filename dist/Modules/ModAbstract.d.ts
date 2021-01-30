import iziModalWrap from '../iziModalWrap';
export declare abstract class ModAbstract {
    protected w: iziModalWrap;
    constructor(modal: iziModalWrap);
    init(): void;
    up(): any | iziModalWrap;
}
