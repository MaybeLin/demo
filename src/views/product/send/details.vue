<template>
    <div class="details-box">
      <shop-details></shop-details>
    </div>
</template>

<script>
  import shopDetails from './components/details';

  export default {
    name: "details",
    components: {
      shopDetails
    }
  };
</script>

<style scoped>
  .details-box{
    padding: 20px;
  }
</style>
