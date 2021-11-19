"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.RegularLink = function (_a) {
    var className = _a.className, points = _a.points, linkColor = _a.linkColor, config = _a.config, link = _a.link, startPos = _a.startPos, endPos = _a.endPos, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick, isHovered = _a.isHovered, isSelected = _a.isSelected;
    return (React.createElement("svg", { style: {
            overflow: "visible",
            position: "absolute",
            cursor: "pointer",
            left: 0,
            right: 0,
        }, className: className },
        React.createElement("circle", { r: "4", cx: startPos.x, cy: startPos.y, fill: linkColor }),
        React.createElement("path", { d: points, stroke: linkColor, strokeWidth: "3", fill: "none" }),
        React.createElement("path", { d: points, stroke: isHovered || isSelected ? "orange" : linkColor, strokeWidth: "12", fill: "none", strokeLinecap: "round", strokeOpacity: isHovered ? 0.5 : isSelected ? 1 : 0, onMouseEnter: function () { return onLinkMouseEnter({ config: config, linkId: link.id }); }, onMouseLeave: function () { return onLinkMouseLeave({ config: config, linkId: link.id }); }, onClick: function (e) {
                onLinkClick({ config: config, linkId: link.id });
                e.stopPropagation();
            } }),
        React.createElement("circle", { r: "4", cx: endPos.x, cy: endPos.y, fill: linkColor })));
};
//# sourceMappingURL=RegularLink.js.map