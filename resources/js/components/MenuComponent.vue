<template id="menu-template">
    <div class="container">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        template: '#menu-template',
        name: 'menu-component',
        mounted() {
            console.log('menu')
        }
    }
</script>
