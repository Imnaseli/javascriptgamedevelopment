const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600
const spriteWidth = 575
const spriteHeight = 523
let gameFrame = 0 
const staggerFrame = 5 

const dropdown = document.getElementById("animations")
dropdown.addEventListener("change" , (e)=>{
    playerstate = e.target.value
})

//get all animation frames
let playerstate = "idle"
const spriteAnimations = []
const animationStates = [
    {
        name:"idle",
        frames:7
    },
    {
        name:"jump",
        frames:7
    },
    {
        name:"fall",
        frames:7
    },
    {
        name:"run",
        frames:9
    },
    {
        name:"dizzy",
        frames:11
    },
    {
        name:"sit",
        frames:5
    },
    {
        name:"roll",
        frames:7
    },
    {
        name:"bite",
        frames:7
    },
    {
        name:"ko",
        frames:12
    },
    {
        name:"gethit",
        frames:4
    }
]

animationStates.forEach((state , index)=>{
    let frames = {
            loc:[]
        }
    for(let i = 0 ; i < state.frames ; i++ ){
        let positionX = i * spriteWidth
        let positionY = index * spriteHeight
        frames.loc.push({x:positionX , y:positionY})
    }
    spriteAnimations[state.name] =  frames;
})


const playerimage = new Image()
playerimage.src = 'shadowdog.png'

function animate () {
    ctx.clearRect(0,0,CANVAS_WIDTH , CANVAS_HEIGHT)

    let position = Math.floor(gameFrame / staggerFrame) % spriteAnimations[playerstate].loc.length 
    //console.log(position)

    let frameX = spriteWidth * position    
    let frameY = spriteAnimations[playerstate].loc[position].y;

    ctx.drawImage(playerimage, frameX , frameY , spriteWidth  , spriteHeight, 0 , 0  , spriteWidth , spriteHeight)

    gameFrame++
    requestAnimationFrame(animate)
}
animate()