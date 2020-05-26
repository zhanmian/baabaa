<template>
 <body>
  <div class="site-wrap">
    <Header></Header>
    <div class="site-blocks-cover inner-page" data-aos="fade-down">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto order-md-2 align-self-start">
            <div class="site-block-cover-content">
            <h2 class="sub-title">#Happy Shopping 2020</h2>
            <h1>— 愉 快 体 验 —</h1>
            <p><router-link to="/home" class="btn btn-black rounded-0">Shop Now</router-link></p>
            </div>
          </div>
          <div class="col-md-6 order-1 align-self-end">
            <img v-lazy="loadingImage + 'model_7.png'" alt="Image" class="img-fluid">
          </div>
        </div>
      </div>
    </div>

    <div class="custom-border-bottom py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><router-link to="/home">首页</router-link> 
          <span class="mx-2 mb-0">/</span> 
          <strong class="text-black">关于我们</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section site-section-sm site-blocks-1 border-0" data-aos="fade">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
            <div class="icon mr-4 align-self-start">
              <span><i class="el-icon-truck"></i></span>
            </div>
            <div class="text">
              <h2 class="text-uppercase">邮 费 = 0</h2>
              <p>没有邮费的困扰，想买的时候，点一点，快速发货，快速送达。</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
            <div class="icon mr-4 align-self-start">
              <span><i class="el-icon-refresh-right"></i></span>
            </div>
            <div class="text">
              <h2 class="text-uppercase">退 换 无 忧</h2>
              <p>买到不中意、尺寸不合适的商品，请快递到我们的售后地址，无需运费。</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
            <div class="icon mr-4 align-self-start">
              <span><i class="el-icon-question"></i></span>
            </div>
            <div class="text">
              <h2 class="text-uppercase">客 服 支 持</h2>
              <p>请拨打 7 * 12 客服连线：020 - 8521 4711</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="site-section custom-border-bottom" data-aos="fade">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6">
            <div class="block-16">
              <figure>
                <img v-lazy="loadingImage + 'blog_1.jpg'" alt="Image placeholder" class="img-fluid rounded">
                <a href="https://vimeo.com/channels/staffpicks/93951774" class="play-button popup-vimeo"><span class="icon-play"></span></a>

              </figure>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5">
            
            
            <div class="site-section-heading pt-3 mb-4">
              <h2 class="text-black">我 们 的 路</h2>
            </div>
            <p>以"物有所值"为宗旨并研发出各种价廉物美商品的 BAABAA SHOP。
              是 1980 年由 BAABAA SHOP 的母公司 Amazon 基于自身的开发经验，
              根据【无商标】的商品构思而诞生的。商品开发的本质是，
              以真正必要的方式制造生活中基本的并真正需要的产品。
              因此，BAABAA SHOP 重新选择了原材料，改善了生产工艺，并简化了包装。
              此方针符合时代的审美观，简约优美的商品长久以来广受喜爱。</p>
            <p>Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam cumque recusandae, laudantium minima repellendus.</p>
            
          </div>
        </div>
      </div>
    </div>

    <div class="site-section custom-border-bottom" data-aos="fade">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>我 们 的 团 队</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3">
  
            <div class="block-38 text-center">
              <div class="block-38-img">
                <div class="block-38-header">
                  <img v-lazy="loadingImage + 'person_1.jpg'" alt="Image placeholder" class="mb-4">
                  <h3 class="block-38-heading h4">伊丽莎白 · 雅顿</h3>
                  <p class="block-38-subheading">CEO/Co-Founder</p>
                </div>
                <div class="block-38-body">
                  <p>出色的企业家，卓越女性代表</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="block-38 text-center">
              <div class="block-38-img">
                <div class="block-38-header">
                  <img v-lazy="loadingImage + 'person_2.jpg'" alt="Image placeholder" class="mb-4">
                  <h3 class="block-38-heading h4">珍妮弗 · 特朗普</h3>
                  <p class="block-38-subheading">Co-Founder</p>
                </div>
                <div class="block-38-body">
                  <p>独到而犀利的市场目光，让年纪轻轻的她成为公司的联合创始人</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="block-38 text-center">
              <div class="block-38-img">
                <div class="block-38-header">
                  <img v-lazy="loadingImage + 'person_3.jpg'" alt="Image placeholder" class="mb-4">
                  <h3 class="block-38-heading h4">帕特里特 · 史密斯</h3>
                  <p class="block-38-subheading">Marketing</p>
                </div>
                <div class="block-38-body">
                  <p>善于开拓市场的他、是排头兵</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="block-38 text-center">
              <div class="block-38-img">
                <div class="block-38-header">
                  <img v-lazy="loadingImage + 'person_4.jpg'" alt="Image placeholder" class="mb-4">
                  <h3 class="block-38-heading h4">迈克 · 科伯特</h3>
                  <p class="block-38-subheading">Sales Manager</p>
                </div>
                <div class="block-38-body">
                  <p>工作态度积极向上的他，让 BAABAA SHOP 的业绩更加飞升</p>
                </div>
              </div>
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
  name: "About",
  components: {
      Header,
      Footer
  },
  data() {
    return {
      loadingImage: "http://baabaashop.straysheep.monster/images/"
    }
  }
}
</script>
