// // const a = $("div.swiper-container.center-block1.swiper2>.swiper-wrapper > .swiper-slide");
// // var b = document.querySelector(".swiper-container.center-block1 .swiper-wrapper");
// // // var c = b.querySelector("div.swiper-wrapper");
// // function init(){
// //     console.log("e");
// //     var addHTML =''; 
// //     addHTML+='<div class="swiper-slide">';
// //     addHTML+='  <div class="container">';
// //     addHTML+='      <div class="row ml-4 mt-4 menu menuList">';
// //     addHTML+='          <div class="col-sm-5 ml-3  mt-3  menu1">';
// //     addHTML+='              <img class="hvr-grow" src="../images/image.JPG" class="rounded">';
// //     addHTML+='              <div class="text-center mt-3">아메리카노</div>';
// //     addHTML+='              <div class="text-center">&#8361;5,000</div></div>';
// //     addHTML+='          <div class="col-sm-5 ml-5 mt-3 menu1">';
// //     addHTML+='              <img src="../images/image.JPG" class="rounded">';
// //     addHTML+='              <div class="text-center mt-3">아메리카노</div>';
// //     addHTML+='              <div class="text-center">&#8361;5,000</div></div>';
// //     addHTML+='          <div class="col-sm-5 ml-3 mt-5 menu1">';
// //     addHTML+='              <img src="../images/image.JPG" class="rounded">';
// //     addHTML+='              <div class="text-center mt-3">아메리카노</div>';
// //     addHTML+='              <div class="text-center">&#8361;5,000</div>';
// //     addHTML+='          </div>';
// //     addHTML+='      </div>';
// //     addHTML+='   </div>';
// //     addHTML+='</div>';

// //     a.after("eeee")
// //     a.after(addHTML);

// // }
// // init();

// var coffee =[];
// var menuPage= $('.1>.swiper-wrapper');

// function addMenuList(){
//     var html ='';
//     html += ''
//     html+='<div class="swiper-slide">
// 	html+='	<div class="container ">
// 	html+='		<div class="row ml-4 mt-4 menu menuList">
// 	html+='			<div class="col-sm-5 ml-3 mt-3 menu1">
// 	html+='				<img class="hvr-grow" src="../images/image.JPG" class="rounded">
// 	html+='				<div class="text-center mt-3">아메리카노</div>
// 	html+='				<div class="text-center">&#8361;5,000</div>
// 	html+='			</div>
// 	html+='			<div class="col-sm-5 ml-5 mt-3 menu1">
// 	html+='				<img src="../images/image.JPG" class="rounded">
// 	html+='				<div class="text-center mt-3">아메리카노</div>
// 	html+='				<div class="text-center">&#8361;5,000</div>
// 	html+='			</div>
// 	html+='			<div class="col-sm-5 ml-3 mt-5 menu1">
// 	html+='				<img src="../images/image.JPG" class="rounded">
// 	html+='				<div class="text-center mt-3">아메리카노</div>
// 	html+='				<div class="text-center">&#8361;5,000</div>
// 	html+='			</div>
// 	html+='			<div class="col-sm-5 ml-5 mt-5 menu1">
// 	html+='				<img src="../images/image.JPG" class="rounded">
// 	html+='				<div class="text-center mt-3">아메리카노</div>
// 	html+='				<div class="text-center">&#8361;5,000</div>
// 	html+='			</div>
// 	html+='		</div>
// 	html+='	</div>
// 	html+='</div>
//     menuPage.append();
// }
// function jsonParse() {
//     // var drink =[];
//     // var dessert =[];
//     // var othermenu =[];
//     $.getJSON('../json/coffee.json', function (data) { 
//         coffee = data;
//         addMenuList();
//     });
//     // $.getJSON('../json/drink.json', function (data) { 
//     //     drink = data;
//     //     console.log(drink);
//     // });
//     // $.getJSON('../json/dessert.json', function (data) { 
//     //     dessert = data;
//     //     console.log(dessert);
//     // });
//     // $.getJSON('../json/othermenu.json', function (data) { 
//     //     othermenu = data;
//     //     console.log(othermenu);
//     // });
// };

// function init(){
//     jsonParse();
// }
// init();