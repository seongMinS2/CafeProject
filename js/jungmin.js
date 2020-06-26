// $(document).ready(function(){
//     var orderIDX = 0;
//     $('.menu1').click(function(){
        
//         var thisName = $('div',this).first().text();
//         var thisPrice = $('div',this).last().text();
//         var thisNum = parseInt(1);
//         var addHTML = '';

//         if($('div.order-list > .ordername').text() == thisName){
//             var befVal = $('div.order-list > .orderqty').text();
//             $('div.order-list > .orderqty').text(++befVal);
//         }else{
//             addHTML += '<div class="row order-list" id='+orderIDX+'>';
//                 addHTML += '<div class="col-sm-1 delorder z">❌</div>';
//                 addHTML += '<div class="col-sm-3 ordername z">' + thisName + '</div>';
//                 addHTML += '<div class="col-sm-1 plusorder z">➕</div>';
//                 addHTML += '<div class="col-sm-2 orderqty z">'+thisNum+'</div>';
//                 addHTML += '<div class="col-sm-1 minusorder z">➖</div>';
//                 addHTML += '<div class="col-sm-3 orderprice z">'+ thisPrice +'</div>';
//                 addHTML += '<div class="col-sm-1 orderprice z">원</div>';
//             addHTML += '</div>';
//             $('.orderslide > div.container.productList').after(addHTML);
//             addHTML = '';
//             orderIDX++;
//         }
//     });


//     $('.delorder').click(function(e){
//         //$('.order-list').empty();
//     });
    
//     $('#id* .plusorder').click(function(e){
//         var befVal = $('.orderqty',this).text();
//         if (befVal>9) {
//             alert('주문을 더 추가하실 수 없습니다.');
//         }else{
//             $('.orderqty',this).text(++befVal);    
//         }
//     });
    
//     $('.minusorder').click(function(e){
//         var befVal = $('.orderqty').text();
//         if (befVal==1) {
//             $('.order-list').empty();
//         }else{
//             $('.orderqty').text(--befVal);    
//         }
//     });
    

// });
// /*

// function (e) {
//     var target = $('p',this).text();
//     var addHTML = '';
 
//     if(document.getElementsByClassName('.productName').innerText != target){
//          for (var i = 0; i < menus.length; i++) {
//              if (target == menus[i].name && document.getElementById(menus[i].id) == null) {
//                  addHTML += '<div class = "row" id="' + menus[i].id + '">';
//                      addHTML += '<div class = "col-sm-5 name-tag productName">';
//                          addHTML += '<p>' + menus[i].name + '</p>';
//                      addHTML += '</div>';                    
//                      addHTML += '<div class = "col-sm-4 name-tag productCount">';
//                          addHTML += '<p>' + menus[i].cnt + '</p>';
//                      addHTML += '</div>';
//                      addHTML += '<div class = "col-sm-3 name-tag productPrice">';
//                          addHTML += '<p>' + menus[i].price + '</p>';
//                      addHTML += '</div>';
//                  addHTML += '</div>';
//                  $('div.row.product').after(addHTML);
//                  break;
//              }
//          }
//      }else{
//          alert('중복값 존재');
//      }
//  }
// */
// $('#6').click(function(e){
//     var delYN = confirm('주문내역을 전부 삭제하시겠습니까?');
//     if (delYN == true) {
//         $('.order-list').empty();
//     }
// });