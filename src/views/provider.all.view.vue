<template>
  <div class="test">
    <userChartLabel></userChartLabel>
  </div>
</template>

<script>
// import HelloWorld from '../components/allview/userChartLabel.vue'
import userChartLabel from '@/components/allview/userChartLabel.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  components: {
    userChartLabel
  },
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.test {
}
</style>
