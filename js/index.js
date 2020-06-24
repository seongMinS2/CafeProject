
var menus = [];




//메뉴 클릭 이벤트
$('div.col-sm-2.menu1.ml-5.mt-5').click(function (e) {
   var target = $('p',this).text();
   var addHTML = '';
   var tempCnt = '', tempPrice = '';
   for (var i = 0; i < menus.length; i++) {
        if (target == menus[i].name && document.getElementById(menus[i].name) == null) {
            addHTML += '<div class = "row" id="' + menus[i].name + '">';
                addHTML += '<div class = "col-sm-5 name-tag productName">';
                    addHTML += '<p>' + menus[i].name + '</p>';
                addHTML += '</div>';                    
                addHTML += '<div class = "col-sm-4 name-tag productCount">';
                    addHTML += '<p>' + menus[i].cnt + '</p>';
                addHTML += '</div>';
                addHTML += '<div class = "col-sm-3 name-tag productPrice">';
                    addHTML += '<p>' + menus[i].price + '</p>';
                addHTML += '</div>';
            addHTML += '</div>';
            $('div.row.product').after(addHTML);
            break;
        }else{
            tempCnt = $('.productCount').val();
            tempPrice = $('.productPrice').val();
        }
   }
});



//커피 클릭 이벤트
$('#1').click(function (e) {
    $('#1').parent().addClass('active');
    $('#2').parent().removeClass('active');
    $('#2').parent().removeClass('active');
    $('#2').parent().removeClass('active');
    $('.swiper-container.center-block.1').show();
    $('.swiper-container.center-block.2').hide();
    $('.swiper-container.center-block.3').hide();
    $('.swiper-container.center-block.4').hide();
});

//음료 클릭 이벤트
$('#2').click(function (e) {
    $('#1').parent().removeClass('active');
    $('#2').parent().addClass('active');
    $('#2').parent().removeClass('active');
    $('#2').parent().removeClass('active');
    $('.swiper-container.center-block.1').hide();
    $('.swiper-container.center-block.2').show();
    $('.swiper-container.center-block.3').hide();
    $('.swiper-container.center-block.4').hide();
});

//디저트 클릭 이벤트
$('#3').click(function (e) {
    $('#1').parent().removeClass('active');
    $('#2').parent().removeClass('active');
    $('#2').parent().addClass('active');
    $('#2').parent().removeClass('active');
    $('.swiper-container.center-block.1').hide();
    $('.swiper-container.center-block.2').hide();
    $('.swiper-container.center-block.3').show();
    $('.swiper-container.center-block.4').hide();
});


//기타메뉴 클릭 이벤트
$('#4').click(function (e) {
    $('#1').parent().removeClass('active');
    $('#2').parent().removeClass('active');
    $('#2').parent().removeClass('active');
    $('#2').parent().addClass('active');
    $('.swiper-container.center-block.1').hide();
    $('.swiper-container.center-block.2').hide();
    $('.swiper-container.center-block.3').hide();
    $('.swiper-container.center-block.4').show();
});



// JSON 파일 로드
function jsonParse() {
    $.getJSON('../json/data.json', function (data) { 
        menus = data;
        console.log(menus);
    });
};

function init() {

    $('.swiper-container.center-block.2').css('display', "none");
    $('.swiper-container.center-block.3').css('display', "none");
    $('.swiper-container.center-block.4').css('display', "none");

    jsonParse();
};

init();