<template>
    <div id="header-menu">

        <VToolbarItems>
            <router-link to="/">
                <VBtn text>dashboard</VBtn>
            </router-link>

            <router-link to="/profile">
                <VBtn text>profile</VBtn>
            </router-link>

            <router-link to="/domains">
                <VBtn text>domains</VBtn>
            </router-link>

            <router-link to="/services">
                <VBtn text>services</VBtn>
            </router-link>

            <a href="/logout">
                <VBtn text>logout</VBtn>
            </a>
        </VToolbarItems>

    </div>
</template>

<script>
    export default {

        name: 'HeaderMenu',

        data() {
            return {
                items: [],
            }
        },
    }
</script>
