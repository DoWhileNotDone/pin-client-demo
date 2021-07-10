/**
 * @jest-environment jsdom
 */

import {describe, expect, it} from '@jest/globals'
import { mount } from '@vue/test-utils'
import ErrorPane from './ErrorPane'

describe('ErrorPane.vue', () => {

  it('Renders', () => {

    const wrapper = mount(ErrorPane, {
      propsData: {
        header: 'This is the header',
        message: 'This is the message',
      }
    })

    expect(wrapper.text()).toContain('This is the header');
    expect(wrapper.text()).toContain('This is the message');

  });
});
