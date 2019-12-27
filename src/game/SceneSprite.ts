import Comp_scene_layer from "../component/Comp_scene_layer"

/*anyany
 any ...
 any @author jwd
 any*/
export default class SceneSprite extends Laya.Scene
{
	public  front:Comp_scene_layer;
	public  middle:Comp_scene_layer;
	public  rear:Comp_scene_layer;
	public  frontList:any;
	public  middleList:any;
	public  rearList:any;
	/*anyany以下变量用于场景移动循环，<-- xxxHead（头）<-- xxxEnd(尾) <--  any*/
	public  frontEnd:any;
	public  middleEnd:any;
	public  rearEnd:any;

	public constructor() 
	{
		super();
		//默认关闭时候全部销毁
		this.autoDestroyAtClosed = true;
		this.frontList = [];
		this.middleList = [];
		this.rearList = [];
	}

	public createView(view:Object):void {
		super.createView(view);
		var i:number = 0;
		while(this["front_"+i]) {
			this.frontList.push(this["front_"+i]);
			this.frontEnd = this["front_"+i];
			i++;
		}
		i = 0;
		while(this["middle_"+i]) {
			this.middleList.push(this["middle_"+i]);
			this.middleEnd = this["middle_"+i];
			i++;
		}
		i = 0;
		while(this["rear_"+i]) {
			this.rearList.push(this["rear_"+i]);
			this.rearEnd = this["rear_"+i];
			i++;
		}
	}
	
}