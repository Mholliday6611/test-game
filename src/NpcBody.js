class NpcBody {
	constructor(name, startPos, game){
		this.name = name,
		this.game = game

		this.x = startPos.x
		this.y = startPos.y
		this.width = 50
		this.height = 50
		this.interactionBoxWidth = 90
		this.interactionBoxHeight =90
		this.location = {x:this.x, y:this.y}
		this.dialogue = "Hey we're talking"
	}

	render(){

		this.game.push()
		this.game.fill(122,331,331)
		this.game.rect(this.x, this.y, this.width, this.height);
		this.game.pop()
		//interaction box 
		this.game.push()
		this.game.fill('rgba(122,331,331, 0.5)')
		
		this.game.rect(this.x, this.y, this.interactionBoxWidth,this.interactionBoxHeight);
		this.game.pop()
	}
}

export default NpcBody