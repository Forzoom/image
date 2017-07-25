import Image from './components/image.vue';
import {
    ImageContainer,
} from './index.js';
// Vue
export let _Vue;
// 最终的容器
export let container;

export function install(Vue) {
    if (install.installed) {
        return;
    }
    install.installed = true;
    _Vue = Vue;
    container = new ImageContainer();

    Vue.mixin({
        beforeCreate() {
            // 判断当前的元素的类型，是否所有的元素的类型
            console.log('tag', this.tag);
        }
    });

    // 处理所有的内容
    // window.on('scroll', function() {

    // });

    Vue.component('ROImage', Image);
}