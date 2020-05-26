<template>
  <body>
  
  <div class="site-wrap">
    
    <Header></Header>
    
    <!-- <div class="site-blocks-cover inner-page" style="background-image: url('../static/images/hero_2.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center" data-aos="fade-down">
      <div class="container">
        <div class="row">
        
        </div>
      </div>
    </div> -->

    <div class="custom-border-bottom py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><router-link to="/home">首页</router-link> 
          <span class="mx-2 mb-0">/</span> 
          <strong class="text-black">联系我们</strong></div>
        </div>
      </div>
    </div>


    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="h3 mb-3 text-black">传送站内信</h2>
          </div>
          <div class="col-md-7">

            <form action="#" method="post">
              
              <div class="p-3 p-lg-5 border">
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="c_fname" class="text-black">名字 <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="c_fname" name="c_fname">
                  </div>
                  <div class="col-md-6">
                    <label for="c_lname" class="text-black">姓氏 <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="c_lname" name="c_lname">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_email" class="text-black">邮箱 <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" id="c_email" name="c_email" placeholder="">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_subject" class="text-black">手机 </label>
                    <input type="text" class="form-control" id="c_subject" name="c_subject">
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_message" class="text-black">留言 </label>
                    <textarea name="c_message" id="c_message" cols="30" rows="7" class="form-control"></textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-lg-12">
                    <input class="btn btn-primary btn-lg btn-block" value="发送">
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-5 ml-auto">
            <div class="p-4 border mb-3">
              <span class="d-block text-primary h6 text-uppercase">San Francisco</span>
              <p class="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div class="p-4 border mb-3">
              <span class="d-block text-primary h6 text-uppercase">广州</span>
              <p class="mb-0">天河区猎德街道花城大道10号</p>
            </div>
            <div class="p-4 border mb-3">
              <span class="d-block text-primary h6 text-uppercase">東京</span>
              <p class="mb-0">〒170-8424 東京都豊島区東池袋4-26-3</p>
            </div>

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

export default {
    name: "Contact",
    components: {
        Header,
        Footer
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>