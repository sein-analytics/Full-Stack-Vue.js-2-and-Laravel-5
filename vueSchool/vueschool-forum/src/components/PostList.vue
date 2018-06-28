<template>
    <div  class="post-list"
          v-for="postId in thread.posts"
    >
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
                    {{posts[postId].text}}
                </div>
            </div>
            <div class="post-date text-faded">
                {{posts[postId].publishedAt}}
            </div>
        </div>
    </div>
</template>

<script></script>

<style></style>