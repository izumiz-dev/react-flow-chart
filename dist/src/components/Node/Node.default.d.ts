/// <reference types="react" />
import { IConfig, INode } from '../../';
export interface INodeDefaultProps {
    className?: string;
    config: IConfig;
    node: INode;
    children: any;
    isSelected: boolean;
    onClick: (e: React.MouseEvent) => void;
    onDoubleClick: (e: React.MouseEvent) => void;
    onMouseEnter: (e: React.MouseEvent) => void;
    onMouseLeave: (e: React.MouseEvent) => void;
    style?: object;
    ref?: React.Ref<any>;
}
export declare const NodeDefault: any;
