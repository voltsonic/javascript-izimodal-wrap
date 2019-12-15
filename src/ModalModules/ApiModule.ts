"use strict";

import {AbstractModule} from "./AbstractModule";
import deepmerge from "deepmerge";
// import deepmerge = require("deepmerge");

export class ApiModule extends AbstractModule {
    destroy(): ApiModule {
        this.modal.applyMethod("destroy");
        return this;
    }

    get = ({
        group: (): string => this.modal.applyMethod("getGroup"),
        state: (): string => this.modal.applyMethod("getState")
    });

    loading = ({
        start: (): ApiModule => {
            this.modal.applyMethod("resetContent");
            return this;
        },
        stop: (): ApiModule => {
            this.modal.applyMethod("resetContent");
            return this;
        }
    });
    
    navigate = ({
        next: (options?: IziModalTransitions): ApiModule => {
            this.modal.applyMethod("next", options);
            return this;
        },
        prev: (options?: IziModalTransitions): ApiModule => {
            this.modal.applyMethod("prev", options);
            return this;
        }
    });
    
    progress = ({
        pause: (): ApiModule => {
            this.modal.applyMethod("pauseProgress");
            return this;
        },
        reset: (): ApiModule => {
            this.modal.applyMethod("resetProgress");
            return this;
        },
        resume: (): ApiModule => {
            this.modal.applyMethod("resumeProgress");
            return this;
        },
        start: (): ApiModule => {
            this.modal.applyMethod("startProgress");
            return this;
        }
    });

    resetContent(): ApiModule {
        this.modal.applyMethod("resetContent");
        return this;
    }
    
    set = ({
        content: (content: any, setAsDefault: boolean = false): ApiModule => {
            this.modal.applyMethod("setContent", deepmerge({content}, (setAsDefault?{default:true}:{})));
            return this;
        },
        group: (groupId: string): ApiModule => {
            this.modal.applyMethod("setGroup", groupId);
            return this;
        }
    });
    ui = ({
        transitions: {
            in: (to: string): ApiModule => {
                this.modal.applyMethod("setTransitionIn", to);
                return this;
            },
            out: (to: string): ApiModule => {
                this.modal.applyMethod("setTransitionOut", to);
                return this;
            }
        },
        header: {
            icon: {
                class: (to: string): ApiModule => {
                    this.modal.applyMethod("setIcon", to);
                    return this;
                },
                text: (to: string): ApiModule => {
                    this.modal.applyMethod("setIconText", to);
                    return this;
                }
            },
            color: (to: string): ApiModule => {
                this.modal.applyMethod("setHeaderColor", to);
                return this;
            },
            title: (to: string = ""): ApiModule => {
                this.modal.applyMethod("setTitle", to);
                return this;
            },
            subtitle: (to: string = ""): ApiModule => {
                this.modal.applyMethod("setSubtitle", to);
                return this;
            },
            hide: (): ApiModule => {
                this.modal.applyMethod("setHeader", false);
                return this;
            },
            show: (): ApiModule => {
                this.modal.applyMethod("setHeader", true);
                return this;
            }
        },
        display: {
            zIndex: (to: number): ApiModule => {
                this.modal.applyMethod("setZindex", to);
                return this;
            },
            width: (to: number|string): ApiModule => {
                this.modal.applyMethod("setWidth", to);
                return this;
            }
        },
        position: {
            top: (to: number|string): ApiModule => {
                this.modal.applyMethod("setTop", to);
                return this;
            },
            bottom: (to: number|string): ApiModule => {
                this.modal.applyMethod("setBottom", to);
                return this;
            }
        }
    });
    view = ({
            close: (options?: IziModalTransitions): ApiModule => {
                this.modal.applyMethod("close", options);
                return this;
            },
            open: (options?: IziModalTransitions): ApiModule => {
                this.modal.applyMethod("open", options);
                return this;
            },
            toggle: (): ApiModule => {
                this.modal.applyMethod("toggle");
                return this;
            }
        }
    );
}
