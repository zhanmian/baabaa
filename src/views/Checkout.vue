<template>
    <body>
  
  <div class="site-wrap">
    
    <Header></Header>
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><router-link to="/home">首页</router-link> <span class="mx-2 mb-0">/</span> <router-link to="/cart">购物车</router-link> <span class="mx-2 mb-0">/</span> <strong class="text-black">结算</strong></div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <!-- <div class="row mb-5">
          <div class="col-md-12">
            <div class="border p-4 rounded" role="alert">
              已经是我们的回头顾客了吗？ <router-link to="/login">点击这里</router-link> 登录
            </div>
          </div>
        </div> -->
        <div class="row">
          <div class="col-md-6 mb-5 mb-md-0">
            <h2 class="h3 mb-3 text-black">收货地址</h2>
            <div class="p-3 p-lg-5 border">
              <div class="form-group">
                <el-radio-group v-model="address">
                  <el-radio v-for="(item, idx) in addressList" :key="idx" :label="item" >
                    {{item.receiverName}} / {{item.receiverPhone}} / {{item.province}}{{item.city}}{{item.town}}{{item.detailAddress}}
                  </el-radio>
                </el-radio-group>
              </div>

              <div style="text-align:center" class="p-1 mb-3">
                <el-button @click="show()">添加新的地址</el-button>
              </div>
              <!-- <div class="border p-3 mb-5">
                  <h3 class="h6 mb-0">
                    <a @click="show()" class="d-block" disabled = 'true' style="text-align:center" href="#" role="button">
                      添加新的地址
                    </a>
                  </h3>
              </div> -->

              <transition name="el-zoom-in-top">
              <div  v-show="showAddressInput">
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="c_fname" size="large" class="text-black">姓名 <span class="text-danger">*</span></label>
                    <el-input v-model="receiverName" placeholder=""></el-input>
                    <!-- <input v-model="receiverName" type="text" class="form-control" id="c_fname" name="c_fname"> -->
                  </div>
                  <div class="col-md-6">
                    <label for="c_lname" class="text-black">手机 <span class="text-danger">*</span></label>
                    <el-input v-model="receiverPhone" placeholder=""></el-input>
                    <!-- <input v-model="receiverPhone" type="text" class="form-control" id="c_lname" name="c_lname"> -->
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="c_postal_zip" class="text-black">邮编 <span class="text-danger">*</span></label>
                    <el-input v-model="postcode" placeholder=""></el-input>
                    <!-- <input v-model="postcode" type="text" class="form-control" id="c_postal_zip" name="c_postal_zip"> -->
                  </div>

                  <div class="col-md-6">
                    <label for="c_country" class="text-black">省市 <span class="text-danger">*</span></label>
                    <div id="c_country" name="c_country">
                      <el-cascader
                        size="large"
                        :options="options"
                        v-model="selectedOptions">
                      </el-cascader>
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_address" class="text-black">地址 <span class="text-danger">*</span></label>
                    <el-input v-model="detailAddress" placeholder=""></el-input>
                    <!-- <input v-model="detailAddress" type="text" class="form-control" id="c_address" name="c_address"> -->
                  </div>
                </div>

                <div style="text-align:center" class="p-1 mb-3">
                  <el-button @click="add()">添加</el-button>
                </div>
              </div>
              </transition>

              <div class="form-group">
                  <label for="c_order_notes" class="text-black">订单留言</label>
                  <textarea v-model="buyerMessage" name="c_order_notes" id="c_order_notes" cols="30" rows="5" class="form-control" placeholder=""></textarea>
                </div>
            </div>
            
          </div>
          <div class="col-md-6">
            <div class="row mb-5">
              <div class="col-md-12">
                <h2 class="h3 mb-3 text-black">您的订单</h2>
                <div class="p-3 p-lg-5 border">
                  <table class="table site-block-order-table mb-5">
                    <thead>
                      <th>商品</th>
                      <th>小计</th>
                    </thead>
                    <tbody>
                      <tr v-for="(item, idx) in cartItems" :key="idx">
                        <td>{{item.productName}} （{{item.spec1}} / {{item.spec2}}） 
                          <strong class="mx-2">x</strong> {{item.quantity}}</td>
                        <td>￥{{item.itemTotalPrice}}</td>
                      </tr>
                      <!-- <tr>
                        <td class="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                        <td class="text-black">$350.00</td>
                      </tr> -->
                      <tr>
                        <td class="text-black font-weight-bold"><strong>订单金额</strong></td>
                        <td class="text-black font-weight-bold"><strong>￥{{subTotalAmount}}</strong></td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="p-3 mb-2">
                    <label for="c_order_notes" class="text-black font-weight-bold"><strong>付款方式：</strong></label>
                    <div>
                      <el-radio v-model="payType" :label="1">支付宝</el-radio>
                      <el-radio disabled v-model="payType" label="禁用">微信支付（即将支持）</el-radio>
                      <el-radio disabled v-model="payType" label="禁用">银联（即将支持）</el-radio>
                    </div>
                  </div>

                  <div class="form-group">
                    <button class="btn btn-primary btn-lg btn-block" @click="payBill()">前往付款页面</button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
        <!-- </form> -->
      </div>
    </div>
    <Footer></Footer>
  </div>
  </body>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { regionDataPlus, CodeToText } from 'element-china-area-data';
import { getCartItemsDetails, getAddress, pay, addAddress } from "@/api/api";

export default {
    name: "Checkout",
    components: {
        Header,
        Footer
    },
    data() {
        return {
          userId: "",
          address: "",
          postcode: "",
          receiverName: "",
          receiverPhone: "",
          detailAddress: "",
          payType: 1,
          showAddressInput: false,
          cartItems: [],
          subTotalAmount: "",
          addressList: [],
          order: {},
          buyerMessage: "",
          options: regionDataPlus,
          selectedOptions: []
        }
    },
    created() {
      this.getCart();
      this.getAddressList();
      this.showAddressInput = false;
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
      show() {
        if (this.showAddressInput) {
          this.showAddressInput = false;
        } else {
          this.showAddressInput = true;
        }
      },
      //将local storage里的购物车列表传给接口，获取商品详情列表
      getCart() {
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));
        getCartItemsDetails(cartItems).then(response=>{
            this.cartItems = response.data.data.cartItems;
            this.subTotalAmount = response.data.data.subTotalAmount;
        })
      },
      getAddressList() {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo === null) {
          this.$confirm('还没有登录账户, 请登录', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$router.push({path: '/login'});
          })
        } else {
          this.userId = userInfo.userId;
          getAddress(userInfo.userId).then(response=>{
            this.addressList = response.data.data
          })
        }
      },
      add() {
        let province = CodeToText[this.selectedOptions[0]];
        let city = CodeToText[this.selectedOptions[1]];
        let town = CodeToText[this.selectedOptions[2]];
        addAddress({
          province: province,
          city: city,
          town: town,
          detailAddress: this.detailAddress,
          postcode: this.postcode,
          userId: this.userId,
          receiverName: this.receiverName,
          receiverPhone: this.receiverPhone
        }).then(response=>{
          if (response.data.code === 100) {
            this.message("收货地址添加成功", "success");
            this.getAddressList();
            this.receiverName = "";
            this.receiverPhone = "";
            this.detailAddress = "";
            this.postcode = "";
            this.selectedOptions = []
          }
        })
      },
      payBill() {
        if (this.address === "") {
          this.message("请选择收货地址", "error");
          return;
        }
        if (this.payType === "") {
          this.message("请选择付款方式", "error");
          return;
        }
        this.order = {
          userId: this.userId,
          payType: this.payType,
          address: this.address,
          cartItems: this.cartItems,
          totalAmount: this.subTotalAmount,
          buyerMessage: this.buyerMessage
        }
        pay(this.order).then(response=>{
          if (response.data.code === 300) {
            return;
          }
          this.$router.push({
            path: "/alipay",
            query: {alipay: response.data.data}
          })
        })
      }
    }
}
</script>