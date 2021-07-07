<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <div>
            <router-link tag="a" to="/" style="margin-right: 24px">
                Home
            </router-link>
            <router-link tag="a" to="/about">About</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HelloWorld from "./components/HelloWorld.vue";
    export default {
        components: { HelloWorld },
    };
    // This starter template is using Vue 3 experimental <script setup> SFCs
    // Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
