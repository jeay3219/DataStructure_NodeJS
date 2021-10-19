 
var poker=[];
for(var i=0;i<52;i++){
    switch(parseInt(i/13)){
        case 0:
            poker.push("H"+(parseInt(i%13)+1));
            break;
        case 1:
            poker.push("S"+(parseInt(i%13)+1));
            break;
        case 2:
            poker.push("C"+(parseInt(i%13)+1));
            break;
        case 3:
            poker.push("D"+(parseInt(i%13)+1));
    }
   
}
console.log(poker.toString());
var player1=[], player2=[], player3=[],player4=[];

function compare(a,b){
        return Math.random()-0.5;
}
poker.sort(compare);
console.log(poker.toString()); 

//split every 13 card to player 1, 2, 3, 4