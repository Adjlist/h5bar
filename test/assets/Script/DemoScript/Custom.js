cc.Class({
    extends: cc.Component,

    properties: {
        //初始化鼠标监听
        score:0,
        cname:{
            default:""
        },
        want:[],
    },

    // use this for initialization
    onLoad: function () {
          
    },
    customOut:function () {
        alert("custom out"):
    }
    changeScore:function(){
        this.score=score+10;
    }
    //这里为对话框button回调，实际中改成碰撞回调，当食物碰撞到客户时（进入客户碰撞体内），
    //触发碰撞回调（food值通过鼠标点选的对象获取）
    demoEat:function(_food){
        if(this.contains(this.want,_food)){
            cc.log("客户吃了 " + _food);
            //如果复合条件，则改变分数，显示离开动画
            if(this.controller){
                this.controller.customOut();
                this.controller.changeScore();
            }
        }else{
            customOut();
        }
    },
    foodtype:function () {
        this.node.on('mousedown', function (event) {
            this.enabled = false;
        }, this);
    }//想用监听事件获得其第三个参数返回值foodtype用于和顾客需求做比较
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
