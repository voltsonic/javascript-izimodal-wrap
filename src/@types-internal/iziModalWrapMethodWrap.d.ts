interface iziModalWrapMethodWrap {
    groups: {
        get: () => string,
        set: (to: string) => iziModalWrapMethodWrap,
        next: (transitionIn?: string, transitionOut?: string) => iziModalWrapMethodWrap,
        prev: (transitionIn?: string, transitionOut?: string) => iziModalWrapMethodWrap,
    },
    loading: {
        start: () => iziModalWrapMethodWrap,
        stop: () => iziModalWrapMethodWrap,
    },
    progress: {
        start: () => iziModalWrapMethodWrap,
        pause: () => iziModalWrapMethodWrap,
        resume: () => iziModalWrapMethodWrap,
        reset: () => iziModalWrapMethodWrap,
    },
    position: {
        top: (to: string | number) => iziModalWrapMethodWrap,
        bottom: (to: string | number) => iziModalWrapMethodWrap,
        width: (to: string | number) => iziModalWrapMethodWrap,
        zIndex: (to: number) => iziModalWrapMethodWrap,
    },
    header: {
        color: (to: string) => iziModalWrapMethodWrap,
        enable: () => iziModalWrapMethodWrap,
        disable: () => iziModalWrapMethodWrap,
        iconClass: (to: string) => iziModalWrapMethodWrap,
        iconText: (to: string) => iziModalWrapMethodWrap,
        headerTitle: (to: string) => iziModalWrapMethodWrap,
        headerSubtitle: (to?: string) => iziModalWrapMethodWrap,
    },
    content: {
        backgroundColor: (to: string) => iziModalWrapMethodWrap,
        set: (to: string, isDefault: boolean = true) => iziModalWrapMethodWrap,
        reset: () => iziModalWrapMethodWrap,
    },
    animations: {
        transitionIn: (to: string) => iziModalWrapMethodWrap,
        transitionOut: (to: string) => iziModalWrapMethodWrap,
    },
    display: {
        get: () => 'closed' | 'closing' | 'opened' | 'opening',
        fullscreen: (enable: boolean) => iziModalWrapMethodWrap,
        toggle: () => iziModalWrapMethodWrap,
        open: () => iziModalWrapMethodWrap,
        close: () => iziModalWrapMethodWrap,
    },
    // Continue with ui: for setWidth ...
    end(): iziModalWrap;
}
