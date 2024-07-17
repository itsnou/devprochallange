<template>
  <v-card class="pa-4 circular-card">
    <div class="d-flex justify-space-between align-center mb-4">
      <span class="text-subtitle-1 font-weight-medium">{{dataCircularProgress.name}}</span>
      <v-select
        :items="timeframes"
        v-model="selectedTimeframe"
        dense
        outlined
        hide-details
        class="timeframe-select"
      ></v-select>
    </div>
    <div class="text-center">
      <v-progress-circular
        :rotate="-90"
        :size="150"
        :width="15"
        :value="percentage"
        :color="dataCircularProgress.color"
      >
        <span class="display-1">{{ percentage }}</span>
      </v-progress-circular>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ActivityProgress',
  props: {
    initialPercentage: {
      type: Number,
      default: 0
    },
    initialTimeframe: {
      type: String,
      default: 'Daily'
    },
    dataCircularProgress: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      percentage: this.dataCircularProgress.options.find(el => el.title === this.initialTimeframe).percentage,
      selectedTimeframe: this.initialTimeframe,
      timeframes: ['Daily', 'Weekly']
    }
  },
  methods: {
    updatePercentage(value) {
      const selected = this.dataCircularProgress.options.find(el => el.title === value)
      this.percentage = selected.percentage
    }
  },
  watch: {
    selectedTimeframe(value) {
      this.updatePercentage(value)
    }
  },
}
</script>

<style scoped>
.timeframe-select {
  max-width: 120px;
}
.circular-card{
  border-radius: 16px !important;
}

:deep(.v-progress-circular__overlay) { 
  stroke-linecap: round; 
}
</style>