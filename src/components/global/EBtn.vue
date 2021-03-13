<template>
  <component :is="getTag" :to="to" :href="href" :class="['e-btn']">
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: 'EBtn',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    to: {
      type: String,
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    getTag: (v) => (v.to && 'nuxt-link') || (v.href && 'a') || v.tag,
  },
};
</script>

<style lang="sass">

.e-btn
  @apply select-none cursor-pointer relative overflow-hidden
  @apply transition duration-100 rounded-lg shadow-md
  @apply py-4 px-8 font-semibold
  &::before
    content: ''
    @apply w-1 h-1 rounded-full bg-gray-900 bg-opacity-0 transition-all duration-300
    @apply absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2
  &:hover::before
    @apply bg-opacity-10
    width: 125%
    height: 125%
  &:focus
    @apply outline-none ring-2 ring-opacity-50
</style>
