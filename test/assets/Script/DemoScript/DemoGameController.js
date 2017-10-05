var DemoBar = require("DemoBar");

cc.Class({
    extends: cc.Component,

    properties: {
        time:0,
        custom1:{
            default:null,
            type:cc.Prefab
        },
        custom2:{
            default:null,
            type:cc.Prefab
        },
        custom3:{
            default:null,
            type:cc.Prefab
        },
        custom4:{
            default:null,
            type:cc.Prefab
        },
        custom5:{
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

        var custom1 = cc.instantiate(this.custom1);
       /* var custom2 = cc.instantiate(this.custom2);
        var custom3 = cc.instantiate(this.custom3);
        var custom4 = cc.instantiate(this.custom4);
        var custom5 = cc.instantiate(this.custom5);*/

        custom1.parent = this.node;
        /*custom2.parent = this.node;
        custom3.parent = this.node;
        custom4.parent = this.node;
        custom5.parent = this.node;*/
        custom1.position = cc.p(-83,5);
       /* custom2.position = cc.p(-483,440);
        custom3.position = cc.p(-767,437);
        custom4.position = cc.p(-140,290);
        custom5.position = cc.p(-849,289);*/
        //获取其中的 custom 脚本，并输入初始值
        var customScript = custom1.getComponent("Custom");
        /*var customScript = custom2.getComponent("Custom");
        var customScript = custom3.getComponent("Custom");
        var customScript = custom4.getComponent("Custom");
        var customScript = custom5.getComponent("Custom");*/
        customScript.cname = "a";
        customScript.want = ["foodtype"];
        customScript.controller = this;//传入controller类，方便回调

        //添加顾客到内存,数据初始化完成后及时添加到bar类中，防止bug
        this.bar.customIn(customScript);
        
        //这里是move替代动画，可以替换为 animation + 事件回调的形式
        custom1.runAction(cc.sequence(cc.moveBy(2, 200, 0), cc.callFunc(function () {
            //动画完成，显示对话框
            var button = custom1.getChildByName("New Button");
            var label = button.getChildByName("Label");
            console.log(label);
            var lc = label.getComponent("cc.Label");
            console.log(lc);
            lc.string = "i want eating " + customScript.want;
            button.active = true;
        }, custom1)));
        /*custom2.runAction(cc.sequence(cc.moveBy(50, 200, 0), cc.callFunc(function () {
            //动画完成，显示对话框
            var button = custom2.getChildByName("New Button");
            var label = button.getChildByName("Label");
            console.log(label);
            var lc = label.getComponent("cc.Label");
            console.log(lc);
            lc.string = "i want eating " + customScript.want;
            button.active = true;
        }, custom2)));*/

    },
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
