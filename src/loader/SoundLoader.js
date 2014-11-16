﻿/**YEngine2D
 * author：YYC
 * date：2014-05-17
 * email：395976266@qq.com
 * qq: 395976266
 * blog：http://www.cnblogs.com/chaogex/
 * homepage:
 * license: MIT
 */
(function () {
    var _instance = null;

    YE.SoundLoader = YYC.Class(YE.Loader, {
        Init: function () {
            this.base();
        },
        Protected: {
            ye_P_load: function (urlArr, key) {
                var self = this;

//todo  key应该为url?

                YE.SoundManager.getInstance().createSound(urlArr, function (sound) {
                    YE.LoaderManager.getInstance().onResLoaded();
                    self.ye_P_container.appendChild(key, sound);

                }, function (msg) {
                    YE.LoaderManager.getInstance().onResError(urlArr, "错误原因：" + msg);
//                    YE.LoaderManager.getInstance().onResError(urlArr, "错误error");
                });
            }
        },
        Static: {
            getInstance: function () {
                if (_instance === null) {
                    _instance = new this();
                }
                return _instance;
            }
        }
    });
}());