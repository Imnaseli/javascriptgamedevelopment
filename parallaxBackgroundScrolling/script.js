const canvas = document.querySelector(".canvas1")
const ctx = canvas.getContext("2d")

const CANVAS_WIDTH = canvas.width =  800
const CANVAS_HEIGHT= canvas.height = 700

let gamespeed = 4
let gameframe = 0

const background1 = new Image()
background1.src = "layer-1.png"
const background2 = new Image()
background2.src = "layer-2.png"
const background3 = new Image()
background3.src = "layer-3.png"
const background4 = new Image()
background4.src = "layer-4.png"
const background5 = new Image()
background5.src = "layer-5.png"

window.addEventListener("load" , function() {
    class Layer{
        constructor(image , speedmodifier){
            this.x = 0
            this.y = 0
            this.width = 2400
            this.height = 700
            this.image = image
            this.speedmodifier = speedmodifier
            this.speed = this.speedmodifier * gamespeed
        }
        update(){
            //NOTE: speed is based on different layers, so the speedmodifiers makes it different per layer
            this.speed = gamespeed * this.speedmodifier
    
            //NOTE: we are trying to make the games go back to the beginning upon completion of loop
            if (this.x <= - this.width) {
                this.x = 0
            }
    
            //NOTE: this reduces the value of this.x thus the update()
            this.x = Math.floor(this.x - this.speed)
            // this.x = gameframe * this.speed % this.width
    
            //NOTE: what happens when updateis called is that once the first image has reached the end, it goes back to the beginneg
        }
        draw(){
            //NOTE: draws the image from 0 then draws the next image from the end of the first image
            ctx.drawImage(this.image , this.x , this.y , this.width , this.height)
    
            //NOTE: this draws the second image behind the first image
            ctx.drawImage(this.image ,this.x + this.width , this.y , this.width , this.height)
        }
    }
    
    const layer1 = new Layer(background1 , 0.2) 
    const layer2 = new Layer(background2 , 0.4) 
    const layer3 = new Layer(background3 , 0.6) 
    const layer4 = new Layer(background4 , 0.8) 
    const layer5 = new Layer(background5 , 1) 
    
    const  gameobjects = [layer1 , layer2, layer3 , layer4, layer5]
    
    function animate() {
        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
        gameobjects.forEach((object)=>{
            object.update()
            object.draw()
        })
        // gameframe --
        requestAnimationFrame(animate)
    }
    
    animate()
} )

