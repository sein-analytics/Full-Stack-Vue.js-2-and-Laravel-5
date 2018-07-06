<template>
    <div class="col-large push-top"
    >
        <h1>{{thread.title}}
            <!-- with router-link we define the element we want to render using the tag option as seen below -->
            <router-link
                    :to="{name: 'ThreadEdit', id: this.id}"
                    class="btn-green btn-small"
                    tag="button"
            >
                Edit Thread
            </router-link>
        </h1>
        <p>
            By <a href="#" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt"/> .
            <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
        </p>
        <post-list :posts="posts"
        ></post-list>

        <post-editor :threadId="id"
        ></post-editor>
    </div>
    </div>
</template>

<script>
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
      computed: {
        posts () {
          const postIds = Object.values(this.thread.posts)
          return Object.values(this.$store.state.posts)
            .filter(post => postIds.includes(post['.key']))
        },
        thread () {
          return this.$store.state.threads[this.id]
        }
      },
      methods: {
        addPost ({post}) {
          // this.$store.state.posts[postId] = post
          // this.thread.posts[postId] = postId using these the objects are not reactive
          // Vue cannot tell when objects are added or removed because of the limitations
          // of modern javascript
          // const post = eventData.post ...with {post}..destructuring we no longer need this
          // this.$store.dispatch('createPost', post) ... This method is no longer used
        }
      }
    }
</script>

<style></style>