cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        cname:{
            default:""
        },
        want:[],
    },

    // use this for initialization
    onLoad: function () {
          
    },

    //这里为对话框button回调，实际中改成碰撞回调，当食物碰撞到客户时（进入客户碰撞体内），
    //触发碰撞回调（food值通过鼠标点选的对象获取）
    demoEat:function(_food){
        if(this.contains(this.want,_food)){
            cc.log("客户吃了 " + _food);
            //如果复合条件，则改变分数，显示离开动画
            if(this.controller){
                this.controller.customOut();
                this.controller.changeScore(10);
            }
        }else{
            cc.log("客户不吃 " + _food);
        }
    },

    contains:function (arr, obj) {  
        var i = arr.length;  
        while (i--) {  
            if (arr[i] === obj) {  
                return true;  
            }  
        }  
        return false;  
    }, 

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
