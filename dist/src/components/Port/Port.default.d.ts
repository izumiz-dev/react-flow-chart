/// <reference types="react" />
import { IConfig, IPort } from "../../";
export interface IPortDefaultProps {
    className?: string;
    config: IConfig;
    port: IPort;
    isSelected: boolean;
    isHovered: boolean;
    isLinkSelected: boolean;
    isLinkHovered: boolean;
}
export declare const PortDefault: ({ isLinkSelected, isLinkHovered, config, className, }: IPortDefaultProps) => JSX.Element;
