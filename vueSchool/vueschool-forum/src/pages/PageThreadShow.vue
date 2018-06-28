<template>
    <div class="col-large push-top"
    >
        <h1>{{thread.title}}</h1>

    </div>
    </div>
</template>

<script>
    import sourceData from '@/data'

    export default {
      props: {
        id: {
          required: true,
          type: String
        }
      },
      data () {
        return {
          thread: sourceData.threads[this.id],
          posts: sourceData.posts,
          users: sourceData.users
        }
      }
    }
</script>

<style></style>