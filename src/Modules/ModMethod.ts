'use strict';

import {ModAbstract} from './ModAbstract';
import {Animations} from './Methods/Animations';
import {Content} from './Methods/Content';
import {Display} from './Methods/Display';
import {Group} from './Methods/Group';
import {Header} from './Methods/Header';
import {Loading} from './Methods/Loading';
import {Position} from './Methods/Position';
import {Progress} from './Methods/Progress';

export class ModMethod extends ModAbstract {
    public animations!: Animations;
    public content!: Content;
    public display!: Display;
    public groups!: Group;
    public header!: Header;
    public loading!: Loading;
    public position!: Position;
    public progress!: Progress;

    public init() {
        super.init();
        this.animations = new Animations(this.w);
        this.content = new Content(this.w);
        this.display = new Display(this.w);
        this.groups = new Group(this.w);
        this.header = new Header(this.w);
        this.loading = new Loading(this.w);
        this.position = new Position(this.w);
        this.progress = new Progress(this.w);
    }
}
