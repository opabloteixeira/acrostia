var slider = function(){

    "use strict";

    this.slider = $("#slider");
    var $lider = this,
        lastSlider = 0,
        interval = setTimeout(function(){
            return false;
        },999 * 999),
        cont = $lider.slider.children('figure');

    this.onChange = function(callback){
        this.setOnchange = callback;
    };

    this.destroy = function(){
        clearTimeout(interval);
        interval = 0;
        this.setOnchange = function(){};
    };

    this.setOnchange = function(){
        return; 
    };
    this.change = {
        to: function(number){
            if(number >= cont.children('div').length) return;
            cont.children('div').eq(lastSlider).fadeOut(500);

            lastSlider = number;

            cont.children('div').eq(number).fadeIn(500);
            $lider.setOnchange(number, cont.children('div').eq(number));
            $lider.interval();
        },
        next: function(){
            clearTimeout(interval);
            lastSlider + 1 < cont.children('div').length ? $lider.change.to(lastSlider + 1) : $lider.change.to(0);
        },
        prev: function(){
            clearTimeout(interval);
            lastSlider - 1 < 0 ? $lider.change.to(lastSlider - 1) : $lider.change.to(0);
        }
    }
    this.interval = function(a){
        interval = setTimeout(this.change.next, a || 1500);
    };

    this.init = (function(obj){
        obj.change.to(0);
    }($lider));
};






