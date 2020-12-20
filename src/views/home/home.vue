<template>
  <div class="home-page">
    <div class="left">
      <div class="row">
        <LineChart />
        <ScrollTable/>
        <Radar/>
      </div>
      <div class="row">
        <LineChart />
        <ScrollTable/>
        <Radar/>
      </div>
    </div>
    <div class="center">

    </div>
    <div class="right">
      <div class="row">
        <BarLineChart/>
        <Figure/>
        <BarLineChart/>
      </div>
      <div class="row">
        <BarLineChart/>
        <Figure/>
        <BarLineChart/>
      </div>
    </div>
    <!-- <div class="horizonLine"></div>
    <div class="verticalLine"></div> -->
  </div>
</template>

<script>
import LineChart from './components/LineChart'
import ScrollTable from './components/ScrollTable'
import Radar from './components/Radar'
import BarLineChart from './components/BarLinChart'
import Figure from './components/Figure'

export default {
  name: 'Home',
  components: {
    LineChart,
    ScrollTable,
    Radar,
    BarLineChart,
    Figure
  }
}
</script>
<style lang="scss">
.home-page {
  display: flex;
}
.row {
  display: flex;
  margin: 60px 40px;
  align-items: center;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.verticalLine, .horizonLine {
  position: absolute;
  left: 0;
  top: 0;
  height: 1080px;
  width: 40px;
  background: #fff;
  &::before {
    top: 0;
    left: -20px;
    border-top: 5px solid red;
  }
  &::after {
    bottom: 0;
    left: -20px;
    border-bottom: 5px solid red;
  }
  &::before, &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    background: #fff;
  }
}
.horizonLine {
  bottom: 0;
  top: auto;
  left: 0;
  height: 40px;
  width: 4608px;
  &::before {
    left: 0;
    top: -20px;
    border-left: 2px solid red;
  }
  &::after {
    right: 0;
    top: -20px;
    border-right: 2px solid red;
  }
}
.center {
  width: 999px;
}
</style>

