// Very basic typings for iziModal until typings are generated.
// Designed for v1.6.0

// Note: No need to import to separate project unless you need typings for raw access to $.iziModal()

// Jquery Wrap
interface JQuery<HTMLElement> {
    iziModal(): void;
    iziModal(get: string): any;
    iziModal(options: any): void;
    iziModal(methodKey: string, options?: any): any;
}

// Transitions Options
interface IziModalTransitions {
    transitionIn?: string,
    transitionOut?: string,
}

// Basic iziModal Settings Block
interface IziModalSettings {
    title?: string,
    subtitle?: string,
    headerColor?: string,
    background?: null|string,
    theme?: string,
    icon?: null|string,
    iconText?: null|string,
    iconColor?: string,
    rtl?: boolean,
    width?: number|string,
    height?: number|string,
    top?: null|number|string,
    bottom?: null|number|string,
    borderBottom?: boolean,
    padding?: number,
    radius?: number,
    zindex?: number,
    iframe?: boolean,
    iframeHeight?: number,
    iframeURL?: null|string,
    focusInput?: boolean,
    group?: string,
    loop?: boolean,
    arrowKeys?: boolean,
    navigateCaption?: boolean,
    navigateArrows?: boolean | 'closeToModal' | 'closeScreenEdge',
    history?: boolean,
    restoreDefaultContent?: boolean,
    autoOpen?: boolean|number,
    bodyOverflow?: boolean,
    fullscreen?: boolean,
    openFullscreen?: boolean,
    closeOnEscape?: boolean,
    closeButton?: boolean,
    appendTo?: boolean|string,
    appendToOverlay?: false|string,
    overlay?: boolean,
    overlayClose?: boolean,
    overlayColor?: string,
    timeout?: false|number,
    timeoutProgressbar?: boolean,
    pauseOnHover?: boolean,
    timeoutProgressbarColor?: string,
    transitionIn?: string,
    transitionOut?: string,
    transitionInOverlay?: string,
    transitionOutOverlay?: string,
    onFullscreen?: () => void,
    onResize?: () => void,
    onOpening?: () => void,
    onOpened?: () => void,
    onClosing?: () => void,
    onClosed?: () => void,
    afterRender?: () => void
}
