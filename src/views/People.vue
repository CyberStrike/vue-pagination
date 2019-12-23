<template>
  <div id="People">
    <div class="container">
      <div class="my-5">
        <h2>Pagination Demo</h2>
      </div>
     <div class="row justify-content-center">
       <div class="col col-md-6">
         <paginator  v-slot="{ paged }" :source="people">
           <person-list :people="paged"/>
         </paginator>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import PersonList   from '@/components/PersonList'
  import Paginator    from '@/components/paginator/Paginator'

  export default {
    name: 'People',
    components: { Paginator, PersonList },
    computed: {
      ...mapState(['people'])
    }
  }
</script>

<style scoped>

</style>
