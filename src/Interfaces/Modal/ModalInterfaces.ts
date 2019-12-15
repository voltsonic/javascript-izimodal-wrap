export namespace ModalInterfaces {
    export namespace Settings {
        export interface All {
            modalId: string,
            layerUp: number,
            fullscreenIfMobile: boolean,
            fullscreenForced: boolean,
            openRightAway: boolean,
        }
        export interface Merge {
            modalId: string,
            layerUp?: number,
            fullscreenIfMobile?: boolean,
            fullscreenForced?: boolean,
            openRightAway?: boolean,
        }
    }
}
