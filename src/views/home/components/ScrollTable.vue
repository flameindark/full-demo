<template>
  <dv-scroll-board :config="scrollTableConfig" style="width:680px;height:350px" />
</template>

<script>
import scrollTableConfig from './scrollTableConfig.js'
export default {
  data() {
    return {
      scrollTableConfig
    }
  }
}
</script>

<style lang="scss">
.row-item {
  margin-bottom: 6px;
}
</style>
