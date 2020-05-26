<template>
    <body>
        <div class="login_wrap">
        <div class="login_box">
            <div class="login-logo">
            <div class="login-site-logo">
                <router-link to="/home">BaaBaa Shop</router-link>
            </div>
        </div>
        <div class="p-3 p-lg-4">
            <div class="form-group row">
                <div class="input col-md-12">
                    <input type="text" v-model="user.username" class="form-control" placeholder="用户名">
                </div>
                <div class="input col-md-12">
                    <input type="password" v-model="user.password" class="form-control" placeholder="密码">
                </div>
                <div class="input col-md-12">
                    <input type="text" v-model="user.email" class="form-control" placeholder="邮箱">
                </div>
                <div class="input col-md-12">
                    <input type="text" v-model="user.phone" class="form-control" placeholder="手机号码">
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-lg btn-block" @click="register()">注册</button>
            </div>
        </div>
        </div>
    </div>
    </body>
</template>

<script>
import { register } from "@/api/api";

export default {
    name: "Register",
    data() {
        return {
            user: {}
        }
    },
    methods: {
        register() {
            register(this.user).then(response=>{
                this.$confirm(response.data.message, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'info'
                }).then(() => {
                    if (response.data.code === 100) {
                        this.$router.push({path: '/login'});
                    }
                })
            })
        }
    }
}
</script>

<style>
.login-site-logo a {
  text-transform: uppercase;
  letter-spacing: .2em;
  font-size: 25px;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid #25262a;
  color: #000 !important; 
}
.login-logo {
  border-left: none;
  position: relative;
  padding-bottom: 10px;
  padding-top: 20px;
  display: block;
  left: 50%;
  margin-left:-115px;
}
.login_wrap{
    z-index: 10;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: #ffffff;
}
.login_box{
    width: 400px;
    margin: 80px auto 0;
    height: 400px;
    background: #ffffff;
}
.input{
    padding-bottom: 30px;
}
</style>