<template>
    <div class="col-large push-top"
    >
        <h1>{{thread.title}}</h1>
        <post-list :posts="posts"
        ></post-list>

        <post-editor @save="addPost"
                     :threadId="id"
        ></post-editor>
    </div>
    </div>
</template>

<script>
    import sourceData from '@/data'
    import PostList from '@/components/PostList'
    import PostEditor from '@/components/PostEditor'

    export default {
      components: {
        PostList,
        PostEditor
      },
      props: {
        id: {
          required: true,
          type: String
        }
      },
      data () {
        return {
          thread: sourceData.threads[this.id]
        }
      },
      computed: {
        posts () {
          const postIds = Object.values(this.thread.posts)
          return Object.values(sourceData.posts)
            .filter(post => postIds.includes(post['.key']))
        }
      },
      methods: {
        addPost ({post}) {
          // sourceData.posts[postId] = post
          // this.thread.posts[postId] = postId using these the objects are not reactive
          // Vue cannot tell when objects are added or removed because of the limitations
          // of modern javascript
          // const post = eventData.post ...with {post}..destructuring we no longer need this
          const postId = post['.key']
          this.$set(sourceData.posts, postId, post)
          this.$set(this.thread.posts, postId, postId)
          this.$set(sourceData.users[post.userId].posts, postId, postId)
        }
      }
    }
</script>

<style></style>