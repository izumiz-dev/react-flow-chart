/// <reference types="react" />
import { DraggableData, DraggableEvent } from 'react-draggable';
import { IChart, INode, IPort } from './chart';
import { IConfig } from './config';
import { IOffset, IPosition, ISize } from './generics';
/** Callback functions will be evaluated inside of a setState so they can always manipulate the chart state */
export declare type IStateCallback<T extends (...args: any) => any> = (...params: Parameters<T>) => (chart: IChart) => IChart;
export interface IOnDragNodeInput {
    config?: IConfig;
    event: DraggableEvent;
    data: DraggableData;
    id: string;
}
export declare type IOnDragNode = (input: IOnDragNodeInput) => void;
export interface IOnDragCanvasInput {
    config?: IConfig;
    data: any;
}
export declare type IOnDragCanvas = (input: IOnDragCanvasInput) => void;
export interface IOnDragNodeStopInput {
    config?: IConfig;
    event: MouseEvent;
    data: DraggableData;
    id: string;
}
export declare type IOnDragNodeStop = (input: IOnDragNodeStopInput) => void;
export interface IOnDragCanvasStopInput {
    config?: IConfig;
    data: any;
}
export declare type IOnDragCanvasStop = (input: IOnDragCanvasStopInput) => void;
export interface IOnPortPositionChangeInput {
    config?: IConfig;
    node: INode;
    port: IPort;
    el: HTMLDivElement;
    nodesEl: HTMLDivElement | IOffset;
}
export declare type IOnPortPositionChange = (input: IOnPortPositionChangeInput) => void;
export interface ILinkBaseInput {
    config?: IConfig;
    linkId: string;
}
export interface IOnLinkBaseEvent extends ILinkBaseInput {
    startEvent: React.MouseEvent;
    fromNodeId: string;
    fromPortId: string;
}
export declare type IOnLinkStart = (input: IOnLinkBaseEvent) => void;
export interface IOnLinkMoveInput extends IOnLinkBaseEvent {
    toPosition: {
        x: number;
        y: number;
    };
}
export declare type IOnLinkMove = (input: IOnLinkMoveInput) => void;
export declare type IOnLinkCancel = (input: IOnLinkBaseEvent) => void;
export interface IOnLinkCompleteInput extends IOnLinkBaseEvent {
    toNodeId: string;
    toPortId: string;
}
export declare type IOnLinkComplete = (input: IOnLinkCompleteInput) => void;
export declare type IOnLinkMouseEnter = (input: ILinkBaseInput) => void;
export declare type IOnLinkMouseLeave = (input: ILinkBaseInput) => void;
export declare type IOnLinkClick = (input: ILinkBaseInput) => void;
export declare type IOnCanvasClick = (input: {
    config?: IConfig;
}) => void;
export declare type IOnDeleteKey = (input: {
    config?: IConfig;
}) => void;
export interface INodeBaseInput {
    config?: IConfig;
    nodeId: string;
}
export declare type IOnNodeClick = (input: INodeBaseInput) => void;
export declare type IOnNodeDoubleClick = (input: INodeBaseInput) => void;
export interface IOnNodeSizeChangeInput extends INodeBaseInput {
    size: ISize;
}
export declare type IOnNodeSizeChange = (input: IOnNodeSizeChangeInput) => void;
export declare type IOnNodeMouseEnter = (input: INodeBaseInput) => void;
export declare type IOnNodeMouseLeave = (input: INodeBaseInput) => void;
export interface IOnCanvasDropInput {
    config?: IConfig;
    data: any;
    position: IPosition;
    id: string;
}
export declare type IOnCanvasDrop = (input: IOnCanvasDropInput) => void;
export declare type IOnZoomCanvas = (input: {
    config?: IConfig;
    data: any;
}) => void;
