<template>
  <span class="e-logo">EasyGlish</span>
</template>

<script>
export default {
  name: 'ELogo',
};
</script>

<style lang="sass">
.e-logo
  @apply font-bold font-baloo bg-primary-r
  background: linear-gradient(90deg, theme('colors.primary.r') 0%, theme('colors.primary.y') 50%, theme('colors.primary.b') 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
</style>
