<template>
  <div class="container">
    <div>
      <e-logo class="text-8xl" />
      <div class="links">
        <e-btn class="bg-primary-r text-white ring-primary-r">Primary Red</e-btn>
        <e-btn class="bg-primary-y text-white ring-primary-y">Primary Yellow</e-btn>
        <e-btn class="bg-primary-b text-white ring-primary-b">Primary Blue</e-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.container
  margin: 0 auto
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.links
  padding-top: 15px
</style>
