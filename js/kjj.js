
// // 동적 메뉴 생성

// var coffees = [];
// var drink = [];
// var cof = [];
// var cof = [];

// function coffeeMenu(data) {
//     var num = 10;
//     var delNum = 0;
    
//     console.log(data)
//     var menuPage = $('.1>.swiper-wrapper');
//     for (var i=0; i < data.length; i++) {
//         if (i % 4 == 0) {
//             var html = '';
//             html += '<div class="swiper-slide">';
//             html += '<div class="container">';
//             html += `<div class="row ml-4 mt-4 menu menuList" id="coffee${num}">`;
//             html += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
//             html += `<img class="hvr-grow" src=${data[i].img} id=${data[i].id} class="rounded" onclick="choiceMenu(id)">`;
//             html += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
//             html += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
//             html += '</div>';
//             html += '</div>';
//             html += '</div>';
//             html += '</div>';
//             menuPage.append(html);
//             num++;
//         } else if (i%4 != 0) {
//             var manu = $(`#coffee${num-1}`);
//             var html2 = '';
//             html2 += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
//             html2 += `<img class="hvr-grow" src=${data[i].img} id ="${data[i].id}" class="rounded" onclick="choiceMenu(id)">`;
//             html2 += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
//             html2 += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
//             html2 += '</div>';
//             manu.append(html2);
//         }
        
        
//     }
    
// }
// function drinkMenu(data) {
//     var num = 10;
//     var delNum = 0;
    
    
//     var menuPage = $('.2>.swiper-wrapper');
//     for (var i=0; i < data.length; i++) {
//         if (i % 4 == 0) {
//             var html = '';
//             html += '<div class="swiper-slide">';
//             html += '<div class="container">';
//             html += `<div class="row ml-4 mt-4 menu menuList" id="drink${num}">`;
//             html += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
//             html += `<img class="hvr-grow" src=${data[i].img} id=${data[i].id} class="rounded" onclick="choiceMenu(id)">`;
//             html += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
//             html += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
//             html += '</div>';
//             html += '</div>';
//             html += '</div>';
//             html += '</div>';
//             menuPage.append(html);
//             num++;
//         } else if (i%4 != 0) {
//             var manu = $(`#drink${num-1}`);
//             var html2 = '';
//             html2 += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
//             html2 += `<img class="hvr-grow" src=${data[i].img} id ="${data[i].id}" class="rounded" onclick="choiceMenu(id)">`;
//             html2 += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
//             html2 += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
//             html2 += '</div>';
//             manu.append(html2);
//         }
        
        
//     }
    
// }
// function dessertMenu(data) {
//     var num = 10;
//     var delNum = 0;
    
    
//     var menuPage = $('.3>.swiper-wrapper');
//     for (var i=0; i < data.length; i++) {
//         if (i % 4 == 0) {
//             var html = '';
//             html += '<div class="swiper-slide">';
//             html += '<div class="container">';
//             html += `<div class="row ml-4 mt-4 menu menuList" id="dessert${num}">`;
//             html += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
//             html += `<img class="hvr-grow" src=${data[i].img} id=${data[i].id} class="rounded" onclick="choiceMenu(id)">`;
//             html += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
//             html += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
//             html += '</div>';
//             html += '</div>';
//             html += '</div>';
//             html += '</div>';
//             menuPage.append(html);
//             num++;
//             delNum++;
//         } else if (i%4 != 0) {
//             var manu = $(`#dessert${num-1}`);
//             var html2 = '';
//             html2 += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
//             html2 += `<img class="hvr-grow" src=${data[i].img} id ="${data[i].id}" class="rounded" onclick="choiceMenu(id)">`;
//             html2 += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
//             html2 += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
//             html2 += '</div>';
//             manu.append(html2);
//         }
        
        
//     }
    
// }
// function otherMenu(data) {
//     var num = 10;
//     var delNum = 0;
    
    
//     var menuPage = $('.4>.swiper-wrapper');
//     for (var i=0; i < data.length; i++) {
//         if (i % 4 == 0) {
//             var html = '';
//             html += '<div class="swiper-slide">';
//             html += '<div class="container">';
//             html += `<div class="row ml-4 mt-4 menu menuList" id="othermenu${num}">`;
//             html += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
//             html += `<img class="hvr-grow" src=${data[i].img} id=${data[i].id} class="rounded" onclick="choiceMenu(id)">`;
//             html += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
//             html += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
//             html += '</div>';
//             html += '</div>';
//             html += '</div>';
//             html += '</div>';
//             menuPage.append(html);
//             num++;
//             delNum++;
//         } else if (i%4 != 0) {
//             var manu = $(`#othermenu${num-1}`);
//             var html2 = '';
//             html2 += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
//             html2 += `<img class="hvr-grow" src=${data[i].img} id ="${data[i].id}" class="rounded" onclick="choiceMenu(id)">`;
//             html2 += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
//             html2 += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
//             html2 += '</div>';
//             manu.append(html2);
//         }
        
        
//     }
    
// }


// // JSON 파일 로드 --> JS배열로 변환
// function jsonParse() {
//     $.getJSON('../json/coffee.json', function (data) {
//         localStorage.setItem("coffees", JSON.stringify(data));
//         coffees = JSON.parse(localStorage.getItem("coffees"));
//         coffeeMenu(coffees);

//     });
//     $.getJSON('../json/drink.json', function (data) {
//         localStorage.setItem("drinks",JSON.stringify(data));
//         drink = JSON.parse(localStorage.getItem("drinks"));
//         drinkMenu(drink);
        
//     });
//     $.getJSON('../json/dessert.json', function (data) {
//         localStorage.setItem("dessert",JSON.stringify(data));
//         dessert = JSON.parse(localStorage.getItem("dessert"));
//         drinkMenu(dessert);
        
//     });
//     $.getJSON('../json/othermenu.json', function (data) {
//         localStorage.setItem("other",JSON.stringify(data));
//         other = JSON.parse(localStorage.getItem("other"));
//         drinkMenu(other);
   
//     });
// };

// function choiceMenu(menuid){
    
//     return id;
// }

// function init() {
//     jsonParse();
    
// }

// init();