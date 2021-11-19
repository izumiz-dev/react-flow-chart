"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_resize_observer_1 = require("react-resize-observer");
var __1 = require("../../");
exports.PortsDefault = function (_a) {
    var children = _a.children, config = _a.config, onResize = _a.onResize, className = _a.className;
    var _b = React.useState(0), top = _b[0], setTop = _b[1];
    var _c = React.useState(0), bottom = _c[0], setBottom = _c[1];
    var _d = React.useState(0), right = _d[0], setRight = _d[1];
    var _e = React.useState(0), left = _e[0], setLeft = _e[1];
    var _f = React.useState(0), width = _f[0], setWidth = _f[1];
    var _g = React.useState(0), height = _g[0], setHeight = _g[1];
    React.useEffect(function () {
        setWidth(Math.max(top, bottom));
    }, [top, bottom]);
    React.useEffect(function () {
        setHeight(Math.max(left, right));
    }, [left, right]);
    React.useEffect(function () {
        onResize({ width: width, height: height });
    }, [width, height, onResize]);
    return (React.createElement("div", { className: className },
        React.createElement(__1.PortsGroupDefault, { config: config, side: "top" },
            React.createElement(react_resize_observer_1.default, { onResize: function (rect) { setTop(rect.width); } }),
            children.filter(function (child) { return ['input', 'top'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { config: config, side: "bottom" },
            React.createElement(react_resize_observer_1.default, { onResize: function (rect) { setBottom(rect.width); } }),
            children.filter(function (child) { return ['output', 'bottom'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { config: config, side: "right" },
            React.createElement(react_resize_observer_1.default, { onResize: function (rect) { setRight(rect.height); } }),
            children.filter(function (child) { return ['right'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { config: config, side: "left" },
            React.createElement(react_resize_observer_1.default, { onResize: function (rect) { setLeft(rect.height); } }),
            children.filter(function (child) { return ['left'].includes(child.props.port.type); }))));
};
//# sourceMappingURL=Ports.default.js.map