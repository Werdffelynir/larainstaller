import Vue from 'vue';
import Vuetify, {
    VApp,
    VNavigationDrawer,
    VContent,
    VDivider,
    VFooter,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VContainer,
    VRow,
    VCol,
    VBtn,
    VRating,
    VToolbar,
    VToolbarItems,
    VToolbarTitle,
    VSubheader,
    VStepper,
    VSpacer,
    VMenu,
    VMenuTransition,
    VAppBar,
    VAppBarNavIcon,
    VIcon,
    VList,
    VListItem,
    VListItemIcon,
    VListItemContent,
    VListItemSubtitle,
    VListItemTitle,
    VListItemAvatar,
    VAvatar,
    VHover,
    VImg,
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
import DomainIcon from "vue-material-design-icons/Domain.vue"
// import DomainOffIcon from "vue-material-design-icons/DomainOff.vue"
// import DomainPlusIcon from "vue-material-design-icons/DomainPlus.vue"
// import DomainRemoveRemoveIcon from "vue-material-design-icons/DomainRemove.vue"
import PlusIcon from "vue-material-design-icons/Plus.vue"

const iconsComponents = {
    MenuIcon,
    FountainPenIcon,
    DiskIcon,
    ArrowRightBoldIcon,
    FileOutlineIcon,
    DomainIcon,
    PlusIcon,
};


Vue.use(Vuetify, {
    components: {
        VApp,
        VNavigationDrawer,
        VContent,
        VDivider,
        VFooter,
        VCard,
        VCardTitle,
        VCardText,
        VCardActions,
        VContainer,
        VRow,
        VCol,
        VBtn,
        VRating,
        VToolbar,
        VToolbarItems,
        VToolbarTitle,
        VSubheader,
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
        VListItemSubtitle,
        VListItemTitle,
        VListItemAvatar,
        VAvatar,
        VHover,
        VImg,
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
