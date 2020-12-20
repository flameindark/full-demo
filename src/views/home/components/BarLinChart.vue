<template>
  <v-chart :options="barLineConfig"/>
</template>

<script>
import barLineConfig from './barLineConfig.js'
import 'echarts/lib/chart/line'
export default {
  data() {
    return {
      barLineConfig
    }
  }
}
</script>

<style>

</style>
