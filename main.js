var button1, button2, button3;
var textBox1;
var count; // integer
var buttonArray = [button2];

// console.log(i);
function setup(){
  button1 = createButton("點我");
  button1.mousePressed(plus);
  count = 0;
  button2 = createButton("0");
}
function plus(){
  count += 1;
}

function draw(){
  var button_tmp = createButton(count);
frameRate(5);
  //button2.value="hi"+count.toString();
  
  //button2.html(count.toString());
  button_tmp.mousePressed(plus2);
  buttonArray.push(button_tmp);
  if(count > 5){
    frameRate(count);
  }
}

function plus2(sender){
  console.log(sender);
  console.log(sender.srcElement.innerHTML);
  count += parseInt(sender.srcElement.innerHTML);
}