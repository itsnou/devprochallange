<!-- VaccinationSchedule.vue -->
<template>
  <v-card class="vaccination-schedule">
    <v-card-title class="d-flex justify-space-between align-center">
      <span>VACCINATION SCHEDULE</span>
      <div class="d-flex">
        <v-text-field 
        v-model="search" 
        append-icon="mdi-magnify" 
        label="Search" 
        single-line 
        hide-details 
        dense 
        outlined
        class="mr-4 selects" 
        style="max-width: 200px;"></v-text-field>
        
        <v-select
         v-model="filterType"
        :items="types" 
        label="By type" 
        dense 
        outlined 
        hide-details
        class="selects"
        style="max-width: 150px;"></v-select>
      </div>
    </v-card-title>
    <div class="pa-5 px-10">
      <v-data-table :headers="headers" :items="filteredVaccinations" :search="search" hide-default-footer
        class="elevation-1 row-height-50 custom-border-table">
        <template v-slot:[`item.type`]="{ item }">
          <v-chip :color="getTypeColor(item.type)" small>
            {{ item.type }}
          </v-chip>
        </template>
        <template v-slot:[`item.veterinar`]="{ item }">
          <v-btn v-if="item.veterinar === 'Find veterinar'" color="primary" small @click="findVeterinar(item)"
            class="btn">
            Find veterinar
          </v-btn>
          <span v-else>{{ item.veterinar }}</span>
        </template>
      </v-data-table>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'VaccinationSchedule',
  data() {
    return {
      search: '',
      filterType: 'All',
      types: ['All', 'Core', 'Noncore', 'Overdue'],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Type', value: 'type' },
        { text: 'Date', value: 'date' },
        { text: 'Veterinar', value: 'veterinar' },
      ],
      vaccinations: [
        { name: 'Rabies', type: 'Overdue', date: '01 Dec 2023', veterinar: 'Find veterinar' },
        { name: 'Bordetella', type: 'Noncore', date: '11 Dec 2024', veterinar: 'James Grey' },
        { name: 'Distemper', type: 'Core', date: '27 Jun 2024', veterinar: 'Jim Brown' },
        { name: 'Calicivirus', type: 'Core', date: '16 Sep 2024', veterinar: 'Helen Brooks' },
      ],
    }
  },
  computed: {
    filteredVaccinations() {
      if (this.filterType === 'All') return this.vaccinations;
      return this.vaccinations.filter(v => v.type === this.filterType);
    }
  },
  methods: {
    getTypeColor(type) {
      switch (type) {
        case 'Overdue': return 'pink lighten-4';
        case 'Noncore': return 'orange lighten-4';
        case 'Core': return 'green lighten-4';
        default: return 'grey';
      }
    },
    findVeterinar(item) {
      console.log('Finding veterinar for', item.name);
    }
  }
}
</script>

<style scoped lang="scss">
.vaccination-schedule {
  width: 100%;
  max-width: 667px;
  height: 532px;
}

:deep(.v-data-table-header) {
  background-color: #F2F5FA;
}

:deep(.v-data-table.row-height-50 td) {
  height: 86px !important;
}

:deep(.custom-border-table) {
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  tr:last-child td {
    border-bottom: none;
  }


  td:last-child, th:last-child {
    border-right: none;
  }

  thead tr:first-child th:first-child { border-top-left-radius: 8px; }
  thead tr:first-child th:last-child { border-top-right-radius: 8px; }

  tbody tr:last-child td:first-child { border-bottom-left-radius: 0; }
  tbody tr:last-child td:last-child { border-bottom-right-radius: 0; }
}
</style>