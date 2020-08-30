<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <br>
      <router-link to="/stregth">Stregth</router-link> |
      <router-link to="/agility">Agililty</router-link> |
      <router-link to="/intelligence">Intelligence</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
