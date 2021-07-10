/**
 * @jest-environment jsdom
 */

import {describe, expect, it} from '@jest/globals'
import { mount } from '@vue/test-utils'
import DigitViewer from './DigitViewer'

describe('DigitViewer.vue', () => {

  it('Renders', () => {

    const wrapper = mount(DigitViewer, {
      propsData: {
        digit: '9',
      }
    })

    expect(wrapper.text()).toContain('9');

  });
});
