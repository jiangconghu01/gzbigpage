<template>
  <div class="home">
    <router-link to="/">Home</router-link>
    <p><router-link to="/allview">allview</router-link></p>
    <p><router-link to="/keypointview">keypointview</router-link></p>
    <p><router-link to="/detailview">detailview</router-link></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home'
})
</script>
