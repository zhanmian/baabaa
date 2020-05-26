<template>
  <body>
    <div class="site-wrap">
      
      <Header></Header>

      <div class="site-blocks-cover" data-aos="fade">
      <div class="container">
        <div data-aos="fade-down" class="row">
          <div class="col-md-6 ml-auto order-md-2 align-self-start">
            <div class="site-block-cover-content">
            <h2 class="sub-title">#New Summer Collection 2020</h2>
            <h1>—夏 日 上 新—</h1>
            <p><a href="#" class="btn btn-black rounded-0">即将开启</a></p>
            </div>
          </div>
          <div class="col-md-6 order-1 align-self-end">
            <img v-lazy="loadingImage + 'model_3.png'" alt="Image" class="img-fluid">
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="title-section mb-5">
          <h2 class="text-uppercase"><span class="d-block">Discover</span> The Collections / 发现更多</h2>
        </div>
        <div class="row align-items-stretch">
          <div data-aos="fade-up" data-aos-delay="80" class="col-lg-8">
            <div class="product-item sm-height full-height bg-gray">
              <router-link to="/category?id=3" class="product-category">女装 <span>25 items</span></router-link>
              <img v-lazy="loadingImage + 'model_4.png'" alt="Image" class="img-fluid">
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="180" class="col-lg-4">
            <div class="product-item sm-height bg-gray mb-4">
              <router-link to="/category?id=2" class="product-category">男装 <span>25 items</span></router-link>
              <img v-lazy="loadingImage + 'model_5.png'" alt="Image" class="img-fluid">
            </div>

            <div data-aos="fade-up" data-aos-delay="280" class="product-item sm-height bg-gray">
              <router-link to="/category?id=30" class="product-category">女鞋 <span>25 items</span></router-link>
              <img v-lazy="loadingImage + 'model_6.png'" alt="Image" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="title-section mb-5 col-12">
            <h2 class="text-uppercase">Popular Products / 受欢迎的单品</h2>
          </div>
        </div>
        <div data-aos="fade" class="row">

          <div class="col-lg-4 col-md-6 item-entry mb-4"
               v-for="(item, idx) in recommendProducts" 
               :key="idx" >
            <a href="#" @click="getDetails(item.id)" class="product-item md-height bg-gray d-block">
              <img v-lazy="loadingImage + item.picture" :key="loadingImage + item.picture" 
                   alt="Image" 
                   class="img-fluid">
            </a>
            <h2 class="item-title">
              <a href="#" @click="getDetails(item.id)">{{item.productName}}</a>
            </h2>
            <strong class="item-price">￥{{item.productPrice}}</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="title-section text-center mb-5 col-12">
            <h2 class="text-uppercase">Most Rated / 高评价的单品</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 block-3">
            <carousel :center="false"
                      :items=1
                      :loop="true"
                      :stagePadding=15
                      :margin=20
                      :nav="false"
                      :dots="true"
                      :autoplay="true"
                      :mouseDrag="true"
                      :touchDrag="true"
                      :responsive="{
                        600:{
                          margin: 20, 
                          items: 2
                        },
                        1000:{
                          margin: 20,
                          items: 3
                        },
                        1200:{
                          margin: 20,
                          items: 3
                        }}">
              <div class="item">
                <div class="item-entry">
                  <a href="#" class="product-item md-height bg-gray d-block">
                    <img v-lazy="loadingImage + 'model_1.png'"
                         :key="loadingImage + 'model_1.png'"
                         alt="Image" class="img-fluid">
                  </a>
                  <h2 class="item-title"><a href="#">Smooth Cloth</a></h2>
                  <strong class="item-price"><del>$46.00</del> $28.00</strong>
                  <div class="star-rating">
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-entry">
                  <a href="#" class="product-item md-height bg-gray d-block">
                    <img v-lazy="loadingImage + 'prod_3.png'" :key="loadingImage + 'prod_3.png'" alt="Image" class="img-fluid">
                  </a>
                  <h2 class="item-title"><a href="#">Blue Shoe High Heels</a></h2>
                  <strong class="item-price"><del>$46.00</del> $28.00</strong>

                  <div class="star-rating">
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-entry">
                  <a href="#" class="product-item md-height bg-gray d-block">
                    <img v-lazy="loadingImage + 'model_5.png'" :key="loadingImage + 'model_5.png'" alt="Image" class="img-fluid">
                  </a>
                  <h2 class="item-title"><a href="#">Denim Jacket</a></h2>
                  <strong class="item-price"><del>$46.00</del> $28.00</strong>

                  <div class="star-rating">
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                  </div>

                </div>
              </div>
              <div class="item">
                <div class="item-entry">
                  <a href="#" class="product-item md-height bg-gray d-block">
                    <img v-lazy="loadingImage + 'prod_1.png'" :key="loadingImage + 'prod_1.png'" alt="Image" class="img-fluid">
                  </a>
                  <h2 class="item-title"><a href="#">Leather Green Bag</a></h2>
                  <strong class="item-price"><del>$46.00</del> $28.00</strong>
                  <div class="star-rating">
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-entry">
                  <a href="#" class="product-item md-height bg-gray d-block">
                    <img v-lazy="loadingImage + 'model_7.png'" :key="loadingImage + 'model_7.png'" alt="Image" class="img-fluid">
                  </a>
                  <h2 class="item-title"><a href="#">Yellow Jacket</a></h2>
                  <strong class="item-price">$58.00</strong>
                  <div class="star-rating">
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                  </div>
                </div>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </div>


    <div class="site-blocks-cover inner-page py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto order-md-2 align-self-start">
            <div class="site-block-cover-content">
            <h2 class="sub-title">#New Shoes For You 2020</h2>
            <h1>—新 鞋 登 场—</h1>
            <p><router-link to="/category?id=30" class="btn btn-black rounded-0">即刻欣赏</router-link></p>
            </div>
          </div>
          <div class="col-md-6 order-1 align-self-end">
            <img v-lazy="loadingImage + 'model_6.png'" alt="Image" class="img-fluid">
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
    
    </div>
  </body>
</template>

<script>
import carousel from 'vue-owl-carousel'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getRecommendProducts } from "@/api/api";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    carousel
  },
  data() {
    return{
      recommendProducts: [],
      loadingImage: "http://baabaashop.straysheep.monster/images/"
    }
  },
  created() {
    this.getRecommendProducts();
  },
  methods: {
    getRecommendProducts(){
      getRecommendProducts().then(response=>{
        this.recommendProducts=response.data.data
      })
    },
    getDetails(id){
      this.$router.push({
        path: '/product_details', 
        query: {id}
      })
    }
  }
}
</script>
