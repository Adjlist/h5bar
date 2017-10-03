
cc.Class({
    extends: cc.Component,

    properties: {
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
    },

    onLoad: function ()  {
        this.timer = 0;
        this.score = 50;
        this.scroll=0;
        this.miss=0;// 初始化计分
        gainScore();
        },
    spawnNpc: function() {

        this.timer = 0;
    },
    gainScore: function () {
        this.score += 10;
        // 更新 scoreDisplay Label 的文字
        this.scoreDisplay.string = this.score.toString();
    },

    // update: function (dt) {

    // },
});
