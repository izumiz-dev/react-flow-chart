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
var variants_1 = require("./variants");
exports.LinkDefault = function (props) {
    var config = props.config, startPos = props.startPos, endPos = props.endPos, fromPort = props.fromPort, toPort = props.toPort, matrix = props.matrix;
    var points = config.smartRouting
        ? !!toPort && !!matrix
            ? __1.generateSmartPath(matrix, startPos, endPos, fromPort, toPort)
            : __1.generateRightAnglePath(startPos, endPos)
        : __1.generateCurvePath(startPos, endPos);
    var linkColor = (fromPort.properties && fromPort.properties.linkColor) || "cornflowerblue";
    var linkProps = __assign({ config: config,
        points: points,
        linkColor: linkColor,
        startPos: startPos,
        endPos: endPos }, props);
    return config.showArrowHead ? (React.createElement(variants_1.ArrowLink, __assign({}, linkProps))) : (React.createElement(variants_1.RegularLink, __assign({}, linkProps)));
};
//# sourceMappingURL=Link.default.js.map