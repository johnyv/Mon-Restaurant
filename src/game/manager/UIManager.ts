import BaseManager from "./BaseManager";
import GameEvent from "../GameEvent";
import ConstName from "../ConstName";
import BaseControl from "../gameModule/BaseControl";

	/**
	 * ...
	 * @author jwd
	 */
	export default class UIManager extends BaseManager
	{
		private _viewControlHash:Object;
		public constructor(channel) 
		{
			super(channel);
			this._viewControlHash = new Object();
			GameEvent.ins.on(ConstName.SHOW_VIEW, this, this.showView);
			// new MoveControl(this);
		}
		
		/**加入控制器*/
		public addControl(viewId:number , baseControl:BaseControl):void {
			if(!this._viewControlHash[viewId])
				this._viewControlHash[viewId] = baseControl;
			else 
				throw new Error("重复添加控制器" + viewId);
		}
		
		public showView(params:any):void {
			var viewId:number = params[0];
			//判断是否开启当前模块 ,预留
			var control:BaseControl = this._viewControlHash[viewId] as BaseControl;
			if (control) {
				var uiLayer:Laya.Sprite = this.channel.postCommand(ConstName.LAYER_CONTROLLER,ConstName.GET_UI_LAYER,[ConstName.MAIN_UI_LAYER]) as Laya.Sprite;
				control.showView(uiLayer);
			}
		}
		
		public destroy():void {
			for (var controlName in this._viewControlHash){
				delete this._viewControlHash[controlName];
			}
			this._viewControlHash = null;
		}
	}