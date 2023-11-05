<!-- AddMoreHTML.vue -->
<template>
  <div v-html="htmlContent"></div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      htmlContent: ''
    };
  },
  async created() {
    const response = await axios.get('/AddMoreHTML.html');
    this.htmlContent = response.data;
  }
};
</script>
