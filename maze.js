var MAZE=[  //地圖
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,1,1,0,0,0,0,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1],
    [1,0,0,0,0,0,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,0,0,0,0,0,0,1,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]

];

var currentRow=1, currentCol=1; //開始起點
var exitRow=8 , exitCol=10; //終點
 class Point{
     constructor(_row,_col){
         this.row=_row;
         this.col=_col;
     }
     print(){
         return"("+this.row+","+this.col+")";
     }
 }

 //Stack堆疊

 var stack=[]; //紀錄走過的路
 stack.push(new Point(currentRow,currentCol));  //將開始的起點push到堆疊裡
 MAZE[currentRow][currentCol]=2; //第一步路痕跡
 var isTrackBack=false;

 //嘗試找到終點
 while(currentRow !=exitRow||currentCol !=exitCol){  //!不
     //left
    if(MAZE[currentRow][currentCol-1] == 0){
        MAZE[currentRow][currentCol-1] = 2;//走過的痕跡
        if(isTrackBack == true){
            stack.push(new Point(currentRow, currentCol));
            isTrackBack=false;
        }
        stack.push(new Point(currentRow, currentCol-1));
        currentCol-=1;
        continue;
    }
    
    //down
    if(MAZE[currentRow+1][currentCol] == 0){
        MAZE[currentRow+1][currentCol] = 2; //走過的痕跡
        if(isTrackBack == true){
            stack.push(new Point(currentRow, currentCol));
            isTrackBack=false;
        }
        stack.push(new Point(currentRow+1, currentCol));
        currentRow++;
        continue;
    }
    //right
    if( MAZE[currentRow][currentCol+1] == 0){
        MAZE[currentRow][currentCol+1] = 2;//走過的痕跡
        if(isTrackBack == true){
            stack.push(new Point(currentRow, currentCol));
            isTrackBack=false;
        }
        stack.push(new Point(currentRow, currentCol+1));
        currentCol+=1;
        continue;
    }
    //up
    if(MAZE[currentRow-1][currentCol] == 0){
        MAZE[currentRow-1][currentCol] = 2;//走過的痕跡
        if(isTrackBack == true){
            stack.push(new Point(currentRow, currentCol));
            isTrackBack=false;
        }
        stack.push(new Point(currentRow-1, currentCol));
        currentRow--;
        continue;
    }
 //terminal
 if(stack.length>0){
    //pop previous point 將上一個Pop回去
    var prev= stack.pop();
    isTrackBack = true;
    //current point set to previous point 將上一個Pop回去
    currentRow = prev.row;
    currentCol = prev.col;
 }
 else{
     console.log("No solution!");
     break;
 }

}