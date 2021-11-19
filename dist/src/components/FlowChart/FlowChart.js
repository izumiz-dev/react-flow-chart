"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var __1 = require("../../");
var grid_1 = require("./utils/grid");
exports.FlowChart = function (props) {
    var _a = React.useState({ width: 0, height: 0 }), canvasSize = _a[0], setCanvasSize = _a[1];
    var chart = props.chart, _b = props.callbacks, onDragNode = _b.onDragNode, onDragNodeStop = _b.onDragNodeStop, onDragCanvas = _b.onDragCanvas, onDragCanvasStop = _b.onDragCanvasStop, onCanvasDrop = _b.onCanvasDrop, onLinkStart = _b.onLinkStart, onLinkMove = _b.onLinkMove, onLinkComplete = _b.onLinkComplete, onLinkCancel = _b.onLinkCancel, onPortPositionChange = _b.onPortPositionChange, onLinkMouseEnter = _b.onLinkMouseEnter, onLinkMouseLeave = _b.onLinkMouseLeave, onLinkClick = _b.onLinkClick, onCanvasClick = _b.onCanvasClick, onDeleteKey = _b.onDeleteKey, onNodeClick = _b.onNodeClick, onNodeDoubleClick = _b.onNodeDoubleClick, onNodeMouseEnter = _b.onNodeMouseEnter, onNodeMouseLeave = _b.onNodeMouseLeave, onNodeSizeChange = _b.onNodeSizeChange, onZoomCanvas = _b.onZoomCanvas, _c = props.Components, _d = _c === void 0 ? {} : _c, _e = _d.CanvasOuter, CanvasOuter = _e === void 0 ? __1.CanvasOuterDefault : _e, _f = _d.CanvasInner, CanvasInner = _f === void 0 ? __1.CanvasInnerDefault : _f, _g = _d.NodeInner, NodeInner = _g === void 0 ? __1.NodeInnerDefault : _g, _h = _d.Ports, Ports = _h === void 0 ? __1.PortsDefault : _h, _j = _d.Port, Port = _j === void 0 ? __1.PortDefault : _j, _k = _d.Node, Node = _k === void 0 ? __1.NodeDefault : _k, _l = _d.Link, Link = _l === void 0 ? __1.LinkDefault : _l, _m = props.config, config = _m === void 0 ? {} : _m;
    var links = chart.links, nodes = chart.nodes, selected = chart.selected, hovered = chart.hovered, offset = chart.offset, scale = chart.scale;
    var canvasCallbacks = { onDragCanvas: onDragCanvas, onDragCanvasStop: onDragCanvasStop, onCanvasClick: onCanvasClick, onDeleteKey: onDeleteKey, onCanvasDrop: onCanvasDrop, onZoomCanvas: onZoomCanvas };
    var linkCallbacks = { onLinkMouseEnter: onLinkMouseEnter, onLinkMouseLeave: onLinkMouseLeave, onLinkClick: onLinkClick };
    var nodeCallbacks = { onDragNode: onDragNode, onNodeClick: onNodeClick, onDragNodeStop: onDragNodeStop, onNodeMouseEnter: onNodeMouseEnter, onNodeMouseLeave: onNodeMouseLeave, onNodeSizeChange: onNodeSizeChange, onNodeDoubleClick: onNodeDoubleClick };
    var portCallbacks = { onPortPositionChange: onPortPositionChange, onLinkStart: onLinkStart, onLinkMove: onLinkMove, onLinkComplete: onLinkComplete, onLinkCancel: onLinkCancel };
    var nodesInView = Object.keys(nodes).filter(function (nodeId) {
        var defaultNodeSize = { width: 500, height: 500 };
        var _a = nodes[nodeId].position, x = _a.x, y = _a.y;
        var size = nodes[nodeId].size || defaultNodeSize;
        var isTooFarLeft = scale * x + offset.x + scale * size.width < 0;
        var isTooFarRight = scale * x + offset.x > canvasSize.width;
        var isTooFarUp = scale * y + offset.y + scale * size.height < 0;
        var isTooFarDown = scale * y + offset.y > canvasSize.height;
        return !(isTooFarLeft || isTooFarRight || isTooFarUp || isTooFarDown);
    });
    var matrix = config.smartRouting ? grid_1.getMatrix(chart.offset, Object.values(nodesInView.map(function (nodeId) { return nodes[nodeId]; }))) : undefined;
    var linksInView = Object.keys(links).filter(function (linkId) {
        var from = links[linkId].from;
        var to = links[linkId].to;
        return (!to.nodeId ||
            nodesInView.indexOf(from.nodeId) !== -1 ||
            nodesInView.indexOf(to.nodeId) !== -1);
    });
    return (React.createElement(__1.CanvasWrapper, __assign({ config: config, position: chart.offset, scale: chart.scale, ComponentInner: CanvasInner, ComponentOuter: CanvasOuter, onSizeChange: function (width, height) { return setCanvasSize({ width: width, height: height }); } }, canvasCallbacks),
        linksInView.map(function (linkId) {
            var isSelected = !config.readonly && selected.type === 'link' && selected.id === linkId;
            var isHovered = !config.readonly && hovered.type === 'link' && hovered.id === linkId;
            var fromNodeId = links[linkId].from.nodeId;
            var toNodeId = links[linkId].to.nodeId;
            return (React.createElement(__1.LinkWrapper, __assign({ config: config, key: linkId, link: links[linkId], Component: Link, isSelected: isSelected, isHovered: isHovered, fromNode: nodes[fromNodeId], toNode: toNodeId ? nodes[toNodeId] : undefined, matrix: matrix }, linkCallbacks)));
        }),
        nodesInView.map(function (nodeId) {
            var isSelected = selected.type === 'node' && selected.id === nodeId;
            var selectedLink = getSelectedLinkForNode(selected, nodeId, links);
            var hoveredLink = getSelectedLinkForNode(hovered, nodeId, links);
            return (React.createElement(__1.NodeWrapper, __assign({ config: config, key: nodeId, Component: Node, node: nodes[nodeId], offset: chart.offset, isSelected: isSelected, selected: selectedLink ? selected : undefined, hovered: hoveredLink ? hovered : undefined, selectedLink: selectedLink, hoveredLink: hoveredLink, NodeInner: NodeInner, Ports: Ports, Port: Port }, nodeCallbacks, portCallbacks)));
        })));
};
var getSelectedLinkForNode = function (selected, nodeId, links) {
    var link = selected.type === 'link' && selected.id ? links[selected.id] : undefined;
    if (link && (link.from.nodeId === nodeId || link.to.nodeId === nodeId)) {
        return link;
    }
    return undefined;
};
//# sourceMappingURL=FlowChart.js.map