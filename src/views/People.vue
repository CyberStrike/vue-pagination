<template>
  <div id="People">
    <h1>People</h1>
    <person-list/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PersonList   from '@/components/PersonList'

export default {
  name: 'People',
  components: { PersonList },
  computed: {
    ...mapState(['people'])
  }
}
</script>

<style scoped>

</style>
