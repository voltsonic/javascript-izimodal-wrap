"use strict";

import iziWrapModuleAbstract from "./iziWrapModuleAbstract";

export default class iziWrapMethods extends iziWrapModuleAbstract {
    public groups(){
        return {
            get: () => this.w.modal.$.iziModal('getGroup'),
            set: (to: string): iziWrapMethods => {
                this.w.modal.$.iziModal('setGroup', to);
                return this;
            },
            next: (transitionIn?: string, transitionOut?: string): iziWrapMethods => {
                this.w.modal.$.iziModal('next', {transitionIn, transitionOut});
                return this;
            },
            prev: (transitionIn?: string, transitionOut?: string): iziWrapMethods => {
                this.w.modal.$.iziModal('prev', {transitionIn, transitionOut});
                return this;
            },
        };
    }
    public loading(){
        return {
            start: (): iziWrapMethods => {
                this.w.modal.$.iziModal('startLoading');
                return this;
            },
            stop: (): iziWrapMethods => {
                this.w.modal.$.iziModal('stopLoading');
                return this;
            },
        };
    }
    public progress(){
        return {
            start: (): iziWrapMethods => {
                this.w.modal.$.iziModal('startLoading');
                return this;
            },
            pause: (): iziWrapMethods => {
                this.w.modal.$.iziModal('stopLoading');
                return this;
            },
            resume: (): iziWrapMethods => {
                this.w.modal.$.iziModal('stopLoading');
                return this;
            },
            reset: (): iziWrapMethods => {
                this.w.modal.$.iziModal('stopLoading');
                return this;
            },
        };
    }
    public position(){
        return {
            top: (to: string | number): iziWrapMethods => {
                this.w.modal.$.iziModal('setTop', to);
                return this;
            },
            bottom: (to: string | number): iziWrapMethods => {
                this.w.modal.$.iziModal('setBottom', 100);
                return this;
            },
            width: (to: string | number): iziWrapMethods => {
                this.w.modal.$.iziModal('setWidth', to);
                return this;
            },
            zIndex: (to: number): iziWrapMethods => {
                this.w.modal.$.iziModal('setZindex', to);
                return this;
            },
        };
    }
    public header(){
        return {
            color: (to: string): iziWrapMethods => {
                this.w.modal.$.iziModal('setHeaderColor', to);
                return this;
            },
            enable: (): iziWrapMethods => {
                this.w.modal.$.iziModal('setHeader', true);
                return this;
            },
            disable: (): iziWrapMethods => {
                this.w.modal.$.iziModal('setHeader', false);
                return this;
            },
            iconClass: (to: string): iziWrapMethods =>  {
                this.w.modal.$.iziModal('setIcon', to);
                return this;
            },
            iconText: (to: string): iziWrapMethods =>  {
                this.w.modal.$.iziModal('setIconText', to);
                return this;
            },
            title: (to: string): iziWrapMethods =>  {
                this.w.modal.$.iziModal('setTitle', to);
                return this;
            },
            subtitle: (to: string): iziWrapMethods =>  {
                this.w.modal.$.iziModal('setSubtitle', to ?? '');
                return this;
            },
        };
    }
    public content(){
        return {
            backgroundColor: (to: string): iziWrapMethods => {
                this.w.modal.$.iziModal('setBackground', to);
                return this;
            },
            set: (content: string, isDefault: boolean = true): iziWrapMethods => {
                this.w.modal.$.iziModal('setContent', {
                    content,
                    default: isDefault
                });
                return this;
            },
            reset: (): iziWrapMethods => {
                this.w.modal.$.iziModal('resetContent');
                return this;
            }
        };
    }
    public animations(){
        return {
            transitionIn: (to: string): iziWrapMethods =>  {
                this.w.modal.$.iziModal('setTransitionIn', to);
                return this;
            },
            transitionOut: (to: string): iziWrapMethods =>  {
                this.w.modal.$.iziModal('setTransitionOut', to);
                return this;
            },
        };
    }
    public display(){
        return {
            get: (): 'closed' | 'closing' | 'opened' | 'opening' => this.w.modal.$.iziModal('getState'),
            fullscreen: (enable = false): iziWrapMethods =>  {
                this.w.modal.$.iziModal('setFullscreen', enable);
                return this;
            },
            toggle: (): iziWrapMethods => {
                this.w.modal.$.iziModal('toggle');
                return this;
            },
            open: (): iziWrapMethods => {
                this.w.modal.$.iziModal('open');
                return this;
            },
            close: (): iziWrapMethods => {
                this.w.modal.$.iziModal('close');
                return this;
            }
        };
    }
}
