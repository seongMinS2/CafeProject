$('#div > img.hvr-grow').click(function(){
    alert('clicked');
    // tVal = $('div:col(0)').text();
    // console.log(tVal);
});

$('.menu2').click(function(){
    click();
});
$('.menu3').click(function(){
    click();
});
$('.menu4').click(function(){
    click();
});

$('.delorder').click(function(){
    $('.order-list').empty();
});

$('.plusorder').click(function(){
    var befVal = $('.orderqty').text();
    if (befVal>9) {
        alert('주문을 더 추가하실 수 없습니다.');
    }else{
        $('.orderqty').text(++befVal);    
    }
});

$('.minusorder').click(function(){
    var befVal = $('.orderqty').text();
    if (befVal==1) {
        $('.order-list').empty();
    }else{
        $('.orderqty').text(--befVal);    
    }
});





/*

function (e) {
    var target = $('p',this).text();
    var addHTML = '';
 
    if(document.getElementsByClassName('.productName').innerText != target){
         for (var i = 0; i < menus.length; i++) {
             if (target == menus[i].name && document.getElementById(menus[i].id) == null) {
                 addHTML += '<div class = "row" id="' + menus[i].id + '">';
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
             }
         }
     }else{
         alert('중복값 존재');
     }
 }



*/