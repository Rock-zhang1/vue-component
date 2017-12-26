<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}
html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: .32rem;
}
#app {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
</style>
