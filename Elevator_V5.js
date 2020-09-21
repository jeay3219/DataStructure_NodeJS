// JS 程式模擬電梯運作 Version 4: 
// 練習while 迴圈、if、try...execpt語法
// 使用 setTimeout，readline 套件 
// #用Array紀錄所有樓層名稱，strFloor[0]為'B1', #17~22行用以建立B2以下樓層名稱
// 允許輸入B1等地下樓層名稱
const readline = require('readline-sync');
//暫停程式 n 毫秒
function sleep(n) {//sleep n miliseconds
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

var current_floor = 5; //電梯目前位於5樓
var target_floor; //欲到達樓層 
var min = -5 //最低樓層，-2為第下三樓B3，-1為第下三樓B2，0代表B1
var max = 101 //最高樓層, 
var strFloor=['B1'];
if (min<0){
    for(fNum=-1; fNum>=min; fNum--)
        strFloor.push('B'+(fNum*-1+1));
    console.log(strFloor.toString());
}
        
do{ //無窮迴圈，迴圈內程式(6~37行)有break指令時可終止迴圈
    if (current_floor>0)
        str_current = (current_floor) 
    else
        str_current = "B"+(current_floor*-1+1) //轉為地下樓層名稱 current_floor=0 轉為 B1, -1 轉為 B2, -2轉為B3 
    
        //使用者輸入欲到達樓層 
    target_floor = readline.question('您現在在 ' + str_current + ' 樓。請問要去哪一樓？' );
    target_floor = target_floor.toUpperCase();  
    try{ //try 搭配 catch 檢測之間的程式碼在執行時發生錯誤時由 catch 內的程式碼接手處理
        if(strFloor.indexOf(target_floor)>=0) //輸入了地下樓層
            target_floor=strFloor.indexOf(target_floor)*-1;
        else 
            target_floor = parseInt(target_floor) //非地下樓層
    
        if (isNaN(target_floor)|| target_floor < min || target_floor > max){
            console.log('請輸入介於 B'+ (min*-1+1)+'...B1, 1, 2, ...'+max+'的整數\n');
            continue;//繼續至第5行迴圈
        }
        if (target_floor == current_floor){
            console.log("離開電梯\n");
            break; //終止 while (true) 迴圈
        }else if (target_floor < current_floor){
            console.log('電梯下樓');
            
            for (let i = current_floor; i >= target_floor; i--) {
                (i>0) ? console.log(i) : console.log(strFloor[i*-1]);
                sleep(100)//暫停0.1秒
            }
            current_floor=target_floor; //修正多減了1的數值
        }else{
            console.log('電梯上樓');
            
            for (let i = current_floor; i <= target_floor; i++) {
                //使用 () ? : 取代 if(){} else{}
                (i>0) ? console.log(i) : console.log(strFloor[i*-1]);
                sleep(100)//暫停0.1秒
            }
            current_floor=target_floor; //修正多加了1的數值
        }
    }catch(ValueError){
        console.log('格式錯誤，請輸入數字\n');
    }  
    
}while(true);