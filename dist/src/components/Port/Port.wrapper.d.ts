import * as React from 'react';
import { IConfig, ILink, INode, IOnLinkCancel, IOnLinkComplete, IOnLinkMove, IOnLinkStart, IOnPortPositionChange, IPort, IPosition, ISelectedOrHovered, ISize } from '../../';
import CanvasContext from '../Canvas/CanvasContext';
import { IPortDefaultProps } from './Port.default';
export interface IPortWrapperProps {
    config: IConfig;
    style?: object;
    offset: IPosition;
    selected: ISelectedOrHovered | undefined;
    hovered: ISelectedOrHovered | undefined;
    selectedLink: ILink | undefined;
    hoveredLink: ILink | undefined;
    port: IPort;
    node: INode;
    portsSize: ISize;
    onPortPositionChange: IOnPortPositionChange;
    Component: React.FunctionComponent<IPortDefaultProps>;
    onLinkStart: IOnLinkStart;
    onLinkMove: IOnLinkMove;
    onLinkCancel: IOnLinkCancel;
    onLinkComplete: IOnLinkComplete;
}
export declare class PortWrapper extends React.Component<IPortWrapperProps> {
    static contextType: React.Context<{
        offsetX: number;
        offsetY: number;
        zoomScale: number;
    }>;
    context: React.ContextType<typeof CanvasContext>;
    private nodeRef;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IPortWrapperProps): void;
    onMouseDown: (startEvent: React.MouseEvent<Element, MouseEvent>) => void;
    render(): JSX.Element;
    private updatePortPosition;
    private portsOfType;
}
