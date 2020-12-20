<template>
  <div class="line-chart">
    <chart-container>
      <dv-capsule-chart :config="config" style="width:640px;height: 360px" />
    </chart-container>
  </div>
</template>

<script>
import ChartContainer from '@/components/ChartContainer'
import lineConfig from './lineConfig.js'
export default {
  components: {
    ChartContainer
  },
  data() {
    return {
      config: lineConfig
    }
  }
}
</script>

<style lang="scss">
.line-chart {
  width: 680px;
  height: 410px;
}
</style>
