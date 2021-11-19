"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_draggable_1 = require("react-draggable");
var react_resize_observer_1 = require("react-resize-observer");
var __1 = require("../../");
var utils_1 = require("../../utils");
var CanvasContext_1 = require("../Canvas/CanvasContext");
var Node_default_1 = require("./Node.default");
exports.NodeWrapper = function (_a) {
    var config = _a.config, node = _a.node, onDragNode = _a.onDragNode, onDragNodeStop = _a.onDragNodeStop, onNodeClick = _a.onNodeClick, onNodeDoubleClick = _a.onNodeDoubleClick, isSelected = _a.isSelected, _b = _a.Component, Component = _b === void 0 ? Node_default_1.NodeDefault : _b, onNodeSizeChange = _a.onNodeSizeChange, onNodeMouseEnter = _a.onNodeMouseEnter, onNodeMouseLeave = _a.onNodeMouseLeave, NodeInner = _a.NodeInner, Ports = _a.Ports, Port = _a.Port, offset = _a.offset, selected = _a.selected, selectedLink = _a.selectedLink, hovered = _a.hovered, hoveredLink = _a.hoveredLink, onPortPositionChange = _a.onPortPositionChange, onLinkStart = _a.onLinkStart, onLinkMove = _a.onLinkMove, onLinkComplete = _a.onLinkComplete, onLinkCancel = _a.onLinkCancel;
    var zoomScale = React.useContext(CanvasContext_1.default).zoomScale;
    var _c = React.useState({ width: 0, height: 0 }), size = _c[0], setSize = _c[1];
    var _d = React.useState({ width: 0, height: 0 }), portsSize = _d[0], setPortsSize = _d[1];
    var isDragging = React.useRef(false);
    var readonly = config.readonly || node.readonly || false;
    var onStart = React.useCallback(function (e) {
        // Stop propagation so the canvas does not move
        e.stopPropagation();
        isDragging.current = false;
    }, []);
    var onDrag = React.useCallback(function (event, data) {
        isDragging.current = true;
        onDragNode({ config: config, event: event, data: data, id: node.id });
    }, [onDragNode, config, node.id]);
    var onStop = React.useCallback(function (event, data) {
        onDragNodeStop({ config: config, event: event, data: data, id: node.id });
    }, [onDragNodeStop, config, node.id]);
    var onClick = React.useCallback(function (e) {
        if (!config.readonly || config.selectable) {
            e.stopPropagation();
            if (!isDragging.current) {
                onNodeClick({ config: config, nodeId: node.id });
            }
        }
    }, [config, node.id]);
    var onDoubleClick = React.useCallback(function (e) {
        if (!config.readonly) {
            e.stopPropagation();
            if (!isDragging.current) {
                onNodeDoubleClick({ config: config, nodeId: node.id });
            }
        }
    }, [config, node.id]);
    var onMouseEnter = React.useCallback(function () {
        onNodeMouseEnter({ config: config, nodeId: node.id });
    }, [config, node.id]);
    var onMouseLeave = React.useCallback(function () {
        onNodeMouseLeave({ config: config, nodeId: node.id });
    }, [config, node.id]);
    var compRef = React.useRef(null);
    // TODO: probably should add an observer to track node component size changes
    React.useLayoutEffect(function () {
        var el = compRef.current;
        if (el) {
            if ((node.size && node.size.width) !== el.offsetWidth || (node.size && node.size.height) !== el.offsetHeight) {
                var newSize = { width: el.offsetWidth, height: el.offsetHeight };
                setSize(newSize);
                onNodeSizeChange({ config: config, nodeId: node.id, size: newSize });
            }
        }
    }, [node, compRef.current, size.width, size.height]);
    var children = (React.createElement("div", { style: { minWidth: portsSize.width, minHeight: portsSize.height } },
        React.createElement(react_resize_observer_1.default, { onResize: function (rect) {
                var newSize = { width: rect.width, height: rect.height };
                setSize(newSize);
            } }),
        React.createElement(NodeInner, { node: node, config: config }),
        React.createElement(Ports, { node: node, config: config, onResize: setPortsSize }, Object.keys(node.ports).map(function (portId) { return (React.createElement(__1.PortWrapper, { config: config, key: portId, offset: offset, selected: selected, selectedLink: selectedLink, hoveredLink: hoveredLink, hovered: hovered, node: node, portsSize: portsSize, port: node.ports[portId], Component: Port, onPortPositionChange: onPortPositionChange, onLinkStart: config.readonly ? utils_1.noop : onLinkStart, onLinkMove: config.readonly ? utils_1.noop : onLinkMove, onLinkComplete: onLinkComplete, onLinkCancel: onLinkCancel })); }))));
    return (React.createElement(react_draggable_1.default, { bounds: "parent", axis: "both", position: node.position, grid: [1, 1], scale: zoomScale, onStart: onStart, onDrag: onDrag, onStop: onStop, disabled: readonly, nodeRef: compRef },
        React.createElement(Component, { config: config, ref: compRef, children: children, onClick: onClick, onDoubleClick: onDoubleClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, isSelected: isSelected, node: node })));
};
//# sourceMappingURL=Node.wrapper.js.map