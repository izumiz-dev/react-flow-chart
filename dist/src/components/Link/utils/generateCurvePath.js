"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PF = require("pathfinding");
var grid_1 = require("../../FlowChart/utils/grid");
exports.getDirectional = function (startPos, endPos) {
    var width = Math.abs(startPos.x - endPos.x);
    var height = Math.abs(startPos.y - endPos.y);
    var leftToRight = startPos.x < endPos.x;
    var topToBottom = startPos.y < endPos.y;
    var isHorizontal = width > height;
    return { width: width, height: height, leftToRight: leftToRight, topToBottom: topToBottom, isHorizontal: isHorizontal };
};
exports.generateCurvePath = function (startPos, endPos) {
    var _a = exports.getDirectional(startPos, endPos), width = _a.width, height = _a.height, leftToRight = _a.leftToRight, topToBottom = _a.topToBottom, isHorizontal = _a.isHorizontal;
    var start;
    var end;
    if (isHorizontal) {
        start = leftToRight ? startPos : endPos;
        end = leftToRight ? endPos : startPos;
    }
    else {
        start = topToBottom ? startPos : endPos;
        end = topToBottom ? endPos : startPos;
    }
    var curve = isHorizontal ? width / 3 : height / 3;
    var curveX = isHorizontal ? curve : 0;
    var curveY = isHorizontal ? 0 : curve;
    return "M" + start.x + "," + start.y + " C " + (start.x + curveX) + "," + (start.y + curveY) + " " + (end.x - curveX) + "," + (end.y - curveY) + " " + end.x + "," + end.y;
};
var finder = PF.JumpPointFinder({
    heuristic: PF.Heuristic.manhattan,
    diagonalMovement: PF.DiagonalMovement.Never,
});
exports.generateRightAnglePath = function (startPos, endPos) {
    var _a = exports.getDirectional(startPos, endPos), leftToRight = _a.leftToRight, topToBottom = _a.topToBottom, isHorizontal = _a.isHorizontal;
    var start;
    var end;
    if (isHorizontal) {
        start = leftToRight ? startPos : endPos;
        end = leftToRight ? endPos : startPos;
    }
    else {
        start = topToBottom ? startPos : endPos;
        end = topToBottom ? endPos : startPos;
    }
    var vertex = isHorizontal ? start.x + "," + end.y : end.x + "," + start.y;
    return "M" + start.x + "," + start.y + " L " + vertex + " " + end.x + "," + end.y;
};
var setWalkableAtPorts = function (start, end, grid) {
    ([start, end]).forEach(function (point) {
        if (['input', 'top'].includes(point.port.type)) {
            for (var i = point.pos.y; i >= Math.max(point.pos.y - grid_1.MATRIX_PADDING, 0); i--) {
                grid.setWalkableAt(point.pos.x, i, true);
            }
        }
        else if (['output', 'bottom'].includes(point.port.type)) {
            for (var i = point.pos.y; i <= Math.min(point.pos.y + grid_1.MATRIX_PADDING, grid.height); i++) {
                grid.setWalkableAt(point.pos.x, i, true);
            }
        }
        else if (['right'].includes(point.port.type)) {
            for (var i = point.pos.x; i <= Math.max(point.pos.x + grid_1.MATRIX_PADDING, grid.width); i++) {
                grid.setWalkableAt(i, point.pos.y, true);
            }
        }
        else if (['left'].includes(point.port.type)) {
            for (var i = point.pos.x; i >= Math.max(point.pos.x - grid_1.MATRIX_PADDING, 0); i--) {
                grid.setWalkableAt(i, point.pos.y, true);
            }
        }
    });
};
exports.generateSmartPath = function (matrix, startPos, endPos, fromPort, toPort) {
    var grid = new PF.Grid(matrix);
    var startPosScaled = { x: Math.ceil(startPos.x / 5), y: Math.ceil(startPos.y / 5) };
    var endPosScaled = { x: Math.ceil(endPos.x / 5), y: Math.ceil(endPos.y / 5) };
    try {
        // try to find a smart path. use right angle path as a fallback
        setWalkableAtPorts({ pos: startPosScaled, port: fromPort }, { pos: endPosScaled, port: toPort }, grid);
        var path = PF.Util.compressPath(finder.findPath(startPosScaled.x, startPosScaled.y, endPosScaled.x, endPosScaled.y, grid));
        if (!path.length)
            return exports.generateRightAnglePath(startPos, endPos);
        var first = path[0], rest = path.slice(1);
        var d_1 = "M" + first[0] * 5 + " " + first[1] * 5;
        rest.forEach(function (_a) {
            var x = _a[0], y = _a[1];
            d_1 += " L" + x * 5 + " " + y * 5;
        });
        return d_1;
    }
    catch (e) {
        return exports.generateRightAnglePath(startPos, endPos);
    }
};
//# sourceMappingURL=generateCurvePath.js.map