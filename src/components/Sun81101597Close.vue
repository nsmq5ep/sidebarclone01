<!-- StaticHtml.vue -->
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
    const response = await axios.get('/Sun81101597Close.html');
    this.htmlContent = response.data;
  }
};
</script>
