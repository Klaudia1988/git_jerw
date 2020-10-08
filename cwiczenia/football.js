// stworz 2 klasy: Klub  a druga Pilkarz. Klub ma miec własciwosci: ID, Nazwa, Kraj, Miejsce w tabeli. 
// a piłkarz: ID, imię, nazwisko, numer na koszulce, ID klubu
// stworz 4 pilkarzy i 3 kluby
// stwórz funkcję getClub, przyjmującą jako argument idklubu i zwracajaca klub 

function  Club(id, name, country, placeInTable){
    this.id = id;
    this.name = name;
    this.country = country;
    this.placeInTable = placeInTable
}

function Footballer(id, position, surname, number, clubId){
    this.id = id;
    this.position = position;
    this.surname = surname;
    this.number = number;
    this.clubId  = clubId
}

var clubs = []
var footballers = []

clubs.push(new Club(1,'Wisła Kraków','Poland',1));
clubs.push(new Club(2,'Valencia','Spain',2));
clubs.push(new Club(3,'AC Milan','Italy',3));

footballers.push(new Footballer(11,'obronca','Klemenz',5,1));
footballers.push(new Footballer(12,'napastnik','Brozek',23,1));
footballers.push(new Footballer(13,'obronca','Costa',3,2));
footballers.push(new Footballer(14,'bramkarz','Donnarumma',90,3));

function getClub(id){
    var club;
    for(i=0; i<clubs.length;i++){
        if(id ==clubs[i].id){
            club = clubs[i]
        }
    }
    return  club;
    console.log(club);
}

function printWislaPlayers(array){
    var player = '';
    for(i=0; i<array.length; i++){
        if(array[i].clubId ==1){
            player += array[i].surname + ', '
        }
    }
    if (player!= ''){
        player = player.substring(0, player.length-2)
    }
    console.log(player)
}

function printPlayersClub(array){
    var playersClub = '';
    
    for(j=0; j<array.length; j++){
        
        
        var idKlubuPilkarza = array[j].clubId; //1 iteracaja = id klubu pilkarza
        var klubPilkarza = getClub(idKlubuPilkarza); // caly obiekt klub na podstawie id klubu pilkarza
        playersClub = playersClub + array[j].surname + ': '+ klubPilkarza.name + ', ';
    }
    if(playersClub != ''){
        playersClub = playersClub.substring(0, playersClub.length-2)
    }
    console.log(playersClub);
    return playersClub
   
}

function getFootballersName(array){
    var playerName = '';
    for(i=0; i<array.length; i++){
            playerName  +=  array[i].surname + ', '
    }
    if(playerName != ''){
        playerName = playerName.substring(0, playerName.length-2)
    }
    console.log(playerName);
    return playerName;
}

function onlyFromPoland(array){
    var footballerFromPl = '';

    for(k=0; k<array.length; k++){
        var footballerClubID = array[k].clubId;
        var footballerClub = getClub(footballerClubID)
        if(footballerClub.country == 'Poland'){
            footballerFromPl += array[k].surname + ', '
        }
    }
    if(footballerFromPl != ''){
        footballerFromPl = footballerFromPl.substring(0, footballerFromPl.length-2)
    }
    console.log(footballerFromPl);
    return footballerFromPl;
}

function footballersFromSpecificCountry(array, kraj){
    var countryPlayer =[];
    for(j=0; j<array.length; j++){
        
        var footballerClubID = array[j].clubId;
        var footballerClub = getClub(footballerClubID);

        
       if(footballerClub.country == kraj){
            countryPlayer = footballers[j]
        }

    }
    console.log(countryPlayer)
}

function isMember(playerSurname, clubName){

    var isMember = true;
    var a = 0;
    var b = 0;

    for (i=0; i< footballers.length; i++){
        if(playerSurname == footballers[i].surname){
            a = footballers[i].clubId
        }
    }
    for(j=0; j<clubs.length; j++){
        if(clubName == clubs[j].name){
            b = clubs[j].id
        }
 
    }
    if(a==b){
        isMember = true
    }else{
        isMember = false
    }
  console.log(isMember) 
}



//getClub(1)
//printWislaPlayers(footballers)
//getFootballersName(footballers) //zwraca wartosc zmiennej playerName
//printPlayersClub(footballers)
//onlyFromPoland(footballers)
//footballersFromSpecificCountry(footballers, 'Spain')
isMember('Donnarumma', 'korona')