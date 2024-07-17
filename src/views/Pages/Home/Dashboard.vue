<template>
  <default-layout>
    <div class="dashboard-container">
      <div class="circular-dashboard-container">
        <div v-for="(item, index) in dataCircularProgress" :key="index">
          <CircularProgressBar :dataCircularProgress="item" :initialTimeframe="item.selected" class="circular-progress" :key="item.name + index"/>
        </div>
      </div>
      <VaccinationSchedule class="vaccination-schedule"/>
      <HealthMonitoring class="health-monitoring"/>
      <Chat class="chat mt-7"/>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import CircularProgressBar from '@/components/CircularProgressBar'
import VaccinationSchedule from '@/components/VaccinationSchedule'
import Chat from '@/components/Chat'
import HealthMonitoring from '@/components/HealthMonitoring'

import { dataCircularProgress } from '@/utils/api'

export default {
  name: 'pages-dashboard',
  components: {
    DefaultLayout,
    CircularProgressBar,
    VaccinationSchedule,
    HealthMonitoring,
    Chat
  },
  data() {
    return {
      dataCircularProgress: dataCircularProgress
    }
  }
}
</script>

<style scoped lang="scss">
.dashboard-container {
  display: grid;
  grid-template-areas: 
    "circular-dashboard-container circular-dashboard-container circular-dashboard-container vaccination-schedule "
    "health-monitoring health-monitoring health-monitoring vaccination-schedule"
    "health-monitoring health-monitoring health-monitoring chat";
  grid-template-columns: repeat(3, 1fr) 1.5fr;
  grid-template-rows: auto 1fr;
  gap: 5px;
  padding: 26px;
}

.circular-dashboard-container {
  grid-area: circular-dashboard-container;
  display: flex;
  width: 887px;
  gap: 25px;
}

.circular-progress{
  width: 278px;
  height: 300px;
}
.vaccination-schedule {
  grid-area: vaccination-schedule;
  border-radius: 16px !important;
  width: 680px;
}

.health-monitoring {
  grid-area: health-monitoring;
  min-width: 887px;
  border-radius: 16px !important;
}

.chat{
  grid-area: chat;
  min-width: 680px;
  border-radius: 16px !important;
}
</style>
