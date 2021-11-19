import { IConfig } from '../../';
export interface IPortsGroupDefaultProps {
    className?: string;
    config: IConfig;
    side: 'top' | 'bottom' | 'left' | 'right';
}
export declare const PortsGroupDefault: import("styled-components").StyledComponent<"div", any, IPortsGroupDefaultProps, never>;
