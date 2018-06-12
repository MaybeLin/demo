<template>
  <div class="have-send">
    <div class="page-title flex flex-y-center just-center">
      <h1 class="page-title">已发布</h1>
      <div>
         <span class="shoushi layou-sele" :class="layout == 1 ? 'active' : ''" @click="layout = 1">一行多个</span>
         <span class="shoushi layou-sele" :class="layout == 2 ? 'active' : ''" @click="layout = 2">一行一个</span>
      </div>
    </div>
    <have-send-list :list="list" :layout="layout" ></have-send-list>
  </div>
</template>

<script>
  import haveSendList from './components/have-send-list';
  import shop11 from '@/assets/shop/11.jpg'
  import shop22 from '@/assets/shop/22.jpg'
  import shop33 from '@/assets/shop/33.jpg'
  import shop44 from '@/assets/shop/44.jpg'
  export default {
    name: "index",
    data() {
      return {
        layout:1,
        list: [
          {
            main_img_url: shop11,
            name: "FiDoll 5.4 ft/165cm Sex Doll TPE Full Size Real silicone Love Doll with Lifelike 3 Holes Pussy, Anus and Mouth for Male Masturbation Sexy Woman-Sophia",
            platform_price: 2688,
            supplier_id: [154, "曹国安"],
            id: 5001
          },
          {
            main_img_url: shop22,
            name: "FiDoll 5.4 ft/165cm Sex Doll TPE Full Size Real silicone Love Doll with Lifelike 3 Holes Pussy, Anus and Mouth for Male Masturbation Sexy Woman-Sophia",
            platform_price: 2688,
            supplier_id: [154, "曹国安"],
            id: 5001
          },
          {
            main_img_url: shop33,
            name: "FiDoll 5.4 ft/165cm Sex Doll TPE Full Size Real silicone Love Doll with Lifelike 3 Holes Pussy, Anus and Mouth for Male Masturbation Sexy Woman-Sophia",
            platform_price: 2688,
            supplier_id: [154, "曹国安"],
            id: 5001
          },
          {
            main_img_url: shop44,
            name: "FiDoll 5.4 ft/165cm Sex Doll TPE Full Size Real silicone Love Doll with Lifelike 3 Holes Pussy, Anus and Mouth for Male Masturbation Sexy Woman-Sophia",
            platform_price: 2688,
            supplier_id: [154, "曹国安"],
            id: 5001
          }
        ]
      };
    },
    components: {
      haveSendList
    }
  };
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .have-send {
    padding: 0 10px;
    .page-title {
      color: #777777;
      font-size: 18px;
    }
    .layou-sele.active {
      color: red;
    }
  }
</style>
