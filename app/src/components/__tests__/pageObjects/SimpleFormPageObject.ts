import { mount, VueWrapper } from '@vue/test-utils'
import SimpleForm from '@/components/SimpleForm.vue'

class SimpleFormPageObject {
  wrapper: VueWrapper;

  
  
  constructor() {
    this.wrapper = mount(SimpleForm);
  }

  fillUsername(username: string) {
    const usernameInput = this.wrapper.find('#username');
    usernameInput.setValue(username);
  }

  fillPassword(password: string) {
    const passwordInput = this.wrapper.find('#password');
    passwordInput.setValue(password);
  }

  selectRole(role: string) {
    const roleSelect = this.wrapper.find('#role');
    roleSelect.setValue(role);
  }

  chooseGender(gender: string) {
    const genderRadio = this.wrapper.find(`input[type="radio"][value="${gender}"]`);
    genderRadio.setChecked(true);
  }

  checkAllChecked() {
    const allCheckedCheckbox = this.wrapper.find('#allChecked');
    allCheckedCheckbox.setChecked(true);
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
