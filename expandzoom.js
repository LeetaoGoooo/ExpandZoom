/**
 * Created by Leetao on 2017/5/8.
 *
 *  自动展开或者缩放 div 内容
 */
;(function ($pele, window, document, undefined) {
    "use strict";

    var defaults = {
        height: 200,  // 默认展开的高度,单位 px
        display: false, // 默认是否展开
        speed: 0.6 // 展开的速度,单位 s
    };

    var style = "position: relative;  overflow: hidden;"

    var buttonEle = null;
    var parentEle = null;

    function ExpandZoom($bele, $pele, options) {
        buttonEle = $bele;
        parentEle = $pele;
        this.options = $.extend(defaults, options || {});
        this.init();
    }

    ExpandZoom.prototype = {
        constructor: ExpandZoom,
        init: function () {
            this.renderEle();
        },
        renderEle: function () {
            var options = this.options;
            var height = options.height + "px";
            var display = options.display;
            if (!display) {
                var styles = style + "height: 0;" + "-webkit-transition: height " + options.speed + "s;-moz-transition: height " + options.speed +"s;-o-transition: height " + options.speed + "s;transition: height " + options.speed +"s;";
            } else{
                var styles = "height:" + options.height + "px" +  style + "-webkit-transition: height " + options.speed + "s;-moz-transition: height " + options.speed +"s;-o-transition: height " + options.speed + "s;transition: height " + options.speed +"s;";
            }
            parentEle[0].style = styles;

            buttonEle[0].onclick = function () {
                display = !display;
                parentEle[0].style.height = display ? height : "0px";
                return false;
            }
        }
    };

    $.fn.expandzoom = function ($p, options) {
        options = $.extend(defaults, options || {});
        return new ExpandZoom($(this), $p, options);
    }
})(jQuery, window, document);