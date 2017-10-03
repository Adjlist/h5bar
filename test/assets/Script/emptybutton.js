cc.Class({
    extends: cc.Component,
    properties: {},
    _sayHello: function () {
        alert('Hello World');
    },
    /*
    onEnable: function () {
        this.node.on('foobar', this._sayHello, this);
    },

    onDisable: function () {
        this.node.off('foobar', this._sayHello, this);
    },*/
    onLoad: function () {
        this.node.on('mousedown', function ( event ) {setTimeout('_sayHello()', 1) });//对于事件的监听
      },
    onClick:function(){
    },
});
