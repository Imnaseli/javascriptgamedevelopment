class Enemy{
    constructor(){
        this.image = new Image()
        this.image.src = "enemy3.png"
        this.speed = Math.random() * 4 + 1
        this.spriteWidth = 218
        this.spriteheight = 177
        this.height = this.spriteheight / 2
        this.width = this.spriteWidth / 2
        this.x = Math.random() * (CANVAS_WIDTH - this.width)
        this.y = Math.random() * (CANVAS_HEIGHT - this.height)
        this.angle = 0
        this.curve = Math.random() * 400 + 50
        this.angleSpeed = Math.random() * 2 + 0.5
        //controls the speed of the enemies 
        this.frame = 0

        //variable that helps each enemy instance have diffenrent flaps
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }
    update(){
        this.x = canvas.width/2 * Math.cos(this.angle * Math.PI/90) + (canvas.width/2 - this.width/2)
        this.y = canvas.height/2 * Math.sin(this.angle * Math.PI/270) + (canvas.height/2 - this.height/2)
        if (this.x + this.width < 0) {
            this.x = canvas.width}       
        this.angle += this.angleSpeed
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame ++ }
    }
    draw(){
        ctx.drawImage(this.image , this.frame * this.spriteWidth, 0, this.spriteWidth,this.spriteheight, this.x , this.y , this.width , this.height)
    }
}