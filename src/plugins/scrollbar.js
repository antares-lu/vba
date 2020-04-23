/* eslint-disable no-underscore-dangle */
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const elScrollBar = (el) => {
  if (el._ps_ instanceof PerfectScrollbar) {
    el._ps_.update();
  } else {
    // eslint-disable-next-line no-param-reassign
    el._ps_ = new PerfectScrollbar(el, { suppressScrollX: true, swipeEasing: false });
  }
};

const Plugin = {
  install(Vue, name = 'scrollbar') {
    Vue.directive(name, {
      inserted(el) {
        const rules = ['fixed', 'absolute', 'relative'];
        if (!rules.includes(window.getComputedStyle(el, null).position)) {
          console.error(`perfect-scrollbar所在的容器的position属性必须是以下之一：${rules.join('、')}`);
        }
        elScrollBar(el);
      },
      componentUpdated(el, binding, vnode) {
        try {
          vnode.context.$nextTick(
            () => {
              elScrollBar(el);
            },
          );
        } catch (error) {
          console.error(error);
          elScrollBar(el);
        }
      },
    });
  },
};

export default Plugin;
