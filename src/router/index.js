import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue')
  },
  {
    path: "/home",
    name: "Home",
    component: () => import('../views/Home.vue')
  },
  {
    path: "/category",
    name: "Category",
    component: () => import('../views/Category.vue')
  },
  {
    path: "/product_details",
    name: "ProductDetails",
    component: () => import('../views/ProductDetails.vue')
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import('../views/Cart.vue')
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import('../views/Checkout.vue')
  },
  {
    path: "/register",
    name: "Register",
    component: () => import('../views/Register.vue')
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue')
  },
  {
    path: "/contact_us",
    name: "Contact",
    component: () => import('../views/Contact.vue')
  },
  {
    path: "/about_us",
    name: "About",
    component: () => import('../views/About.vue')
  },
  {
    path: "/alipay",
    name: "Alipay",
    component: () => import('../views/Alipay.vue')
  },
  {
    path: "/thank_you",
    name: "ThankYou",
    component: () => import('../views/ThankYou.vue')
  },
  {
    path: "/user",
    name: "User",
    component: () => import('../views/User.vue')
  },
  {
    path: "/search",
    name: "Search",
    component: () => import('../views/Search.vue')
  }
];

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;
