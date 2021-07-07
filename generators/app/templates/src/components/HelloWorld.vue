<template>
    <h1>{{ msg }}</h1>
</template>

<script>
    export default {
        props: {
            msg: String,
        },
        data() {
            return {
                count: 0,
            };
        },
    };
</script>

<style scoped>
    a {
        color: #42b983;
    }
</style>
