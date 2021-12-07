   
function bracketMatch(inputString) { //bracketMatch判斷有沒有相對稱 //inputString放入字串
    var opening = []; //stack
    var isMatched = true;//判斷對或錯
    var i = 0;
    var symbol = inputString.charAt(i);
    while (isMatched && symbol != '\n') { // \n為換行意思
        if (symbol == '{' || symbol == '(' || symbol == '[')
            opening.push(symbol); //將symbol放入opening陣列裡
        if (symbol == '}' || symbol == ')' || symbol == ']') {
            if (opening.length == 0) //stack empty?//假設opening陣列裡沒東西
                isMatched = false;
            else {
                match = opening.pop();
                isMatched = (symbol == '}' && match == '{') || (symbol == ')' && match == '(') ||
                    (symbol == ']' && match == '[');
            }
        }
        i++;
        symbol = inputString.charAt(i);//將第i個拿出來判斷
    }
    if (opening.length > 0 || !isMatched)
        return 'unmatched';
    else
        return 'matched';
}
//test 
var str= "{a = (1 + v(b[3 + c[4]]))"
console.log(bracketMatch(str));