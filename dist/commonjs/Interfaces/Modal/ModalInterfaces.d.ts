export declare namespace ModalInterfaces {
    namespace Settings {
        interface All {
            modalId: string;
            layerUp: number;
            fullscreenIfMobile: boolean;
            fullscreenForced: boolean;
            openRightAway: boolean;
        }
        interface Merge {
            modalId: string;
            layerUp?: number;
            fullscreenIfMobile?: boolean;
            fullscreenForced?: boolean;
            openRightAway?: boolean;
        }
    }
}
