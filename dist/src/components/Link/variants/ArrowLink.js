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
var utils_1 = require("../utils");
exports.ArrowLink = function (_a) {
    var _b;
    var className = _a.className, link = _a.link, config = _a.config, linkColor = _a.linkColor, points = _a.points, isHovered = _a.isHovered, isSelected = _a.isSelected, startPos = _a.startPos, endPos = _a.endPos, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick;
    var _c = utils_1.getDirectional(startPos, endPos), leftToRight = _c.leftToRight, topToBottom = _c.topToBottom, isHorizontal = _c.isHorizontal;
    var markerKey = "";
    if ((leftToRight && isHorizontal) || (topToBottom && !isHorizontal)) {
        markerKey = "markerEnd";
    }
    else if ((!leftToRight && isHorizontal) || !isHorizontal) {
        markerKey = "markerStart";
    }
    var marker = (_b = {}, _b[markerKey] = "url(#arrowHead-" + linkColor + ")", _b);
    return (React.createElement("svg", { style: {
            overflow: "visible",
            position: "absolute",
            cursor: "pointer",
            left: 0,
            right: 0,
        }, className: className },
        React.createElement("defs", null,
            React.createElement("marker", { id: "arrowHead-" + linkColor, orient: "auto-start-reverse", markerWidth: "2", markerHeight: "4", refX: "0.1", refY: "2" },
                React.createElement("path", { d: "M0,0 V4 L2,2 Z", fill: linkColor }))),
        React.createElement("path", __assign({ d: points, stroke: linkColor, strokeWidth: "3", fill: "none" }, marker)),
        React.createElement("path", { d: points, stroke: linkColor, strokeWidth: "20", fill: "none", strokeLinecap: "round", strokeOpacity: isHovered || isSelected ? 0.1 : 0, onMouseEnter: function () { return onLinkMouseEnter({ config: config, linkId: link.id }); }, onMouseLeave: function () { return onLinkMouseLeave({ config: config, linkId: link.id }); }, onClick: function (e) {
                onLinkClick({ config: config, linkId: link.id });
                e.stopPropagation();
            } })));
};
//# sourceMappingURL=ArrowLink.js.map