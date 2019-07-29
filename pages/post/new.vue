<template>
  <div>
    <button @click="addPosts()">追加</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    name: 'Ryuji'
  }),

  created() {
    this.initPosts()
  },

  methods: {
    ...mapActions('post', [
      'initPosts',
      'addPostsToFB',
    ]),
    addPosts() {
      const addPostData = {
        name: this.name,
        date: new Date()
      }
      this.addPostsToFB(addPostData)
    }
  }
}
</script>

<style>

</style>
