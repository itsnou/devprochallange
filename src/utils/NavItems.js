export const menuItems = [
  {
    section: 'MENU',
    items: [
      {
        icon: 'mdi-view-dashboard',
        title: 'Dashboard',
        url: '/dashboard'
      },
      {
        icon: 'mdi-paw',
        title: 'Pet profile',
        url: '/pet-profile'
      }
    ]
  },
  {
    section: 'ANALYTICS',
    items: [
      {
        icon: 'mdi-heart-pulse',
        title: 'Health monitoring',
        url: '/health-monitoring'
      },
      {
        icon: 'mdi-needle',
        title: 'Vaccination schedule',
        url: '/vaccination-schedule'
      }
    ]
  },
  {
    section: 'SCHEDULE',
    items: [
      {
        icon: 'mdi-chat',
        title: 'Chat',
        url: '/chat'
      },
      {
        icon: 'mdi-calendar',
        title: 'Appointments',
        url: '/appointments',
        badge: { color: 'red', content: '2', icon: 'mdi-circle-small' }
      }
    ]
  },
  {
    section: 'HELP',
    items: [
      {
        icon: 'mdi-cog',
        title: 'Settings',
        url: '/settings'
      },
      {
        icon: 'mdi-file-document',
        title: 'Documentation',
        url: '/documentation'
      }
    ]
  },
  {
    section: '',
    items: [
      {
        icon: 'mdi-logout',
        title: 'Log out',
        url: '',
        name: 'logout',
        iconColor: 'red',
        titleClass: 'red--text'
      }
    ]
  }
]

