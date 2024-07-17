import { mount, VueWrapper } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

class HelloWorldPageObject {
  wrapper: VueWrapper

  constructor(msg: string) {
    this.wrapper = mount(HelloWorld, {
      props: { msg }
    });
  }

  get messageText(): string {
    return this.wrapper.find('.greetings h1').text();
  }
}

export default HelloWorldPageObject;
