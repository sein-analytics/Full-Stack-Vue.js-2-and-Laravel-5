<template>
    <div class="col-full">
        <category-list-item :category="category"
        ></category-list-item>
    </div>
</template>

<script>
  import sourceData from '@/data'
  import CategoryListItem from '../components/CategoryListItem.vue'

  export default {
    components: {
      CategoryListItem
    },
    props: {
      id: {
        required: true,
        type: String
      }
    },
    computed: {
      category () {
        return sourceData.categories[this.id]
      }
    }
  }
</script>