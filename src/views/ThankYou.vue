<template>
  <body>
  
  <div class="site-wrap">
    <Header></Header>
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Thank You</strong></div>
        </div>
      </div>
    </div>  

    <div class="thanks-site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <span class="icon-check_circle display-3 text-success"></span>
            <h2 class="display-3 text-black">谢谢惠顾</h2>
            <p class="lead mb-3">您的订单已经支付成功</p>
            <p class="mb-1">支付金额：{{orderInfo.totalAmount}}元</p>
            <p class="mb-1">订单编号：{{orderInfo.orderCode}}</p>
            <p class="mb-3">支付流水号：{{orderInfo.alipayTradeNo}}</p>
            <p><router-link to="/home" class="btn btn-sm height-auto px-4 py-3 btn-primary">继续购物</router-link></p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  </body>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { updateOrder } from "@/api/api";

export default {
    name: "ThankYou",
    components: {
        Header,
        Footer
    },
    data() {
        return {
            orderInfo: {}
        }
    },
    created() {
        let orderCode = this.$route.query.out_trade_no;
        let alipayTradeNo = this.$route.query.trade_no;
        let totalAmount = this.$route.query.total_amount;
        //显示订单结账信息
        this.orderInfo = {
            orderCode: orderCode,
            alipayTradeNo: alipayTradeNo,
            totalAmount: totalAmount
        }
        //修改订单信息
        updateOrder({
          orderCode: orderCode,
          payCode: alipayTradeNo
        }).then(response=>{
          console.log(response.data);
        })
        //清除购物车
        localStorage.removeItem("cartItems");
    }
}
</script>
<style>
.thanks-site-section {
  padding: 1.5em 0; }
</style>