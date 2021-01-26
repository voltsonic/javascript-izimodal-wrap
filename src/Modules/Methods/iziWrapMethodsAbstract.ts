/* tslint:disable:class-name */
'use strict';

import iziWrapModuleAbstract from '../iziWrapModuleAbstract';
import iziWrapMethods from '../iziWrapMethods';

/**
 * @hidden
 */
export default class iziWrapMethodsAbstract extends iziWrapModuleAbstract {
    up(): iziWrapMethods {
        return this.w.methods;
    }
}
