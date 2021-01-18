import iziWrapModuleAbstract from "./iziWrapModuleAbstract";
import iziWrapMethodsAnimations from "./Methods/iziWrapMethodsAnimations";
import iziWrapMethodsContent from "./Methods/iziWrapMethodsContent";
import iziWrapMethodsDisplay from "./Methods/iziWrapMethodsDisplay";
import iziWrapMethodsGroup from "./Methods/iziWrapMethodsGroup";
import iziWrapMethodsHeader from "./Methods/iziWrapMethodsHeader";
import iziWrapMethodsLoading from "./Methods/iziWrapMethodsLoading";
import iziWrapMethodsPosition from "./Methods/iziWrapMethodsPosition";
import iziWrapMethodsProgress from "./Methods/iziWrapMethodsProgress";
export default class iziWrapMethods extends iziWrapModuleAbstract {
    animations: iziWrapMethodsAnimations;
    content: iziWrapMethodsContent;
    display: iziWrapMethodsDisplay;
    groups: iziWrapMethodsGroup;
    header: iziWrapMethodsHeader;
    loading: iziWrapMethodsLoading;
    position: iziWrapMethodsPosition;
    progress: iziWrapMethodsProgress;
    init(): void;
}
