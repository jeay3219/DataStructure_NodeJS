//VS PPT: https://drive.google.com/file/d/1pjOZp8Xp6Ghb31Nfnj0YRsVwAzMMyhCq/view?usp=sharing
//JS PPT: https://drive.google.com/open?id=0BwN5VWV_C7-5ZnE3d045YWZJb00
//Javascript 變數的使用

//var weight=50.5;
//var height=160;
//var bmi = weight/((height/100)**2);

//console.log("Hello! Your BMI value is "+ bmi);

//使用第三方套件 readline-sync (待使用者輸入資料後程式再繼續執行) 
//NodeJS 套件管理程式為 npm，需打開終端機輸入指令
//安裝 readline-sync 套件指令: npm install readline-sync
//另可透過package.json指定所有相關套件後 npm install 即可安裝所有套件

const readline = require('readline-sync');
height = readline.question('請輸入您的身高(cm)?');  
height=Number(height)
if(isNaN(height)||height<=20||height>=300)
{
    console.log("不合理，請填入正確數字");
   

}
else
{
    height=(height/100);
    //當BMI18.5理想體重為?
    var BMI18=18.5*height**2;

    //當BMI24理想體重為?
    var BMI24=24*height**2;
    console.log("你的理想體重範圍為:"+ BMI18+"~"+BMI24+"KG");
}

//not only bmi value, but also judgement
//Ask user to input height only, is it workable?