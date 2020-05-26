<template>
<div v-bind:class="showMobileMenu">
  <div class="site-mobile-menu">
  <div class="site-mobile-menu-header">
    <div class="site-mobile-menu-logo">
      <a href="index.html" class="js-logo-clone">BaaBaaShop</a></div>
    <div class="site-mobile-menu-close ">
      <!-- <a href="#" @click="colse" class="btn btn-primary height-auto btn-sm">X</a> -->
    </div>
  </div>
  <div class="site-mobile-menu-body">
    <ul class="site-nav-wrap">
      <li>
        <router-link to="/user">个人中心</router-link>
      </li>
      <li>
        <router-link to="/cart">购物车</router-link>
      </li>
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li class="has-children">
        <span @click="child" v-bind:class="childMenu" data-toggle="collapse" data-target="#collapseItem0" aria-expanded="false"></span>
        <a href="#" @click="child">分类</a>
        <ul v-bind:class="ul" id="collapseItem0" style="">
            <li v-for="(item, idx) in categoryList" :key="idx">
              <router-link v-bind:to="categoryLink + item.id">
                {{item.categoryName}}
              </router-link>
            </li>
        </ul>
      </li>
      <li>
        <router-link to="/about_us">关于我们</router-link>
      </li>
      <li class="mb-3">
        <router-link to="/contact_us">联系我们</router-link>
      </li>
    </ul>
    <div style="text-align:center" class="p-1 mb-3">
      <el-button @click="show">关闭菜单</el-button>
    </div>
  </div>
</div>


    <div class="site-navbar bg-white py-2">

      <div v-bind:class="showSearch">
        <div class="container">
          <a href="#" class="search-close js-search-close"><span @click="showSearchOrNot"><i class="el-icon-close"></i></span></a>
          <div action="#">
            <input v-model="key" @keydown.enter="search" type="text" style="font-size:16px" class="form-control" placeholder="请输入关键字，按回车键搜索">
          </div>  
        </div>
      </div>

      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="logo">
            <div class="site-logo">
              <router-link to="/home" class="js-logo-clone">BaaBaa Shop</router-link>
            </div>
          </div>
          <div class="main-nav d-none d-lg-block">
            <nav class="site-navigation text-right text-md-center" role="navigation">
              <ul class="site-menu js-clone-nav d-none d-lg-block">
                <li><router-link to="/home">home / 首页</router-link></li>
                <li class="has-children" id="category">
                  <a href="#">category / 分类</a>
                  <ul class="dropdown">
                    <li v-for="(item, idx) in categoryList" :key="idx">
                      <router-link v-bind:to="categoryLink + item.id">
                        {{item.categoryName}}
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li><router-link to="/about_us">about baabaa / 关于我们</router-link></li>
                <li><router-link to="/contact_us">contact us / 联系我们</router-link></li>
              </ul>
            </nav>
          </div>
          <div class="main-nav d-none d-lg-block">
            <nav class="site-navigation text-right text-md-center" role="navigation">
            <a href="#" @click="showSearchOrNot" class="icons-btn d-inline-block js-search-open">
              <span><i class="el-icon-search"></i></span>
            </a>
            <router-link to="/user" class="icons-btn d-inline-block">
              <span><i class="el-icon-user"></i></span>
            </router-link>
            <router-link to="/cart" class="icons-btn d-inline-block bag">
              <span><i class="el-icon-shopping-cart-2"></i></span>
              <span class="number" v-if="quantity!=0">{{quantity}}</span>
            </router-link>
            </nav>
          </div>
          <div class="d-lg-none" >
            <a href="#" @click="showSearchOrNot" class="site-menu-toggle d-inline-block">
              <span><i class="el-icon-search"></i></span>
            </a>
            <a href="#" @click="show" class="site-menu-toggle js-menu-toggle d-inline-block">
              <span><i class="el-icon-menu"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import merge from 'webpack-merge';
import { getCategoryList } from "@/api/api";

export default {
    name: "Header",

    data() {
      return{
        categoryList: [],
        categoryLink: "/category?id=",
        quantity: 0,
        drawer: false,
        direction: 'rtl',
        showMobileMenu: "",
        childMenu: "arrow-collapse collapsed",
        ul: "collapse",
        showSearch: "search-wrap", //通过class控制是否显示搜索框
        key: "" //搜索关键字
      }
    },
    //导航守卫，解决在同一页面更改路由参数，视图不刷新的问题
    beforeRouteUpdate (to, from, next) {
      // 做一些想要做的处理...
      // this.errCode = to.params.code
      // this.info = formatErrorMsg(this.errCode)
      next() // 一定要有next
    },
    created() {
      getCategoryList().then(response=>{
        this.categoryList=response.data.data;
      });
      this.getCartItemsQuantity();
    },
    methods: {
      //购物车图标上地小红点数字更新
      getCartItemsQuantity() {
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (cartItems === null) {
          return;
        }
        for (let i = 0; i < cartItems.length; i++) {
          this.quantity = this.quantity + cartItems[i].quantity;
        }
      },
      show() {
        if (this.showMobileMenu == "") {
          this.showMobileMenu = "offcanvas-menu"
        } else {
          this.showMobileMenu = ""
        }
      },
      child() {
        if (this.childMenu === "arrow-collapse collapsed"){
          this.childMenu = "arrow-collapse active";
          this.ul = "collapse show";
        } else {
          this.childMenu = "arrow-collapse collapsed";
          this.ul = "collapse";
        }
      },
      showSearchOrNot() {
        if (this.showSearch === "search-wrap active") {
          this.showSearch = "search-wrap"
        } else {
          this.showSearch = "search-wrap active"
        }
      },
      search() {
        //如果在本页面搜索参数不为空即说明已在搜索结果页，再次输入搜索不会生效，所以改路由参数并刷新页面
        if (this.$route.query.key !== undefined) {
          this.$router.push({
              query:merge(this.$route.query,{key:this.key})
          })
          this.$router.go(0);
        } else {
          this.$router.push({
          path: "/search", 
          query: {key: this.key}
          });
        }
      }
    }
};

</script>