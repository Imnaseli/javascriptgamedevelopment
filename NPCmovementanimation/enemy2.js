class Enemy{
    constructor(){
        this.image = new Image()
        this.image.src = "enemy2.png"
        this.speed = Math.random() * 4 + 1
        this.spriteWidth = 266
        this.spriteheight = 188
        this.height = this.spriteheight / 2
        this.width = this.spriteWidth / 2
        this.x = Math.random() * (CANVAS_WIDTH - this.width)
        this.y = Math.random() * (CANVAS_HEIGHT - this.height)
        
        this.angle = 0
        this.curve = Math.random() * 5
        this.angleSpeed = Math.random() * 0.2
        //controls the speed of the enemies 
        this.frame = 0

        //variable that helps each enemy instance have diffenrent flaps
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }
    update(){
        this.x -= this.speed
        this.y += this.curve * Math.sin(this.angle)
        if (this.x + this.width < 0) {
            this.x = canvas.width}
       
        this.angle += this.angleSpeed

        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame ++ }
    }
    draw(){
        ctx.drawImage(this.image , this.frame * this.spriteWidth, 0, this.spriteWidth,this.spriteheight, this.x , this.y , this.width , this.height)
        // ctx.drawImage()
    }
}