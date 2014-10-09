# fis-optimizer-ng-annotate

压缩AngularJS代码前预处理。

## 用法

修改 fis-conf.js

    fis.config.merge({
        modules : {
            optimizer : {
                js : ['ng-annotate', 'uglify-js']
            }
        }
    });