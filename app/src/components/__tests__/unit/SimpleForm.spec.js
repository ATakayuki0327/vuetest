import { describe, it, expect, vi } from 'vitest';

import SimpleFormPageObject from '../pageObjects/SimpleFormPageObject';

describe('フォーム入力してアラートで入力情報が表示されているか', () => {

  it('submits the form with username, password, role, gender, and all checked status', async () => {
    //モック: window.alert 関数をモックして、テストの実行時に実際のアラートを表示しないようにし、呼び出しを検証できるようにしている
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    const page = new SimpleFormPageObject();
    // ユーザー名、パスワード、権限、性別、全て入力しましたか？を入力
    page.fillUsername('testuser');
    page.fillPassword('password123');
    page.selectRole('ユーザー');
    page.chooseGender('男性');
    page.checkAllChecked();
    page.submitForm();

    // アラートに表示される値か期待値通りか確認
    expect(alertSpy).toHaveBeenCalledWith('Username: testuser, Password: password123, Role: ユーザー, Gender: 男性, All Checked: true');

    // スパイをリセット
    alertSpy.mockRestore();
  });
});

//失敗例
describe('SimpleForm.vue', () => {
  it('submits the form with username, password, role, gender, and all checked status2', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    const page = new SimpleFormPageObject();
    page.fillUsername('testuser');
    page.fillPassword('password123');
    page.selectRole('ユーザー');
    page.chooseGender('男性'); // <- 女性を選択しているのでexcectの男性と一致しない
    page.checkAllChecked();
    page.submitForm();
    expect(alertSpy).toHaveBeenCalledWith('Username: testuser, Password: password123, Role: ユーザー, Gender: 男性, All Checked: true');

    alertSpy.mockRestore();
  });
});