namespace SpriteKind {
    export const snake = SpriteKind.create()
    export const shark = SpriteKind.create()
    export const snail = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.shark, function (sprite, otherSprite) {
    game.showLongText("I can kill you, but you need me to live, what am I???", DialogLayout.Center)
    if (game.askForString("???") == "water") {
        info.changeLifeBy(1)
        game.showLongText("You shall pass", DialogLayout.Center)
        sprites.destroy(otherSprite)
    } else {
        info.changeLifeBy(-1)
        tiles.placeOnRandomTile(sprite, sprites.dungeon.greenInnerNorthWest)
        game.showLongText("You shall not pass", DialogLayout.Center)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.snake, function (sprite, otherSprite) {
    game.showLongText("Once someone says my name, they break me. What am I???", DialogLayout.Center)
    if (game.askForString("???") == "silence") {
        info.changeLifeBy(1)
        game.showLongText("You shall pass", DialogLayout.Center)
        sprites.destroy(otherSprite)
    } else {
        info.changeLifeBy(-1)
        tiles.placeOnRandomTile(sprite, sprites.dungeon.greenInnerNorthWest)
        game.showLongText("You shall not pass", DialogLayout.Center)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark5, function (sprite, location) {
    game.showLongText("Level 2", DialogLayout.Center)
    tiles.setCurrentTilemap(tilemap`level2`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.snail, function (sprite, otherSprite) {
    game.showLongText("The more of this there is, the less you see. What is it???", DialogLayout.Center)
    if (game.askForString("???") == "darkness") {
        info.changeLifeBy(1)
        game.showLongText("You shall pass", DialogLayout.Center)
        sprites.destroy(otherSprite)
    } else {
        info.changeLifeBy(-1)
        tiles.placeOnRandomTile(sprite, sprites.dungeon.greenInnerNorthWest)
        game.showLongText("You shall not pass", DialogLayout.Center)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark3, function (sprite, location) {
    game.gameOver(false)
})
tiles.setCurrentTilemap(tilemap`level1`)
let sprite2 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(sprite2, sprites.dungeon.greenInnerNorthWest)
scene.cameraFollowSprite(sprite2)
controller.moveSprite(sprite2)
let snakeMan = sprites.create(img`
    . . . . . . c c c c c c c . . . 
    . . . . . c f f 6 6 f f 7 c . . 
    . . . . c 7 6 6 6 6 6 6 7 6 c . 
    . . . c 7 7 7 7 7 7 7 7 7 7 c . 
    . . . c 7 8 1 f f 1 6 7 7 7 c . 
    . . . f 6 f 1 f f 1 f 7 7 7 f . 
    . . . f 6 f 2 2 2 2 f 7 7 7 f . 
    . . c c 6 f 2 2 2 2 f 7 7 6 f . 
    . c 7 7 7 7 2 2 2 2 7 7 f c . . 
    c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
    f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
    f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 6 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.snake)
tiles.placeOnTile(snakeMan, tiles.getTileLocation(8, 3))
let sharkMan = sprites.create(img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `, SpriteKind.shark)
tiles.placeOnTile(sharkMan, tiles.getTileLocation(10, 2))
let snailMan = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . c c . c c c c 3 c c 3 c . . 
    . f f 3 c 6 c 3 f f c 3 6 c . . 
    . f f 3 c 6 c 3 f f 3 3 3 3 c . 
    . b 3 3 3 c 3 3 3 c c 3 3 3 3 c 
    . b 3 3 3 c 3 3 3 3 c 3 3 3 3 c 
    . b b 3 3 c 3 3 c 3 c 3 3 3 c c 
    . b b 3 3 c 3 3 c 3 3 c c c c c 
    . c c 3 3 3 3 3 b c c 3 3 3 3 c 
    c 3 3 4 3 3 3 4 b 3 3 3 3 3 3 c 
    b 3 4 b 4 4 4 4 b b 3 c 3 3 c . 
    c 4 3 3 b 4 b 3 3 3 4 c b c . . 
    c 3 3 3 c 4 c 3 3 3 c 4 4 3 b . 
    c 3 3 3 c 4 c 3 3 3 c 4 c 3 c . 
    c 3 3 3 3 c 3 3 3 3 c 4 c 3 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.snail)
tiles.placeOnTile(snailMan, tiles.getTileLocation(8, 5))
info.setLife(3)
