$(function () {
    $(window).fadeThis(1000);

    const content = "金廷勳";
    const text = document.querySelector("#computer h1");
    let i = 0;

    function typing() {
        if (i < content.length) {
            let txt = content.charAt(i);
            text.innerHTML += txt;
            i++;
        }
    }
    setInterval(typing, 600);

    $(window).scroll(
        function () {
            //스크롤의 위치가 상단에서 450보다 크면  
            if ($(window).scrollTop() > 850) {
                /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
                $('#java_cli').addClass("fix");
                //위의 if문에 대한 조건 만족시 fix라는 class를 부여함  
            } else {
                $('#java_cli').removeClass("fix");
                //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
            }
        });

    $(window).scroll(
        function () {
            //스크롤의 위치가 상단에서 450보다 크면  
            if ($(window).scrollTop() < 1850) {
                $('.re_im1').css({ 'opacity': 0 });
                $('.im1').css({ 'opacity': 1 });
                $('.re_im2').css({ 'opacity': 0 });
                $('.im2').css({ 'opacity': 1 });
                $('.re_im3').css({ 'opacity': 0 });
                $('.im3').css({ 'opacity': 1 });
                $('.re_im4').css({ 'opacity': 0 });
                $('.im4').css({ 'opacity': 1 });
            } else if ($(window).scrollTop() > 1850 && $(window).scrollTop() < 2800) {
                $('.re_im1').css({ 'opacity': 1 });
                $('.im1').css({ 'opacity': 0 });
                $('.re_im2').css({ 'opacity': 0 });
                $('.im2').css({ 'opacity': 1 });
                $('.re_im3').css({ 'opacity': 0 });
                $('.im3').css({ 'opacity': 1 });
                $('.re_im4').css({ 'opacity': 0 });
                $('.im4').css({ 'opacity': 1 });
            } else if ($(window).scrollTop() > 2800 && $(window).scrollTop() < 5700) {
                $('.re_im1').css({ 'opacity': 0 });
                $('.im1').css({ 'opacity': 1 });
                $('.re_im2').css({ 'opacity': 1 });
                $('.im2').css({ 'opacity': 0 });
                $('.re_im3').css({ 'opacity': 0 });
                $('.im3').css({ 'opacity': 1 });
                $('.re_im4').css({ 'opacity': 0 });
                $('.im4').css({ 'opacity': 1 });
            } else if ($(window).scrollTop() > 5700 && $(window).scrollTop() < 6750) {
                $('.re_im1').css({ 'opacity': 1 });
                $('.im1').css({ 'opacity': 0 });
                $('.re_im2').css({ 'opacity': 0 });
                $('.im2').css({ 'opacity': 1 });
                $('.re_im3').css({ 'opacity': 1 });
                $('.im3').css({ 'opacity': 0 });
                $('.re_im4').css({ 'opacity': 0 });
                $('.im4').css({ 'opacity': 1 });
            } else {
                $('.re_im1').css({ 'opacity': 1 });
                $('.im1').css({ 'opacity': 0 });
                $('.re_im2').css({ 'opacity': 0 });
                $('.im2').css({ 'opacity': 1 });
                $('.re_im3').css({ 'opacity': 0 });
                $('.im3').css({ 'opacity': 1 });
                $('.re_im4').css({ 'opacity': 1 });
                $('.im4').css({ 'opacity': 0 });
            }
        });

    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1500,
        stepSize: 120,
        pulseAlgorithm: !0,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: !0,
        arrowScroll: 50,
    }, { passive: false });

});
$("#java_cli li a").click(function (event) {

    event.preventDefault();

    $('html body').animate({ scrollTop: $(this.hash).offset().top }, 500);
});


