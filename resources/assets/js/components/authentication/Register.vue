<template lang="html">
    <div class="container">

      <form class="form-signin">
            <h2 class="form-signin-heading">Register</h2>
            <label for="inputEmail" class="sr-only">Name</label>
            <input type="text" v-model="name" class="form-control" placeholder="Name" required="" autofocus="">

            <label for="inputEmail" class="sr-only">Email</label>
            <input type="email" v-model="email" class="form-control" placeholder="Email" required="" autofocus="">

            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" v-model="password" class="form-control" placeholder="Password" required="">

            <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
      </form>

    </div>
</template>

<script>
export default {
    data () {
        return {
            name    : 'Swapnil',
            email    : 'connect@swapnilchaudhari',
            password : 'secret'
        }
    }
}
</script>

<style lang="css">
.form-signin {
max-width: 330px;
padding: 15px;
margin: 0 auto;
}
</style>