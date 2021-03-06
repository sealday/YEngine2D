/**YEngine2D
 * author：YYC
 * date：2014-01-11
 * email：395976266@qq.com
 * qq: 395976266
 * blog：http://www.cnblogs.com/chaogex/
 * homepage:
 * license: MIT
 */
(function () {
    YE.AnimationFrame = YYC.Class(YE.Entity, {
        Init: function () {
            this.base();

            this.ye_spriteFrames = YE.Hash.create();
        },
        Private: {
            ye_spriteFrames: null
        },
        Public: {
            getAnims: function () {
                return this.ye_spriteFrames.getChilds();
            },
            getAnim: function (animName) {
                return this.ye_spriteFrames.getValue(animName);
            },
            addAnim: function (animName, anim) {
//                YE.assert(this.ye_spriteFrames[animName] === undefined, "该动画已存在");
                this.ye_spriteFrames.addChild(animName, anim);
            }
        },
        Static: {
            create: function () {
                return new this();
            }
        }
    });
}());