import { type Directive, type DirectiveBinding } from 'vue'

import { useAppStore } from '@/stores'
import { debounce } from '@/utils'

const elsTitle = new WeakMap();

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const appStore = useAppStore();

    const delay = binding.modifiers.fast ? 200 : 500;

    const show = debounce((x: number, y: number) => {
      if (el.dataset.showTips === "true") {
        appStore.tipsPosition = { x, y };
        appStore.tipsMessage = elsTitle.get(el);
        appStore.tipsShow = true;
      }
    }, delay);

    el.onmouseenter = (e: MouseEvent) => {
      if (binding.value) {
        el.dataset.showTips = "true";
        show(e.clientX, e.clientY);
      }
    };

    el.onmouseleave = () => {
      appStore.tipsShow = false;
      el.dataset.showTips = "false";
    };
  },

  updated(el: HTMLElement, binding: DirectiveBinding) {
    elsTitle.set(el, binding.value);
  },

  beforeUnmount(el: HTMLElement) {
    const appStore = useAppStore();
    appStore.tipsShow = false;
    el.dataset.showTips = "false";
  },
} as Directive;
