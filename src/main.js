import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import VueLazyload from 'vue-lazyload';
import { Dialog, Button, Message, MessageBox, Loading, Radio, RadioGroup, Cascader, Pagination, Select, Option, Slider, Backtop, Icon, Input, Drawer, Table, TableColumn } from "element-ui";

import './static/css/bootstrap.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import './static/css/button.css';
import './static/css/dialog.css';
import './static/css/message.css';
import './static/css/message-box.css';
import './static/css/loading.css';
import './static/css/radio.css';
import './static/css/radio-group.css';
import './static/css/cascader-color.css'; // 因为直接挂载原来的css文件会导致radio没办法换行，所以单独提取有关颜色的语句
import './static/css/pagination-color.css';
import './static/css/slider.css';
import './static/css/backtop.css';
import './static/css/table.css';
import './static/css/table-column.css';
import './static/css/aos.css';

Vue.prototype.$ELEMENT = { size: 'large', zIndex: 3000 };
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$loading = Loading.service;

Vue.use(Dialog);
Vue.use(Button);
Vue.use(Loading);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Cascader);
Vue.use(Input);
Vue.use(Pagination);
Vue.use(Select);
Vue.use(Option);
Vue.use(Slider);
Vue.use(Backtop);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Table);
Vue.use(TableColumn);
// 如果采用上面那种方式，会在刷新页面的时候弹出对话框（完整引入element-ui就不会）
Vue.component(Message.name, Message)
Vue.component(MessageBox.name, MessageBox)

// 图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3, // 提前加载高度（数字 1 表示 1 屏的高度） 默认值:1.3
  // error: './static/error.png', // 当加载图片失败的时候
  // loading: './static/loading.gif', // 图片加载状态下显示的图片
  attempt: 2 //  加载错误后最大尝试次数 默认值:3
})

Vue.config.productionTip = false;

// 动画特效
new Vue({
  created() {
    AOS.init({
      duration: 1000,
      easing: 'slide',
      once: false,
      delay: 50
    });
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 跳转后返回顶部
router.afterEach(() => {
  window.scrollTo(0,0);
})
