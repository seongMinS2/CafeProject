
// 동적 메뉴 생성

var coffees = [];
var drinks = [];
var dessert = [];
var other = [];
var category = [];
var sum = 0;

//초기화버튼
$(document).on('click', '#6', function () {
    location.replace('index.html');
});

//휴지통버튼이벤트
$(document).on('click', '.delorder', function (e) {
    $(this).parent('.order-list').addClass('del');
    setTimeout(function () {
        document.querySelector(".del").remove();
        // $(this).parent('.del').remove();
        let sum = totalPrice($('.order-list').find('.orderprice'));
        $('.finalprice-price').text(sum);
    }, 300);
});
$(document).on('click', '.plusorder', function () {
    //수량 ++
    let $orderqty = $(this).parent().find('.orderqty');
    let $orderprice = $(this).parent().find('.orderprice');
    let currentprice = (parseInt($orderprice.text()) / parseInt($orderqty.text())) + parseInt($orderprice.text());
    let currentQty = parseInt($orderqty.text()) + 1;
    $orderprice.text(currentprice);
    $orderqty.text(currentQty);
    let sum = totalPrice($('.order-list').find('.orderprice'));
    $('.finalprice-price').text(sum);
});
$(document).on('click', '.minusorder', function () {
    let $order = $(this).parent('.order-list');
    let $orderqty = $(this).parent().find('.orderqty');
    let $orderprice = $(this).parent().find('.orderprice');
    if (parseInt($orderqty.text()) > 1) {
        let currentprice = parseInt($orderprice.text()) - (parseInt($orderprice.text()) / parseInt($orderqty.text()));
        let currentQty = parseInt($orderqty.text()) - 1;
        $orderprice.text(currentprice);
        $orderqty.text(currentQty);
    } else {
        $order.remove();
    }
    let sum = totalPrice($('.order-list').find('.orderprice'));
    $('.finalprice-price').text(sum);
});

function addOrder(match) {
    var qty = 1;
    // var a = ".order" + match.id;
    var a = ".order" + match.id;
    if ($(a).length === 0) {
        let html = '';
        html += '<div class="row order-list order' + match.id + '">'
            html += '<div class="col-sm-1 delorder z">🗑️</div>';
            html += '<div class="col-sm-3 ordername z">' + match.name + '</div>';
            html += '<div class="col-sm-1 plusorder z">➕</div>';
            html += '<div class="col-sm-2 orderqty z">' + qty + '</div>';
            html += '<div class="col-sm-1 minusorder z">➖</div>';
            html += '<div class="col-sm-3 orderprice z">' + match.price + '</div>';
            html += '<div class="col-sm-1 won z">원</div>';
        html += '</div>';
        $('.productList').append(html);

    } else {
        var plusQty = qty += parseInt($(a + '>.orderqty').html());

        var plusPrice = match.price + parseInt($(a + '>.orderprice').html());
        $(a + '>.orderqty').text("" + plusQty);
        $(a + '>.orderprice').text("" + plusPrice);
    }
    let sum = totalPrice($('.order-list').find('.orderprice'));
    $('.finalprice-price').text(sum);

}

function choiceMenu(id) {
    // console.log(id);
    var match = [];
    for (var i in category) {
        match = category[i].filter(function (item) {
            return item.id == id;
        });
        if (match.length != 0) {
            break;
        }
    }
    addOrder(match[0]);
}
function coffeeMenu(data) {
    var num = 10;
    var delNum = 0;

    console.log(data)
    var menuPage = $('.1>.swiper-wrapper');
    for (var i = 0; i < data.length; i++) {
        if (i % 4 == 0) {
            var html = '';
            html += '<div class="swiper-slide">';
            html += '<div class="container">';
            html += `<div class="row ml-4 mt-4 menu menuList" id="coffee${num}">`;
            html += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
            html += `<img class="hvr-grow" src=${data[i].img} id=${data[i].id} class="rounded" onclick="choiceMenu(id)">`;
            html += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
            html += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            menuPage.append(html);
            num++;
        } else if (i % 4 != 0) {
            var manu = $(`#coffee${num - 1}`);
            var html2 = '';
            html2 += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
            html2 += `<img class="hvr-grow" src=${data[i].img} id ="${data[i].id}" class="rounded" onclick="choiceMenu(id)">`;
            html2 += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
            html2 += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
            html2 += '</div>';
            manu.append(html2);
        }


    }

}
function drinkMenu(data) {
    var num = 10;
    var delNum = 0;


    var menuPage = $('.2>.swiper-wrapper');
    for (var i = 0; i < data.length; i++) {
        if (i % 4 == 0) {
            var html = '';
            html += '<div class="swiper-slide">';
            html += '<div class="container">';
            html += `<div class="row ml-4 mt-4 menu menuList" id="drink${num}">`;
            html += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
            html += `<img class="hvr-grow" src=${data[i].img} id=${data[i].id} class="rounded" onclick="choiceMenu(id)">`;
            html += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
            html += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            menuPage.append(html);
            num++;
        } else if (i % 4 != 0) {
            var manu = $(`#drink${num - 1}`);
            var html2 = '';
            html2 += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
            html2 += `<img class="hvr-grow" src=${data[i].img} id ="${data[i].id}" class="rounded" onclick="choiceMenu(id)">`;
            html2 += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
            html2 += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
            html2 += '</div>';
            manu.append(html2);
        }


    }

}
function dessertMenu(data) {
    var num = 10;
    var delNum = 0;


    var menuPage = $('.3>.swiper-wrapper');
    for (var i = 0; i < data.length; i++) {
        if (i % 4 == 0) {
            var html = '';
            html += '<div class="swiper-slide">';
            html += '<div class="container">';
            html += `<div class="row ml-4 mt-4 menu menuList" id="dessert${num}">`;
            html += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
            html += `<img class="hvr-grow" src=${data[i].img} id=${data[i].id} class="rounded" onclick="choiceMenu(id)">`;
            html += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
            html += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            menuPage.append(html);
            num++;
            delNum++;
        } else if (i % 4 != 0) {
            var manu = $(`#dessert${num - 1}`);
            var html2 = '';
            html2 += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
            html2 += `<img class="hvr-grow" src=${data[i].img} id ="${data[i].id}" class="rounded" onclick="choiceMenu(id)">`;
            html2 += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
            html2 += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
            html2 += '</div>';
            manu.append(html2);
        }


    }

}
function otherMenu(data) {
    var num = 10;
    var delNum = 0;


    var menuPage = $('.4>.swiper-wrapper');
    for (var i = 0; i < data.length; i++) {
        if (i % 4 == 0) {
            var html = '';
            html += '<div class="swiper-slide">';
            html += '<div class="container">';
            html += `<div class="row ml-4 mt-4 menu menuList" id="othermenu${num}">`;
            html += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
            html += `<img class="hvr-grow" src=${data[i].img} id=${data[i].id} class="rounded" onclick="choiceMenu(id)">`;
            html += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
            html += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            menuPage.append(html);
            num++;
            delNum++;
        } else if (i % 4 != 0) {
            var manu = $(`#othermenu${num - 1}`);
            var html2 = '';
            html2 += `<div class="col-sm-5 ml-3 mt-3 menu1 ${data[i].id}">`;
            html2 += `<img class="hvr-grow" src=${data[i].img} id ="${data[i].id}" class="rounded" onclick="choiceMenu(id)">`;
            html2 += `<div class="text-center mt-3 menuname">${data[i].name}</div>`;
            html2 += `<div class="text-center menuprice"> &#8361;${data[i].price}</div>`;
            html2 += '</div>';
            manu.append(html2);
        }


    }

}
function totalPrice($tag) {
    sum = 0;
    $tag.each(function (index, item) {
        sum += parseInt($(item).text());
    });
    return sum;
}
// JSON 파일 로드 --> JS배열로 변환
function jsonParse() {
    $.getJSON('../json/coffee.json', function (data) {
        localStorage.setItem("coffees", JSON.stringify(data));
        coffees = JSON.parse(localStorage.getItem("coffees"));
        coffeeMenu(coffees);
        category.push(coffees);

    });
    $.getJSON('../json/drink.json', function (data) {
        localStorage.setItem("drinks", JSON.stringify(data));
        drink = JSON.parse(localStorage.getItem("drinks"));
        drinkMenu(drink);
        category.push(drink);

    });
    $.getJSON('../json/dessert.json', function (data) {
        localStorage.setItem("dessert", JSON.stringify(data));
        dessert = JSON.parse(localStorage.getItem("dessert"));
        dessertMenu(dessert);
        category.push(dessert);

    });
    $.getJSON('../json/othermenu.json', function (data) {
        localStorage.setItem("other", JSON.stringify(data));
        other = JSON.parse(localStorage.getItem("other"));
        otherMenu(other);
        category.push(other);

    });
};



function init() {
    jsonParse();
}

init();