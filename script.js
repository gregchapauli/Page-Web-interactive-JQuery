$(document).ready(function(){
    
    $("#p1").on({
            mouseenter: function(){
                $("#p5").hide();
            },
            mouseleave: function(){
                $("#p5").show();
            },
            click: function(){
                $("#p4").hide();
            }
    });
});