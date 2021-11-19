/// <reference types="react" />
import { IConfig, ILink, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave, IPosition } from "../../../";
export interface IArrowLinkProps {
    className?: string;
    link: ILink;
    config: IConfig;
    linkColor: string;
    points: string;
    isHovered: boolean;
    isSelected: boolean;
    startPos: IPosition;
    endPos: IPosition;
    onLinkMouseEnter: IOnLinkMouseEnter;
    onLinkMouseLeave: IOnLinkMouseLeave;
    onLinkClick: IOnLinkClick;
}
export declare const ArrowLink: ({ className, link, config, linkColor, points, isHovered, isSelected, startPos, endPos, onLinkMouseEnter, onLinkMouseLeave, onLinkClick, }: IArrowLinkProps) => JSX.Element;
