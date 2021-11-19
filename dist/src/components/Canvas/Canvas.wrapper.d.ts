import * as React from "react";
import { IConfig, IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas, IOnDragCanvasStop, IOnZoomCanvas } from "../../";
import { ICanvasInnerDefaultProps } from "./CanvasInner.default";
import { ICanvasOuterDefaultProps } from "./CanvasOuter.default";
export interface ICanvasWrapperProps {
    config: IConfig;
    position: {
        x: number;
        y: number;
    };
    scale: number;
    onZoomCanvas: IOnZoomCanvas;
    onDragCanvas: IOnDragCanvas;
    onDragCanvasStop: IOnDragCanvasStop;
    onDeleteKey: IOnDeleteKey;
    onCanvasClick: IOnCanvasClick;
    onCanvasDrop: IOnCanvasDrop;
    ComponentInner: React.FunctionComponent<ICanvasInnerDefaultProps>;
    ComponentOuter: React.FunctionComponent<ICanvasOuterDefaultProps>;
    onSizeChange: (x: number, y: number) => void;
    children: any;
}
interface IState {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
}
export declare class CanvasWrapper extends React.Component<ICanvasWrapperProps, IState> {
    state: {
        width: number;
        height: number;
        offsetX: number;
        offsetY: number;
    };
    private ref;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private updateSize;
}
export {};
