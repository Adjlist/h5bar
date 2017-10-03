var DemoBar = require("DemoBar");

cc.Class({
    extends: cc.Component,

    properties: {
        time:0,
        custom1:{
            default:null,
            type:cc.Prefab
        },
        score:0
    },

    // use this for initialization
    onLoad: function () {
        //游戏在这里启动，DemoBar也就是餐馆类为单例模式
        this.bar = DemoBar.instance;
    },

    start: function(){
        var self = this;
        //开始计时
        this.schedule(self.counting,1);
    },

    //计时，并考虑是否添加客户进入
    counting: function(){
        this.time++;
        if(this.time === 5){
            this.onCustomIn();
        }
        cc.log(this.time);
    },

    //清除计时
    clearCounting: function(){
        this.unschedule(this.counting);
    },

    onCustomIn:function(){
        //实例化 客户 perfab （可能有多种perfab）
        var custom = cc.instantiate(this.custom1);
        custom.parent = this.node;
        custom.position = cc.p(100,100);
        //获取其中的 custom 脚本，并输入初始值
        var customScript = custom.getComponent("Custom");
        customScript.cname = "a";
        customScript.want = ["b"];
        customScript.controller = this;//传入controller类，方便回调

        //添加顾客到内存,数据初始化完成后及时添加到bar类中，防止bug
        this.bar.customIn(customScript);
        
        //这里是move替代动画，可以替换为 animation + 事件回调的形式
        custom.runAction(cc.sequence(cc.moveBy(2, 200, 0), cc.callFunc(function () {
            //动画完成，显示对话框
            var button = custom.getChildByName("New Button");
            var label = button.getChildByName("Label");
            console.log(label);
            var lc = label.getComponent("cc.Label");
            console.log(lc);
            lc.string = "i want eating " + customScript.want;
            button.active = true;
        }, custom)));
    },
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
