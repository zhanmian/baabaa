<template>
    <body>

    <Header></Header>
  
    <div class="site-wrap">
        
        <div class="bg-light py-3">
        <div class="container">
            <div class="row">
            <div class="col-md-12 mb-0"><router-link to="/home">首页</router-link> <span class="mx-2 mb-0">/</span> <strong class="text-black">购物车</strong></div>
            </div>
        </div>
        </div>

        <div class="site-section">
        <div class="container">
            <div v-if="userInfo==null" class="row mb-5">
                <div class="col-md-12">
                    <div class="border p-4 rounded" role="alert">
                    已经是我们的会员了吗？ <router-link to="/login">登录</router-link> / <router-link to="/register">注册</router-link>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
            <form class="col-md-12" method="post">
                <div class="site-blocks-table">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th class="product-thumbnail">商品图片</th>
                        <th class="product-name">商品名称</th>
                        <th class="product-price">价格</th>
                        <th class="product-quantity">数量</th>
                        <th class="product-total">金额</th>
                        <th class="product-remove">删除</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, idx) in cartItems" :key="idx">
                        <td class="product-thumbnail">
                        <img v-bind:src="loadingImage + item.picture" alt="Image" class="img-fluid">
                        </td>
                        <td class="product-name">
                        <h2 class="h5 text-black">
                            {{item.productName}}
                            （{{item.spec1}} / {{item.spec2}}）
                        </h2>
                        </td>
                        <td>￥{{item.skuPrice}}</td>
                        <td>
                        <div class="input-group mb-3" style="max-width: 120px;">
                            <div class="input-group-prepend">
                            <button @click="decreaseQuantity(idx,item.skuPrice,item.quantity)" class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                            </div>
                            <input type="text" class="form-control text-center" v-bind:value="item.quantity" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                            <div class="input-group-append">
                            <button @click="increaseQuantity(idx,item.skuPrice,item.quantity,item.skuStock)" class="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
                            </div>
                        </div>
                        </td>
                        <td>￥{{item.itemTotalPrice}}</td>
                        <td><a href="#" @click="handleDelete(item.skuId,item.itemTotalPrice)" class="btn btn-primary height-auto btn-sm">X</a></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </form>
            </div>

            <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
                <span>确定删除这件商品吗？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="deleteItem()">确 定</el-button>
                </span>
            </el-dialog>

            <div class="row">
            <div class="col-md-6">
                <div class="row mb-5">
                <div class="col-md-6 mb-3 mb-md-0">
                    <button @click="updateCart()" class="btn btn-outline-primary btn-sm btn-block">更新购物车</button>
                </div>
                <div class="col-md-6">
                    <button @click="toHome" class="btn btn-outline-primary btn-sm btn-block">继续购物</button>
                </div>
                </div>
                <!-- <div class="row">
                <div class="col-md-12">
                    <label class="text-black h4" for="coupon">优惠券</label>
                    <p>如果您拥有优惠券码，请输入它</p>
                </div>
                <div class="col-md-8 mb-3 mb-md-0">
                    <input type="text" class="form-control py-3" id="coupon" placeholder="优惠券码">
                </div>
                <div class="col-md-4">
                    <button class="btn btn-primary btn-sm px-4">使用</button>
                </div>
                </div> -->
            </div>
            <div class="col-md-6 pl-5">
                <div class="row justify-content-end">
                <div class="col-md-7">
                    <div class="row">
                    <div class="col-md-12 text-right border-bottom mb-5">
                        <h3 class="text-black h4 text-uppercase">购物信息</h3>
                    </div>
                    </div>
                    <div class="row mb-3">
                    <div class="col-md-6">
                        <span class="text-black">小计</span>
                    </div>
                    <div class="col-md-6 text-right">
                        <strong class="text-black">￥{{subTotalAmount}}</strong>
                    </div>
                    </div>
                    <!-- <div class="row mb-5">
                    <div class="col-md-6">
                        <span class="text-black">总和</span>
                    </div>
                    <div class="col-md-6 text-right">
                        <strong class="text-black">$230.00</strong>
                    </div>
                    </div> -->

                    <div class="row">
                    <div class="col-md-12">
                        <button class="btn btn-primary btn-lg btn-block" @click="goto()">结算</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <Footer></Footer>
  </body>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCartItemsDetails } from "@/api/api";

export default {
    name: "Cart",
    components: {
        Header,
        Footer
    },
    data() {
        return {
            loadingImage: "http://baabaashop.straysheep.monster/images/",
            cartItems: [],
            subTotalAmount: "", //小计
            dialogVisible: false, //是否显示对话框
            delete: {}, //要删除的商品信息
            userInfo: null,
            isUpdate: false
        }
    },
    created() {
        this.getCart();
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    },
    methods: {
        //将local storage里的购物车列表传给接口，获取商品详情列表
        getCart() {
            let cartItems = JSON.parse(localStorage.getItem("cartItems"));
            if (cartItems === null || cartItems.length <= 0) {
                this.message("购物车为空，快去添加商品进来吧", "warning");
                return;
            }
            getCartItemsDetails(cartItems).then(response=>{
                this.cartItems = response.data.data.cartItems;
                this.subTotalAmount = response.data.data.subTotalAmount;
                if (this.isUpdate === true) {
                    this.message("购物车更新成功", "success");
                    this.isUpdate = false;
                }
            })
        },
        //商品数量加1
        increaseQuantity(index, skuPrice, quantity, stock) {
            quantity++;
            if (quantity >= stock) {
                this.message("没有更多库存了", "error");
                return;
            }
            if (quantity <= stock) {
                this.cartItems[index].quantity = quantity;
                this.cartItems[index].itemTotalPrice = skuPrice * quantity;
                localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
                this.subTotalAmount = this.subTotalAmount + skuPrice;
            }
        },
        //商品数量减1
        decreaseQuantity(index, skuPrice, quantity) {
            if (quantity > 1) {
                quantity--;
                this.cartItems[index].quantity = quantity;
                this.cartItems[index].itemTotalPrice = skuPrice * quantity;
                localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
                this.subTotalAmount = this.subTotalAmount - skuPrice;
            }
        },
        //点击删除后弹窗
        handleDelete(skuId, itemTotalPrice) {
            this.dialogVisible = true;
            this.delete = {
                skuId: skuId,
                itemTotalPrice: itemTotalPrice
            }
        },
        //删除
        deleteItem() {
            this.dialogVisible = false;
            //返回数组中skuId不等于所选skuId的所有元素，即把它删去
            this.cartItems = this.cartItems.filter(t => t.skuId != this.delete.skuId);
            localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
            this.subTotalAmount = this.subTotalAmount - this.delete.itemTotalPrice;
            this.message("删除成功", "success");
        },
        //更新购物车
        updateCart() {
            this.getCart();
            this.isUpdate = true;
        },
        //跳转到结算页
        goto() {
            let cartItems = JSON.parse(localStorage.getItem("cartItems"));
            if (cartItems === null || cartItems.length <= 0) {
                this.message("无法结算，购物车里是空的", "warning");
                return;
            }
            this.$router.push({path: '/checkout'})
        },
        //element-ui的Message消息提示
        message(message, type) {
            this.$message({
                showClose: true,
                message: message,
                type: type
            });
        },
        toHome() {
            this.$router.push({path: '/home'});
        }
    }
}
</script>