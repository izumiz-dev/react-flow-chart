"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_zoom_pan_pinch_1 = require("react-zoom-pan-pinch");
var uuid_1 = require("uuid");
var lodash_1 = require("lodash");
var nanoid_1 = require("nanoid");
var __1 = require("../../");
var CanvasContext_1 = require("./CanvasContext");
var CanvasWrapper = /** @class */ (function (_super) {
    __extends(CanvasWrapper, _super);
    function CanvasWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            width: 0,
            height: 0,
            offsetX: 0,
            offsetY: 0,
        };
        _this.ref = React.createRef();
        _this.updateSize = function () {
            var el = _this.ref.current;
            if (el) {
                var rect = el.getBoundingClientRect();
                if (el.offsetWidth !== _this.state.width ||
                    el.offsetHeight !== _this.state.height) {
                    _this.setState({ width: el.offsetWidth, height: el.offsetHeight });
                    _this.props.onSizeChange(el.offsetWidth, el.offsetHeight);
                }
                if (rect.left !== _this.state.offsetX || rect.top !== _this.state.offsetY) {
                    _this.setState({ offsetX: rect.left, offsetY: rect.top });
                }
            }
        };
        return _this;
    }
    CanvasWrapper.prototype.componentDidMount = function () {
        this.updateSize();
        if (this.ref.current) {
            if (window.ResizeObserver) {
                var ro = new window.ResizeObserver(this.updateSize);
                ro.observe(this.ref.current);
            }
            else {
                window.addEventListener("resize", this.updateSize);
            }
            window.addEventListener("scroll", this.updateSize);
        }
    };
    CanvasWrapper.prototype.componentDidUpdate = function () {
        this.updateSize();
    };
    CanvasWrapper.prototype.componentWillUnmount = function () {
        window.removeEventListener("resize", this.updateSize);
        window.removeEventListener("scroll", this.updateSize);
    };
    CanvasWrapper.prototype.render = function () {
        var _a = this.props, config = _a.config, scale = _a.scale, ComponentInner = _a.ComponentInner, ComponentOuter = _a.ComponentOuter, position = _a.position, onDragCanvas = _a.onDragCanvas, onDragCanvasStop = _a.onDragCanvasStop, children = _a.children, onCanvasClick = _a.onCanvasClick, 
        // onDeleteKey,
        onCanvasDrop = _a.onCanvasDrop, onZoomCanvas = _a.onZoomCanvas;
        var _b = this.state, offsetX = _b.offsetX, offsetY = _b.offsetY;
        var zoom = config.zoom;
        var options = {
            transformEnabled: zoom && zoom.transformEnabled ? zoom.transformEnabled : true,
            minScale: zoom && zoom.minScale ? zoom.minScale : 0.25,
            maxScale: zoom && zoom.maxScale ? zoom.maxScale : 2,
            limitToBounds: false,
            limitToWrapper: false,
            centerContent: false,
        };
        var doubleClickMode = config.readonly ? "zoomOut" : "zoomIn";
        var nanoid = nanoid_1.customAlphabet("1234567890abcdef", 6);
        return (React.createElement(CanvasContext_1.default.Provider, { value: {
                offsetX: this.state.offsetX,
                offsetY: this.state.offsetY,
                zoomScale: scale,
            } },
            React.createElement(ComponentOuter, { config: config, ref: this.ref },
                React.createElement(react_zoom_pan_pinch_1.TransformWrapper, { defaultPositionX: position.x, defaultPositionY: position.y, positionX: position.x, positionY: position.y, scale: scale, options: options, zoomIn: zoom && zoom.zoomIn ? zoom.zoomIn : { step: 300 }, zoomOut: zoom && zoom.zoomOut ? zoom.zoomOut : { step: 300 }, pan: zoom && zoom.pan ? zoom.pan : { disabled: false }, wheel: zoom && zoom.wheel ? zoom.wheel : { disabled: false, step: 75 }, doubleClick: { disabled: true, step: 10, mode: doubleClickMode }, pinch: { disabled: false }, onWheel: function (data) { return onZoomCanvas({ config: config, data: data }); }, onWheelStop: function (data) { return onZoomCanvas({ config: config, data: data }); }, onPanning: function (data) { return onDragCanvas({ config: config, data: data }); }, onPanningStop: function (data) { return onDragCanvasStop({ config: config, data: data }); } },
                    React.createElement(react_zoom_pan_pinch_1.TransformComponent, null,
                        React.createElement(ComponentInner, { config: config, children: children, onClick: onCanvasClick, tabIndex: 0, onKeyDown: function (e) { return undefined; }, onDrop: function (e) {
                                var data = JSON.parse(e.dataTransfer.getData(__1.REACT_FLOW_CHART));
                                if (data) {
                                    var relativeClientX = e.clientX - offsetX;
                                    var relativeClientY = e.clientY - offsetY;
                                    onCanvasDrop({
                                        config: config,
                                        data: data,
                                        position: {
                                            x: relativeClientX / scale - position.x / scale,
                                            y: relativeClientY / scale - position.y / scale,
                                        },
                                        id: lodash_1.get(data, ["properties", "dndId"], "Use dndId") + "_" + nanoid() ||
                                            data.id ||
                                            uuid_1.v4(),
                                    });
                                }
                            }, onDragOver: function (e) { return e.preventDefault(); } }))))));
    };
    return CanvasWrapper;
}(React.Component));
exports.CanvasWrapper = CanvasWrapper;
//# sourceMappingURL=Canvas.wrapper.js.map