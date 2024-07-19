import { describe, it, expect } from 'vitest'
import HelloWorldPageObject from '../pageObjects/HelloWorldPageObject';


describe('.greetings h1要素にHello Vitestを渡して正しく表示されているか', () => {
  it('renders properly', () => {
    const wrapper = new HelloWorldPageObject('Hello Vitest');
    expect(wrapper.messageText).toContain('Hello Vitest')
  })
})
