document.addEventListener("DOMContentLoaded", function(){
        var cards = document.querySelectorAll('.t-store__card');
//перебираем все найденные элементы и вешаем на них события
[].forEach.call( cards, function(card) {
    //вешаем событие
    card.childNodes[0].onclick = function(e) {
        console.log("fuck this shit");
    }
});
}
