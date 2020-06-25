<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
const customIconConfig = {
    customIconPacks: {
        'fas': {
            sizes: {
                'default': null,
                'is-small': 'fa-xs',
                'is-medium': 'fa-lg',
                'is-large': 'fa-2x'
            }
        },
        'ionicons': {
            sizes: {
                'default': 'is-size-5',
                'is-small': '',
                'is-medium': 'is-size-3',
                'is-large': 'is-size-1'
            },
            iconPrefix: 'ion-md-',
            internalIcons: {
                'check': 'checkmark',
                'information': 'information',
                'check-circle': 'checkmark-circle-outline',
                'alert': 'alert',
                'alert-circle': 'alert',
                'arrow-up': 'arrow-up',
                'chevron-right': 'arrow-forward',
                'chevron-left': 'arrow-back',
                'chevron-down': 'arrow-down',
                'eye': 'eye',
                'eye-off': 'eye-off',
                'menu-down': 'arrow-dropdown',
                'menu-up': 'arrow-dropup'
            }
        }
    }
}
//import HelloWorld from './components/HelloWorld.vue'
export default {
  created() {
      this.$buefy.config.setOptions(customIconConfig)
  },
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4a4a4a;
  font-size: 14px;
  background-color: #F8F8F8;
  min-height: 100vh;
}
.button {
  span {
    text-transform: uppercase;
    font-weight: 500;
  }
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #7957d5; 
}
</style>
