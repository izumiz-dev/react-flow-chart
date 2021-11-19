"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SCALE_FACTOR = 5;
exports.MATRIX_PADDING = 5;
exports.NODE_PADDING = 3;
var getEmptyMatrix = function (width, height) {
    var adjustedWidth = Math.ceil(width / (SCALE_FACTOR - 1)) + exports.MATRIX_PADDING;
    var adjustedHeight = Math.ceil(height / (SCALE_FACTOR - 1)) + exports.MATRIX_PADDING;
    var matrix = [];
    for (var i = 0; i < adjustedHeight; i++) {
        matrix.push(new Array(adjustedWidth).fill(0));
    }
    return matrix;
};
var getMatrixDimensions = function (offset, nodeDimensions) {
    var defaultNodeSize = { width: 500, height: 500 };
    var dimensions = { width: 0, height: 0 };
    var offsetX = Math.max(offset.x, 0);
    var offsetY = Math.max(offset.y, 0);
    nodeDimensions.forEach(function (node) {
        var size = node.size || defaultNodeSize;
        var x = node.position.x + offsetX + size.width;
        var y = node.position.y + offsetY + size.height;
        if (x > dimensions.width)
            dimensions.width = x;
        if (y > dimensions.height)
            dimensions.height = y;
    });
    return dimensions;
};
exports.getMatrix = function (offset, nodeDimensions) {
    var _a = getMatrixDimensions(offset, nodeDimensions), width = _a.width, height = _a.height;
    var matrix = getEmptyMatrix(width, height);
    nodeDimensions.forEach(function (dimension) {
        var position = dimension.position;
        var defaultNodeSize = { width: 500, height: 500 };
        var size = dimension.size || defaultNodeSize;
        var scaledSize = {
            width: Math.ceil(size.width / SCALE_FACTOR) + exports.NODE_PADDING,
            height: Math.ceil(size.height / SCALE_FACTOR) + exports.NODE_PADDING,
        };
        var scaledX = Math.ceil(position.x / SCALE_FACTOR);
        var scaledY = Math.ceil(position.y / SCALE_FACTOR);
        for (var x = Math.max(scaledX - exports.NODE_PADDING, 0); x <= scaledX + scaledSize.width; x++) {
            for (var y = Math.max(scaledY - exports.NODE_PADDING, 0); y <= scaledY + scaledSize.height; y++) {
                matrix[y][x] = 1;
            }
        }
    });
    return matrix;
};
//# sourceMappingURL=grid.js.map