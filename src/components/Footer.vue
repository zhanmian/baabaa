<template>
    <footer class="site-footer custom-border-top">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h3 class="footer-heading mb-4">Promo / 活动</h3>
            <a href="#" class="block-6">
              <img v-lazy="'http://baabaashop.straysheep.monster/images/about_1.jpg'" alt="Image placeholder" class="img-fluid rounded mb-4">
              <h3 class="font-weight-light  mb-2">Finding Your Perfect Shirts This Summer / 寻找今夏完美上衣</h3>
              <p>从 5 / 1 / 2020 &mdash; 9 / 30 / 2020</p>
            </a>
          </div>
          <div class="col-lg-5 ml-auto mb-5 mb-lg-0">
            <div class="row">
              <div class="col-md-12">
                <h3 class="footer-heading mb-4">Tech Support / 技术支持</h3>
              </div>
              <div class="col-md-6 col-lg-4">
                <ul class="list-unstyled">
                  <li><a target="_blank" href="https://cn.aliyun.com/">阿里云</a></li>
                  <li><a target="_blank" href="https://spring.io/projects/spring-boot">Spring Boot</a></li>
                  <li><a target="_blank" href="https://mybatis.org/mybatis-3/zh/index.html">Mybatis</a></li>
                  <li><a target="_blank" href="https://maven.apache.org/">Maven</a></li>
                </ul>
              </div>
              <div class="col-md-6 col-lg-4">
                <ul class="list-unstyled">
                  <li><a target="_blank" href="https://cn.vuejs.org/index.html">Vue.js</a></li>
                  <li><a target="_blank" href="https://element.eleme.cn/#/zh-CN">Element</a></li>
                  <li><a target="_blank" href="https://getbootstrap.com/">Boostrap</a></li>
                  <li><a target="_blank" href="https://michalsnik.github.io/aos/">AOS</a></li>
                  <li><a target="_blank" href="https://owlcarousel2.github.io/OwlCarousel2/">Owl Carousel</a></li>
                  <!-- <li><a href="#">Website development</a></li> -->
                </ul>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3">
            <div class="block-5 mb-5">
              <h3 class="footer-heading mb-4">Contact Info / 联系方式</h3>
              <ul class="list-unstyled">
                <li class="address">广东省 广州市 天河区</li>
                <li class="email">zhanmian@yeah.net</li>
                <li class="blog"><a target="_blank" href="http://straysheep.monster">个人博客 - StraySheep</a></li>
              </ul>
            </div>

            <!-- <div class="block-7">
              <form action="#" method="post">
                <label for="email_subscribe" class="footer-heading">Subscribe</label>
                <div class="form-group">
                  <input type="text" class="form-control py-4" id="email_subscribe" placeholder="Email">
                  <input type="submit" class="btn btn-sm btn-primary" value="Send">
                </div>
              </form>
            </div> -->
          </div>
        </div>
        <div class="row pt-5 mt-5 text-center">
          <div class="col-md-12">
            <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy;2020 All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" class="text-primary">Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
          </div>
          
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>