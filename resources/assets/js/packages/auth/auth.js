export default function (Vue) {
  Vue.auth = {
      setToken (token, expires) {
          localStorage.setItem('token', token)
          localStorage.setItem('expires', expires)
      },
      getToken () {
          var token   = localStorage.getItem('token')
          var expires = localStorage.getItem('expires')

          if ( ! token || ! expires)
                return null
          if (Date.now() > parseInt(expires)) {
              this.destroyToken()
              return null
          } else
                return token


      },
      destroyToken () {
          localStorage.removeItem('token')
          localStorage.removeItem('expires')
      },
      isAuthenticated () {
          if (this.getToken())
                return true
          else
                return false
      }
  }

  Object.defineProperties(Vue.prototype, {
      $auth : {
          get : () => {
              return Vue.auth
          }
      }
  })
}