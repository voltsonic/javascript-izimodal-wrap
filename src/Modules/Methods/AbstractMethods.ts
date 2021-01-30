/* tslint:disable:class-name */
'use strict';

import {ModAbstract} from '../ModAbstract';
import {ModMethod} from '../ModMethod';

/**
 * @hidden
 */
export class AbstractMethods extends ModAbstract {
    up(): ModMethod {
        return this.w.methods;
    }
}
