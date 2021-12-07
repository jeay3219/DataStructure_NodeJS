const readline = require("readline-sync");

var row=6, col=6;
// var aryBox=[[0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0]];
var aryBox=[];
var aryVisited=[] //曾經拜訪過的陣列
for (let r = 0; r <row; r++) {  //建立出6*6
    aryBox.push([]);
    aryVisited.push([]);
    for (let c = 0; c < col; c++) {
        aryBox[r][c]=Math.floor(Math.random()*row)+","+Math.floor(Math.random()*col); //"r,c"//Math.random隨機選取數值 //Math.floor(x)比x小的最大數值
        aryVisited[r][c]=0;
    }
}


do{  //do while 無窮迴圈
   var startR= parseInt(readline.question('Row start?'));//給使用者輸入數字
   var startC= parseInt(readline.question('Col start?'));
   if(isNaN(startR) || isNaN(startC) || startR<0 || startR>=row || startC<0 || startC>=col){ //isNAN不是數字
       console.log("Input error! ");
       continue;
   }
   var idx= aryBox[startR][startC].split(",");//idx[0]=>row idx[1]=>col//start為起點//split為分割
   if(aryVisited[startR][startC]=1);
   {console.log("Visit:"+ startR+", "+startC)};//拜訪過嘞
   
   //loop
   while(true){
       var nextR = parseInt(idx[0]);
       var nextC = parseInt(idx[1]);
       if(aryVisited[nextR][nextC]==1){
           console.log("Game over!");//拜訪第二次 遊戲結束
           break;
       }{
         var idx= aryBox[nextR][nextC].split(",");//idx[0]=>row idx[1]=>col
         aryVisited[nextR][nextC]=1;
         console.log("Visit:"+ nextR+", "+nextC);
       }
   }


}while(true)
//功課1.算步數2.重新遊戲走過的參數歸零