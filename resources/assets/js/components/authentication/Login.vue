<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Login</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" placeholder="E-mail" v-model="email" type="email" autofocus>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" v-model="password" type="password" value="">
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" value="Remember Me">Remember Me
                                    </label>
                                </div>
                                <!-- Change this to a button or input when using this as a form -->
                                <a @click="login" class="btn btn-lg btn-success btn-block">Login</a>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            email    : 'connect@swapnilchaudhari.com',
            password : 'secret'
        }
    },
    methods: {
        login (){
            var data = {
                client_id     : '2',
                client_secret : '8lWBYv7dvri9qo6s52UXX7UKzIpOze918MQOPPWX',
                grant_type : 'password',
                username : this.email,
                password : this.password
            }
            this.$http.post("oauth/token", data)
            .then(response => {
              console.log(response);
                // this.$auth.setToken(response.body.access_token,response.body.expires_in + Date.now())
                // this.$router.push('/dashboard')
            })
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
body {
    background-color: white !important;
}
</style>