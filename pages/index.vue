<template>
  <div>
    <nuxt-link to="/post/new">投稿画面</nuxt-link>
    <div 
      v-for="(post, index) in posts"
      :key="index"
    >
      <p>ポストID: {{ post.postId }}</p>
      <p>タイトル: {{ post.postTitle }}</p>
      <p>ユーザー: {{ post.userName }}</p>
      <p>内容: {{ post.postText }}</p>
      <audio controls :src="post.audioUrl"></audio>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  created() {
    this.initPosts()
  },
  computed: {
    ...mapGetters('post',[
      'posts'
    ]),

  },
  methods: {
    ...mapActions('post', [
      'initPosts'
    ])
  }
  

}
</script>

<style>

</style>
