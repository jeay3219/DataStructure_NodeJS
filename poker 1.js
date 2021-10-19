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

for (let i = 0; i < poker.length; ) {
    var rand = Math.floor(Math.random() * poker.length);
    console.log(poker[rand]);
    player1.push(poker[rand]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    console.log(poker[rand]);
    player2.push(poker[rand]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    console.log(poker[rand]);
    player3.push(poker[rand]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    console.log(poker[rand]);
    player4.push(poker[rand]);
    poker.splice(rand,1);
    
}

console.log("Player1:"+player1)
console.log("Player2:"+player2)
console.log("Player3:"+player3)
console.log("Player4:"+player4)