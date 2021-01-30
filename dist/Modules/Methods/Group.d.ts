import { ModMethod } from '../ModMethod';
import { AbstractMethods } from './AbstractMethods';
export declare class Group extends AbstractMethods {
    get(): any;
    set(to: string): Group;
    next(transitionIn?: string, transitionOut?: string): ModMethod;
    prev(transitionIn?: string, transitionOut?: string): ModMethod;
}
