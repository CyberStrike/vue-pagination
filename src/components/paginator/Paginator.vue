<template>
  <span>
    <slot :paged="paginatedSource" />
    <pagination-controls class="mt-5" :current="page" :length="pageCount" @page="setPage"/>
  </span>
</template>

<script>
  import PaginationControls from './PaginationControls'

  export default {
    name: 'Paginator',
    components: { PaginationControls },
    data: () => ({
      perPage: 6
    }),
    props: {
      source: Array
    },
    computed: {
      page: {
        get: function () {
          return Number(this.$route.query.page) || 1
        },
        set (value) {
          if (value > this.pageCount) return this.$router.push({ query: { page: 10 } })
          this.$router.push({ query: { page: value } })
        }
      },
      paginatedSource () {
        return this.paginate(this.page, this.perPage, this.source)
      },
      pageCount () {
        return Math.ceil(this.source.length / this.perPage)
      }
    },
    methods: {
      paginate (per, total, arr) {
        if (arr.length === total.length) return arr
        return arr.slice((per * total) - total, total * per)
      },
      setPage (page) {
        this.page = page
      }
    }
  }
</script>
