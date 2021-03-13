<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head: () => ({
    title: 'easyglish',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  }),
};
</script>

<style lang="sass">
html
  font-family: 'Source Sans Pro', Roboto, Arial, sans-serif
  font-size: 16px

*,
*::before,
*::after
  box-sizing: border-box
  margin: 0
  padding: 0
</style>
