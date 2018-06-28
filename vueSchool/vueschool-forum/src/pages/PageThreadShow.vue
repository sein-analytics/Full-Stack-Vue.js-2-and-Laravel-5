<template>
    <div class="col-large push-top"
    >
        <h1>{{thread.title}}</h1>
        <post-list :posts="posts"
        ></post-list>

        <form @submit.prevent="addPost">
            <div class="form-group">
                <textarea name="" id="" cols="30" rows="10" class="form-input"
                          v-model="newPostText"
                ></textarea>
            </div>
            <div class="form-actions">
                <button class="btn-blue">Submit Post</button>
            </div>
        </form>
    </div>
    </div>
</template>

<script>
    import sourceData from '@/data'
    import PostList from '@/components/PostList'

    export default {
      components: {
        PostList
      },
      props: {
        id: {
          required: true,
          type: String
        }
      },
      data () {
        return {
          thread: sourceData.threads[this.id],
          newPostText: ''
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
        addPost () {
          const postId = 'greatPost' + Math.random()
          const post = {
            text: this.newPostText,
            publishedAt: Math.floor(Date.now() / 1000),
            threadId: this.id,
            userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2',
            '.key': postId
          }
          // sourceData.posts[postId] = post
          // this.thread.posts[postId] = postId using these the objects are not reactive
          // Vue cannot tell when objects are added or removed because of the limitations
          // of modern javascript
          this.$set(sourceData.posts, postId, post)
          this.$set(this.thread.posts, postId, postId)
          this.$set(sourceData.users[post.userId].posts, postId, postId)
          this.newPostText = ''
        }
      }
    }
</script>

<style></style>