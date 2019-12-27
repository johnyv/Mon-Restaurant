import Controller from "./Controller";
import CommandChannel from "./CommandChannel";
import ConstName from "../ConstName";
import LayerManager from "../manager/LayerManager";

	/**
	 * ...
	 * @author ...
	 */
	export default class LayerController extends Controller 
	{
		private _layerManager:LayerManager;
		public constructor(channel:CommandChannel) 
		{
			super(channel);
			this._layerManager = new LayerManager(channel);
			this.managerList.push(this._layerManager);
			this.addCommand(ConstName.CREATE_SCENE, this._layerManager, this._layerManager.createScene);
			this.addCommand(ConstName.GET_ROLE_LAYER,this._layerManager,this._layerManager.getRoleLayer);
			this.addCommand(ConstName.GET_UI_LAYER,this._layerManager,this._layerManager.getUILayer);
		}	
	}