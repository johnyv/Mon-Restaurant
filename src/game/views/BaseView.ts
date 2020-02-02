export default class BaseView extends Laya.Dialog{

    public constructor(){
        super();
        // this.channel = CommandChannel.instance;
    }

    public createView(view:Object):void{
        super.createView(view);
    }

    public showSelf(closeOther: boolean,isModel:boolean,uiLayer:Laya.Sprite):void{
        if(isModel){
            //以模式窗口弹出界面
            this.popup(closeOther);
        }
        else if(this.parent != uiLayer){
            uiLayer.addChild(this);
        }
    }

    // public remove():void{
    //     if(this.parent){
    //         this.parent.removeChild(this);
    //     }
    // }

    public destroy(destroyChild: boolean):void{
        super.destroy(destroyChild)
    }
}