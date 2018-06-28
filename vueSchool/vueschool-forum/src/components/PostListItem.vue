<template>
    <div class="post">
        <div class="user-info">
            <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>
            <a href="#">
                <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
            </a>
            <p class="desktop-only text-small">107 posts</p>
        </div>
        <div class="post-content">
            <div>
                {{post.text}}
            </div>
        </div>
        <div class="post-date text-faded">
            {{posts[postId].publishedAt}}
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        post: {
          required: true,
          type: Object
        }
      }
    }
</script>
