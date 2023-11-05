<template>
  <div>
    <h2>List of Numbers</h2>
    <button @click="generateNumbers">Generate</button>
    <ul>
      <li v-for="(number, index) in numbers" :key="index">
        {{ number }} <button @click="copyNumber(number)">Copy</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: []
    }
  },
  methods: {
    generateNumbers() {
      this.numbers = []; // Clear the list
      for(var i = 0; i < 10; i++) {
        var number = 8187240000 + Math.floor(Math.random() * 100000); // Generate a random number between 8187240000 and 8187249999
        this.numbers.push(number); // Add the number to the list
      }
    },
    copyNumber(number) {
      navigator.clipboard.writeText(number.toString()).then(function() {
        // alert('Number copied to clipboard');
      }, function(err) {
        alert('Could not copy number: ', err);
      });
    }
  },
  mounted() {
    this.generateNumbers();
  }
}
</script>
