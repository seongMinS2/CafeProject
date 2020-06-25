$('.menu1').click(function(){
    $('div:eq(0)',this).text();
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