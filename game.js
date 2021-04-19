class Game{
    constructor(){

    }
getState(){
var gameStateReference = dataBase.ref('gameState')
gameStateReference.on('value',function(data){
gamestate = data.val()    
})    
}
update(state){
dataBase.ref('/').update({
gameState:state
})

}
start(){
if(gamestate === 0){
form = new Form()
form.display()
}    
}
}