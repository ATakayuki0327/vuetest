import { mount } from '@vue/test-utils'
import SimpleForm from '../../SimpleForm.vue'

class SimpleFormPageObject {
  constructor() {
    this.wrapper = mount(SimpleForm);
  }

  fillUsername(username) {
    const usernameInput = this.wrapper.find('#username');
    usernameInput.setValue(username);
  }

  fillPassword(password) {
    const passwordInput = this.wrapper.find('#password');
    passwordInput.setValue(password);
  }

  submitForm() {
    const form = this.wrapper.find('form');
    form.trigger('submit.prevent');
  }

  getAlertMessage() {
    return window.alert;
  }
}

export default SimpleFormPageObject;
