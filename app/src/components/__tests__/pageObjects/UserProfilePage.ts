import { mount, VueWrapper } from '@vue/test-utils';
import UserProfile from '@/components/UserProfile.vue'; // コンポーネントのパスを適切に設定

class UserProfilePage {
  wrapper: VueWrapper;

  constructor() {
    this.wrapper = mount(UserProfile);
  }


  get userNameText() {
    return this.wrapper.find('h1').text();
  }

  get userEmailText() {
    return this.wrapper.find('p').text();
  }

  async clickHomeLink() {
    const homeLink = this.wrapper.find('router-link');
    await homeLink.trigger('click');
  }
}

export default UserProfilePage;
