class Form{
constructor(){
}    
display(){
var title = createElement('h2');
title.html('Welcom to car racing game');
var input = createInput('Enter the player name');
var button = createButton('submit');
title.position(390,0)
button.position(390,200)
input.position(390,160)

button.mousePressed(function(){
input.hide()
button.hide()
var name = input.value()
var greeting = createElement('h3')
greeting.html('hello player' + name)
greeting.position(130,160);    
})
}
}