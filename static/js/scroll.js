


$(document).ready(function(){
    $(window).scroll(function(){
        var x = $("#contactForm").offset();
        var height1 = $("#contactForm").outerHeight();
        var y = document.documentElement.scrollTop;
        var z = ((x.top + height1) - y);
        if(z - 250 < $(window).height()){
            $('#contactUs').addClass('active');
        }else{
            $('#contactUs').removeClass('active');
        }
    });
});


if ($(window).width() > 1150) {
    $(document).ready(function(){
        $(window).scroll(function(){
            var x = $("#whatIDo").offset();
            var height1 = $("#whatIDo").outerHeight();
            var y = document.documentElement.scrollTop;
            var z = ((x.top + height1) - y);
            if(z - 390 < $(window).height()){
                $('#whatIDo').addClass('active');
            }else{
                $('#whatIDo').removeClass('active');
            }
        });
    });
 }else{
    $(document).ready(function(){
        $(window).scroll(function(){
            var x = $("#whatIDo").offset();
            var height1 = $("#whatIDo").outerHeight();
            var y = document.documentElement.scrollTop;
            var z = ((x.top + height1) - y);
            if(z - 680 < $(window).height()){
                $('#whatIDo').addClass('active');
            }else{
                $('#whatIDo').removeClass('active');
            }
        });
    });    
 }





$.ajax({
    type: "GET",
    url: "/",
    success: function (response){
        document.getElementById('homeLoader').classList.add('hidden');
        console.log('Ok');
    },
    error: function(er){
      console.log('Not ok');  
    },
})