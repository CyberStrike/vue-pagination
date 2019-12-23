<template>
  <div id="People">
    <div class="container">
      <div class="my-5">
        <h2>Pagination</h2>
      </div>
     <div class="row justify-content-center">
       <div class="col col-md-6">
         <person-list :people="people"/>
       </div>
     </div>
    </div>
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
