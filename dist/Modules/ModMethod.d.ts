import { ModAbstract } from './ModAbstract';
import { Animations } from './Methods/Animations';
import { Content } from './Methods/Content';
import { Display } from './Methods/Display';
import { Group } from './Methods/Group';
import { Header } from './Methods/Header';
import { Loading } from './Methods/Loading';
import { Position } from './Methods/Position';
import { Progress } from './Methods/Progress';
export declare class ModMethod extends ModAbstract {
    animations: Animations;
    content: Content;
    display: Display;
    groups: Group;
    header: Header;
    loading: Loading;
    position: Position;
    progress: Progress;
    init(): void;
}
