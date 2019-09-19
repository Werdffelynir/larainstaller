<template>
    <VApp>
        <VNavigationDrawer app clipped-x :width="sidebar ? 250 : 0">
            <Sidebar />
        </VNavigationDrawer>

        <VAppBar app >
            <template v-if="$vuetify.breakpoint.smAndUp">
                <VBtn v-on:click="sidebarToggle"><ArrowRightBoldIcon /></VBtn>
            </template>
            <VSpacer></VSpacer>
            <HeaderMenu />
        </VAppBar>

        <VContent>
            <VContainer fluid>
                <router-view></router-view>
            </VContainer>
        </VContent>

        <VFooter app>
            <VBtn icon> </VBtn>
        </VFooter>
    </VApp>
</template>
<script>
    import Sidebar from './common/Sidebar.vue';
    import HeaderMenu from './common/HeaderMenu.vue';

    export default {

        name: 'app-component',

        data: (vueAppComponent) => {
            return {
                columns: [...new Array(16)],
                sidebar: true,
            };
        },

        methods: {
            sidebarToggle() {
                this.sidebar = !this.sidebar;
            },
        },

        watch: {
            input_event(value) {
            }
        },

        computed: {},
        components: {
            Sidebar,
            HeaderMenu,
        },

    }
</script>
