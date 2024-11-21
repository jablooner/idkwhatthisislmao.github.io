gdjs.Level_321Code = {};
gdjs.Level_321Code.localVariables = [];
gdjs.Level_321Code.GDSummerTile3Objects1= [];
gdjs.Level_321Code.GDSummerTile3Objects2= [];
gdjs.Level_321Code.GDSummerTile4Objects1= [];
gdjs.Level_321Code.GDSummerTile4Objects2= [];
gdjs.Level_321Code.GDRedballObjects1= [];
gdjs.Level_321Code.GDRedballObjects2= [];
gdjs.Level_321Code.GDGrassAndTreeBackgroundObjects1= [];
gdjs.Level_321Code.GDGrassAndTreeBackgroundObjects2= [];
gdjs.Level_321Code.GDWaterFlatfrizBrightSurfaceObjects1= [];
gdjs.Level_321Code.GDWaterFlatfrizBrightSurfaceObjects2= [];
gdjs.Level_321Code.GDSummerTileWaterWavesObjects1= [];
gdjs.Level_321Code.GDSummerTileWaterWavesObjects2= [];
gdjs.Level_321Code.GDSummerTileWaterObjects1= [];
gdjs.Level_321Code.GDSummerTileWaterObjects2= [];
gdjs.Level_321Code.GDRedsquare_9595_9595evil_9595Objects1= [];
gdjs.Level_321Code.GDRedsquare_9595_9595evil_9595Objects2= [];
gdjs.Level_321Code.GDHitboxObjects1= [];
gdjs.Level_321Code.GDHitboxObjects2= [];
gdjs.Level_321Code.GDRedsquare_9595_9595evil_95952Objects1= [];
gdjs.Level_321Code.GDRedsquare_9595_9595evil_95952Objects2= [];
gdjs.Level_321Code.GDHitbox2Objects1= [];
gdjs.Level_321Code.GDHitbox2Objects2= [];
gdjs.Level_321Code.GDRedsquare_9595_9595evil_95953Objects1= [];
gdjs.Level_321Code.GDRedsquare_9595_9595evil_95953Objects2= [];
gdjs.Level_321Code.GDHitbox3Objects1= [];
gdjs.Level_321Code.GDHitbox3Objects2= [];


gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects = Hashtable.newFrom({"Redball": gdjs.Level_321Code.GDRedballObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSummerTileWaterWavesObjects1Objects = Hashtable.newFrom({"SummerTileWaterWaves": gdjs.Level_321Code.GDSummerTileWaterWavesObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects = Hashtable.newFrom({"Redball": gdjs.Level_321Code.GDRedballObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedsquare_95959595_95959595evil_95959595Objects1Objects = Hashtable.newFrom({"Redsquare__evil_": gdjs.Level_321Code.GDRedsquare_9595_9595evil_9595Objects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects = Hashtable.newFrom({"Redball": gdjs.Level_321Code.GDRedballObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedsquare_95959595_95959595evil_959595952Objects1Objects = Hashtable.newFrom({"Redsquare__evil_2": gdjs.Level_321Code.GDRedsquare_9595_9595evil_95952Objects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects = Hashtable.newFrom({"Redball": gdjs.Level_321Code.GDRedballObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedsquare_95959595_95959595evil_959595953Objects1Objects = Hashtable.newFrom({"Redsquare__evil_3": gdjs.Level_321Code.GDRedsquare_9595_9595evil_95953Objects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects = Hashtable.newFrom({"Redball": gdjs.Level_321Code.GDRedballObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDHitboxObjects1Objects = Hashtable.newFrom({"Hitbox": gdjs.Level_321Code.GDHitboxObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects = Hashtable.newFrom({"Redball": gdjs.Level_321Code.GDRedballObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDHitbox2Objects1Objects = Hashtable.newFrom({"Hitbox2": gdjs.Level_321Code.GDHitbox2Objects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects = Hashtable.newFrom({"Redball": gdjs.Level_321Code.GDRedballObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDHitbox3Objects1Objects = Hashtable.newFrom({"Hitbox3": gdjs.Level_321Code.GDHitbox3Objects1});
gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Redball"), gdjs.Level_321Code.GDRedballObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_321Code.GDRedballObjects1.length !== 0 ? gdjs.Level_321Code.GDRedballObjects1[0] : null), false, "", 0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Redball"), gdjs.Level_321Code.GDRedballObjects1);
gdjs.copyArray(runtimeScene.getObjects("SummerTileWaterWaves"), gdjs.Level_321Code.GDSummerTileWaterWavesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSummerTileWaterWavesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level 1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Redball"), gdjs.Level_321Code.GDRedballObjects1);
gdjs.copyArray(runtimeScene.getObjects("Redsquare__evil_"), gdjs.Level_321Code.GDRedsquare_9595_9595evil_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedsquare_95959595_95959595evil_95959595Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Redball"), gdjs.Level_321Code.GDRedballObjects1);
gdjs.copyArray(runtimeScene.getObjects("Redsquare__evil_2"), gdjs.Level_321Code.GDRedsquare_9595_9595evil_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedsquare_95959595_95959595evil_959595952Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Redball"), gdjs.Level_321Code.GDRedballObjects1);
gdjs.copyArray(runtimeScene.getObjects("Redsquare__evil_3"), gdjs.Level_321Code.GDRedsquare_9595_9595evil_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedsquare_95959595_95959595evil_959595953Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.Level_321Code.GDHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Redball"), gdjs.Level_321Code.GDRedballObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDHitboxObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDHitboxObjects1 */
/* Reuse gdjs.Level_321Code.GDRedballObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Redsquare__evil_"), gdjs.Level_321Code.GDRedsquare_9595_9595evil_9595Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDRedsquare_9595_9595evil_9595Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRedsquare_9595_9595evil_9595Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHitboxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDRedballObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRedballObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox2"), gdjs.Level_321Code.GDHitbox2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Redball"), gdjs.Level_321Code.GDRedballObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDHitbox2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDHitbox2Objects1 */
/* Reuse gdjs.Level_321Code.GDRedballObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Redsquare__evil_2"), gdjs.Level_321Code.GDRedsquare_9595_9595evil_95952Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDRedsquare_9595_9595evil_95952Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRedsquare_9595_9595evil_95952Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHitbox2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHitbox2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDRedballObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRedballObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hitbox3"), gdjs.Level_321Code.GDHitbox3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Redball"), gdjs.Level_321Code.GDRedballObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRedballObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDHitbox3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDHitbox3Objects1 */
/* Reuse gdjs.Level_321Code.GDRedballObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Redsquare__evil_3"), gdjs.Level_321Code.GDRedsquare_9595_9595evil_95953Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDRedsquare_9595_9595evil_95953Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRedsquare_9595_9595evil_95953Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHitbox3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHitbox3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDRedballObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRedballObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDSummerTile3Objects1.length = 0;
gdjs.Level_321Code.GDSummerTile3Objects2.length = 0;
gdjs.Level_321Code.GDSummerTile4Objects1.length = 0;
gdjs.Level_321Code.GDSummerTile4Objects2.length = 0;
gdjs.Level_321Code.GDRedballObjects1.length = 0;
gdjs.Level_321Code.GDRedballObjects2.length = 0;
gdjs.Level_321Code.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDWaterFlatfrizBrightSurfaceObjects1.length = 0;
gdjs.Level_321Code.GDWaterFlatfrizBrightSurfaceObjects2.length = 0;
gdjs.Level_321Code.GDSummerTileWaterWavesObjects1.length = 0;
gdjs.Level_321Code.GDSummerTileWaterWavesObjects2.length = 0;
gdjs.Level_321Code.GDSummerTileWaterObjects1.length = 0;
gdjs.Level_321Code.GDSummerTileWaterObjects2.length = 0;
gdjs.Level_321Code.GDRedsquare_9595_9595evil_9595Objects1.length = 0;
gdjs.Level_321Code.GDRedsquare_9595_9595evil_9595Objects2.length = 0;
gdjs.Level_321Code.GDHitboxObjects1.length = 0;
gdjs.Level_321Code.GDHitboxObjects2.length = 0;
gdjs.Level_321Code.GDRedsquare_9595_9595evil_95952Objects1.length = 0;
gdjs.Level_321Code.GDRedsquare_9595_9595evil_95952Objects2.length = 0;
gdjs.Level_321Code.GDHitbox2Objects1.length = 0;
gdjs.Level_321Code.GDHitbox2Objects2.length = 0;
gdjs.Level_321Code.GDRedsquare_9595_9595evil_95953Objects1.length = 0;
gdjs.Level_321Code.GDRedsquare_9595_9595evil_95953Objects2.length = 0;
gdjs.Level_321Code.GDHitbox3Objects1.length = 0;
gdjs.Level_321Code.GDHitbox3Objects2.length = 0;

gdjs.Level_321Code.eventsList0(runtimeScene);
gdjs.Level_321Code.GDSummerTile3Objects1.length = 0;
gdjs.Level_321Code.GDSummerTile3Objects2.length = 0;
gdjs.Level_321Code.GDSummerTile4Objects1.length = 0;
gdjs.Level_321Code.GDSummerTile4Objects2.length = 0;
gdjs.Level_321Code.GDRedballObjects1.length = 0;
gdjs.Level_321Code.GDRedballObjects2.length = 0;
gdjs.Level_321Code.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDWaterFlatfrizBrightSurfaceObjects1.length = 0;
gdjs.Level_321Code.GDWaterFlatfrizBrightSurfaceObjects2.length = 0;
gdjs.Level_321Code.GDSummerTileWaterWavesObjects1.length = 0;
gdjs.Level_321Code.GDSummerTileWaterWavesObjects2.length = 0;
gdjs.Level_321Code.GDSummerTileWaterObjects1.length = 0;
gdjs.Level_321Code.GDSummerTileWaterObjects2.length = 0;
gdjs.Level_321Code.GDRedsquare_9595_9595evil_9595Objects1.length = 0;
gdjs.Level_321Code.GDRedsquare_9595_9595evil_9595Objects2.length = 0;
gdjs.Level_321Code.GDHitboxObjects1.length = 0;
gdjs.Level_321Code.GDHitboxObjects2.length = 0;
gdjs.Level_321Code.GDRedsquare_9595_9595evil_95952Objects1.length = 0;
gdjs.Level_321Code.GDRedsquare_9595_9595evil_95952Objects2.length = 0;
gdjs.Level_321Code.GDHitbox2Objects1.length = 0;
gdjs.Level_321Code.GDHitbox2Objects2.length = 0;
gdjs.Level_321Code.GDRedsquare_9595_9595evil_95953Objects1.length = 0;
gdjs.Level_321Code.GDRedsquare_9595_9595evil_95953Objects2.length = 0;
gdjs.Level_321Code.GDHitbox3Objects1.length = 0;
gdjs.Level_321Code.GDHitbox3Objects2.length = 0;


return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
