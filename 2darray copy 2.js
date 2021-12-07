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


//do{ do while 無窮迴圈
//    var startR= parseInt(readline.question('Row start?')); 
    //var startC= parseInt(readline.question('Col start?')); 
    //if(isNaN(startR) || isNaN(startC) || startR<0 || startR>=row || startC<0 || startC>=col){ 
      //  console.log("Input error! "); 
       // continue; 
   // } 
   var step=0; //拜訪步數 
   var stepmax=0; //最大步數 
   var stepN=""; //所有最大步數的位置字串 
   var VisitString="";  //記錄所有走過的位置 
    
   //從0.0->0.1->0.2一格一格開始走看看，因是隨機產生索引值，所以會重覆，只好每一格都開始走看看 
   for(let startR=0;startR<row;startR++) 
   { 
      for(let startC=0;startC<col;startC++) 
      { 
    
              for(let r=0;r<row;r++)    //清除陣列，並重新產生值皆為0的2維陣列，記錄拜訪位置用 
              { 
                  aryVisited.push([]); 
                  for(let c=0;c<col;c++) 
                  { 
                      aryVisited[r][c]=0; 
                   } 
               } 
    
   //idx[0]=>row idx[1]=>col(自己設定的存取順序)索引值0會在1的前面 
       var idx= aryBox[startR][startC].split(",");  
       aryVisited[startR][startC]=1; 
       step++; 
       VisitString=startR+","+startC; //記錄開始位置 
       //console.log("Visit:"+ startR+","+startC); 
        
    
      for(let stepover=0; stepover<row*col; stepover++)      //因不知會走幾步，有可能每一格都走到，所以設回圈為陣列的最大值 
       { 
           var nextR = parseInt(idx[0]);  //取出下次要拜訪的列值，但因這取法(取1位數)，所以陣列最大是10*10 (0~9) 
           var nextC = parseInt(idx[1]);  //取出下次要拜訪的行值 
        if(aryVisited[nextR][nextC]==1)   //=1表示走過了，本次結束 
           { 
               //console.log("Game over!"); 
               //console.log("total" +step+ "steps"); 
               console.log(startR+","+startC+"共"+step+"步:"+VisitString); 
               if(step==stepmax)  //如果本次總步數和最大步數一樣，則並列出來 
               { 
                   stepN= stepN+" & "+startR+","+startC; 
               } 
               if(step>stepmax) //如果本次總步數 大於 最大步數，則取代 最大步數 
               { 
                   stepmax=step; 
                   stepN=startR+","+startC; 
               }  
               step=0; 
               stepover=row*col;  //設為最大值跳出回圈，結束本次拜訪 
          }else{ 
              var idx= aryBox[nextR][nextC].split(",");//idx[0]=>row idx[1]=>col //取得下次要拜訪的位置 列+行 
              aryVisited[nextR][nextC]=1; //走過的位置設為1 
             step++; 
             //console.log("Visit:"+ nextR+", "+nextC); 
             VisitString=VisitString+" -> "+nextR+","+nextC; //原記錄 加上走過的位置 
          } 
       }  
     }//startC 
   }//startR 
   console.log("最長路徑起點"+stepN); //印出所有最大步數的位置 
   //1.算步數 count item /total steps 2.拜訪過的要歸零 3.最長的起點 //不重複