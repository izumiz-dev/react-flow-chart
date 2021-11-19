/// <reference types="react" />
import { IConfig, ILink, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave, IPort, IPosition } from "../../";
export interface ILinkDefaultProps {
    className?: string;
    config: IConfig;
    link: ILink;
    startPos: IPosition;
    endPos: IPosition;
    fromPort: IPort;
    toPort?: IPort;
    onLinkMouseEnter: IOnLinkMouseEnter;
    onLinkMouseLeave: IOnLinkMouseLeave;
    onLinkClick: IOnLinkClick;
    isHovered: boolean;
    isSelected: boolean;
    matrix?: number[][];
}
export declare const LinkDefault: (props: ILinkDefaultProps) => JSX.Element;
