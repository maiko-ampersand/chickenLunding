$(function() {
    /*========================
           DOM Elements
    ========================*/
    var scene_1 = $('.scene1');
    var scene_2 = $('.scene2');
    var scene_3 = $('.scene3');
    var scene_4 = $('.scene4');
    var scene_5 = $('.scene5');
    var scene_6 = $('.scene6');
    var scene_7 = $('.scene7');
    var scene_8 = $('.scene8');
    var scene_9 = $('.scene9');
    var scene_10 = $('.scene10');
    var scene_11 = $('.scene11');

    var cap1 = $('#cap1');
    var cap2 = $('#cap2');
    var cap3 = $('#cap3');
    var cap4 = $('#cap4');
    var cap5 = $('#cap5');
    var cap6 = $('#cap6');
    var cap7 = $('#cap7');
    var cap8 = $('#cap8');
    var cap9 = $('#cap9');
    var cap10 = $('#cap10');
    var cap11 = $('#cap11');
    var cap12 = $('#cap12');
    var cap13 = $('#cap13');
    var cap14 = $('#cap14');
    var cap15 = $('#cap15');
 

    /*========================
       Animation Functions
    ========================*/
    // あとは個々のアニメーションを定義していくだけ
    function scene1 () {
        scene_1.animate({
            opacity:1
        }, 3000);
    }

    /*========================
          Main Function
    ========================*/
    function main_animation () {
        var timeline = [
            {animation:function(){
                scene_1.animate({
                    opacity:1
                }, 4000);
            }, interval:2000},
            {animation:function(){
                cap1.animate({
                    opacity:1
                }, 1000);
            }, interval:2000},
            {animation:function(){
                cap2.animate({
                    opacity:1
                }, 1000);
            }, interval:2000},
            {animation:function(){
                scene_1.animate({
                    opacity:0
                }, 4000);
            }, interval:2000},
            {animation:function(){
                scene_2.animate({
                    opacity:1
                }, 4000);
            }, interval:2000},
            {animation:function(){
                cap3.animate({
                    opacity:1
                }, 1000);
            }, interval:1500},
            {animation:function(){
                cap4.animate({
                    opacity:1
                }, 1000);
            }, interval:2000},
            {animation:function(){
                cap5.animate({
                    opacity:1
                }, 1000);
            }, interval:2000},
            {animation:function(){
                scene_2.animate({
                    opacity:0
                }, 4000);
            }, interval:2000},
            {animation:function(){
                scene_3.animate({
                    opacity:1
                }, 4000);
            }, interval:2000},
            {animation:function(){
                scene_3.animate({
                    opacity:0
                }, 4000);
            }, interval:2000},
            {animation:function(){
                scene_4.animate({
                    opacity:1
                }, 4000);
            }, interval:1000},
            {animation:function(){
                cap7.animate({
                    opacity:1
                }, 1000);
            }, interval:2000},
            {animation:function(){
                scene_4.animate({
                    opacity:0
                }, 4000);
            }, interval:2000},
            {animation:function(){
                scene_5.animate({
                    opacity:1
                }, 4000);
            }, interval:2000},
            {animation:function(){
                cap8.animate({
                    opacity:1
                }, 1000);
            }, interval:2000},
            {animation:function(){
                scene_5.animate({
                    opacity:0
                }, 4000);
            }, interval:2000},
            {animation:function(){
                scene_6.animate({
                    opacity:1
                }, 4000);
            }, interval:1500},
            {animation:function(){
                cap9.animate({
                    opacity:1
                }, 1000);
            }, interval:2000},
            {animation:function(){
                scene_6.animate({
                    opacity:0
                }, 4000);
            }, interval:2000},
            {animation:function(){
                scene_7.animate({
                    opacity:1
                }, 4000);
            }, interval:1500},
            {animation:function(){
                cap10.animate({
                    opacity:1
                }, 800);
            }, interval:800},
            {animation:function(){
                cap11.animate({
                    opacity:1
                }, 800);
            }, interval:800},
            {animation:function(){
                cap12.animate({
                    opacity:1
                }, 800);
            }, interval:2000},
            {animation:function(){
                scene_7.animate({
                    opacity:0
                }, 4000);
            }, interval:2000},
            {animation:function(){
                scene_11.animate({
                    opacity:1
                }, 4000);
            }, interval:500},
            {animation:function(){
                cap15.animate({
                    opacity:1
                }, 500);
            }, interval:1000},
            {animation:function(){
                scene_11.animate({
                    opacity:0
                }, 4000);
            }, interval:1500},
            {animation:function(){
                scene_8.animate({
                    opacity:1
                }, 4000);
            }, interval:1500},
            {animation:function(){
                cap13.animate({
                    opacity:1
                }, 500);
            }, interval:1000},
            {animation:function(){
                scene_8.animate({
                    opacity:0
                }, 4000);
            }, interval:2000},
            {animation:function(){
                scene_9.animate({
                    opacity:1
                }, 4000);
            }, interval:1500},
            {animation:function(){
                cap14.animate({
                    opacity:1
                }, 500);
            }, interval:2000},
            {animation:function(){
                scene_9.animate({
                    opacity:0
                }, 4000);
            }, interval:2000},
            {animation:function(){
                $('#skip').remove();
                scene_10.animate({
                    opacity:1
                }, 4000);
            }, interval:1500},
        ];
        var interval_sum = 10;
        var len = timeline.length;
        for(var i=0; i<len; i++){
            setTimeout(timeline[i].animation, interval_sum);
            interval_sum += timeline[i].interval;
        }
    }
    main_animation();

    $('#skip').on('click',function(){
        scene_1.remove();
        scene_2.remove();
        scene_3.remove();
        scene_4.remove();
        scene_5.remove();
        scene_6.remove();
        scene_7.remove();
        scene_8.remove();
        scene_9.remove();
        $(this).remove();
        scene_10.animate({
            opacity:1
        }, 800);
    })    
});