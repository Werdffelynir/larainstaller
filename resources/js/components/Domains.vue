<template>
    <div class="container">
        <h2>Domains</h2>



        <VBtn>asdasdad</VBtn>

        <VRow justify="space-between" class="grid">
            <div>
                <VAppBarNavIcon>
                    <PlusIcon size="64" height="64"  />
                </VAppBarNavIcon>
                <VAppBarNavIcon><span class="material-icons">face</span></VAppBarNavIcon>
            </div>
            <VIcon width="64" height="64" >
                <span class="material-icons">face</span>
            </VIcon>
        </VRow>

        <VRow justify=" flex-end" class="">
            <VCol>
                <VAppBar dark color="grow">
                    <VAppBarNavIcon>
                    </VAppBarNavIcon>
                    <VToolbarTitle>http://site-domain.com</VToolbarTitle>
                    <div class="flex-grow-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <VBtn icon>
                        <v-icon >mdi-magnify</v-icon>
                    </VBtn>
                </VAppBar>
            </VCol>
            <VCol>
                <VCard class="mx-auto">
                    <VCardTitle>site-domain.com</VCardTitle>
                    <VCardText>domain card text</VCardText>
                    <VCardActions>
                        <VBtn text>Click</VBtn>
                    </VCardActions>
                </VCard>
            </VCol>
            <VCol>
                <VCard class="mx-auto">
                    <VCardTitle>site-domain.com</VCardTitle>
                    <VCardText>domain card text</VCardText>
                    <VCardActions>
                        <VBtn text>Click</VBtn>
                    </VCardActions>
                </VCard>
            </VCol>
        </VRow>
    </div>
</template>
<style>
    .domains {
        width: 100%;
        padding: 0 2rem 0 1rem;
    }
</style>
<script>
    import PlusIcon from 'vue-material-design-icons/Plus';

    export default {
        name: 'domains-component',
        components: { PlusIcon },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
