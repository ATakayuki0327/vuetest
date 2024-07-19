import { mount, VueWrapper } from '@vue/test-utils';
import ComponentItem from '@/components/ComponentItem.vue';

class ComponentItemPageObject {
  wrapper: VueWrapper;
  
  // 指定のページのコンポーネントをマウントする
  constructor() {
    this.wrapper = mount(ComponentItem);
  }

  // 子コンポーネントが存在するかどうかを返す
  hasChildComponent() {
    return this.wrapper.findComponent({ name: 'ChildComponent' });
  }

  getLinkHref(linkText: string) {
    const link = this.wrapper.findAll('a').find(a => a.text() === linkText);
    return link ? link.attributes('href') : null;
  }
}

export default ComponentItemPageObject;