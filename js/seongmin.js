var menus = [];


// 동적 메뉴 생성

function initMenu(){
    
}








// JSON 파일 로드
function jsonParse() {
    $.getJSON('../json/data.json', function (data) { 
        menus = data;
        console.log(data);
        
    });
};

function init(){
    jsonParse();
}

init();