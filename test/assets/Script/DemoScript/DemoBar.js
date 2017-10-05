var DemoBar = cc.Class({
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
        customs:[],
    },

    statics: {
        instance: null
    },

    // use this for initialization
    onLoad: function () {
        DemoBar.instance = this;
    },

    getCustomByName: function(name){
        for(var i = 0;i<this.customs.length;i++){
            if(name==customs[i].name){
                return customs[i];
            }
        }
    },

    customIn:function(custom){
        this.customs.push(custom);
        cc.log("custom in");
        cc.log("current custom count is " + this.customs.length);
    }
    customOut:function(custom){
        this.customs.pull(custom);
        cc.log("custom out");
        cc.log("miss custom count is " + this.customs.length);
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
