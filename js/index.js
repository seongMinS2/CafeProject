<<<<<<< HEAD
var menus = [];

//커피 클릭 이벤트
$('#1').click(function (e) {
    $('#1').parent().addClass('active');
    $('#2').parent().removeClass('active');
    $('#2').parent().removeClass('active');
    $('#2').parent().removeClass('active');
=======

var menus = [];




//메뉴 클릭 이벤트
$('row.menu').click(function (e) {
   var target = $('div').val();
   alert(target);
})



//커피 클릭 이벤트
$('#1').click(function (e) {

>>>>>>> master
    $('.swiper-container.center-block.1').show();
    $('.swiper-container.center-block.2').hide();
    $('.swiper-container.center-block.3').hide();
    $('.swiper-container.center-block.4').hide();
<<<<<<< HEAD
});


//음료 클릭 이벤트
$('#2').click(function (e) {
    $('#1').parent().removeClass('active');
    $('#2').parent().addClass('active');
    $('#2').parent().removeClass('active');
    $('#2').parent().removeClass('active');
=======

});

//음료 클릭 이벤트
$('#2').click(function (e) {

>>>>>>> master
    $('.swiper-container.center-block.1').hide();
    $('.swiper-container.center-block.2').show();
    $('.swiper-container.center-block.3').hide();
    $('.swiper-container.center-block.4').hide();
<<<<<<< HEAD
=======


>>>>>>> master
});

//디저트 클릭 이벤트
$('#3').click(function (e) {
<<<<<<< HEAD
    $('#1').parent().removeClass('active');
    $('#2').parent().removeClass('active');
    $('#2').parent().addClass('active');
    $('#2').parent().removeClass('active');
=======

>>>>>>> master
    $('.swiper-container.center-block.1').hide();
    $('.swiper-container.center-block.2').hide();
    $('.swiper-container.center-block.3').show();
    $('.swiper-container.center-block.4').hide();
<<<<<<< HEAD
=======

>>>>>>> master
});


//기타메뉴 클릭 이벤트
$('#4').click(function (e) {
<<<<<<< HEAD
    $('#1').parent().removeClass('active');
    $('#2').parent().removeClass('active');
    $('#2').parent().removeClass('active');
    $('#2').parent().addClass('active');
=======

>>>>>>> master
    $('.swiper-container.center-block.1').hide();
    $('.swiper-container.center-block.2').hide();
    $('.swiper-container.center-block.3').hide();
    $('.swiper-container.center-block.4').show();
<<<<<<< HEAD
=======

>>>>>>> master
});



// JSON 파일 로드
function jsonParse() {
    $.getJSON('../json/data.json', function (data) { 
        menus = data;
        console.log(menus);
    });
};

function init() {
<<<<<<< HEAD
    $('.swiper-container.center-block.2').css('display', "none");
    $('.swiper-container.center-block.3').css('display', "none");
    $('.swiper-container.center-block.4').css('display', "none");
    jsonParse();
};

init();
=======

    $('.swiper-container.center-block.2').css('display', "none");
    $('.swiper-container.center-block.3').css('display', "none");
    $('.swiper-container.center-block.4').css('display', "none");

    jsonParse();
};

init();
>>>>>>> master
