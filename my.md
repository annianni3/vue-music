# 遇到的问题
####1.如果是默认安装，只包含了eslint等，vuex,vue-router,babel,等都没有进行安装，都要后来进行安装
####2.课程所用的vue-cli是vue-cli2，现在最新版是vue-cli3，所以配置方面有很大的差异，只看思路，不要照着配置
####3.vue-cli这种框架和之前直接使用webpack配置是有区别的，因为脚手架做了很多底层的工作，所以不要照着之前webpack的思路来配置vue-cli，一切遵照官网
####4.font不知道为什么在styl中一直使用出错，换成css后可以使用但要安装css-loader
```
iconfont.css
npm install css-loader --save
```
###swiper一直不成功的原因是：
```
组件name不能是swiper
```
####better-scroll写slider组件不能轮播的原因是更新后的snap参数发生变化了
####？原理是什么，为什么需要设置宽度呢
```
仔细研究思考了以下，需要设置宽度的原因是因为，外部的wrapper的宽度是所以元素的总和，所以不能用width:100%来设置
```
####图片懒加载，vue-lazyload
