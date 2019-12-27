import CommandChannel from "../controller/CommandChannel";

export default class DataProxy{
    public funcListObj:Object=new Object();
    protected  channel:CommandChannel;
    public Constructor(channel:CommandChannel){
        this.channel=channel;
    }

    /** 
     * 注册数据改变处理
    */
    public  addDataFunc(dataName:number,func:Function,thisObj:any):void{
        if(!this.funcListObj.hasOwnProperty(dataName)){
            this.funcListObj[dataName]=[];
        }
        this.funcListObj[dataName].push(new Array(func,thisObj));
    }

    /** 
     * 广播并执行命令
    */
    public  executeCommand(commandName:number,params:any):void{
        var funcArr:any=this.funcListObj[commandName];
        for(var funcName in funcArr){
            var funcListArr:any=funcArr[funcName];
            for(var i:number=0;i<funcListArr.length;i++){
                var func:Function=funcListArr[0];
                var thisObj:any=funcListArr[1];
                func&&func.call(thisObj,params);
            }
        }
    }
}