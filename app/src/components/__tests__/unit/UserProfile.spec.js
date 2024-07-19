import { describe, it, expect, vi } from 'vitest';
import UserProfilePage from '../pageObjects/UserProfilePage.ts';
import SimpleFormPageObject from '../pageObjects/SimpleFormPageObject.ts';
import router from '@/router/index';

describe('Router navigation', () => {
  it('should navigate to SimpleForm when Home link is clicked', async () => {
    const userProfilePage = new UserProfilePage();

    
    expect(userProfilePage.userNameText).toBe('testユーザー');
    expect(userProfilePage.userEmailText).toBe('test@example.co.jp');
    userProfilePage.clickHomeLink();

    expect(router.currentRoute.value.path).toBe1('/simpleform');

    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const page = new SimpleFormPageObject();

    await page.fillUsername('testuser');
    await page.fillPassword('password');
    await page.selectRole('管理者');
    await page.chooseGender('男性');
    await page.checkAllChecked();
    await page.submitForm();

    expect(alertSpy).toHaveBeenCalledWith('Username: testuser, Password: password, Role: 管理者, Gender: 男性, All Checked: true');
  });
});
