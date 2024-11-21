gdjs.Level_32SelectionCode = {};
gdjs.Level_32SelectionCode.localVariables = [];
gdjs.Level_32SelectionCode.GDNewSpriteObjects1= [];
gdjs.Level_32SelectionCode.GDNewSpriteObjects2= [];
gdjs.Level_32SelectionCode.GDlevel_95951Objects1= [];
gdjs.Level_32SelectionCode.GDlevel_95951Objects2= [];
gdjs.Level_32SelectionCode.GDlevel_95952Objects1= [];
gdjs.Level_32SelectionCode.GDlevel_95952Objects2= [];


gdjs.Level_32SelectionCode.mapOfGDgdjs_9546Level_959532SelectionCode_9546GDlevel_959595951Objects1Objects = Hashtable.newFrom({"level_1": gdjs.Level_32SelectionCode.GDlevel_95951Objects1});
gdjs.Level_32SelectionCode.mapOfGDgdjs_9546Level_959532SelectionCode_9546GDlevel_959595952Objects1Objects = Hashtable.newFrom({"level_2": gdjs.Level_32SelectionCode.GDlevel_95952Objects1});
gdjs.Level_32SelectionCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("level_1"), gdjs.Level_32SelectionCode.GDlevel_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectionCode.mapOfGDgdjs_9546Level_959532SelectionCode_9546GDlevel_959595951Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level 1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("level_2"), gdjs.Level_32SelectionCode.GDlevel_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectionCode.mapOfGDgdjs_9546Level_959532SelectionCode_9546GDlevel_959595952Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level 2");
}}

}


};

gdjs.Level_32SelectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32SelectionCode.GDNewSpriteObjects1.length = 0;
gdjs.Level_32SelectionCode.GDNewSpriteObjects2.length = 0;
gdjs.Level_32SelectionCode.GDlevel_95951Objects1.length = 0;
gdjs.Level_32SelectionCode.GDlevel_95951Objects2.length = 0;
gdjs.Level_32SelectionCode.GDlevel_95952Objects1.length = 0;
gdjs.Level_32SelectionCode.GDlevel_95952Objects2.length = 0;

gdjs.Level_32SelectionCode.eventsList0(runtimeScene);
gdjs.Level_32SelectionCode.GDNewSpriteObjects1.length = 0;
gdjs.Level_32SelectionCode.GDNewSpriteObjects2.length = 0;
gdjs.Level_32SelectionCode.GDlevel_95951Objects1.length = 0;
gdjs.Level_32SelectionCode.GDlevel_95951Objects2.length = 0;
gdjs.Level_32SelectionCode.GDlevel_95952Objects1.length = 0;
gdjs.Level_32SelectionCode.GDlevel_95952Objects2.length = 0;


return;

}

gdjs['Level_32SelectionCode'] = gdjs.Level_32SelectionCode;
