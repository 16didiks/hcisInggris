const pkg = require('./package');
require('dotenv').config();

module.exports = {
  mode: 'spa',
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth', method: 'post', propertyName: 'data' },
          user: { url: 'account', method: 'get', propertyName: 'data'},
          logout: false
        },
        tokenType: null,
      }
    }
  },

  axios: {
    baseURL: process.env.API_BASE_URL
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
  ],

  server: {
    host: process.env.APP_URL,
    port: process.env.PORT
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome',
    '@nuxtjs/dotenv',
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    },

    server: {
      host: process.env.APP_URL,
      port: process.env.PORT
    },
  }
}
