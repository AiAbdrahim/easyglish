export default {
  target: 'static',
  srcDir: 'src',
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  router: {
    linkExactActiveClass: 'active',
  },
  build: {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/app/',
    extractCSS: process.env.NODE_ENV === 'production',
    filenames: {
      app: ({ isDev }) => `${isDev ? 'js/[name]' : 'static/js/[contenthash:10]'}.js`,
      chunk: ({ isDev }) => `${isDev ? 'js/[name]' : 'static/js/[contenthash:10]'}.js`,
      css: ({ isDev }) => `${isDev ? 'css/[name]' : 'static/css/[contenthash:10]'}.css`,
      img: ({ isDev }) => `${isDev ? 'img/[name]' : 'static/img/[contenthash:10]'}.[ext]`,
      font: ({ isDev }) => `${isDev ? 'fonts/[name]' : 'static/fonts/[contenthash:10]'}.[ext]`,
    },
    terser: { extractComments: false },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  tailwindcss: {
    exposeConfig: true,
    configPath: '@@/tailwind.config.js',
  },
};
