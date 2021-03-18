<template>
  <div ref="e-navbar" class="e-navbar" :class="{ scrollActive, collapse, collapsed }">
    <div class="e-navbar__start">
      <e-logo class="text-3xl" />
    </div>
    <div class="e-navbar__center">
      <span class="e-navbar--close-btn" @click="collapsed = true">x</span>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link :to="{ name: 'About' }">About</nuxt-link>
      <nuxt-link :to="{ name: 'Pricing' }">pricing</nuxt-link>
      <nuxt-link :to="{ name: 'Contact' }">Contact</nuxt-link>
    </div>
    <div class="e-navbar__end">
      <a class="px-3 py-2 text-xs bg-primary-b rounded-md text-white truncate font-semibold">Apply Now</a>
      <span class="e-navbar--open-btn" @click="collapsed = false">O</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ENavbar',
  data: () => ({
    collapse: false,
    collapsed: true,
    navbarWidth: 640,
    scrollActive: false,
  }),
  mounted() {
    this.getNavbarWidth();
    let hScroll, hResize;
    (hScroll = () => (this.scrollActive = window.scrollY > 36))();
    (hResize = () => (this.collapse = this.navbarWidth > window.innerWidth))();
    window.addEventListener('scroll', hScroll);
    window.addEventListener('resize', hResize);
  },
  methods: {
    getNavbarWidth() {
      const eNavbar = this.$refs['e-navbar'];
      eNavbar.style.width = 'auto';
      this.navbarWidth = eNavbar.offsetWidth;
      eNavbar.style.width = '';
    },
  },
};
</script>

<style lang="sass">
.e-navbar
  @apply w-full fixed top-0 z-1k
  @apply flex justify-between items-center px-4
  @apply transition-all duration-200
  @apply bg-transparent py-8




  .e-navbar__start,
  .e-navbar__center,
  .e-navbar__end
    @apply flex flex-nowrap
    flex-basis: 100%


  .e-navbar__start
    @apply justify-start

  .e-navbar__center
    @apply justify-center mx-8
    & > *
      @apply px-4 py-2 rounded-lg
      @apply text-gray-800 text-sm font-semibold capitalize
      @apply relative overflow-hidden transition-all duration-200
      &.active
        @apply text-primary

      &::before
        content: ''
        @apply w-1 h-1 rounded-full bg-primary bg-opacity-0 transition-all duration-300
        @apply absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2
      &:hover
        @apply text-primary text-opacity-80
        &::before
          @apply bg-opacity-5
          width: 125%
          height: 125%
      &:focus
        @apply text-primary text-opacity-100
        &::before
          @apply bg-opacity-10

  .e-navbar__end
    @apply justify-end

  .e-navbar--open-btn,
  .e-navbar--close-btn
    @apply hidden

  &.scrollActive
    @apply shadow-md py-3 bg-white
    &.collapse .e-navbar__center
      @apply top-3

  &.collapse
    .e-navbar__center
      @apply bg-gray-50 px-12 py-8 ring-gray-100 ring-2 rounded-lg shadow-lg
      @apply absolute flex-col top-8 transform right-4 m-0
      @apply transition-all duration-200
      width: calc( 100vw - 2rem )
      & > *
        @apply block text-center
        &.active
          @apply bg-primary text-white
      & > .e-navbar--close-btn
        @apply inline-block text-gray-800 absolute top-1 right-1
    .e-navbar__end
      & > .e-navbar--open-btn
        @apply inline-block text-gray-50 bg-gray-800 px-3 py-2 text-xs rounded-md ml-2
        &:hover,
        &:focus
          //
  &.collapsed
    .e-navbar__center
      @apply -right-full
</style>
