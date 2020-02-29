import GameEvent from "./GameEvent";
import ConstName from "./ConstName";
import ViewConfigVo from "./vo/ViewConfigVo";

export default class JsonConfig{
    private static  _ins:JsonConfig;
    /* 角色子弹相关属性配置 */
    public static  bulletPosJson:Object;
    /* 角色相关属性配置 */
    public static  roleSettingJson:Object;
    /* 子弹相关属性配置 */
    public static  bulletConfigJson:Object;
    /**法宝相关属性配置 */
    public static  fbConfigVoJson:Object;
    /**界面信息相关配置 */
    public static  viewConfigVoJson:Object;
    public constructor(){

    }

    public static  get ins():JsonConfig {
        !JsonConfig._ins && (JsonConfig._ins = new JsonConfig());
        return JsonConfig._ins;
    }

    public  initJson():void {
        // GameEvent.ins.event(ConstName.FIRST_LOAD_COMPLETE);
        var configJson: Object = window["configJson"];
        // JsonConfig.bulletPosJson = this.createJsonById(configJson["bulletPos"],BulletPosVo);
        // JsonConfig.roleSettingJson = this.createJsonById(configJson["roleSetting"],RoleSettingVo);
        // JsonConfig.bulletConfigJson = this.createJsonById(configJson["bulletConfig"],BulletConfigVo);
        // JsonConfig.fbConfigVoJson = this.createJsonById(configJson["fbConfig"],FbConfigVo);
        JsonConfig.viewConfigVoJson = this.createJsonById(configJson["viewConfig"],ViewConfigVo);
        GameEvent.ins.event(ConstName.FIRST_LOAD_COMPLETE);
    }

    private  createJsonById(jsonObjArray:any,clzVo:any):Object {
        var obj:Object = new Object();
        for(var jsonObjStr in jsonObjArray) {
            (new clzVo()).init(jsonObjArray[jsonObjStr],obj);
        }
        return obj;
    }
} 