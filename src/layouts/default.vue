<template>
  <div>
    <e-navbar fixed>
      <template #start>
        <e-logo class="text-3xl" />
      </template>
      <a href="#" class="active">Home</a>
      <a href="#">About</a>
      <a href="#">pricing</a>
      <a href="#">Contact</a>
      <template #end>
        <a class="px-3 py-2 text-xs bg-primary-b rounded-md text-white truncate font-semibold">Apply Now</a>
      </template>
    </e-navbar>
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
