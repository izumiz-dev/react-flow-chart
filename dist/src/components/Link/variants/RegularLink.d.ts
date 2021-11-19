/// <reference types="react" />
import { IConfig, ILink, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave, IPosition } from "../../../";
export interface IRegularLinkProps {
    className?: string;
    points: string;
    linkColor: string;
    config: IConfig;
    link: ILink;
    startPos: IPosition;
    endPos: IPosition;
    onLinkMouseEnter: IOnLinkMouseEnter;
    onLinkMouseLeave: IOnLinkMouseLeave;
    onLinkClick: IOnLinkClick;
    isHovered: boolean;
    isSelected: boolean;
}
export declare const RegularLink: ({ className, points, linkColor, config, link, startPos, endPos, onLinkMouseEnter, onLinkMouseLeave, onLinkClick, isHovered, isSelected, }: IRegularLinkProps) => JSX.Element;
