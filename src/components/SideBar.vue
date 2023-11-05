<template>
  <div id="sidebar">
    <ul>
      <li v-for="link in links" :key="link.id">
        <router-link v-if="link.isVueComponent" class="sidebar-link" :to="link.path">{{ link.name }}</router-link>
        <a v-else class="sidebar-link" @click.prevent="loadPage(link)">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SideBar',
  data() {
    return {
      links: [
        { name: 'Hello Component', path: '/hello', isVueComponent: true },
        { name: 'Number List', path: '/number-list', isVueComponent: true },
        { name: 'Your HTML File', path: '/FSh@kNX8vQ23.html', isVueComponent: false },
        { name: 'Add more html', path: '/AddMoreHTML.html' , isVueComponent: false },
        { name: 'GIT remote push', path: '/PULthi1wBmf.html' , isVueComponent: false },
        { name: 'Bitbucket to Github', path: '/Sun91024923Close.html' , isVueComponent: false },
        { name: 'Git Rollback from Bad Commit', path: '/Sun81101597Close.html' , isVueComponent: false },
        { name: 'two guitarists prompt01', path: '/Sun46134717Close.html' , isVueComponent: false },
        // Add more links here as needed
      ]
    }
  },
  methods: {
    async loadPage(link) {
      if (link.isVueComponent) {
        this.$router.push(link.path);
      } else {
        const response = await axios.get(link.path);
        if (link.name === 'GIT remote push') {
          this.$router.push({ name: 'PULthi1wBmf', params: { htmlContent: response.data } });
        } else 
        if (link.name === 'Bitbucket to Github') {
          this.$router.push({ name: 'Sun91024923Close', params: { htmlContent: response.data } });
        } else 
        if (link.name === 'Git Rollback from Bad Commit') {
          this.$router.push({ name: 'Sun81101597Close', params: { htmlContent: response.data } });
        } else 
        if (link.name === 'two guitarists prompt01') {
          this.$router.push({ name: 'Sun46134717Close', params: { htmlContent: response.data } });
        } else 
        if (link.name === 'Add more html') {
          this.$router.push({ name: 'AddMoreHTML', params: { htmlContent: response.data } });
        } else {
          this.$router.push({ name: 'StaticHtml', params: { htmlContent: response.data } });
        }
      }
    }

  }
}
</script>


<style scoped>

#sidebar {
  position: fixed;
  width: 200px;
  height: 100vh;
  border-right: 1px solid #ccc;
  padding-left: 0em;
  margin-right: 50px;
}

ul {
  list-style-type: none; /* Remove bullets */
  padding-left: 0; /* Remove left padding */
}

.sidebar-link {
  display: flex;
  padding: 10px 15px 10px 25px;
  color: black;
  text-decoration: none;
}

.sidebar-link:hover {
  background-color: #f1f3f3;
  cursor: pointer;

}


</style>
