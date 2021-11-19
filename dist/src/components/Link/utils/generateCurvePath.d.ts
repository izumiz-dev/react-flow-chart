import { IPort, IPosition } from '../../../';
export declare const getDirectional: (startPos: IPosition, endPos: IPosition) => {
    width: number;
    height: number;
    leftToRight: boolean;
    topToBottom: boolean;
    isHorizontal: boolean;
};
export declare const generateCurvePath: (startPos: IPosition, endPos: IPosition) => string;
export declare const generateRightAnglePath: (startPos: IPosition, endPos: IPosition) => string;
export declare const generateSmartPath: (matrix: number[][], startPos: IPosition, endPos: IPosition, fromPort: IPort<undefined>, toPort: IPort<undefined>) => string;
