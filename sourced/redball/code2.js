gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDGrassAndTreeBackgroundObjects1= [];
gdjs.MenuCode.GDGrassAndTreeBackgroundObjects2= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDLargePlayButtonObjects1= [];
gdjs.MenuCode.GDLargePlayButtonObjects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDLargePlayButtonObjects1Objects = Hashtable.newFrom({"LargePlayButton": gdjs.MenuCode.GDLargePlayButtonObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.MenuCode.GDLargePlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDLargePlayButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level Selection");
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.MenuCode.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDLargePlayButtonObjects1.length = 0;
gdjs.MenuCode.GDLargePlayButtonObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.MenuCode.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDLargePlayButtonObjects1.length = 0;
gdjs.MenuCode.GDLargePlayButtonObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
