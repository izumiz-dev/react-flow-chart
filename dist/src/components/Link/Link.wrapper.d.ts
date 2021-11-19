import * as React from 'react';
import { IConfig, ILink, INode, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave } from '../../';
import { ILinkDefaultProps } from './Link.default';
export interface ILinkWrapperProps {
    config: IConfig;
    link: ILink;
    isSelected: boolean;
    isHovered: boolean;
    fromNode: INode;
    toNode: INode | undefined;
    onLinkMouseEnter: IOnLinkMouseEnter;
    onLinkMouseLeave: IOnLinkMouseLeave;
    onLinkClick: IOnLinkClick;
    Component?: React.FunctionComponent<ILinkDefaultProps>;
    matrix?: number[][];
}
export declare const LinkWrapper: React.MemoExoticComponent<({ config, Component, link, onLinkMouseEnter, onLinkMouseLeave, onLinkClick, isSelected, isHovered, fromNode, toNode, matrix, }: ILinkWrapperProps) => JSX.Element | null>;
