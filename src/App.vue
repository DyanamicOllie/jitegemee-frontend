<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <v-app>
   <NavBar/>
   <v-main>
  <RouterView/>
   </v-main>
  <Footer/>
   </v-app>
</template>
  

