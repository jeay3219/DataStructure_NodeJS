const LIVE=1, DEAD=0; //生與死

class Life {
    constructor(_row,_col){
        this.row = _row;
        this.col = _col;
        this.grid = new Array();
        //create 2d array
        for (let r = 0; r < this.row; r++) {
           this.grid.push(new Array());
           for (let c = 0; c < this.col; c++) {
               this.grid[r].push(DEAD);
           }
        }
        
    }

    // Initinalize(){

    // }

};

Life.prototype.Initialize = function(){  //建造初始圖形//活著的細胞
    this.grid[3][4] = LIVE;
    this.grid[3][5] = LIVE;
    this.grid[3][6] = LIVE;
    this.grid[3][7] = LIVE;
}

Life.prototype.getStatusAt = function(row, col){  //getStatusAt取得狀態 setStatusAt設定狀態 
    if(row<0 || col <0)
       return DEAD;
    if(row >= this.row || col >= this.col)  
       return DEAD;
    return this.grid[row][col];
}
Life.prototype.setStatusAt = function(row, col, status){
    if(row<0 || col <0)
       return false;
    if(row >= this.row || col >= this.col)  
       return false;
    this.grid[row][col]=status;
    return true;
}
Life.prototype.neighborCount = function(row, col){  //建立鄰居
    var count=0;  
    count += this.getStatusAt(row-1, col-1);
    count += this.getStatusAt(row-1, col);
    count += this.getStatusAt(row-1, col+1);
    count += this.getStatusAt(row, col-1);
    count += this.getStatusAt(row, col+1);
    count += this.getStatusAt(row+1, col-1);
    count += this.getStatusAt(row+1, col);
    count += this.getStatusAt(row+1, col+1);
    return count;
}

Life.prototype.update = function(){
    // var nextGrid = new Array();
    // for (let r = 0; r < this.row; r++) {
    //      nextGrid.push([]);
    //      for (let c = 0; c < this.col; c++) {
    //          nextGrid[r].push( this.grid[r][c] );
    //      }
    // }
    // this.grid; //no duplicate /copy
    var nextGrid = JSON.parse(JSON.stringify(this.grid));

    for (let r = 0; r < this.row; r++) {  //在下一個世代改變形狀
        for (let c = 0; c < this.col; c++) {
            var nCount = this.neighborCount(r, c);
            if(nCount == 3 && this.getStatusAt(r,c)==DEAD) //DEAD => LIVE  
               nextGrid[r][c] = LIVE;
            if((nCount <2 || nCount>3)) //LIFE=>DEAD 
               nextGrid[r][c] = DEAD;
        }
    }
    this.grid = nextGrid;//OK?

}

class Board{  //畫布
    constructor(_life){
        this.game = _life;
        this.size = Math.floor(600/this.game.row);  
        this.ctx2d = document.getElementById("gameBorad").getContext("2d");  //創造2D畫布
        this.ctx2d.fillStyle = "#ff0000";  //填上顏色
        this.ctx2d.lineWidth = 1;  //線條粗度
    }
    

    draw(){  //畫圖
        this.ctx2d.clearRect(0,0,600,600);  //清除畫布600*600pixel
       for (let r = 0; r < this.game.row; r++) {
           for (let c = 0; c < this.game.col; c++) {
               
               if(this.game.getStatusAt(r,c)==LIVE){
                   //fill
                   this.ctx2d.fillRect(c*this.size, r*this.size, this.size, this.size);  //填滿畫布 
            //        this.ctx2d.strokeRect(c*this.size, r*this.size, this.size, this.size);
            //    }else{
            //        //stroke
            //        this.ctx2d.strokeRect(c*this.size, r*this.size, this.size, this.size);
               }
               this.ctx2d.strokeRect(c*this.size, r*this.size, this.size, this.size);  //增加框線
           }
           
       } 
    }
}
DrawPoint(r,c);
{ //只重畫點過的位置canvas
 if(this.game.getStatusAt(r,c)==LIVE){
            this.ctx2d.fillStyle = "#ff0000";                  
                  }else{
   this.ctx2d.fillStyle = "#ffffff";
          }
  this.ctx2d.fillRect(c*this.size, r*this.size, this.size, this.size);
  this.ctx2d.fillStyle = "#ff0000"; 
   }




//unit test
var game = new Life(10,10); //總共10格*10格畫布
//console.log(JSON.stringify(game))
game.Initialize();
// console.log("3,4: "+game.neighborCount(3,4));
// console.log("3,5: "+game.neighborCount(3,5));
// console.log("2,5: "+game.neighborCount(2,5));
var gameBorad = new Board(game);
gameBorad.draw();

function next(){
    game.update();
    gameBorad.draw();
}
function clickHandler(event){   //可以讓使用者利用滑鼠點擊增加活著的方塊
    var col = Math.floor(event.offsetX/gameBorad.size);
    var row = Math.floor(event.offsetY/gameBorad.size);
    if(game.getStatusAt(row, col)== LIVE)
       game.setStatusAt(row,col, DEAD);
    else
        game.setStatusAt(row,col, LIVE);
    gameBorad.draw();
    gameBorad.DrawPoint(row,col);
}   