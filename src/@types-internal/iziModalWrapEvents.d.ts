type TOnFullScreenCallback = () => void;
type TOnResizeCallback = () => void;
type TOnOpeningCallback = () => void;
type TOnOpenedCallback = () => void;
type TOnClosingCallback = () => void;
type TOnClosedCallback = () => void;
type TAfterRenderCallback = () => void;

type TModalEvents =
    TOnFullScreenCallback |
    TOnResizeCallback |
    TOnOpeningCallback |
    TOnOpenedCallback |
    TOnClosingCallback |
    TOnClosedCallback |
    TAfterRenderCallback;

type TOnFullScreenEvent = "fullscreen";
type TOnResizeEvent = "resize";
type TOnOpeningEvent = "opening";
type TOnOpenedEvent = "opened";
type TOnClosingEvent = "closing";
type TOnClosedEvent = "closed";
type TAfterRenderEvent = "after_render";

type TModalEventStrings =
    TOnFullScreenEvent |
    TOnResizeEvent |
    TOnOpeningEvent |
    TOnOpenedEvent |
    TOnClosingEvent |
    TOnClosedEvent |
    TAfterRenderEvent;

type TiziModalKeys =
    "onFullscreen" |
    "onResize" |
    "onOpening" |
    "onOpened" |
    "onClosing" |
    "onClosed" |
    "afterRender";

type TiziModalListeners = {
    onFullscreen?: TOnFullScreenCallback[],
    onResize?: TOnResizeCallback[],
    onOpening?: TOnOpeningCallback[],
    onOpened?: TOnOpenedCallback[],
    onClosing?: TOnClosingCallback[],
    onClosed?: TOnClosedCallback[],
    afterRender?: TAfterRenderCallback[],
};
