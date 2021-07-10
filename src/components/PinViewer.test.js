/**
 * @jest-environment jsdom
 */

import axios from 'axios';
import { jest, describe, expect, it } from '@jest/globals'
import { mount } from '@vue/test-utils'
import PinViewer from './PinViewer'

describe('Pinviewer.vue', () => {

  it('Renders', () => {

    const wrapper = mount(PinViewer, {
      stubs: ['DigitViewer', 'ErrorPane']
    });

    //Has Generate Button 
    expect(wrapper.get('[data-test="generate"]').exists()).toBe(true);
    //Check init data
    expect(wrapper.vm.$data.pin).toStrictEqual([]);
    expect(wrapper.vm.$data.error404).toEqual(false);

  });

  it('Triggers a request to the api and binds the data', async () => {

    const mockAPIResponse = {
      data: 9564,
    };

    jest.spyOn(axios, 'get').mockResolvedValue(
      mockAPIResponse
    );

    const wrapper = mount(PinViewer, {
      stubs: ['DigitViewer', 'ErrorPane']
    });

    await wrapper.get('[data-test="generate"]').trigger('click');

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('http://127.0.0.1:8881');

    //Check data
    expect(wrapper.vm.$data.pin).toStrictEqual(["9","5","6","4"]);
    expect(wrapper.vm.$data.error404).toEqual(false);

  });

  it('Triggers a request to the api and handles a not found response', async () => {

    jest.mock('axios');
    axios.get.mockImplementationOnce(() =>
      Promise.reject(
        {
          response: {
            status: 404,
          }
        }
      )  
    );

    const wrapper = mount(PinViewer, {
      stubs: ['DigitViewer', 'ErrorPane']
    });

    await wrapper.get('[data-test="generate"]').trigger('click');

    expect(axios.get).toHaveBeenCalledTimes(2)
    expect(axios.get).toHaveBeenCalledWith('http://127.0.0.1:8881');

    //Check data
    expect(wrapper.vm.$data.pin).toStrictEqual([]);
    expect(wrapper.vm.$data.error404).toEqual(true);

  });

});
