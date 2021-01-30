import { AbstractMethods } from './AbstractMethods';
export declare class Display extends AbstractMethods {
    get(): 'closed' | 'closing' | 'opened' | 'opening';
    fullscreen(enable?: boolean): Display;
    toggle(): Display;
    open(): Display;
    close(): Display;
}
