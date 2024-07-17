<!-- HealthMonitoring.vue -->
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
          <v-btn value="stress" text>
            <v-icon left>mdi-emoticon-outline</v-icon>
            Stress level
          </v-btn>
          <v-btn value="pulse" text>
            <v-icon left>mdi-heart-pulse</v-icon>
            Pulse
          </v-btn>
          <v-btn value="temperature" text>
            <v-icon left>mdi-thermometer</v-icon>
            Temperature
          </v-btn>
          <v-btn value="calories" text>
            <v-icon left>mdi-fire</v-icon>
            Calories burned
          </v-btn>
        </v-btn-toggle>
        
        <line-chart :chart-data="chartData" :options="chartOptions" />
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
    watch: {
      chartData: {
        handler() {
          this.$data._chart.update()
        },
        deep: true
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
      }
    },
    computed: {
      chartData() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return {
          labels: months,
          datasets: [{
            label: this.selectedMetric.charAt(0).toUpperCase() + this.selectedMetric.slice(1),
            data: this.metrics[this.selectedMetric],
            borderColor: '#3788E5',
            backgroundColor: 'rgba(55, 136, 229, 0.1)',
            fill: true,
          }]
        }
      },
      chartOptions() {
        return {
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
    watch: {
      selectedMetric() {
        this.$nextTick(() => {
          if (this.$refs.lineChart) {
            this.$refs.lineChart.update()
          }
        })
      }
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
  </style>