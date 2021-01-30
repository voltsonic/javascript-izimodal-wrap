import { AbstractMethods } from './AbstractMethods';
export declare class Content extends AbstractMethods {
    backgroundColor(to: string): Content;
    set(content: string, isDefault?: boolean): Content;
    reset(): Content;
}
