import { describe, it, expect, vi } from 'vitest';

import SimpleFormPageObject from '../pageObjects/SimpleFormPageObject'

describe('SimpleForm.vue', () => {
  it('submits the form with username and password', async () => {
    // window.alertをモック
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    const page = new SimpleFormPageObject();
    // ユーザー名とパスワードを入力
    page.fillUsername('testuser');
    page.fillPassword('password123');
    page.submitForm();

    // 期待された値かどうかの確認
    expect(alertSpy).toHaveBeenCalledWith('Username: testuser, Password: password123');

    // スパイをリセット
    alertSpy.mockRestore();
  });
});