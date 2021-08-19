<template>
    <div class="navbar-container">
        <ul>
            <li @click="buttontoggled"><router-link to="/">Home</router-link></li>
            <li @click="buttontoggled"><router-link to="/about">About Us</router-link></li>
            <li @click="buttontoggled"><router-link to="/contact">Contact</router-link></li>
            <li @click="buttontoggled"><router-link to="bokings">Bookings</router-link></li>
            <li @click="buttontoggled"><router-link to="/help">Help</router-link></li>
            <li @click="buttontoggled"><router-link to="/login">Login</router-link></li>
            <li @click="buttontoggled"><router-link to="Openaccount">Open an account</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        buttontoggled(){
            this.$emit('buttontoggled')
        }
    }
}
</script>

<style scoped>
    .navbar-container {
        margin-top: 80px;
        padding: 10px 40px;
    }
    ul {
        list-style-type: none;
    }
    ul li {
        margin: 0 40px;
        font-family: 'poppins';
        font-size: 16px;
        margin: 30px 0;
    }
    a {
        text-decoration: none;
        color: black;
    }
</style>