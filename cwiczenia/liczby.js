function zwrocPodzielnePrzez7(){ //wypisz wszystkie liczby mniejsze od 200 i podzielne przez 7
    var podzielnePrzez7 = [];
    for(i=0; i<200; i++){
           
           if (i % 7 == 0){
            podzielnePrzez7.push(i);
        }
    }
    console.log(podzielnePrzez7)
}

function iloscZnakow(wyrazenie){
    var words = wyrazenie.split(' ');
    var letters = [];
    for (i=0; i<words.length; i++){
     var word = words[i].length
     letters.push(word)
    }
    console.log(letters)
}

function textInText(text1, text2){
    var splitedText = text1.split(' ')
    var newText = []
    var finalText;

    for (i=0; i<splitedText.length; i++){
        newText.push(splitedText[i]+text2)
    }

    finalText = newText.join([separator = ''])
console.log(finalText)
}

function sumNumbers(array, stopCounting, startCounnting){

var sum = 0;
var flag = true;

for(i=0; i<array.length; i++){
   
    if(array[i] == stopCounting){
        flag = false;
        }
    if(flag){
      sum += array[i];
    }
    
   if (array[i] == startCounnting){
        flag =  true
    }
    
}
console.log(sum)
}

//f ktora ma argument - l. całkowitą, zwraca 

//zwrocPodzielnePrzez7()
//iloscZnakow("Ala ma kota")
//textInText('Ala ma kota', ' ,')
//umNumbers([1,1,3,6,1,7,5], 3, 7)
