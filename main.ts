namespace SpriteKind {
    export const Location = SpriteKind.create()
}
function placeOnGrid (aSprite: Sprite, column: number, row: number) {
    aSprite.x = column * 16
    aSprite.y = row * 16
}
function checkPlayerLocation () {
    for (let value of locations) {
        if (mySprite.overlapsWith(value)) {
            mySprite.setPosition(value.x, value.y)
            locations.removeAt(locations.indexOf(value))
            value.destroy(effects.fountain, 500)
            if (locations.length > 0) {
                mySprite.follow(locations[0], speed)
            } else {
                game.over(true, effects.hearts)
            }
        }
    }
}
let aLocation: Sprite = null
let locations: Sprite[] = []
let mySprite: Sprite = null
let speed = 0
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level`)
speed = 75
mySprite = sprites.create(img`
    . . . . . . f f f f 4 4 f . . . 
    . . . . f f b f 5 4 5 5 4 f . . 
    . . . f b 3 3 e 4 5 5 5 5 f . . 
    . . f b 3 3 3 3 e 4 4 4 e f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 3 3 e b 3 e e 3 3 f . 
    . . f 3 3 3 3 f f e e e 3 3 f . 
    . . f b b b b f b f e e e 3 f . 
    . . f b b b b e 1 f 4 4 e f . . 
    . f f b b b b f 4 4 4 4 f . . . 
    . f b b b b f f f e e e f . . . 
    . . f b b f 4 4 e d d d f . . . 
    . . . f f e 4 4 e d d d f . . . 
    . . . . f b e e b d b d b f . . 
    . . . . f f d 1 d 1 d 1 f f . . 
    . . . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 0)
scene.cameraFollowSprite(mySprite)
placeOnGrid(mySprite, 0, 7.5)
locations = []
for (let value of tiles.getTilesByType(myTiles.tile6)) {
    aLocation = sprites.create(img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c c c . . . . . . . 
        . . . . . c c c c . . . . . . . 
        . . . . c c c c c . . . . . . . 
        . . . c c c c c c . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . c c c c c c c c c . . . 
        `, SpriteKind.Location)
    tiles.placeOnTile(aLocation, value)
    locations.push(aLocation)
    tiles.setTileAt(value, myTiles.tile5)
}
mySprite.follow(locations[0], speed)
game.onUpdate(function () {
    checkPlayerLocation()
})
