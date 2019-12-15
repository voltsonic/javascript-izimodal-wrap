import { AbstractModule } from "./AbstractModule";
export declare class ApiModule extends AbstractModule {
    destroy(): ApiModule;
    get: {
        group: () => string;
        state: () => string;
    };
    loading: {
        start: () => ApiModule;
        stop: () => ApiModule;
    };
    navigate: {
        next: (options?: IziModalTransitions) => ApiModule;
        prev: (options?: IziModalTransitions) => ApiModule;
    };
    progress: {
        pause: () => ApiModule;
        reset: () => ApiModule;
        resume: () => ApiModule;
        start: () => ApiModule;
    };
    resetContent(): ApiModule;
    set: {
        content: (content: any, setAsDefault?: boolean) => ApiModule;
        group: (groupId: string) => ApiModule;
    };
    ui: {
        transitions: {
            in: (to: string) => ApiModule;
            out: (to: string) => ApiModule;
        };
        header: {
            icon: {
                class: (to: string) => ApiModule;
                text: (to: string) => ApiModule;
            };
            color: (to: string) => ApiModule;
            title: (to?: string) => ApiModule;
            subtitle: (to?: string) => ApiModule;
            hide: () => ApiModule;
            show: () => ApiModule;
        };
        display: {
            zIndex: (to: number) => ApiModule;
            width: (to: string | number) => ApiModule;
        };
        position: {
            top: (to: string | number) => ApiModule;
            bottom: (to: string | number) => ApiModule;
        };
    };
    view: {
        close: (options?: IziModalTransitions) => ApiModule;
        open: (options?: IziModalTransitions) => ApiModule;
        toggle: () => ApiModule;
    };
}
