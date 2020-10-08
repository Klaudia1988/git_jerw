
function Animal(imie, gatunek, wiek, kolor){ //funkcja konstrukcyjna, która tworzy obiekt klasy Animal, np. Miśka, Bareczka, Wypióra
    this.name = imie;
    this.type = gatunek;
    this.age = wiek;
    this.color  = kolor;
    
    this.printName = function (){
        console.log(this.name + ' jest piekny')
    }     
};

var Animals = []; //tablica Animals

Animals.push(new Animal('Misiek',"pies",13,"biały")); //to jednocześnie tworzy konkretnyobiekt za pomocą funkcji konstrukcyjnej i wsadza go  do tablicy  Animals
Animals.push(new Animal('Bari',"pies",12,"brazowy"));
Animals.push(new Animal('Murkat',"kot",3,"czarny")); 


var smallAnimals = [];

smallAnimals.push(new Animal('Wypiór',"chomiuk",1,"kolorowy"));
smallAnimals.push(new Animal('Chip',"wiewiórka",2,"bura"));
smallAnimals.push(new Animal('Dale',"wiewiórka",8,"czarny"));


for(i=0; Animals.length >i; i++){  //pętla, która wypisuje imiona wszystkich zwierzaków
    Animals[i].printName()
};


function ktoJestStarszy(animal1, animal2){   
if (animal1.age<animal2.age){
    console.log (animal1.name + ' jest młodszy od ' + animal2.name)
}else{
    console.log (animal2.name + ' jest młodszy od ' + animal1.name)
};
}

 function sredniaWiekuWszystkich(array){
    
    var suma = 0;

    for(i=0; array.length >i; i++){
      
      suma = suma + array[i].age  
    }

    var srednia = suma/array.length
    console.log(srednia)

    return srednia
 }

 function sredniaWiekuPsow(array){

    var suma = 0;
    var ilPsow  = 0;

    for(i=0; i<array.length; i++){
        if(array[i].type == "pies"){
            suma = suma + array[i].age;
            ilPsow  =  ilPsow + 1
        } 
    }
    var sredniaWiekuPsow = suma/ilPsow
    console.log(sredniaWiekuPsow)
}

function imieNajstarszego(array){

    var wiekZwierzaka = 0;
    var imie;
   for(i=0; array.length > i; i++){

    if(array[i].age > wiekZwierzaka){
        wiekZwierzaka = array[i].age
        imie = array[i].name
    }
   }
   console.log(imie)
}

function imieNajmlodszego(array){
    var wiekZwierza = 0;
    var imieJuniora;

    for(i=0; array.length > i; i++){
        if(wiekZwierza > array[i].age){
            wiekZwierza = array[i].age;
            imieJuniora = array[i].name
        } else if (i==0) {
            wiekZwierza = array[i].age;
            imieJuniora = array[i].name
        }
      
    }
 console.log(imieJuniora)
}

function printAll(array){
    var imiona = '';
    for(i=0; i<array.length; i++){
        if(i == array.length-1){
            imiona +=array[i].name
        }else{
        imiona += array[i].name + ", "
        }
        
    }
    
    console.log(imiona)
}

function filterByType(array, typ){
    var filtered = []
    for(i=0; i<array.length; i++){
        if(typ == array[i].type){
            filtered.push(array[i])
        }
    }
    console.log(filtered)
}

//funkcja filtrujaca outputem do tablicy maja byc tylko zwierzeta, ktorych wiek jest powyzej sredniej

function filterOldAnimals(array){
    var oldAnimals = [];
    var srednia = sredniaWiekuWszystkich(array)
    for(i=0; i<array.length; i++){
        if(srednia<array[i].age){
            oldAnimals.push(array[i].name)
        }
    }
console.log(oldAnimals)
}

//funkcja printDogs, ktora printuje tylko psy, a jak nie ma zadnego psa to pusty string

function printOnlyDoggos(array){
    var pieski = "";
    for(i=0; i<array.length; i++){
        if(array[i].type == "pies"){
        pieski += array[i].name + ", "} 
    }
    if(pieski != ""){
        pieski = pieski.substring(0, pieski.length-2)}
   
    console.log(pieski)
}

//sredniaWieku(Animals);
//sredniaWieku(smallAnimals);
//imieNajmlodszego(smallAnimals)
//imieNajstarszego(smallAnimals)
//ktoJestStarszy(Animals[0],Animals[1]);
//printAll(Animals);
//sredniaWiekuPsow(Animals);
//filterByType(smallAnimals, "chomiuk")
//filterOldAnimals(Animals)
printOnlyDoggos(Animals)