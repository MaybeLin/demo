<template>
  <div class="details">
      <div class="shop-img">
        <img :src="item.main_img_url" alt="">
      </div>
      <div class="shop-name">
        {{item.name}}
      </div>
      <div class="sele-type">
        <div class="flex sele-type-box">
          <div v-for="(item,index) in detailsSele"
               class="shoushi sele-type-item"
               :class="indexActive == index ? 'active' : ''"
               @click="indexActive = index">
            {{item.name}}
          </div>
        </div>
        <div class="cont">
          {{detailsSele[indexActive].cont}}
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "details",
    data() {
      return {
        item:{},
        detailsSele:[
          {
            id:0,
            name:'基础',
            cont:'我是基础内容'
          },{
            id:1,
            name:'图片',
            cont:'我是图片列表'
          }
        ],
        indexActive:0
      };
    },
    created(){
      this.getItem()
    },
    methods:{
      getItem(){
        let it = this.$route.params;
        if (it.main_img_url) {
          this.item = this.$route.params;
        } else {
          this.$router.push('/product/send');
        }
      }
    }
  };
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .details {
    padding: 20px;
    min-width: 650px;
    min-height: 330px;
    background: white;
    border: 1px solid #c8c8d3;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    .shop-img {
      > img {
        width: 64px;
        float: left;
      }
    }
    .shop-name {
      font-size: 26px;
      width: 400px;
      padding-left: 95px;
      margin-left: 5px;
    }
    .sele-type {
      .sele-type-box {
        border-bottom: 1px solid #000000;
      }
      .sele-type-item{
        padding: 10px 20px;
      }
      .active{
        border-bottom: 6px solid #000000;
      }
      .cont {
        margin-top: 20px;
      }
    }
  }
</style>
