"use strict";

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
    public animations: iziWrapMethodsAnimations;
    public content: iziWrapMethodsContent;
    public display: iziWrapMethodsDisplay;
    public groups: iziWrapMethodsGroup;
    public header: iziWrapMethodsHeader;
    public loading: iziWrapMethodsLoading;
    public position: iziWrapMethodsPosition;
    public progress: iziWrapMethodsProgress;

    public init() {
        super.init();
        this.animations = new iziWrapMethodsAnimations(this.w);
        this.content = new iziWrapMethodsContent(this.w);
        this.display = new iziWrapMethodsDisplay(this.w);
        this.groups = new iziWrapMethodsGroup(this.w);
        this.header = new iziWrapMethodsHeader(this.w);
        this.loading = new iziWrapMethodsLoading(this.w);
        this.position = new iziWrapMethodsPosition(this.w);
        this.progress = new iziWrapMethodsProgress(this.w);
    }
}
