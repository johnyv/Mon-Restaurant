import BaseManager from "./BaseManager";
import CommandChannel from "../controller/CommandChannel";
import SceneSprite from "../SceneSprite";

	/**
	 * ...
	 * @author jwd
	 */
	export default class SceneLayerManager extends BaseManager
	{
		private  _frontLayer:Laya.Sprite;
		private  _middleLayer:Laya.Sprite;
		private  _rearLayer:Laya.Sprite;
		private  _sceneSprite:SceneSprite;
		private  _rearSpeed:Number = 0;
		private  _middleSpeed:Number = 0;
		private  _frontSpeed:Number = 0;

		public constructor(channel:CommandChannel) {
			super(channel);
			this._frontLayer = new Laya.Sprite();
			this._middleLayer = new Laya.Sprite();
			this._rearLayer = new Laya.Sprite();
		}
		
		public  setFrontLayerIndex(index:number):void {
			Laya.stage.addChild(this._frontLayer);
			this._frontLayer.zOrder = index;
		}
		
		public  setMiddleLayerIndex(index:number):void {
			Laya.stage.addChild(this._middleLayer);
			this._middleLayer.zOrder = index;
		}
		
		public  setRearLayerIndex(index:number):void {
			Laya.stage.addChild(this._rearLayer);
			this._rearLayer.zOrder = index;
		}
		
		/** 生成场景*/
		public  createScene(sceneId:string):void {
			Laya.Scene.open("scene/" + sceneId + ".scene",true,Laya.Handler.create(this,this.addScene));
		}
		
		/**对场景显示对象进行分层处理 */
		private  addScene(scene:SceneSprite):void {
			this._sceneSprite = scene;
			if(this._sceneSprite.rear){
				this._rearLayer.addChild(scene.rear);
				this._rearSpeed = this._sceneSprite.rear.speed;
			}
			if(this._sceneSprite.middle){
				this._middleSpeed = this._sceneSprite.middle.speed;
				this._middleLayer.addChild(scene.middle);
			}
			if(this._sceneSprite.front){
				this._frontLayer.addChild(scene.front);
				this._frontSpeed = this._sceneSprite.front.speed;
			}
			// this.channel.postCommand(ConstName.ROLE_CONTROLLER,ConstName.ROLE_SCENE_SPEED,[-_middleSpeed]);
			Laya.timer.loop(30,this,this.update);
		}
		
		/**更新场景移动 */
		private  update():void {
			if(this._sceneSprite) {
				var layerSpriteName:string;
				var layerSprite:Laya.Sprite;
				//逐渐优化中，先写死
				//中景层
				if(this._middleSpeed) {
					for (layerSpriteName in this._sceneSprite.middleList) {
						layerSprite = this._sceneSprite.middleList[layerSpriteName];
						layerSprite.x -= this._sceneSprite.middle.speed;
						//6666真坑，displayWidth 尽然可以为负数（当scaleX 为-数的时候）
						if(layerSprite.x<-Math.abs(layerSprite.displayWidth)) {
							layerSprite.x = this._sceneSprite.middleEnd.x + Math.abs(this._sceneSprite.middleEnd.displayWidth)-this._sceneSprite.middle.speed;
							this._sceneSprite.middleEnd = layerSprite;
						}
					}
				}
				//前景层
				if(this._frontSpeed) {
					for(layerSpriteName in  this._sceneSprite.frontList) {
						layerSprite = this._sceneSprite.frontList[layerSpriteName];
						layerSprite.x -= this._sceneSprite.front.speed;
						//6666真坑，displayWidth 尽然可以为负数（当scaleX 为-数的时候）
						if(layerSprite.x<-Math.abs(layerSprite.displayWidth)) {
							layerSprite.x = this._sceneSprite.frontEnd.x + Math.abs(this._sceneSprite.frontEnd.displayWidth)-this._sceneSprite.front.speed;
							this._sceneSprite.frontEnd = layerSprite;
						}
					}
				}
				//远景层
				if(this._rearSpeed) {
					for(layerSpriteName in this._sceneSprite.rearList) {
						layerSprite = this._sceneSprite.rearList[layerSpriteName];
						layerSprite.x -= this._sceneSprite.rear.speed;
						//6666真坑，displayWidth 尽然可以为负数（当scaleX 为-数的时候）
						if(layerSprite.x<-Math.abs(layerSprite.displayWidth)) {
							layerSprite.x = this._sceneSprite.rearEnd.x + Math.abs(this._sceneSprite.rearEnd.displayWidth)-this._sceneSprite.rear.speed;
							this._sceneSprite.rearEnd = layerSprite;
						}
					}
				}
			}
		}

		/**释放场景资源*/
		public  clear():void {
			this._frontLayer.removeChildren();
			this._middleLayer.removeChildren();
			this._rearLayer.removeChildren();
		}
		
		public  destroy():void {
			this._frontLayer.destroy(true);
			this._frontLayer = null;
			this._middleLayer.destroy(true);
			this._middleLayer = null;
			this._rearLayer.destroy(true);
			this._rearLayer = null;
		}
		
	}