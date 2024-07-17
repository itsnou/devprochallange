<template>
  <v-card class="health-monitoring">
    <v-card-title class="d-flex justify-space-between align-center">
      <span>HEALTH MONITORING</span>
      <v-select
        v-model="selectedTimeframe"
        :items="timeframes"
        dense
        outlined
        hide-details
        style="max-width: 150px;"
      ></v-select>
    </v-card-title>
    <v-card-text>
      <v-btn-toggle v-model="selectedMetric" mandatory>
        <v-btn value="stress" dense outlined text>
          <v-icon left>mdi-emoticon-outline</v-icon>
          Stress level
        </v-btn>
        <v-btn value="pulse" dense outlined text>
          <v-icon left>mdi-heart-pulse</v-icon>
          Pulse
        </v-btn>
        <v-btn value="temperature" dense outlined text>
          <v-icon left>mdi-thermometer</v-icon>
          Temperature
        </v-btn>
        <v-btn value="calories" dense outlined text>
          <v-icon left>mdi-fire</v-icon>
          Calories burned
        </v-btn>
      </v-btn-toggle>
      
      <div class="chart-container">
        <line-chart ref="lineChart" :chart-data="chartData" :options="chartOptions" />
      </div>
    </v-card-text>
  </v-card>
</template>
  
<script>
import { Line } from 'vue-chartjs'

const LineChart = {
  extends: Line,
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
  methods: {
    updateChart() {
      this.renderChart(this.chartData, this.options)
    }
  }
}

export default {
  name: 'HealthMonitoring',
  components: {
    LineChart
  },
  data() {
    return {
      selectedTimeframe: 'Monthly',
      timeframes: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
      selectedMetric: 'stress',
      metrics: {
        stress: [2, 1, 3, 2, 3, 5, 4, 3, 2, 3, 2, 3],
        pulse: [70, 72, 68, 75, 80, 78, 76, 74, 72, 70, 71, 73],
        temperature: [37.2, 37.1, 37.3, 37.0, 37.2, 37.4, 37.3, 37.2, 37.1, 37.3, 37.2, 37.1],
        calories: [250, 300, 280, 320, 350, 330, 310, 290, 270, 300, 320, 340],
      },
      chartData: {},
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  },
  methods: {
    getLabelsBasedOnTimeframe() {
      const dailyLabels = Array.from({ length: 31 }, (_, i) => `Day ${i + 1}`)
      const weeklyLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const yearlyLabels = ['2021', '2022', '2023', '2024']

      switch (this.selectedTimeframe) {
        case 'Daily':
          return dailyLabels
        case 'Weekly':
          return weeklyLabels
        case 'Monthly':
          return monthlyLabels
        case 'Yearly':
          return yearlyLabels
        default:
          return monthlyLabels
      }
    },
    updateChartData() {
      const labels = this.getLabelsBasedOnTimeframe()
      this.chartData = {
        labels: labels,
        datasets: [{
          label: this.selectedMetric.charAt(0).toUpperCase() + this.selectedMetric.slice(1),
          data: this.metrics[this.selectedMetric],
          borderColor: '#3788E5',
          backgroundColor: 'rgba(55, 136, 229, 0.1)',
          fill: true,
        }]
      }
    }
  },
  watch: {
    selectedMetric() {
      this.updateChartData()
      this.$nextTick(() => {
        if (this.$refs.lineChart) {
          this.$refs.lineChart.updateChart()
        }
      })
    },
    selectedTimeframe() {
      this.updateChartData()
      this.$nextTick(() => {
        if (this.$refs.lineChart) {
          this.$refs.lineChart.updateChart()
        }
      })
    }
  },
  mounted() {
    this.updateChartData()
    this.$nextTick(() => {
      if (this.$refs.lineChart) {
        this.$refs.lineChart.updateChart()
      }
    })
  }
}
</script>

<style scoped>
.health-monitoring {
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
}

.chart-container {
  position: relative;
  height: 300px;
  width: 100%;
}

:deep(.v-item-group){
  border: 1px solid #DAE3F8;
  display:flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  .v-btn {
    width: 189px;
    height: 48px;
    border-radius: 8px;
  }
  .v-btn.v-btn{
    border-color: white !important;
  }
  .v-btn--active{
    background-color: #3788E5;
    color:white;
    .v-icon {
      color:white;
    }
  }
}
</style>
