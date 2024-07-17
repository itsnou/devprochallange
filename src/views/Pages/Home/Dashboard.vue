// DonutChart.vue
<template>
  <default-layout>
    <div class="circular-dashboard-container d-flex pa-5">
      <div v-for="(item, index) in dataCircularProgress" :key="index">
        <CircularProgressBar :dataCircularProgress="item" :initialTimeFram="item.selected" class="circular-progress" :key="item.name + index"/>
      </div>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import CircularProgressBar from '@/components/CircularProgressBar'

export default {
  name: 'pages-dashboard',
  components: {
    DefaultLayout,
    CircularProgressBar
  },
  data() {
    return {
      dataCircularProgress: [
        {
          name: 'ACTIVITY',
          options: [
            {
              title: 'Daily',
              percentage: '25%'
            },
            {
              title: 'Weekly',
              percentage: '59%'
            }
          ],
          color: '#E53761',
          selected: 'Daily'
        },
        {
          name: 'SLEEP',
          options: [
            {
              title: 'Daily',
              percentage: '45%'
            },
            {
              title: 'Weekly',
              percentage: '79%'
            }
          ],
          color: '#27A468',
          selected: 'Weekly'
        },
        {
          name: 'WELNESS',
          options: [
            {
              title: 'Daily',
              percentage: '23%'
            },
            {
              title: 'Weekly',
              percentage: '52%'
            }
          ],
          color: '#F2A735',
          selected: 'Weekly'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.circular-dashboard-container{
  width: 883px;
  gap: 20px !important;
}

.circular-progress{
  width: 278px;
  
}
</style>