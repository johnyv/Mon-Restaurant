import BaseManager from "./BaseManager";
import CommandChannel from "../controller/CommandChannel";
import GameGlobal from "../GameGlobal";

export default class LoadManager extends BaseManager {
    public constructor(channel: CommandChannel) {
        super(channel);
    }

    public static getUrl(url, type: number = -1): string {
        if (type == GameGlobal.ROLE)
            return GameGlobal.RESOURCE_ROLE_PATH + url;
        else if (type == GameGlobal.MUSIC)
            return GameGlobal.RESOURCE_SOUND_PATH + url;
        else if (type == GameGlobal.SOUND) {
            if (Laya.Browser.onAndroid || Laya.Browser.onIOS) {
                return GameGlobal.RESOURCE_SOUND_PATH + url + ".wav";
            } else {
                return GameGlobal.RESOURCE_SOUND_PATH + url + ".mp3";
            }
        }
        else if (type == GameGlobal.BULLET)
            return GameGlobal.RESOURCE_BULLET_PATH + url;
        else if (type == GameGlobal.UI)
            return GameGlobal.RESOURCE_UI_PATH + url;
        else if (type == GameGlobal.SCENE)
            return GameGlobal.RESOURCE_SCENE_PATH + url;
        else if (type == GameGlobal.FABAO)
            return GameGlobal.RESOURCE_FABAO_PATH + url;
        return GameGlobal.RESOURCE_BASE_PATH + url;
    }

    public static getRes(url, type: number = -1): any {
        var resUrl: string = LoadManager.getUrl(url, type);
        return Laya.loader.getRes(resUrl);
    }
}