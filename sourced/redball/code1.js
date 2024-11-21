gdjs.Level_322Code = {};
gdjs.Level_322Code.localVariables = [];
gdjs.Level_322Code.GDSummerTile3Objects1= [];
gdjs.Level_322Code.GDSummerTile3Objects2= [];
gdjs.Level_322Code.GDSummerTile4Objects1= [];
gdjs.Level_322Code.GDSummerTile4Objects2= [];
gdjs.Level_322Code.GDRedballObjects1= [];
gdjs.Level_322Code.GDRedballObjects2= [];
gdjs.Level_322Code.GDGrassAndTreeBackgroundObjects1= [];
gdjs.Level_322Code.GDGrassAndTreeBackgroundObjects2= [];
gdjs.Level_322Code.GDWaterFlatfrizBrightSurfaceObjects1= [];
gdjs.Level_322Code.GDWaterFlatfrizBrightSurfaceObjects2= [];
gdjs.Level_322Code.GDSummerTileWaterWavesObjects1= [];
gdjs.Level_322Code.GDSummerTileWaterWavesObjects2= [];
gdjs.Level_322Code.GDSummerTileWaterObjects1= [];
gdjs.Level_322Code.GDSummerTileWaterObjects2= [];
gdjs.Level_322Code.GDRedsquare_9595_9595evil_9595Objects1= [];
gdjs.Level_322Code.GDRedsquare_9595_9595evil_9595Objects2= [];
gdjs.Level_322Code.GDDesertBackground2Objects1= [];
gdjs.Level_322Code.GDDesertBackground2Objects2= [];
gdjs.Level_322Code.GDSandObjects1= [];
gdjs.Level_322Code.GDSandObjects2= [];
gdjs.Level_322Code.GDSand2Objects1= [];
gdjs.Level_322Code.GDSand2Objects2= [];
gdjs.Level_322Code.GDBrownBackgroundObjects1= [];
gdjs.Level_322Code.GDBrownBackgroundObjects2= [];
gdjs.Level_322Code.GDDesertTilePlatformCenterObjects1= [];
gdjs.Level_322Code.GDDesertTilePlatformCenterObjects2= [];


gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDRedballObjects1Objects = Hashtable.newFrom({"Redball": gdjs.Level_322Code.GDRedballObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDSummerTileWaterWavesObjects1Objects = Hashtable.newFrom({"SummerTileWaterWaves": gdjs.Level_322Code.GDSummerTileWaterWavesObjects1});
gdjs.Level_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Redball"), gdjs.Level_322Code.GDRedballObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_322Code.GDRedballObjects1.length !== 0 ? gdjs.Level_322Code.GDRedballObjects1[0] : null), false, "", 0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Redball"), gdjs.Level_322Code.GDRedballObjects1);
gdjs.copyArray(runtimeScene.getObjects("SummerTileWaterWaves"), gdjs.Level_322Code.GDSummerTileWaterWavesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDRedballObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDSummerTileWaterWavesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level 2");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_322Code.GDSummerTile3Objects1.length = 0;
gdjs.Level_322Code.GDSummerTile3Objects2.length = 0;
gdjs.Level_322Code.GDSummerTile4Objects1.length = 0;
gdjs.Level_322Code.GDSummerTile4Objects2.length = 0;
gdjs.Level_322Code.GDRedballObjects1.length = 0;
gdjs.Level_322Code.GDRedballObjects2.length = 0;
gdjs.Level_322Code.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.Level_322Code.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.Level_322Code.GDWaterFlatfrizBrightSurfaceObjects1.length = 0;
gdjs.Level_322Code.GDWaterFlatfrizBrightSurfaceObjects2.length = 0;
gdjs.Level_322Code.GDSummerTileWaterWavesObjects1.length = 0;
gdjs.Level_322Code.GDSummerTileWaterWavesObjects2.length = 0;
gdjs.Level_322Code.GDSummerTileWaterObjects1.length = 0;
gdjs.Level_322Code.GDSummerTileWaterObjects2.length = 0;
gdjs.Level_322Code.GDRedsquare_9595_9595evil_9595Objects1.length = 0;
gdjs.Level_322Code.GDRedsquare_9595_9595evil_9595Objects2.length = 0;
gdjs.Level_322Code.GDDesertBackground2Objects1.length = 0;
gdjs.Level_322Code.GDDesertBackground2Objects2.length = 0;
gdjs.Level_322Code.GDSandObjects1.length = 0;
gdjs.Level_322Code.GDSandObjects2.length = 0;
gdjs.Level_322Code.GDSand2Objects1.length = 0;
gdjs.Level_322Code.GDSand2Objects2.length = 0;
gdjs.Level_322Code.GDBrownBackgroundObjects1.length = 0;
gdjs.Level_322Code.GDBrownBackgroundObjects2.length = 0;
gdjs.Level_322Code.GDDesertTilePlatformCenterObjects1.length = 0;
gdjs.Level_322Code.GDDesertTilePlatformCenterObjects2.length = 0;

gdjs.Level_322Code.eventsList0(runtimeScene);
gdjs.Level_322Code.GDSummerTile3Objects1.length = 0;
gdjs.Level_322Code.GDSummerTile3Objects2.length = 0;
gdjs.Level_322Code.GDSummerTile4Objects1.length = 0;
gdjs.Level_322Code.GDSummerTile4Objects2.length = 0;
gdjs.Level_322Code.GDRedballObjects1.length = 0;
gdjs.Level_322Code.GDRedballObjects2.length = 0;
gdjs.Level_322Code.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.Level_322Code.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.Level_322Code.GDWaterFlatfrizBrightSurfaceObjects1.length = 0;
gdjs.Level_322Code.GDWaterFlatfrizBrightSurfaceObjects2.length = 0;
gdjs.Level_322Code.GDSummerTileWaterWavesObjects1.length = 0;
gdjs.Level_322Code.GDSummerTileWaterWavesObjects2.length = 0;
gdjs.Level_322Code.GDSummerTileWaterObjects1.length = 0;
gdjs.Level_322Code.GDSummerTileWaterObjects2.length = 0;
gdjs.Level_322Code.GDRedsquare_9595_9595evil_9595Objects1.length = 0;
gdjs.Level_322Code.GDRedsquare_9595_9595evil_9595Objects2.length = 0;
gdjs.Level_322Code.GDDesertBackground2Objects1.length = 0;
gdjs.Level_322Code.GDDesertBackground2Objects2.length = 0;
gdjs.Level_322Code.GDSandObjects1.length = 0;
gdjs.Level_322Code.GDSandObjects2.length = 0;
gdjs.Level_322Code.GDSand2Objects1.length = 0;
gdjs.Level_322Code.GDSand2Objects2.length = 0;
gdjs.Level_322Code.GDBrownBackgroundObjects1.length = 0;
gdjs.Level_322Code.GDBrownBackgroundObjects2.length = 0;
gdjs.Level_322Code.GDDesertTilePlatformCenterObjects1.length = 0;
gdjs.Level_322Code.GDDesertTilePlatformCenterObjects2.length = 0;


return;

}

gdjs['Level_322Code'] = gdjs.Level_322Code;
