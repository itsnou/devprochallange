<template>
  <v-card class="chat-card">
    <v-card-title class="chat-title">CHAT</v-card-title>
    <v-list dense>
      <v-list-item v-for="(item, index) in chatMessages" :key="index" class="chat-item">
        <v-list-item-avatar>
          <v-icon :color="item.iconColor">mdi-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.message }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <span>{{ item.time }}</span>
          <v-badge v-if="item.badge" color="red" :content="item.badge" overlap class="rect" inline>
            <template v-slot:badge>
              <div class="my-badge">{{item.badge}}</div>
            </template>
          </v-badge>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'component-chat',
  data() {
    return {
      chatMessages: [
        { name: 'Helen Brooks', message: 'Luna has been scratching her ears a lot lately and shaking her head...', time: '15:56', iconColor: 'green' },
        { name: 'Kathryn Murphy', message: 'The best way to treat an ear infection is to visit your local vet clinic a...', time: 'Wed', iconColor: 'green', badge: 2 },
        { name: 'James Grey', message: 'You should follow the instructions on the ear drops label, but usually y...', time: 'Tue', iconColor: 'red' },
        { name: 'Jim Brown', message: 'Hi, I have a question about my cat.', time: 'Tue', iconColor: 'red' }
      ]
    }
  }
}
</script>

<style scoped>
.chat-card {
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.chat-title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
  color: #1976d2;
}

.chat-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
}

.chat-item .v-list-item-avatar {
  margin-right: 8px;
}

.chat-item .v-list-item-content {
  flex-grow: 1;
}

.chat-item .v-list-item-action {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.chat-item .v-list-item-action span {
  margin-right: 8px;
}

.chat-item .v-list-item-action .v-badge {
  font-size: 0.75rem;
}
</style>
