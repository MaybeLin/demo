<template>
  <div class="have-send-list">
    <div v-for="item in list"
         class="list-item shoushi"
         :class="'layout-'+layout"
         @click="showDetails(item)"
         >
      <div class="list-item-shop-img">
        <img :src="item.main_img_url">
      </div>
      <div class="list-item-shop-details" :class="layout == 2 ? 'flex just-center flex-cloumn' : ''">
        <div v-if="layout == 2">{{item.name}}</div>
        <div>
          <div style="height: 26px;line-height: 26px">平台价格：<span>{{item.platform_price}}¥</span></div>
          <div style="color: #949aa3;font-size: 11px">供应商：{{item.supplier_id[1]}}</div>
        </div>
      </div>
      <div class="hover-bg " v-if="layout == 1">
        <div>
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "have-send-list",
    props: {
      list: {
        type: Array,
        default: () => []
      },
      layout: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {};
    },
    methods: {
      showDetails(item) {
        this.$router.push({
          name: 'details',
          params:item
        });
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .have-send-list {
    display: flex;
    flex-flow: row wrap;
    height: 100%;
    max-height: 100%;
    .list-item.layout-1{
      width: 230px;
      background-color: white;
      position: relative;
      margin-right: 10px;
      margin-bottom: 20px;
      overflow: hidden;
      .list-item-shop-img {
        img {
          width: 230px;
          height: 230px;
        }
      }
      .list-item-shop-details {
        ul {
          font-size: 14px;
        }
      }
      .hover-bg{
        position: absolute;
        width: 230px;
        top: 0;
        left: -300px;
        bottom: 0;
        background: rgba(0,0,0,.6);
        color: white;
        transition: all .5s linear;
        >div{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }

    .list-item.layout-1:hover .hover-bg{
      left: 0;
    }
    .list-item.layout-2{
      width: 100%;
      background-color: white;
      position: relative;
      margin: 10px 0;
      .list-item-shop-img {
        float: left;
        img {
          width: 200px;
        }
      }
      .list-item-shop-details {
        height: 100%;
        padding-left: 10px;
        ul {
          font-size: 14px;
        }
      }
    }
  }
</style>
