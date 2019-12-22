<template>
  <ul class="list-group list-group-flush text-left">
    <li class="list-group-item"
        v-for="(person, index) in people" :key="index"
        @click="selectedPerson = person.login.md5">
      <div class="media">
        <img :src="person.picture.thumbnail" class="ml-3 rounded-circle"/>
        <div class="media-body align-self-center">
          <p class="ml-3 m-0">{{ getName(person, true) }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import startCase from 'lodash/startCase'

export default {
  name: 'PersonList',
  props: {
    people: Array
  },
  methods: {
    getName (person, showHonorific) {
      let honorific = showHonorific ? `${person.name.title}. ` : ''
      return startCase([honorific, person.name.first, person.name.last].join(' '))
    }
  }
}
</script>

<style scoped>

</style>
