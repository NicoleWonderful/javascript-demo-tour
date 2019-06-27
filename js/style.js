var list__wrap = document.querySelector('.list__wrap');

var selectId = document.querySelector('#selectId');
selectId.addEventListener("change", display__list);
function display__list(e) {
var select = e.target.value;
var str = "";
var picture = data.result.records[i].Picture1;
var name = data.result.records[i].Name;
var zone = data.result.records[i].Zone;
var openTime = data.result.records[i].Opentime;
var add = data.result.records[i].Add;
var tel = data.result.records[i].Tel;
var ticketInfo = data.result.records[i].Ticketinfo;


for (var i = 0; i < data.result.records.length; i++) {
    if (select == data.result.records[i].Zone) {
        '<div class="list__list">'
        +
        '<div class="picture" style="background-image:url(' + data.result.records[i].Picture1 + ');height:200px; width:100%;"><div class="title__wrap"><div class="title__name">' + data.result.records[i].Name + '</div><div class="title__zone">' + data.result.records[i].Zone + '</div></div></div>'
        +
        '<div class="content__wrap"><li class="list__style"><img src="assets/icons_clock.png" class="icon">' + data.result.records[i].Opentime + '</li>'
        +
        '<li class="list__style"><img src="assets/icons_pin.png" class="icon">' + data.result.records[i].Add + '</li>'
        +
        '<li class="list__style__tag"><div><img src="assets/icons_phone.png" class="icon__tel">' + data.result.records[i].Tel + '</div><div class="free"><img src="assets/icons_tag.png" class="icon">' + data.result.records[i].Ticketinfo + '</div></li>'
        +
        '</div>'
        +
        '</div>'
    }
    list__wrap.innerHTML = '<h2>' + select + '</h2>' + '<div class="list__list__total">' + str + '</div>';
}
}

str +=
`<div class="list__list">
    <div class="picture" style="background-image:url(' ${picture} ');height:200px; width:100%;">
        <div class="title__wrap">
            <div class="title__name">${name}</div>
            <div class="title__zone">${zone}</div>
        </div>
    </div>
    <div class="content__wrap">
        <li class="list__style">
            <img src="assets/icons_clock.png" class="icon">${openTime}
        </li>
        <li class="list__style">
            <img src="assets/icons_pin.png" class="icon">${add}
        </li>
        <li class="list__style__tag">
            <div><img src="assets/icons_phone.png" class="icon__tel">${tel}</div>
            <div class="free">
                <img src="assets/icons_tag.png" class="icon">${ticketInfo}
            </div></li>
    </div>
</div>`
