class Enemy{
    constructor(){
        this.image = new Image()
        this.image.src = "enemy1.png"
        //this.speed = Math.random() * 4 - 2
        this.spriteWidth = 293
        this.spriteheight = 155
        this.height = this.spriteheight / 2.5
        this.width = this.spriteWidth / 2.5
        this.x = Math.random() * (CANVAS_WIDTH - this.width)
        this.y = Math.random() * (CANVAS_HEIGHT - this.height)
        //controls the speed of the enemies 
        this.frame = 0

        //variable that helps each enemy instance have diffenrent flaps
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }
    update(){
        this.x += Math.random() * 5 - 2.5
        this.y += Math.random() * 5 - 2.5

        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame ++            
        }

    }
    draw(){
        ctx.drawImage(this.image , this.frame * this.spriteWidth, 0, this.spriteWidth,this.spriteheight, this.x , this.y , this.width , this.height)
        // ctx.drawImage()
    }
}
