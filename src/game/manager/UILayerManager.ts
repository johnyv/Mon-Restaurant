import BaseManager from "./BaseManager";
import CommandChannel from "../controller/CommandChannel";

/**
 * ...
 * @author jwd
 */
export default class UILayerManager extends BaseManager {
	//模块ui显示层
	public mainUILayer: Laya.Sprite;
	//弹出层ui
	public alertUILayer: Laya.Sprite;
	//文字提示层
	public tipUILayer: Laya.Sprite;

	public constructor(channel: CommandChannel) {
		super(channel);
		this.mainUILayer = new Laya.Sprite();
		this.alertUILayer = new Laya.Sprite();
		this.tipUILayer = new Laya.Sprite();
	}

	public setMainUILayerIndex(index: number): void {
		Laya.stage.addChild(this.mainUILayer);
		this.mainUILayer.zOrder = index;
	}

	public setAlertUILayerIndex(index: number): void {
		Laya.stage.addChild(this.alertUILayer);
		this.alertUILayer.zOrder = index;
	}

	public setTipUILayerIndex(index: number): void {
		Laya.stage.addChild(this.tipUILayer);
		this.tipUILayer.zOrder = index;
	}
}