<template>
    <body>
        <Header></Header>

        <div class="site-wrap">
        
        <div class="bg-light py-3">
        <div class="container justify-content-between">
            <div class="row">
                <div class="col-md-6 mb-0">
                    <router-link to="/home">首页</router-link> 
                    <span class="mx-2 mb-0">/</span> 
                    <strong class="text-black">个人中心</strong>
                </div>
                <div class="col-md-6 mb-0" style="text-align:right">
                    <router-link @click.native="logout" to="#">退出登录</router-link>
                </div>
            </div>
        </div>
        </div>

        <div class="site-section">
        <div class="container">
            <div class="row mb-4">
                <div class="col-md-4 m-auto">
                    <div class="border p-2 rounded" style="text-align:center">
                        点击订单可以查看更多订单详情
                    </div>
                </div>
            </div>

            <div class="row mb-5">
            <div class="col-md-12 mb-4">
                <el-table
                    :data="tableData"
                    @row-click="getOrderDetail"
                    style="width: 100%">
                    <el-table-column
                        prop="createTime"
                        label="创建时间"
                        width="150"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="orderCode"
                        label="订单编号"
                        width="150"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="状态"
                        width="100"
                        align="center">
                        <template slot-scope="scope">
                            <span v-if="scope.row.status==0">待付款</span>
                            <span v-if="scope.row.status==1">待发货</span>
                            <span v-if="scope.row.status==2">已发货</span>
                            <span v-if="scope.row.status==3">已完成</span>
                            <span v-if="scope.row.status==4">已关闭</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="totalAmount"
                        label="金额"
                        width="80"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="receiverName"
                        label="收件人"
                        width="100"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="receiverPhone"
                        label="手机号码"
                        width="100"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        label="地址"
                        align="center">
                        <template slot-scope="scope">
                            {{scope.row.province}}{{scope.row.city}}{{scope.row.town}}{{scope.row.detailAddress}}
                        </template>
                    </el-table-column>
                    </el-table>
            </div>
            <div class="col-md-12 order-1 ">
            <div class="row">
              <div class="col-md-12 text-center">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :page-count="orderListTotalPage"
                  @current-change="pageChange">
                </el-pagination>
              </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <el-dialog title="订单详情" :visible.sync="dialogVisible" width="50%">
        <div style="padding-bottom:10px">
            <span>商品列表：</span>
        </div>
        <el-table
            :data="row.orderItemList"
            style="width: 100%">
            <el-table-column
                prop="productPicture"
                label="商品图片"
                width="100"
                align="center">
                <template slot-scope="scope">
                    <img v-bind:src="loadingImage + scope.row.productPicture" alt="Image" class="img-fluid">
                </template>
            </el-table-column>
            <el-table-column
                prop="skuCode"
                label="商品编码"
                width="100"
                align="center">
            </el-table-column>
            <el-table-column
                prop="productName"
                label="商品名称"
                align="center">
                <template slot-scope="scope">
                    {{scope.row.productName}} / {{scope.row.spec1}} / {{scope.row.spec2}}
                </template>
            </el-table-column>
            <el-table-column
                prop="skuPrice"
                label="价格"
                width="80"
                align="center">
            </el-table-column>
            <el-table-column
                prop="quantity"
                label="数量"
                width="80"
                align="center">
            </el-table-column>
        </el-table>
        <div class="row">
            <div class="col-md-12">
                <ul class="list-unstyled" style="padding-top:20px;line-height:40px">
                    <li>
                        <span>订单留言：
                            <span v-if="row.buyerMessage===''">无</span>
                            {{row.buyerMessage}}
                            </span>
                    </li>
                    <li><span>付款方式：<span v-if="row.payType==1">支付宝</span></span></li>
                    <li><span>付款时间：{{row.paymentTime}}</span></li>
                    
                </ul>
            </div>
        </div>
        
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
    <Footer></Footer>
    </body>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getOrderListByUser } from "@/api/api";

export default {
    name: "User",
    components: {
        Header,
        Footer
    },
    data() {
        return {
            orderId: "",
            userId: "",
            page: 1,
            pageSie: 10,
            orderListTotalPage: 1,
            tableData: [],
            row: {},
            dialogVisible: false,
            loadingImage: "http://baabaashop.straysheep.monster/images/"
        }
    },
    created() {
        this.getUserInfo();
        this.getOrderList(this.page);
    },
    methods: {
        getUserInfo() {
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
            }
        },
        getOrderList(page) {
            getOrderListByUser({
                userId: this.userId,
                page: page,
                pageSize: this.pageSie
            }).then(response=>{
                this.tableData = response.data.data.list;
                this.orderListTotalPage = response.data.data.totalPage;
                window.scrollTo(0,0);
            })
        },
        getOrderDetail(row) {
            this.dialogVisible = true;
            this.row = row;
        },
        pageChange(page) {
            this.getOrderList(page);
        },
        logout() {
            this.$confirm('确定退出登录吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    localStorage.removeItem("userInfo");
                    localStorage.removeItem("token");
                    this.$router.push({path: '/home'});
                })
        }
    }
}
</script>