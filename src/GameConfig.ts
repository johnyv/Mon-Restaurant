/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import SceneSprite from "./game/SceneSprite"
import InstallationInfo from "./game/views/menu/InstallationInfo"
import MainView from "./game/views/MainView"
import MenuView from "./game/views/menu/MenuView"
import InstallationListItem from "./game/views/menu/InstallationListItem"
import InstallationItem from "./game/views/menu/InstallationItem"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=960;
    static height:number=1280;
    static scaleMode:string="showall";
    static screenMode:string="vertical";
    static alignV:string="middle";
    static alignH:string="center";
    static startScene:any="scene/s_1.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("game/SceneSprite.ts",SceneSprite);
        reg("game/views/menu/InstallationInfo.ts",InstallationInfo);
        reg("game/views/MainView.ts",MainView);
        reg("game/views/menu/MenuView.ts",MenuView);
        reg("game/views/menu/InstallationListItem.ts",InstallationListItem);
        reg("game/views/menu/InstallationItem.ts",InstallationItem);
    }
}
GameConfig.init();