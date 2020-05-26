<template>
    <div class="site-section">
      <div class="container">

        <div class="row mb-5">
          <div class="col-md-9 order-1">

            <div class="row align">
              <div class="col-md-12 mb-5">
                <div class="float-md-left">
                    <h2 class="text-black h5">
                        <span v-if="key===undefined">{{categoryName}}</span>
                        <span v-if="key!==undefined">搜索结果</span>
                    </h2>
                </div>
                <div class="d-flex">
                  <div class="dropdown mr-1 ml-md-auto">
                    <el-select v-model="displayOrder" @change="reorder" placeholder="请选择" style="width:135px">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" class="row mb-5">

              <div v-for="(item, idx) in productList" :key="idx" class="col-lg-6 col-md-6 item-entry mb-4">
                <router-link v-bind:to="productLink + item.id" class="product-item md-height bg-gray d-block">
                  <img v-lazy="loadingImage + item.picture" :key="loadingImage + item.picture" alt="Image" class="img-fluid">
                </router-link>
                <h2 class="item-title">
                  <router-link v-bind:to="productLink + item.id">{{item.productName}}</router-link>
                </h2>
                <strong class="item-price">￥{{item.productPrice}}</strong>
              </div>
              
            </div>
            <div class="row mb-5">
              <div class="col-md-12 text-center">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :page-count="totalPage"
                  @current-change="pageChange">
                </el-pagination>
              </div>
            </div>
          </div>

          <div class="col-md-3 order-2 mb-5 mb-md-0">
            <div class="border p-4 rounded mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">分类</h3>
              <ul class="list-unstyled mb-0">
                <li v-for="(item, idx) in categoryList" :key="idx" class="mb-1">
                  <router-link v-bind:to="categoryLink+item.id" @click.native="goto" class="d-flex">
                    <span>{{item.categoryName}}</span> 
                    <span class="text-black ml-auto">({{item.count}})</span>
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="border p-4 rounded mb-4">
              <div class="mb-4">
                <h3 class="mb-3 h6 text-uppercase text-black d-block">选择价格区间</h3>
                <div style="padding-left:5px">
                  <el-slider
                    v-model="price"
                    range
                    show-stops
                    :step="10"
                    :max="2000">
                  </el-slider>
                </div>
              </div>

              <div style="text-align:center">
                <el-button @click="search()">确定</el-button>
              </div> 

            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
import { getProductByCategory, getCategoryList, searchProduct } from "@/api/api";

export default {
    name: "ProductList",
    data() {
      return {
        id: "",
        productList: [],
        page: 1,
        pageSize: 10,
        totalRecord: 1,
        totalPage: 1,
        categoryList: [],
        categoryName: "",
        categoryLink: "/category?id=",
        productLink: "/product_details?id=",
        loadingImage: "http://baabaashop.straysheep.monster/images/",
        options: [{
          value: '1',
          label: '最新发布'
        }, {
          value: '2',
          label: '价格从高到低'
        }, {
          value: '3',
          label: '价格从低到高'
        }],
        displayOrder: '1', //显示顺序
        price: [0, 2000], //价格区间
        key: ""
      }
    },
    created() {
      this.id = this.$route.query.id;
      this.key = this.$route.query.key;
      this.getCategory();
      if (this.key !== undefined) {
          this.searchByKey(this.page);
          return;
      }
      this.getProductList(this.page);
    },
    methods: {
      //获得商品列表
      getProductList(page) {
        getProductByCategory({
          id: this.id,
          page: page,
          pageSize: this.pageSize,
          displayOrder: this.displayOrder,
          minPrice: this.price[0],
          maxPrice: this.price[1]
        }).then(response=>{
          this.productList = response.data.data.list;
          this.categoryName = response.data.data.list[0].categoryName;
          this.totalPage = response.data.data.totalPage;
          window.scrollTo(0,0);
        })
      },
      //获得分类列表
      getCategory() {
        getCategoryList().then(response=>{
        this.categoryList=response.data.data;
        });
      },
      //分页
      pageChange(page) {
        if (this.key !== undefined) {
            this.searchByKey(page);
            return;
        }
        this.getProductList(page);
      },
      goto() {
        this.$router.go(0);
      },
      reorder() {
        if (this.key !== undefined) {
            this.searchByKey(this.page);
            return;
        }
        this.getProductList(this.page);
      },
      search() {
        if (this.key !== undefined) {
            this.searchByKey(this.page);
            return;
        }
        this.getProductList(this.page);
      },
      searchByKey(page) {
        searchProduct({
            key: this.key,
            page: page,
            pageSize: this.pageSize,
            displayOrder: this.displayOrder,
            minPrice: this.price[0],
            maxPrice: this.price[1]
        }).then(response=>{
            console.log(response.data);
            this.productList = response.data.data.list;
            this.totalPage = response.data.data.totalPage;
            window.scrollTo(0,0);
        })
      }
    }
}
</script>