import { ModMethod } from '../ModMethod';
import { AbstractMethods } from './AbstractMethods';
export declare class Progress extends AbstractMethods {
    start(): ModMethod;
    pause(): ModMethod;
    resume(): ModMethod;
    reset(): Progress;
}
