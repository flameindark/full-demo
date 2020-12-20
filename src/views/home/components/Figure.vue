<template>
  <div class="figure">
    <div class="figure-item" v-for="item in 8" :key="item">
      <i class="icon"></i>
      <div class="info">
        <h3 class="title">{{ 2000 * item }}</h3>
        <p class="text">用电量{{item}}(v)</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.figure {
  width: 400px;
  display: flex;
  flex-wrap: wrap;
}
.figure-item {
  width: 50%;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 10px 0;
  .icon {
    display: block;
    background: url('~@/assets/images/icon.png');
    width: 30px;
    height: 30px;
    background-size: 100%;
  }
  .title {
    font-size: 28px;
  }
  .text {
    font-size: 18px;
    color: #eaeaea;
  }
}

</style>
