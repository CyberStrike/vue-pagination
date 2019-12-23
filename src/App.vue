<template>
  <main id="app">
    <router-view/>
  </main>
</template>

<style lang="sass">
  @import './assets/app'

  body
    margin: 0
    padding: 0
    background-color: black

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: rebeccapurple

  #nav
    padding: 30px
    a
      font-weight: bold
      color: #2c3e50
      &.router-link-exact-active
        color: #42b983
</style>
