import * as React from 'react';
import { IConfig, INode, ISize } from '../../';
export interface IPortsDefaultProps {
    className?: string;
    config: IConfig;
    node: INode;
    children: Array<React.ReactElement<any>>;
    onResize: (size: ISize) => void;
}
export declare const PortsDefault: ({ children, config, onResize, className }: IPortsDefaultProps) => JSX.Element;
