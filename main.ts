tiles.setCurrentTilemap(tilemap`_map`)
let justplayer = sprites.create(img`
    . . . . . 3 3 . . . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . . . . 3 . . 3 3 . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . 3 3 3 3 3 . . . . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(justplayer)
scene.cameraFollowSprite(justplayer)
