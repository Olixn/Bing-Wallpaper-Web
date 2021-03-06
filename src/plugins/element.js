import Vue from 'vue'

import {
    Button,
    Container,
    Header,
    Main,
    Menu,
    MenuItem,
    Divider,
    Row,
    Col,
    Popover,
    Tooltip,
    Card,
    Pagination,
    Dialog,
    Loading,
    Notification
} from "element-ui"

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Divider)
Vue.use(Row)
Vue.use(Col)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Card)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Loading)

Vue.prototype.$notify = Notification