import Vue from 'vue';
import Vuetify, {
    VApp,
    VNavigationDrawer,
    VContent,
    VFooter,
    VCard,
    VCardTitle,
    VCardText,
    VContainer,
    VRow,
    VCol,
    VBtn,
    VRating,
    VToolbar,
    VToolbarItems,
    VStepper,
    VSpacer,
    VMenu,
    VMenuTransition,
    VAppBar,
    VAppBarNavIcon,
    VList,
    VListItem,
    VIcon,
    VListItemIcon,
    VListItemContent,
    VListItemTitle,
    VAvatar,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';
import colors from 'vuetify/lib/util/colors'

import 'vuetify/dist/vuetify.css';
import "vue-material-design-icons/styles.css";

import MenuIcon from "vue-material-design-icons/Menu.vue"
import FountainPenIcon from "vue-material-design-icons/FountainPen.vue"
import DiskIcon from "vue-material-design-icons/Disc.vue"
import ArrowRightBoldIcon from "vue-material-design-icons/ArrowRightBold.vue"
import FileOutlineIcon from "vue-material-design-icons/FileOutline.vue"

const iconsComponents = {
    MenuIcon,
    FountainPenIcon,
    DiskIcon,
    ArrowRightBoldIcon,
    FileOutlineIcon,
};


Vue.use(Vuetify, {
    components: {
        VApp,
        VNavigationDrawer,
        VContent,
        VFooter,
        VCard,
        VCardTitle,
        VCardText,
        VContainer,
        VRow,
        VCol,
        VBtn,
        VRating,
        VToolbar,
        VToolbarItems,
        VStepper,
        VSpacer,
        VMenu,
        VMenuTransition,
        VAppBar,
        VAppBarNavIcon,
        VList,
        VListItem,
        VIcon,
        VListItemIcon,
        VListItemContent,
        VListItemTitle,
        VAvatar,
        ...{...iconsComponents},
    },
    directives: {
        Ripple,
    },
});

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.grey.darken1,
                secondary: colors.grey.lighten4,
                accent: colors.indigo.base,
            },
            dark: {
                primary: colors.grey.darken1,
                secondary: colors.grey.lighten4,
                accent: colors.indigo.base,
            },
        },
        dark: true,
    },
})
