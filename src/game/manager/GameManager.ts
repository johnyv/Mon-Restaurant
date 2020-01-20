import BaseManager from "./BaseManager";
import CommandChannel from "../controller/CommandChannel";
import InputManager from "./InputManager";
import HitManager from "./HitManager";
import GameEvent from "../GameEvent";
import ConstName from "../ConstName";
import LoadManager from "./LoadManager";
import GameGlobal from "../GameGlobal";

	/**
	 * ...
	 * @author jwd
	 */
	export default class GameManager extends BaseManager 
	{

		private  _inputManager:InputManager;
		private  _hitManager:HitManager;
		public constructor(channel:CommandChannel) {
			super(channel);
			this._inputManager = new InputManager(channel);
			this._hitManager = new HitManager(channel);
		}
		
		public init():void {
			GameEvent.ins.on(ConstName.FIRST_LOAD_COMPLETE,this,this.initGame);
		}
		
		private  roleId:number = 2;
		private initGame():void {
			// this.channel.postCommand(ConstName.ROLE_CONTROLLER,ConstName.ROLE_ADD_HERO,["female",0,new Laya.Point(400,100)]);
			//临时写段生成enmey的逻辑，之后处理
			this.createEnemy();
			// Laya.timer.loop(600,this,this.createEnemy);
			this.channel.postCommand(ConstName.LAYER_CONTROLLER,ConstName.CREATE_SCENE,['s_1']);
		    this._inputManager.setInputStyle();
			// this._hitManager.init();
			// Laya.SoundManager.playMusic(LoadManager.getUrl("bgm.mp3",GameGlobal.MUSIC));
		}

		private  enemyNameArr: string[] = ["m_1","m_2","m_3","m_4"];
		private createEnemy():void {
			var random:number = Math.random()*100;
			if(random> 20){
				this.roleId++;
				var randomName:string = this.enemyNameArr[parseInt(Math.random()*this.enemyNameArr.length + "")];
				this.channel.postCommand(ConstName.ROLE_CONTROLLER,ConstName.ROLE_ADD_ENEMY,[randomName,this.roleId,new Laya.Point(Laya.stage.width+Math.random()*(Laya.stage.width/2-150),Math.random()*(Laya.stage.height-150))]);
			}
		}

		public testCommandChannel(){
			alert("命令管线调试成功，可以开工了");
		}
	}