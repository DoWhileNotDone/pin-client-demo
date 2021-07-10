<template>
  <div class="container mx-auto">
    <button data-test="generate" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded"  @click="addItem">
        Generate
    </button>
    <div v-if="pin.length !== 0" class="grid grid-cols-4 gap-4">
      <digit-viewer  v-for="(digit, index) in pin" :key="index" :digit="digit" />
    </div>  
    <ErrorPane v-if="error404" header="404" message="No valid and unique pin found." />
  </div>
</template>

<script>

import axios from 'axios';
import DigitViewer from './DigitViewer';
import ErrorPane from './ErrorPane';

export default {
  name: 'PinViewer',
  components: {
    ErrorPane,
    DigitViewer,
  },
  data() {
    return {
      pin: [],
      error404: false,
    }
  }, 
  methods: {
      async addItem (event) {
          event.preventDefault();
          await axios
              .get('http://127.0.0.1:8881')
              .then(({data: pin}) => {
                  this.pin = Array.from(pin.toString());
                  this.error404 = false;
              })
              .catch( error => {
                  switch (error.response?.status) {
                      case 404:
                          this.pin = [];
                          this.error404 = true;
                          break;
                      default:
                          throw error;
                  }
              });  
      },
  },   
}
</script>
