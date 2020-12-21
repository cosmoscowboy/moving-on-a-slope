// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`30000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006050505050505050505050600000000000000000000000000000000000000000000000000000000000000000102030400000000000000000000000000000000000000000000000000000000000000000000000000000000010203040000000000000000000000000000000000000000000000000000000000000000000000000000000001020304000000000000000000000000000000000000000000000000000000000000000000000000000000000102030400000000000000000000000000000000000000000000000000000000000000000000000000000000010203040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
