import BaseManager from "./BaseManager";
import GameEvent from "../GameEvent";
import ConstName from "../ConstName";
import BaseControl from "../gameModule/BaseControl";
import MainView from "../views/MainView";
import MenuView from "../views/MenuView";
import BaseView from "../views/BaseView";
import JsonConfig from "../JsonConfig";
import ViewConfigVo from "../vo/ViewConfigVo";

/**
 * ...
 * @author jwd
 */
export default class UIManager extends BaseManager {
	//类映射
	private _viewClassHash: Object;
	//界面实例
	private _viewInsHash: Object;
	
	public constructor(channel) {
		super(channel);
		this._viewClassHash = new Object();
		this._viewInsHash = new Object();
		GameEvent.ins.on(ConstName.SHOW_VIEW, this, this.showView);
	}

	//注册各种界面
	public init(): void {
		this._viewClassHash[ConstName.MAIN_VIEW] = MainView;
		this._viewClassHash[ConstName.MENU_VIEW] = MenuView;
		// Laya.View.regComponent()
		// Laya.View.regViewRuntime("MainUI",MainView);
		// Laya.View.regViewRuntime("MenuUI",MenuView);
	}

	/**加入控制器*/
	public addControl(viewName: number, baseControl: BaseControl): void {
		if (!this._viewInsHash[viewName])
			this._viewInsHash[viewName] = baseControl;
		else
			throw new Error("重复添加控制器" + viewName);
	}

	//获取界面,如果没有界面实例则创建
	public getView(viewName): BaseView {
		let view = this._viewInsHash[viewName] || this.createView(viewName);
		return view;
	}

	/** 生成界面*/
	public createView(viewName: string): void {
		let viewVo: ViewConfigVo = JsonConfig.viewConfigVoJson[viewName];
		Laya.View.load("views/" + viewVo.resourceUrl,Laya.Handler.create(this, this.addView,[viewName]));
		// Laya.Scene.open("views/" + viewVo.resourceUrl, true, Laya.Handler.create(this, this.addScene));
	}

	/**对场景显示对象进行分层处理 */
	private addView(viewName:string,view: BaseView): void {
		if (view) {
			this._viewInsHash[viewName] = view;
			let viewVo: ViewConfigVo = JsonConfig.viewConfigVoJson[viewName];
			var uiLayer: Laya.Sprite = this.channel.postCommand(ConstName.LAYER_CONTROLLER, ConstName.GET_UI_LAYER_BY_NAME, [ConstName.MAIN_UI_LAYER]) as Laya.Sprite;
			view.showSelf(viewVo.closeOther,viewVo.isModel,uiLayer);
		}
	}

	//显示界面
	public showView(params: any): void {
		var viewName: number = params[0];
		//判断是否开启当前模块 ,预留
		var view: BaseView = this.getView(viewName);
		if (view) {
			let viewVo: ViewConfigVo = JsonConfig.viewConfigVoJson[viewName];
			var uiLayer: Laya.Sprite = this.channel.postCommand(ConstName.LAYER_CONTROLLER, ConstName.GET_UI_LAYER_BY_NAME, [ConstName.MAIN_UI_LAYER]) as Laya.Sprite;
			view.showSelf(viewVo.closeOther,viewVo.isModel,uiLayer);
		}
	}

	public destroy(): void {
		for (var controlName in this._viewInsHash) {
			let view = this._viewInsHash[controlName];
			view.destroy(true);
			delete this._viewInsHash[controlName];
		}
		this._viewInsHash = null;
	}
}