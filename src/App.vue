<template>
  <dv-full-screen-container>
    <div id="app">
      <router-view/>
    </div>
  </dv-full-screen-container>
</template>

<style lang="scss">
body {
  margin: 0;
  background: #020D1B;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  padding: 40px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
