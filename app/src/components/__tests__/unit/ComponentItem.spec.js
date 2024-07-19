import { describe, it, expect } from 'vitest';
import ComponentItemPageObject from '../pageObjects/ComponentItemPageObject';

describe('ComponentItem.vue', () => {
  it('子コンポーネント存在チェック', () => {
    const page = new ComponentItemPageObject();
    expect(page.hasChildComponent().exists()).toBe(true);
    expect(page.hasChildComponent().text()).toBe('子コンポーネントの内容');

  });


  it('リンクURLチェック', () => {
    const page = new ComponentItemPageObject();
    expect(page.getLinkHref('Google')).toBe('https://www.google.com');
    expect(page.getLinkHref('Yahoo')).toBe('https://www.yahoo.com');
    expect(page.getLinkHref('Qiita')).toBe('https://qiita.com');
  });


});