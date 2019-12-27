export default class ConstName
{
	/**全局信息中心 */
	public static  GAME_CONTROLLER:number = 1001;
	/**创建角色 */
	public static  CREATE_HERO:number = 1002;
	public static  TEST_COMMANDCHANNEL:number = 1003;
	
	/**加载控制中心*/
	public static  LOAD_CONTROLLER:number = 2001;
	public static  ADD_TO_LOAD_LIST:number = 2002;
	public static  START_LOAD:number = 2003;
	
	/**人物相关控制中心 */
	public static  ROLE_CONTROLLER:number = 3001;
	/**根据角色id获取角色 */
	public static  ROLE_GET_ROLE_BY_ID:number = 3002;
	/**创建角色到舞台上 */
	public static  ROLE_ADD_HERO:number = 3003;
	/**设置角色的场景移动速度 */
	public static  ROLE_SCENE_SPEED:number = 3004;
	/**获取角色列表 */
	public static  ROLE_GET_HERO_LIST:number = 3005;
	/**获取敌人列表 */
	public static  ROLE_GET_ENEMY_LIST:number = 3006;
	/**创建敌人到舞台上
	 * params:Array= [roleName:string,roleId:number,pos:Ponumber]
	 */
	public static  ROLE_ADD_ENEMY:number = 3007;
	
	/**ui界面控制中心 */
	public static  UI_CONTROLLER:number = 4001;
	/**根据id显示界面 */
	public static  SHOW_VIEW_BY_NAME:number = 4002;
	
	/**UI界面枚举*/
	public static  MOVE_VIEW:number = 5001;
	
	/**游戏层级控制中心*/
	public static  LAYER_CONTROLLER:number = 6001;
	/**创建场景*/
	public static  CREATE_SCENE:number = 6002;
	/**获取角色层*/
	public static  GET_ROLE_LAYER:number = 6003;
	/**获取ui层*/
	public static  GET_UI_LAYER:number = 6004;


	/**战斗控制中心 */
	public static  BATTLE_CONTROLLER:number = 7001;
	/**创建子弹组 */
	public static  BATTLE_CREATE_BULLET_GROUP:number = 7002;

	/**角色动作名称 */
	public static  ATTACK:string = "attack";
	public static  MOVE:string = "move";
	
	/**UI层级索引 */
	public static  MAIN_UI_LAYER:string = "MAIN_UI_LAYER";
	public static  ALERT_UI_LAYER:string = "ALERT_UI_LAYER";
	public static  TIP_UI_LAYER:string = "TIP_UI_LAYER";

	/**角色层级索引 */
	public static  ROLE_LAYER:string = "ROLE_LAYER";
	public static  BULLET_LAYER:string = "BULLET_LAYER";
	public static  EFFECT_LAYER:string = "EFFECT_LAYER";

	/**事件名称 */
	public static  FIRST_LOAD_COMPLETE:string = "first_load_complete";
	public static  KEY_DOWN:string = "key_down";
	public static  KEY_UP:string = "key_up";
	public static  SHOW_VIEW:string = "OPEN_VIEW";
	public static  CLOSE_VIEW:string = "CLOSE_VIEW";
	

}