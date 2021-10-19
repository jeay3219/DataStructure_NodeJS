var poker=[];
for(var i=0;i<52;i++){  //i為拿到的牌數量52為總牌數，紅心黑桃棉花方塊各13張牌
    switch(parseInt(i/13)){
        case 0:
            if(parseInt(i%13)<9){
                poker.push("H"+(parseInt(i%13)+1));
                
            }
            else{
                poker.push("H"+(parseInt(i%13)+1));
                break;
            }
           
        case 1:
            if(parseInt(i%13)<9){
                poker.push("S"+(parseInt(i%13)+1));
                
            }
            else{
                poker.push("S"+(parseInt(i%13)+1));
                break;
            }
            
        case 2:
            if(parseInt(i%13)<9){
                poker.push("C"+(parseInt(i%13)+1));
                
            }
            else{
                poker.push("C"+(parseInt(i%13)+1));
                break;
            }
            
        case 3:
            if(parseInt(i%13)<9){
                poker.push("D"+(parseInt(i%13)+1));
                
            }
            else{
                poker.push("D"+(parseInt(i%13)+1));
                break;
            }
            
    }
   
}
console.log(poker.toString());  //toString就是将你所要显示的内容以字符串的形式显示出来
var player1=[], player2=[], player3=[],player4=[];

for (let i = 0; i < poker.length; ) {   //將被抽走的卡，刪除，以免抽到重覆
    var rand = Math.floor(Math.random() * poker.length);
    //當需要在陣列的尾端新增一個值，你可以使用 push(),如果需要加入在第一個則可以使用 unshift(),shift() 則可以移除第一個陣列值。,pop() 則是移除最後一個陣列值。 ,splice() 可以移除指定位置、指定數量的陣列值
    player1.push(poker[rand]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
   
    player2.push(poker[rand]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    
    player3.push(poker[rand]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    
    player4.push(poker[rand]);
    poker.splice(rand,1);
    
}
function compare(a,b){ 
    if(b.charCodeAt(0)==a.charCodeAt(0))
    {
        if(b.charCodeAt(1)==a.charCodeAt(1))
        {
            return b.charAt(2)-a.charAt(2)
        }
        else{
            return b.charAt(1)-a.charAt(1)
        }
        
    }
    else{
        return b.charCodeAt(0)-a.charCodeAt(0)
    }


}
player1.sort(compare);  //利用英文大小排序

console.log("Player1:"+player1);


  
player2.sort(compare);

console.log("Player2:"+player2);


player3.sort(compare);

console.log("Player3:"+player3);

player4.sort(compare);

console.log("Player4:"+player4);