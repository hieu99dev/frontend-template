/* Global variables and functions */
var site = (function ($, window, undefined) {
    'use strict';
    var $win = $(window);

    function _hello() { //required
        alert('Hello World!')
    }

    function _goodbye() { //required
        alert('Good Bye!')
    }

    return {
        init: function () {
            _hello();
        },
        hello: _hello,
        goodbye: _goodbye
    };

}(jQuery, window));

jQuery(document).ready(function () {
    site.init();
});