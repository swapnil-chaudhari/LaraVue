<template>
    <div >
        <!-- <h1>Swapnil</h1> -->
        <login></login>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import Login from './authentication/Login'
export default {
    name: 'app',
    components: {
        login: Login
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>