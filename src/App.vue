<template>
  <NavbarComponent></NavbarComponent>
  <Calculadora></Calculadora>
</template>

<script>
import Calculadora from './components/Calculadora.vue';
import NavbarComponent from './components/NavbarComponent.vue'

import './index.css'
export default {
  name: 'App',
  components: {
    Calculadora,
    NavbarComponent
  }
}
</script>

<style>

</style>
