// DonutChart.vue
<template>
  <default-layout>
    <div class="d-flex pa-5 w-100 h-100">
      <div class="circular-dashboard-container d-flex">
        <div v-for="(item, index) in dataCircularProgress" :key="index">
          <CircularProgressBar :dataCircularProgress="item" :initialTimeframe="item.selected" class="circular-progress" :key="item.name + index"/>
        </div>
        <HealthMonitoring class="mt-7"/>
      </div>
      <VaccinationSchedule class="ml-7"/>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import CircularProgressBar from '@/components/CircularProgressBar'
import VaccinationSchedule from '@/components/VaccinationSchedule'
import HealthMonitoring from '@/components/HealthMonitoring'

import { dataCircularProgress } from '@/utils/api'


export default {
  name: 'pages-dashboard',
  components: {
    DefaultLayout,
    CircularProgressBar,
    VaccinationSchedule,
    HealthMonitoring
  },
  data() {
    return {
      dataCircularProgress: dataCircularProgress
    }
  }
}
</script>

<style scoped lang="scss">
.circular-dashboard-container{
  width: 883px;
  gap: 25px !important;
}

.circular-progress{
  width: 278px;
  
}
</style>