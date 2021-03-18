<template>
  <div>
    <ENavbar fixed />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800' },
    ],
  }),
};
</script>

<style lang="sass">
html
  font-size: 16px
</style>
