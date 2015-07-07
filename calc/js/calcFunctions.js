var buttons = document.getElementsByClassName('calcButton');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    document.getElementById('inputBox').value += this.value;
  });
}
function backspace(){
  var str = document.getElementById('inputBox').value
  document.getElementById('inputBox').value = str.substring(0,str.length-1)
}

function memoryVariable(){
  memory=0;
}

/*
*Gets an arithmentic equation without parenthesis
*
*Returns calculated number
*Uses PEMDAS
*/
function shuntingYard(string){
  var numbers=new Array();
  var operations=new Array();
  var prev = "";
  var tempNum ="";
  var goahead = false;
  for(i=0;i<=string.length;i++){
    if(isNaN(string.charAt(i))&&string.charAt(i)!='.'){
      operations.push(string.charAt(i));
      prev=string.charAt(i);
      if(tempNum!=""){
        numbers.push(Number(tempNum));
        tempNum='';
      }
    }
    else {
      tempNum += string.charAt(i);
    }
  }
  if(tempNum!=""){numbers.push(Number(tempNum));}
  // console.log(numbers);
  // console.log(operations);
  while(numbers.length>1){
  var answer = 0;
  var exp = operations.indexOf('^');
  var mult = operations.indexOf('*');
  var divide = operations.indexOf('/');
  var add = operations.indexOf('+');
  var subtract = operations.indexOf('-');
  console.log(operations.indexOf('*') + "mult");
  console.log(divide + "divide");
  console.log(add + "add");
  console.log(subtract + "sub");
  function maxify(i){
    var maxIndex = Math.max(exp,mult,divide,add,subtract);
    var returnValue = 0
    if(i==-1){returnValue=maxIndex+1;}
    else{returnValue=i;}
    return returnValue;
  }
  if(exp!=-1){
      answer = Math.pow(numbers[exp],numbers[exp+1]);
      operations.splice(exp, 1);
      numbers.splice(exp,2,answer);
  }else if(divide!=-1||mult!=-1){
    if(maxify(divide)>maxify(mult)){
      answer = numbers[mult]*numbers[mult+1];
      operations.splice(mult, 1);
      numbers.splice(mult,2,answer);
      console.log("*");
      console.log(answer);
      console.log(numbers);
      console.log(operations);
    }else{
      answer = numbers[divide]/numbers[divide+1];
      operations.splice(divide, 1);
      numbers.splice(divide,2,answer);
      console.log("/");
      console.log(answer);
      console.log(numbers);
      console.log(operations);
      }
  }else if(add!=-1||subtract!=-1){
    if(maxify(add)>maxify(subtract)){
      answer = numbers[subtract]-numbers[subtract+1];
      operations.splice(subtract, 1);
      numbers.splice(subtract,2,answer);
      console.log("-");
      console.log(answer);
      console.log(numbers);
      console.log(operations);
      }else{
        answer = numbers[add]+numbers[add+1];
        operations.splice(add, 1);
        numbers.splice(add,2,answer);
        console.log("+");
        console.log(answer);
        console.log(numbers);
        console.log(operations);
      }
  }
  }
  console.log(numbers);
  // console.log(operations);
  return numbers[0];
}

/*
 *Gets an arithmentic equation string with parenthesis
 *
 *Returns arithmentic equation string without parenthesis
 *
 */
function removeParenthesis(string){
  var open = string.indexOf('(');
  var check = 0;
  //find corresponding clsoing
  for (i=open+1;i<=string.length;i++){
    if(string.charAt(i)=='('){check++;}
    else if(string.charAt(i)==')'){
      if(check==0){break;}
      else {check--;}
    }
    console.log("loop");
  }
  var close = i+1
  console.log(open);
  console.log(i);
  open++;
  var inside = string.substring(open,i);
  // console.log(close);
  while(inside.indexOf('(')!=-1){
    inside = removeParenthesis(inside);
  }
  inside = shuntingYard(inside);
  console.log(inside);
  var returnValue = string.substring(0,open-1)+inside+string.substring(close,string.length);
  //var returnValue = string.substring(0,open-1)+evalu(inside)+string.substring(close,string.length);
  // console.log(string.substring(0,open-1));
  // console.log(string.substring(close,string.length));
  console.log(returnValue);
  return returnValue;
}

function calculate(){

  var string;
  var answer;
  string = document.getElementById("inputBox").value;
  console.log(string);
  while(string.indexOf('(')!=-1){
    string = removeParenthesis(string);
    console.log(string);
  }
  answer = shuntingYard(string);
  document.getElementById("inputBox").value = answer;
  console.log(answer);
}

function clearInput(){document.getElementById("inputBox").value = ""; }
function mc() {memory = 0;}
function mr() {document.getElementById('inputBox').value += memory; }
function ms() {
  calculate();
  memory = document.getElementById('inputBox').value;
}
function mp() {
  evalu();
  memory = Number(memory) + Number(document.getElementById('inputBox').value);
  document.getElementById('inputBox').value = memory
}
