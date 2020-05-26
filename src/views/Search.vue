<template>
<body>
  <div class="site-wrap">
    <Header></Header>
    <div class="custom-border-bottom py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><router-link to="/home">首页</router-link> <span class="mx-2 mb-0">/</span> <strong class="text-black">搜索结果</strong></div>
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

export default {
    name: "Search",
    components: {
        Header,
        Footer,
        ProductList
    }
}
</script>