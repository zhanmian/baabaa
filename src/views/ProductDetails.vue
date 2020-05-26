<template>
    <body>
  
  <div class="site-wrap">
    
    <Header></Header>

    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0">
            <router-link to="/home">首页</router-link> <span class="mx-2 mb-0">/</span> 
            <a href="shop.html">Shop</a> <span class="mx-2 mb-0">/</span> 
            <strong class="text-black">{{product.productName}}</strong></div>
        </div>
      </div>
    </div>  

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="item-entry">
              <a href="#" class="product-item md-height bg-gray d-block">
                <img v-bind:src="loadingImage + product.picture" alt="Image" class="img-fluid">
              </a>
            </div>

          </div>
          <div class="col-md-6">
            <h2 class="text-black">{{product.productName}}</h2>
            <p v-html="product.description"></p>
            <p><strong class="text-primary h4">￥{{product.productPrice}}</strong></p>

            <div class="mb-1 d-flex" 
                 v-for="(item, index) in productAttribute" 
                 :key="index">
              <!-- 属性名称 -->
              <label><strong>{{item.attributeName}}：</strong></label>
              <!-- 遍历属性的值，label和input由for和id对应 -->
              <label class="d-flex mr-3 mb-3" 
                     v-bind:for="option + item.id + idx" 
                     v-for="(attr, idx) in item.attributeValues" 
                     :key="idx">
                <span class="d-inline-block mr-2" style="top:1px; position: relative;">
                  <input type="radio" 
                         v-bind:id="option + item.id + idx" 
                         v-bind:name="radio + index"
                         v-bind:value="attr"
                         v-on:click=add(index,attr,item.attributeName)
                         @click="getSkuDetails()">
                </span> 
                <span class="d-inline-block text-black">{{attr}}</span>
              </label>
            </div>

            <div class="mb-5">
              <div class="input-group mb-3" style="max-width: 120px;">
              <div class="input-group-prepend">
                <button @click="decreaseQuantity()" class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
              </div>
              <input v-model="quantity" type="text" class="form-control text-center" 
                     value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
              <div class="input-group-append">
                <button @click="increaseQuantity()" class="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
              </div>
            </div>

            </div>
            <p><a href="#" 
                  class="buy-now btn btn-sm height-auto px-4 py-3 btn-primary"
                  @click="addCart()">
                  {{cartMessage}}
                </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="site-section block-3 site-blocks-2">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>Featured Products</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 block-3">
            <div class="nonloop-block-3 owl-carousel">
              <div class="item">
                <div class="item-entry">
                  <a href="#" class="product-item md-height bg-gray d-block">
                    <img src="images/model_1.png" alt="Image" class="img-fluid">
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
                    <img src="images/prod_3.png" alt="Image" class="img-fluid">
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
                    <img src="images/model_5.png" alt="Image" class="img-fluid">
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
                    <img src="images/prod_1.png" alt="Image" class="img-fluid">
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
                    <img src="images/model_7.png" alt="Image" class="img-fluid">
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

            </div>
          </div>
        </div>
      </div>
    </div> -->

    <Footer></Footer>

  </div>
  </body>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductDetails, getSkuDetails } from "@/api/api";

export default {
    name: 'ProductDetails',
    components: {
        Header,
        Footer
    },
    data() {
      return {
        id: null,
        product: {},
        productAttribute: [],
        loadingImage: "http://baabaashop.straysheep.monster/images/",
        radio: "radio",
        option: "option",
        spec: [],
        attribute: [],
        skuId: null,
        cartMessage: "添加进购物车",
        quantity: 1
      }
    },
    created() {
      this.id = this.$route.query.id;
      getProductDetails(this.id).then(response=>{
        this.product=response.data.data.product;
        this.productAttribute=response.data.data.attributeList;
      });
    },
    methods: {
      //element-ui的Message消息提示
      message(message, type) {
          this.$message({
              showClose: true,
              message: message,
              type: type
          });
      },
      add(index, attr, attributeName) {
        this.spec[index]=attr
        this.attribute[index]={
          key:attributeName, value: attr
        }
      },
      //点击商品属性后返回该SKU的详情
      getSkuDetails() {
        if (this.spec.length < 2) {
          return;
        }
        let param = {
          productId: this.id,
          spec1: this.spec[0],
          spec2: this.spec[1],
          spec3: this.spec[2]
        }
        getSkuDetails(param).then(response=>{
          this.product.productPrice = response.data.data.skuPrice;
          this.product.skuStock = response.data.data.skuStock;
          this.skuId=response.data.data.id;
          if (response.data.data.skuStock <= 0) {
            this.cartMessage = "暂无库存";
          } else {
            this.cartMessage = "添加进购物车";
          }
        })
      },
      //商品数量加1
      increaseQuantity() {
        this.quantity++;
      },
      //商品数量减1
      decreaseQuantity() {
        if (this.quantity == 1) {
          return;
        }
        this.quantity--;
      },
      //添加进购物车
      addCart() {
        //只选择了一个规格属性
        if (this.attribute.length < 2) {
          this.message("还没有选择规格属性", "error");
          return;
        }
        if (this.product.skuStock <= 0) {
          this.message("添加失败，没有库存了", "error");
          return;
        }
        let cartItem = {
          productId: this.product.id,
          skuId: this.skuId,
          quantity: this.quantity,
          productAttribute: JSON.stringify(this.attribute)
        }
        //从local Storage获取购物车信息
        let cartItems = localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
        //定义一个参数，用在循环中计算是否有这个商品
        let k = 0;
        for (let i = 0; i < cartItems.length; i++) {
          let item = cartItems[i];
          if (item.skuId === cartItem.skuId) {
            item.quantity += cartItem.quantity;
          } else {
            k = k + 1;
          }
        }
        //如果不存在该商品，则新增该商品
        if (k === cartItems.length) {
          cartItems.push(cartItem);
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        this.message("成功添加进购物车", "success");
        // addCart(param).then(response=>{
        //   console.log(response)
        // })
      }
    }
}
</script>