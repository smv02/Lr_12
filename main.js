let difficultyLevel = prompt('Напишіть рівень складності із запропонованих! (Початковий, середній, високий)', 'початковий');
difficultyLevel == null ? difficultyLevel = 'початковий':true;
let numberWord = document.querySelector('.number>span');
let arrWord = [];
let easyEngWord = ['always', 'food', 'dog', 'sea', 'life', 'house', 'land', 'city', 'bird', 'animal'];
let easyArrTranslate = ['завжди', 'їжа', 'собака', 'море', 'життя', 'будинок', 'земля', 'місто', 'птаха', 'тварина'];
let midEngWord = ['approve', 'arrange', 'boast', 'canteen', 'childhood', 'confidence', 'courage', 'depth', 'destination', 'district'];
let midArrTranslate = ['затвердити', 'організувати', 'похвалитися', 'їдальня', 'дитинство', 'впевненість', 'мужність', 'глибина', 'призначення', 'район'];
let hardEngWord = ['abrogate', 'affable', 'bellicose', 'billow', 'brazen', 'complicity', 'counterfeit', 'hangar', 'laconic', 'plummet'];
let hardArrTranslate = ['скасувати', 'привітний', 'войовничий', 'хвиля', 'нахабний', 'співучасті', 'підробка', 'ангар', 'лаконічний', 'впасти'];
let slider = document.querySelector('.slider');
let trueTranslate = document.querySelector('.true>span');
let falseTranslate = document.querySelector('.false>span');
let resultLevel = document.querySelector('.resultLevel');
let input = document.querySelector('input');

let checkNumberWord = 1;
let numberTrueTranslate = 0;
let numberFalseTranslate = 0;

if (difficultyLevel == 'початковий'){
    for(let i = 0; i < easyEngWord.length; i++){
        let tempObj = {
            engWord: easyEngWord[i],
            translate: easyArrTranslate[i]
        };
        arrWord.push(tempObj);
    }
} else if(difficultyLevel == 'середній'){
    for(let i = 0; i < easyEngWord.length; i++){
        let tempObj = {
            engWord: midEngWord[i],
            translate: midArrTranslate[i]
        };
        arrWord.push(tempObj);
    }
} else {
    for(let i = 0; i < easyEngWord.length; i++){
        let tempObj = {
            engWord: hardEngWord[i],
            translate: hardArrTranslate[i]
        };
        arrWord.push(tempObj);
    }
}


function random(n) {
    return Math.floor(Math.random() * Math.floor(n));
}
  
function shuffle (arr) {
    for (var i = 0; i < arr.length; i++) {
      var j = random(arr.length);
      var k = random(arr.length);
      var t = arr[j];
      arr[j] = arr[k];
      arr[k] = t;
    }
    return arr;
}

shuffle(arrWord);

$(function(){

    for(let i = 0; i < arrWord.length; i++){
        $('.slider').append('<div class="block-word"><span class="word">' + arrWord[i].engWord +'</span></div>');
    }
    ////////////////////////////
	$('.slider').slick({
        infinite: false,
        nextArrow: '.block-btn_next',
        draggable: false,
    });
    $('.slick-prev').hide();
    ////////////////////////////
    $('.block-btn_next').click(function() {
        if(checkNumberWord == 10) {
            if(numberTrueTranslate >= 9) {
                resultLevel.innerHTML = `вище рівня ${difficultyLevel}`;
            } else if(numberTrueTranslate >= 7){
                resultLevel.innerHTML = `${difficultyLevel}`;
            } else{
                resultLevel.innerHTML = `нижче рівня ${difficultyLevel}`;
            }
            $('#login-form').modal();
        }
        if((numberTrueTranslate + numberFalseTranslate) !== 10){
            if(input.value == arrWord[checkNumberWord - 1].translate){
                numberTrueTranslate++;
                trueTranslate.innerHTML = numberTrueTranslate;
            } else {
                numberFalseTranslate++;
                falseTranslate.innerHTML = numberFalseTranslate;
            }
        }
        if(checkNumberWord < 10){
            checkNumberWord++;
            numberWord.innerHTML = checkNumberWord;
        }
    });
});
