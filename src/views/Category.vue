<template>
<body>
  <div class="site-wrap">
    <Header></Header>
    <div class="custom-border-bottom py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><router-link to="/home">首页</router-link> <span class="mx-2 mb-0">/</span> <strong class="text-black">分类</strong></div>
        </div>
      </div>
    </div>
    <ProductList></ProductList>
    <Footer></Footer>
  </div>
</body>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";

// import { getProductByCategory, getCategoryList } from "@/api/api";

export default {
    name: "Category",
    components: {
        Header,
        Footer,
        ProductList
    }
    // data() {
    //   return {
    //     id: "",
    //     productList: [],
    //     page: 1,
    //     pageSize: 10,
    //     totalRecord: 1,
    //     totalPage: 1,
    //     categoryList: [],
    //     categoryName: "",
    //     categoryLink: "/category?id=",
    //     productLink: "/product_details?id=",
    //     downloadImage: "http://localhost:8088/downloadImage?filePath=",
    //     options: [{
    //       value: '1',
    //       label: '最新发布'
    //     }, {
    //       value: '2',
    //       label: '价格从高到低'
    //     }, {
    //       value: '3',
    //       label: '价格从低到高'
    //     }],
    //     displayOrder: '1', //显示顺序
    //     price: [0, 2000], //价格区间
    //     key: ""
    //   }
    // },
    // created() {
    //   this.id = this.$route.query.id;
    //   this.key = this.$route.query.key;
    //   this.getProductList(this.page);
    //   this.getCategory();
    // },
    // methods: {
    //   //获得商品列表
    //   getProductList(page) {
    //     getProductByCategory({
    //       id: this.id,
    //       page: page,
    //       pageSize: this.pageSize,
    //       displayOrder: this.displayOrder,
    //       minPrice: this.price[0],
    //       maxPrice: this.price[1]
    //     }).then(response=>{
    //       this.productList = response.data.data.list;
    //       this.categoryName = response.data.data.list[0].categoryName;
    //       this.totalPage = response.data.data.totalPage;
    //       window.scrollTo(0,0);
    //     })
    //   },
    //   //获得分类列表
    //   getCategory() {
    //     getCategoryList().then(response=>{
    //     this.categoryList=response.data.data;
    //     });
    //   },
    //   //分页
    //   pageChange(page) {
    //     this.getProductList(page);
    //   },
    //   goto() {
    //     this.$router.go(0);
    //   },
    //   reorder() {
    //     this.getProductList(this.page);
    //   },
    //   search() {
    //     this.getProductList(this.page);
    //   }
    // }
}
</script>