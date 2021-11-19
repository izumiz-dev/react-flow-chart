/// <reference types="react" />
import { IConfig, INode } from '../../';
export interface INodeInnerDefaultProps {
    className?: string;
    config: IConfig;
    node: INode;
}
export declare const NodeInnerDefault: ({ node, className }: INodeInnerDefaultProps) => JSX.Element;
