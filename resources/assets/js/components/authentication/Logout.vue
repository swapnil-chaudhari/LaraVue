<template >
    <div class="logout">
        {{ title }}
    </div>
</template>

<script>
export default {
    created : function (){
        // alert("logout")
        this.$auth.destroyToken()
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